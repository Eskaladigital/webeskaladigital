import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { redactBlogArticle } from "@/lib/blog/redact-blog-article";

export const maxDuration = 300;

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as {
      postId?: string;
      articleUrl?: string;
      slug?: string;
      seoOnly?: boolean;
    };

    if (!body.postId && !body.articleUrl && !body.slug) {
      return NextResponse.json(
        { ok: false, error: "Debes indicar postId, articleUrl o slug" },
        { status: 400 }
      );
    }

    const result = await redactBlogArticle({
      postId: body.postId,
      articleUrl: body.articleUrl,
      slug: body.slug,
      seoOnly: Boolean(body.seoOnly),
    });

    return NextResponse.json({ ok: true, ...result });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error interno redactando el artículo";
    console.error("[admin/blog/redact]", error);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
