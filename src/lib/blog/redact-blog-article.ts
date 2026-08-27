import OpenAI from "openai";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import {
  BLOG_REDACTOR_REFINE_PROMPT,
  BLOG_REDACTOR_SYSTEM_PROMPT,
} from "@/lib/blog/blog-redactor-prompt";
import { normalizeBlogArticleHtml } from "@/lib/blog/normalize-blog-html";
import {
  countWords,
  decodeHtmlEntities,
  estimateReadingTimeMinutes,
  extractHtmlFromModelOutput,
  asSingleRelation,
  parseArticleUrl,
  stripHtml,
} from "@/lib/blog/blog-html-utils";
import {
  OPENAI_TEXT_MODEL,
  OPENAI_WEB_SEARCH_TOOL,
  chatCompletionConfig,
  chatMessageText,
  isGpt5Model,
  responseOutputText,
} from "@/lib/openai-config";

const DEFAULT_MODEL = process.env.OPENAI_BLOG_REDACTOR_MODEL?.trim() || OPENAI_TEXT_MODEL;
const DEFAULT_TEMPERATURE = Number(process.env.OPENAI_BLOG_REDACTOR_TEMPERATURE || "0.7");
const SITE_URL = "https://www.eskaladigital.com";

const INTERNAL_LINKS = [
  SITE_URL,
  `${SITE_URL}/servicios`,
  `${SITE_URL}/servicios/seo-local`,
  `${SITE_URL}/servicios/diseno-web`,
  `${SITE_URL}/servicios/redes-sociales`,
  `${SITE_URL}/servicios/google-ads`,
  `${SITE_URL}/servicios/email-marketing`,
  `${SITE_URL}/servicios/branding`,
  `${SITE_URL}/servicios/chatbots`,
  `${SITE_URL}/servicios/apps-ia`,
  `${SITE_URL}/portfolio`,
  `${SITE_URL}/exitos`,
  `${SITE_URL}/metodologia`,
  `${SITE_URL}/quienes-somos`,
  `${SITE_URL}/contacto`,
  `${SITE_URL}/blog`,
];

type CategoryRel = { name: string | null; slug: string | null } | null;

type ArticleRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string[] | null;
  category: CategoryRel;
};

export type RedactBlogArticleInput = {
  articleUrl?: string;
  slug?: string;
  postId?: string;
  dryRun?: boolean;
  seoOnly?: boolean;
};

export type RedactBlogArticleResult = {
  postId: string;
  title: string;
  slug: string;
  wordCount: number;
  readingTime: number;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  content: string;
  contentPreview: string;
  updated: boolean;
  model: string;
  temperature: number;
};

function createServiceSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env.local");
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

async function loadPost(
  supabase: SupabaseClient,
  input: { articleUrl?: string; slug?: string; postId?: string }
): Promise<ArticleRow> {
  let query = supabase
    .from("articles")
    .select(
      `id, title, slug, excerpt, content, meta_title, meta_description, keywords,
       category:categories(name, slug)`
    );

  if (input.postId) {
    query = query.eq("id", input.postId);
  } else if (input.slug) {
    query = query.eq("slug", input.slug);
  } else if (input.articleUrl) {
    const parsed = parseArticleUrl(input.articleUrl);
    query = query.eq("slug", parsed.slug);
  } else {
    throw new Error("Indica postId, articleUrl o slug");
  }

  const { data, error } = await query.single();
  if (error || !data) {
    throw new Error(`No se encontró el artículo: ${error?.message || "sin datos"}`);
  }
  const row = data as Omit<ArticleRow, "category"> & {
    category?: CategoryRel | CategoryRel[];
  };
  return {
    ...row,
    category: asSingleRelation(row.category),
  };
}

function internalLinksBriefing(): string {
  return [
    "ENLACES INTERNOS (usa varios con anclas naturales; prioriza la landing del servicio si existe):",
    ...INTERNAL_LINKS.map((url) => `- ${url}`),
  ].join("\n");
}

async function callRedactorWithWebSearch(
  openai: OpenAI,
  instructions: string,
  input: string,
  model: string
): Promise<string> {
  const response = await openai.responses.create({
    model,
    instructions,
    input,
    max_output_tokens: 16000,
    reasoning: { effort: "medium" },
    tools: [OPENAI_WEB_SEARCH_TOOL as unknown as OpenAI.Responses.WebSearchTool],
    tool_choice: "auto",
  });

  if (response.error) {
    throw new Error(`OpenAI Responses: ${response.error.message || "error desconocido"}`);
  }

  const content = responseOutputText(response);
  if (!content) {
    const incomplete = response.incomplete_details?.reason || "unknown";
    throw new Error(`OpenAI no devolvió contenido del artículo (incomplete=${incomplete})`);
  }
  return content;
}

const SEO_FIELDS_SYSTEM_PROMPT = `Genera metadatos SEO en español para un artículo del blog de Eskala Digital (agencia de marketing en Murcia: SEO local, web, Ads, redes, IA).

Responde SOLO JSON con estas keys:
- excerpt: resumen editorial para la ficha (máx. 280 caracteres, sin repetir el título literal).
- meta_title: título SEO (máx. 60 caracteres).
- meta_description: meta description (140-155 caracteres). Única, con el tema y un CTA suave. No copies el excerpt.
- meta_keywords: hasta 10 keywords separadas por coma (Murcia, SEO local, el tema).

Reglas:
- Español natural, búsquedas locales e informativas.
- No inventes cifras que no aparezcan en el contenido.`;

function clampSeoText(text: string, maxLen: number): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxLen) return trimmed;
  const cut = trimmed.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > maxLen * 0.6 ? cut.slice(0, lastSpace) : cut).trim();
}

function normalizeTitleKey(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function keywordsToArray(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 12);
}

async function generateSeoFields(
  openai: OpenAI,
  title: string,
  html: string,
  model: string,
  temperature: number
) {
  const plain = stripHtml(html).slice(0, 3500);
  const seoTemperature = isGpt5Model(model) ? undefined : Math.min(temperature, 0.5);
  const completion = await openai.chat.completions.create({
    ...chatCompletionConfig({
      model,
      temperature: seoTemperature ?? temperature,
      maxTokens: 1200,
      reasoningEffort: "low",
      json: true,
    }),
    messages: [
      { role: "system", content: SEO_FIELDS_SYSTEM_PROMPT },
      {
        role: "user",
        content: `Título del artículo (H1 de la página, no repetir como excerpt):\n${title}\n\nContenido:\n${plain}`,
      },
    ],
  });

  const raw = chatMessageText(completion) || "{}";
  const parsed = JSON.parse(raw) as {
    excerpt?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
  };

  const titleKey = normalizeTitleKey(title);
  const pickField = (value: string | undefined, fallback: string, maxLen: number) => {
    const trimmed = decodeHtmlEntities((value || fallback).trim());
    const cleanFallback = decodeHtmlEntities(fallback.trim());
    if (!trimmed) return clampSeoText(cleanFallback, maxLen);
    if (normalizeTitleKey(trimmed) === titleKey) {
      return clampSeoText(cleanFallback, maxLen);
    }
    return clampSeoText(trimmed, maxLen);
  };

  const defaultKeywords = "agencia marketing Murcia, SEO local Murcia, Eskala Digital";

  return {
    excerpt: pickField(parsed.excerpt, stripHtml(html).slice(0, 280), 300),
    metaTitle: pickField(parsed.meta_title, title, 60),
    metaDescription: pickField(parsed.meta_description, stripHtml(html).slice(0, 150), 155),
    metaKeywords: keywordsToArray(pickField(parsed.meta_keywords, defaultKeywords, 500)),
  };
}

export async function redactBlogArticle(input: RedactBlogArticleInput): Promise<RedactBlogArticleResult> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Falta OPENAI_API_KEY en .env.local");
  }

  const model = DEFAULT_MODEL;
  const temperature = DEFAULT_TEMPERATURE;
  const supabase = createServiceSupabase();
  const post = await loadPost(supabase, input);
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  console.log(`[BLOG-REDACTOR] Artículo: ${post.title}`);
  console.log(
    `[BLOG-REDACTOR] Modelo: ${model} | Web Search nativo | temperature: ${isGpt5Model(model) ? "default (gpt-5.x)" : temperature}`
  );

  if (input.seoOnly) {
    const html = post.content?.trim();
    if (!html) throw new Error("El artículo no tiene contenido HTML para generar SEO");

    const seo = await generateSeoFields(openai, post.title, html, model, temperature);
    const wordCount = countWords(html);
    const readingTime = estimateReadingTimeMinutes(wordCount);
    const payload = {
      excerpt: clampSeoText(seo.excerpt, 300),
      meta_title: clampSeoText(seo.metaTitle, 60),
      meta_description: clampSeoText(seo.metaDescription, 155),
      keywords: seo.metaKeywords,
      updated_at: new Date().toISOString(),
    };

    if (!input.dryRun) {
      const { error } = await supabase.from("articles").update(payload).eq("id", post.id);
      if (error) throw new Error(`Error guardando SEO: ${error.message}`);
    }

    return {
      postId: post.id,
      title: post.title,
      slug: post.slug,
      wordCount,
      readingTime,
      excerpt: payload.excerpt,
      metaTitle: payload.meta_title,
      metaDescription: payload.meta_description,
      metaKeywords: seo.metaKeywords,
      content: html,
      contentPreview: stripHtml(html).slice(0, 280) + "...",
      updated: !input.dryRun,
      model,
      temperature,
    };
  }

  const briefing = [
    `TITULO DEL ARTICULO:\n${post.title}`,
    `CATEGORIA: ${post.category?.name || "Blog"} (${post.category?.slug || ""})`,
    internalLinksBriefing(),
    "Usa web_search para contrastar datos oficiales antes de redactar.",
    "Redacta el artículo completo en HTML. No inventes cifras de campañas.",
  ].join("\n\n");

  const draft = await callRedactorWithWebSearch(openai, BLOG_REDACTOR_SYSTEM_PROMPT, briefing, model);
  const draftHtml = extractHtmlFromModelOutput(draft);
  console.log(`[BLOG-REDACTOR] Borrador: ${countWords(draftHtml)} palabras`);

  const refineInput = [
    `TITULO: ${post.title}`,
    internalLinksBriefing(),
    "Vuelve a usar web_search para contrastar cifras y recomendaciones actuales.",
    `BORRADOR HTML:\n${draftHtml}`,
    "Entrega la versión final en HTML.",
  ].join("\n\n");

  const finalRaw = await callRedactorWithWebSearch(
    openai,
    `${BLOG_REDACTOR_SYSTEM_PROMPT}\n\n${BLOG_REDACTOR_REFINE_PROMPT}`,
    refineInput,
    model
  );

  const content = normalizeBlogArticleHtml(extractHtmlFromModelOutput(finalRaw), post.title);
  const wordCount = countWords(content);
  const readingTime = estimateReadingTimeMinutes(wordCount);
  const seo = await generateSeoFields(openai, post.title, content, model, temperature);

  const payload = {
    content,
    excerpt: clampSeoText(seo.excerpt, 300),
    meta_title: clampSeoText(seo.metaTitle, 60),
    meta_description: clampSeoText(seo.metaDescription, 155),
    keywords: seo.metaKeywords,
    updated_at: new Date().toISOString(),
  };

  if (!input.dryRun) {
    const { error } = await supabase.from("articles").update(payload).eq("id", post.id);
    if (error) throw new Error(`Error guardando artículo: ${error.message}`);
  }

  return {
    postId: post.id,
    title: post.title,
    slug: post.slug,
    wordCount,
    readingTime,
    excerpt: payload.excerpt,
    metaTitle: payload.meta_title,
    metaDescription: payload.meta_description,
    metaKeywords: seo.metaKeywords,
    content,
    contentPreview: stripHtml(content).slice(0, 280) + "...",
    updated: !input.dryRun,
    model,
    temperature,
  };
}
