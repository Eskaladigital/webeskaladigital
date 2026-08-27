import { CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME, SITE_URL } from './config'

export const ESKALA_SERVICES = [
  {
    slug: 'diseno-web',
    title: 'Diseño web',
    summary:
      'Páginas web profesionales, modernas y rápidas para empresas de Murcia, Cartagena, Lorca y la Región. Diseño a medida (sin plantillas genéricas), 100 % responsive, carga objetivo <3 s, SSL, SEO técnico de base y orientación a conversión. La web es el comercial 24/7 del negocio.',
  },
  {
    slug: 'seo-local',
    title: 'SEO local',
    summary:
      'Posicionamiento en búsquedas con intención local (Maps y «servicio + Murcia»). Google Business Profile, ficha, reseñas, citaciones NAP y contenidos locales para Murcia capital, Cartagena, Lorca, Molina de Segura y la Región. Objetivo: más llamadas, visitas al local y ventas.',
  },
  {
    slug: 'redes-sociales',
    title: 'Redes sociales',
    summary:
      'Community management profesional: Instagram, Facebook, LinkedIn y TikTok. Estrategia, diseño, copy, gestión de comunidad y métricas. Contenido que construye comunidad y convierte seguidores en clientes. Eskala no inventa la geometría de un producto: respeta la marca del cliente.',
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    summary:
      'Campañas SEM de búsqueda, display, shopping y YouTube. Agencia Google Partner. Cada euro se orienta a conversiones medibles; no se malgasta presupuesto. Resultados desde el primer día si el tracking está bien montado.',
  },
  {
    slug: 'apps-ia',
    title: 'Apps con IA',
    summary:
      'Aplicaciones y automatización con IA para empresas: procesos, análisis, lenguaje natural y soluciones a medida. Consultoría inicial para ver si hay un caso real, no humo. Stack vivo del taller (Next, Supabase, modelos OpenAI).',
  },
  {
    slug: 'chatbots',
    title: 'Chatbots con IA',
    summary:
      'Chatbots de visitante para web, WhatsApp Business y otros canales: responden dudas, capturan leads, reservan y derivan a humano cuando no basta. No son árboles de respuestas fijas: conversan con contexto de la empresa (blog, servicios, contacto). Este chat de eskaladigital.com es un ejemplo vivo de ese servicio.',
  },
  {
    slug: 'branding',
    title: 'Branding',
    summary:
      'Identidad visual: logotipo, paleta, tipografías, manual de marca y aplicaciones. Naming, rebranding o marca desde cero. La marca es promesa y emoción, no solo un logo.',
  },
  {
    slug: 'email-marketing',
    title: 'Email marketing',
    summary:
      'Newsletters, automatizaciones (bienvenida, carritos, fechas) y segmentación. Canal de fidelización con ROI alto en literatura del sector (DMA). Herramientas habituales: Mailchimp, Brevo, ActiveCampaign, MailerLite. La lista de correo es un activo; no se compra spam.',
  },
] as const

export function buildContactBlock(): string {
  return [
    'CONTACTO ESKALA:',
    `- Email: ${CONTACT_EMAIL}`,
    `- Teléfono: ${CONTACT_PHONE}`,
    `- Horario: lunes a viernes, 9:00–18:00 (Murcia)`,
    `- Ubicación: Murcia, España. Atención presencial con cita.`,
    `- Página de contacto: ${SITE_URL}/contacto`,
    '- Primera consultoría: gratuita. Respuesta habitual en menos de 24 h laborables.',
    '- WhatsApp (+34 626 82 34 04) es un canal de contacto, no el chat de esta web.',
  ].join('\n')
}

export function buildServicesBlock(): string {
  const lines = ['SERVICIOS ACTIVOS DE ESKALA:']
  for (const s of ESKALA_SERVICES) {
    lines.push(`- ${s.title} (${SITE_URL}/servicios/${s.slug}): ${s.summary}`)
  }
  return lines.join('\n')
}

export function buildBusinessDataBlock(): string {
  return [
    `DATOS EN TIEMPO REAL — ${SITE_NAME} (${new Date().toISOString().slice(0, 10)})`,
    '',
    `Empresa: ${SITE_NAME}. Agencia de marketing digital en Murcia desde 2020.`,
    'Trabaja con empresas de Murcia, Cartagena, Lorca y la Región; también proyectos en el resto de España.',
    `Web: ${SITE_URL}`,
    'Quiénes somos: ' + SITE_URL + '/quienes-somos',
    'Blog: ' + SITE_URL + '/blog',
    'Portfolio: ' + SITE_URL + '/portfolio',
    '',
    buildContactBlock(),
    '',
    buildServicesBlock(),
    '',
    'NO inventar productos, precios cerrados, URLs ni casos que no estén aquí o en el RAG.',
    'Gestia (calendario RRSS) es un producto de Eskala; no tiene dominio público confirmado. No inventar URL. Si preguntan, decir que es un producto propio y derivar a contacto.',
    'Si estos datos contradicen el RAG, PRIORIZA este bloque.',
  ].join('\n')
}
