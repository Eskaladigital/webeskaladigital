import { createHash } from 'crypto'
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_URL } from './config'
import { formatShortAddress } from '@/lib/site'
import { ESKALA_SERVICES } from './business-data'
import type { IngestChunk } from './types'

export function makeChunk(source: string, title: string, content: string): IngestChunk {
  const normalized = content.trim()
  return {
    source,
    title,
    content: normalized,
    content_hash: createHash('sha256').update(`${source}:${title}:${normalized}`).digest('hex'),
  }
}

export function chunksFromServices(): IngestChunk[] {
  return ESKALA_SERVICES.map((s) =>
    makeChunk(
      'servicios',
      s.title,
      `${s.title}\n${s.summary}\nURL: ${SITE_URL}/servicios/${s.slug}`
    )
  )
}

export function chunksFromEmpresa(): IngestChunk[] {
  return [
    makeChunk(
      'empresa',
      'Sobre ESKALA',
      `ESKALA Marketing Digital es una agencia de marketing digital en Murcia (desde 2020). Diseño web, SEO local, redes sociales, Google Ads, aplicaciones con IA, chatbots, branding y email marketing. Trabaja con empresas de Murcia, Cartagena, Lorca y la Región de Murcia. Partner local: primera consultoría gratuita y respuesta habitual en menos de 24 h. Web: ${SITE_URL}. Quiénes somos: ${SITE_URL}/quienes-somos`
    ),
    makeChunk(
      'empresa',
      'Contacto',
      `Email: ${CONTACT_EMAIL}\nTeléfono: ${CONTACT_PHONE}\nHorario: lunes a viernes 9:00–18:00\nUbicación: ${formatShortAddress()} (presencial con cita)\nFormulario de contacto (particular/empresa, temática, origen): ${SITE_URL}/contacto\nWhatsApp del mismo número es un canal de la ficha de contacto, no el chat flotante de la web. El chat flotante es Nora.`
    ),
  ]
}

export function chunksFromFaqs(): IngestChunk[] {
  return [
    makeChunk(
      'faqs',
      '¿Qué servicios ofrece ESKALA?',
      `P: ¿Qué servicios ofrece ESKALA?\nR: Ocho líneas: diseño web, SEO local, redes sociales, Google Ads, apps con IA, chatbots, branding y email marketing. Detalle en ${SITE_URL}/servicios y cada ficha /servicios/{slug}.`
    ),
    makeChunk(
      'faqs',
      '¿Cómo puedo contactar?',
      `P: ¿Cómo puedo contactar con ESKALA?\nR: Formulario en ${SITE_URL}/contacto (particular o empresa, servicio y de dónde nos has oído). También email ${CONTACT_EMAIL} y teléfono ${CONTACT_PHONE} (L-V 9–18 h). Primera consultoría gratuita.`
    ),
    makeChunk(
      'faqs',
      '¿Hacéis páginas web en Murcia?',
      `P: ¿Hacéis páginas web en Murcia?\nR: Sí. Diseño a medida, rápido y orientado a conversión, con SEO técnico de base. Ficha: ${SITE_URL}/servicios/diseno-web`
    ),
    makeChunk(
      'faqs',
      '¿Este chat es un chatbot vuestro?',
      `P: ¿Este chat de la web es un ejemplo de vuestros chatbots?\nR: Sí. Es el chatbot de visitante de eskaladigital.com: informa con el contenido de la agencia y el blog y deriva a contacto. Eskala también desarrolla chatbots a medida para clientes (web, WhatsApp, etc.). Ficha: ${SITE_URL}/servicios/chatbots`
    ),
    makeChunk(
      'faqs',
      '¿Cuánto cuesta un proyecto?',
      `P: ¿Cuánto cuesta una web, SEO o un chatbot?\nR: Depende del alcance. No hay tarifa única en la web. La primera consultoría es gratuita; para un presupuesto hay que [escribir](${SITE_URL}/contacto).`
    ),
    makeChunk(
      'condiciones',
      'Alcance del chat',
      `La información de este chat es orientativa sobre los servicios y artículos de ESKALA. No sustituye una propuesta comercial ni un diagnóstico del negocio. Para un caso concreto: ${SITE_URL}/contacto. Privacidad: ${SITE_URL}/politica-privacidad`
    ),
  ]
}

export function chunkFromArticle(article: {
  title: string
  slug?: string | null
  excerpt?: string | null
  content?: string | null
  category?: { name?: string } | string | null
}): IngestChunk | null {
  const plain = stripHtml(article.content || '')
  const intro = plain.slice(0, 900)
  const excerpt = article.excerpt?.trim() || intro.slice(0, 280)
  if (!excerpt && !intro) return null
  const slug = (article.slug || '').trim()
  if (!slug) return null
  const category =
    typeof article.category === 'string'
      ? article.category
      : article.category?.name || 'General'
  return makeChunk(
    'blog',
    article.title,
    `Artículo: ${article.title}\nCategoría: ${category}\nExtracto: ${excerpt}\n${intro ? `Introducción: ${intro}` : ''}\nEnlace: ${SITE_URL}/blog/${slug}`
  )
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function collectStaticChunks(): IngestChunk[] {
  return [...chunksFromServices(), ...chunksFromEmpresa(), ...chunksFromFaqs()]
}
