import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

/**
 * Español sin prefijo (URLs de siempre) e inglés bajo /en.
 * El blog no tiene versión inglesa: desde /en se enlaza al blog en español.
 */
export type Lang = 'es' | 'en'

export const SERVICES = [
  { slug: 'diseno-web', en: 'web-design', es: 'Diseño Web', enLabel: 'Web Design', icon: '🌐' },
  { slug: 'seo-local', en: 'local-seo', es: 'SEO Local', enLabel: 'SEO', icon: '📈' },
  { slug: 'redes-sociales', en: 'social-media', es: 'Redes Sociales', enLabel: 'Social Media', icon: '📱' },
  { slug: 'google-ads', en: 'google-ads', es: 'Google Ads', enLabel: 'Google Ads', icon: '🎯' },
  { slug: 'apps-ia', en: 'ai-apps', es: 'Apps con IA', enLabel: 'AI Apps', icon: '🤖' },
  { slug: 'chatbots', en: 'chatbots', es: 'Chatbots', enLabel: 'Chatbots', icon: '💬' },
  { slug: 'branding', en: 'branding', es: 'Branding', enLabel: 'Branding', icon: '✏️' },
  { slug: 'email-marketing', en: 'email-marketing', es: 'Email Marketing', enLabel: 'Email Marketing', icon: '📧' },
] as const

const EN_ROUTES: Record<string, string> = {
  '/': '/en',
  '/quienes-somos': '/en/about',
  '/metodologia': '/en/methodology',
  '/servicios': '/en/services',
  '/portfolio': '/en/portfolio',
  '/exitos': '/en/success-stories',
  '/contacto': '/en/contact',
  ...Object.fromEntries(SERVICES.map((s) => [`/servicios/${s.slug}`, `/en/services/${s.en}`])),
}

const ES_ROUTES: Record<string, string> = Object.fromEntries(
  Object.entries(EN_ROUTES).map(([es, en]) => [en, es])
)

export function langFromPath(pathname: string | null | undefined): Lang {
  return pathname === '/en' || pathname?.startsWith('/en/') ? 'en' : 'es'
}

/** Ruta en el idioma pedido a partir de la ruta española. Sin traducción, se queda la española. */
export function href(esPath: string, lang: Lang): string {
  return lang === 'en' ? EN_ROUTES[esPath] ?? esPath : esPath
}

/** Destino del selector ES/EN. Sin página equivalente, la home del otro idioma. */
export function counterpartPath(pathname: string): string {
  if (langFromPath(pathname) === 'en') return ES_ROUTES[pathname] ?? '/'
  return EN_ROUTES[pathname] ?? '/en'
}

export function hasEnglish(esPath: string): boolean {
  return esPath in EN_ROUTES
}

/** canonical + hreflang (es, en, x-default = español) para el Metadata API. */
export function languageAlternates(esPath: string, lang: Lang) {
  const es = `${SITE_URL}${esPath === '/' ? '' : esPath}`
  const en = `${SITE_URL}${EN_ROUTES[esPath]}`
  return {
    canonical: lang === 'en' ? en : es,
    languages: { es, en, 'x-default': es },
  }
}

export const EN_PATHS = Object.values(EN_ROUTES)

/** Metadata de una página /en a partir de su gemela española. */
export function enMetadata(esPath: string, title: string, description: string, absoluteTitle = false): Metadata {
  const alternates = languageAlternates(esPath, 'en')
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: alternates.canonical,
      siteName: 'ESKALA Digital',
      locale: 'en_GB',
      alternateLocale: ['es_ES'],
      type: 'website',
      images: [{ url: '/eskala_digital_opengraph.png', width: 1200, height: 630, alt: 'ESKALA Digital' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/eskala_digital_opengraph.png'],
    },
  }
}

export const UI = {
  es: {
    home: 'Inicio',
    about: 'Nosotros',
    methodology: 'Metodología',
    methodShort: 'Método',
    services: 'Servicios',
    portfolio: 'Portfolio',
    success: 'Éxitos',
    blog: 'Blog',
    contact: 'Contacto',
    contactCta: 'Contactar',
    ourServices: 'Nuestros Servicios',
    allServices: 'Ver todos los servicios →',
    menu: 'Menú',
    switchLabel: 'EN',
    switchTitle: 'English version',
    tagline: 'Marketing Digital',
    footerAbout:
      'Agencia de marketing digital en Murcia. Llevamos tu negocio al siguiente nivel con estrategia, creatividad y tecnología.',
    company: 'Empresa',
    legal: 'Legal',
    legalNotice: 'Aviso legal',
    privacy: 'Política de privacidad',
    cookies: 'Política de cookies',
    cookieSettings: 'Configurar cookies',
    sitemap: 'Mapa del Sitio',
    rights: 'Todos los derechos reservados.',
    brandOf: 'marca de',
    madeIn: 'Hecho con',
    madeInPlace: 'en Murcia',
    builtBy: 'Web desarrollada por',
    builtByName: 'ESKALA Agencia de Marketing Digital',
    serviceLabel: (s: (typeof SERVICES)[number]) => s.es,
  },
  en: {
    home: 'Home',
    about: 'About',
    methodology: 'Methodology',
    methodShort: 'Method',
    services: 'Services',
    portfolio: 'Portfolio',
    success: 'Success stories',
    blog: 'Blog (ES)',
    contact: 'Contact',
    contactCta: 'Get in touch',
    ourServices: 'Our services',
    allServices: 'See all services →',
    menu: 'Menu',
    switchLabel: 'ES',
    switchTitle: 'Versión en español',
    tagline: 'Digital Marketing',
    footerAbout:
      'Digital marketing agency in Murcia, Spain. We grow your business with strategy, creativity and technology.',
    company: 'Company',
    legal: 'Legal',
    legalNotice: 'Legal notice (ES)',
    privacy: 'Privacy policy (ES)',
    cookies: 'Cookie policy (ES)',
    cookieSettings: 'Cookie settings',
    sitemap: 'Sitemap',
    rights: 'All rights reserved.',
    brandOf: 'a brand of',
    madeIn: 'Made with',
    madeInPlace: 'in Murcia',
    builtBy: 'Website by',
    builtByName: 'ESKALA Digital Marketing Agency',
    serviceLabel: (s: (typeof SERVICES)[number]) => s.enLabel,
  },
} as const

/** Las franjas de navegación de los heros de sección. */
export function heroStripes(lang: Lang) {
  const t = UI[lang]
  return [
    { label: t.home, href: href('/', lang) },
    { label: t.about, href: href('/quienes-somos', lang) },
    { label: t.methodShort, href: href('/metodologia', lang) },
    { label: t.services, href: href('/servicios', lang) },
    { label: t.portfolio, href: href('/portfolio', lang) },
    { label: lang === 'en' ? 'Results' : t.success, href: href('/exitos', lang) },
    { label: 'Blog', href: '/blog' },
    { label: t.contact, href: href('/contacto', lang) },
  ]
}
