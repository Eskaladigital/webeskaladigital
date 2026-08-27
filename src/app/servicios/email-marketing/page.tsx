import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Email Marketing en Murcia | Newsletters y Automatizaciones | ESKALA',
  description: 'Servicio profesional de email marketing en Murcia. Newsletters diseñadas, automatizaciones inteligentes, segmentación avanzada y campañas que convierten. El email marketing tiene el ROI más alto: 42€ por cada 1€ invertido. Mailchimp, Brevo, ActiveCampaign. Trabajamos con empresas de Murcia, Cartagena y toda la Región. Auditoría gratuita.',
  keywords: [
    'email marketing murcia',
    'newsletter murcia',
    'automatización email murcia',
    'mailchimp murcia',
    'campañas email murcia',
    'diseño newsletter murcia',
    'emailing murcia',
    'marketing por email murcia',
  ],
  openGraph: {
    title: 'Email Marketing en Murcia | Newsletters y Automatizaciones | ESKALA',
    description: 'Email marketing profesional. Newsletters, automatizaciones y segmentación. ROI de 42€ por cada 1€.',
    url: 'https://www.eskaladigital.com/servicios/email-marketing',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [{ 
      url: '/eskala_digital_opengraph.png', 
      width: 1200, 
      height: 630, 
      alt: 'Email Marketing en Murcia - ESKALA' 
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Marketing en Murcia | ESKALA Marketing Digital',
    description: 'Newsletters y automatizaciones con el mejor ROI del marketing digital.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: { 
    canonical: 'https://www.eskaladigital.com/servicios/email-marketing' 
  },
}

const heroData = {
  badge: '📧 Email Marketing en Murcia',
  title: 'El Canal con Mejor ROI:',
  titleHighlight: '42€ por Cada 1€ Invertido',
  description: 'Servicio profesional de email marketing para empresas en Murcia. El email marketing sigue siendo el rey de la conversión en 2026: ROI promedio de 42€ por cada euro invertido (DMA 2024), superior a redes sociales, Google Ads o cualquier otro canal. Llegamos directo al buzón de tus clientes con mensajes personalizados que generan ventas recurrentes. Diseño de newsletters profesionales, automatizaciones inteligentes (bienvenida, carritos abandonados, cumpleaños), segmentación avanzada y análisis de resultados. Trabajamos con Mailchimp, Brevo (Sendinblue), ActiveCampaign, MailerLite. Tu lista de emails es oro: explotamos su potencial. Empresas en Murcia, Cartagena y Lorca ya generan miles de euros mensuales con email marketing.',
  stripeColor: 8,
  jsonLdName: 'Email marketing',
  jsonLdSlug: 'email-marketing',
}

const features = [
  {
    icon: '📝',
    title: 'Diseño de Newsletters Profesionales',
    description: 'Emails con diseño visual profesional, 100% responsive (adaptados a móvil, tablet, desktop) y alineados con tu identidad de marca. Plantillas HTML personalizadas que se ven bien en todos los clientes de email: Gmail, Outlook, Apple Mail, Yahoo. Evitamos spam folders. Imágenes optimizadas para carga rápida. CTAs (botones de acción) destacados. Diseño centrado en conversión, no solo bonito. Testing en +40 clientes de email antes de enviar.',
  },
  {
    icon: '⚙️',
    title: 'Automatizaciones y Email Flows',
    description: 'Secuencias de emails automáticas que se envían según comportamiento del usuario: email de bienvenida (welcome series) cuando alguien se suscribe, recuperación de carritos abandonados (abandonment cart recovery) - recupera 15-30% de ventas perdidas, emails de cumpleaños con cupones personalizados, serie de nurturing (educación) para leads fríos, reactivación de clientes inactivos (win-back campaigns), recomendaciones de productos post-compra (cross-sell/upsell). Las automatizaciones trabajan mientras duermes: generan ventas en piloto automático.',
  },
  {
    icon: '🎯',
    title: 'Segmentación Avanzada de Listas',
    description: 'Dividimos tu lista en grupos (segmentos) para enviar mensajes ultra-relevantes: segmentación demográfica (edad, ubicación Murcia/Cartagena, género), comportamiento de compra (compradores vs no compradores, frecuencia, valor promedio), nivel de engagement (abre emails, no abre, clica), intereses y preferencias declaradas, fase del customer journey (prospecto, lead, cliente, fan). Emails personalizados tienen 6x más conversión que emails genéricos. El batch-and-blast murió: hoy es personalización o spam.',
  },
  {
    icon: '✍️',
    title: 'Copywriting que Convierte',
    description: 'Asuntos (subject lines) que se abren: generamos curiosidad, urgencia, valor. El 47% de destinatarios abre según el asunto. Preheader optimizado. Textos que se leen: storytelling, escaneabilidad, párrafos cortos. CTAs que se clican: verbos de acción, color contrastante, ubicación estratégica. Fórmulas probadas: AIDA, PAS, FAB. Tono de voz adaptado a tu marca. Cada palabra tiene propósito: generar clic, venta, engagement. No escribimos por escribir.',
  },
  {
    icon: '📊',
    title: 'Tests A/B para Optimización',
    description: 'Probamos variables para maximizar resultados: A/B testing de asuntos (cuál genera más aperturas), variantes de diseño (layout A vs B), diferentes CTAs (texto del botón, color, posición), horarios de envío (mañana vs tarde), segmentación (qué mensaje funciona con qué segmento). Decisiones basadas en datos, no en opiniones. Mejora continua: cada campaña es mejor que la anterior. Las cuentas optimizadas con testing mejoran conversión 20-40%.',
  },
  {
    icon: '📈',
    title: 'Reporting y Análisis de Métricas',
    description: 'Informes mensuales detallados con métricas clave: tasa de apertura (open rate) - benchmark: 20-25%, tasa de clic (CTR) - benchmark: 2-5%, tasa de conversión (ventas generadas), tasa de baja (unsubscribe) - debe ser <0.5%, crecimiento de lista, ROI del email marketing, ingresos atribuidos. Análisis de qué funciona y qué no. Recomendaciones de mejora basadas en datos. Dashboard en tiempo real. Transparencia absoluta.',
  },
]

const benefits = [
  {
    title: 'Canal Propio y sin Intermediarios',
    description: 'Tu lista de emails es TUYA. No dependes de algoritmos caprichosos de Instagram, Facebook o TikTok que cambian cada mes y matan tu alcance orgánico. No dependes de Google. Acceso directo al buzón de tus clientes. Facebook puede cerrar mañana (cambiar algoritmo, bloquear cuenta): tu lista de emails no desaparece. El 99% de usuarios revisan email diariamente. Es el único canal que controlas 100%. Activo digital valioso: una lista de 10K emails comprometidos vale miles de euros.',
  },
  {
    title: 'Personalización Extrema y Relevancia',
    description: 'Email permite personalización imposible en otros canales: llama a cada cliente por su nombre en asunto y cuerpo, recomienda productos basados en historial de compras, envía ofertas según preferencias declaradas, timing perfecto: emails en el momento óptimo de cada usuario (open time optimization), contenido dinámico: bloques de contenido diferentes según segmento en el mismo email. Personalización = relevancia. Relevancia = ventas. Emails personalizados generan 6x más transacciones que emails genéricos.',
  },
  {
    title: 'ROI Más Alto y Coste Reducidísimo',
    description: 'El email marketing tiene el ROI más alto de TODOS los canales digitales: 42€ de retorno por cada euro invertido (estudio DMA 2024). Coste irrisorio: enviar 10.000 emails cuesta 30-100€/mes según herramienta. Google Ads o Facebook Ads: cientos/miles de euros para mismo alcance. Email es 40x más efectivo que redes sociales para adquisición (McKinsey). Es el canal más rentable que existe. Si no haces email marketing, estás dejando dinero sobre la mesa. Periodo.',
  },
]

const process = [
  { 
    step: '01', 
    title: 'Auditoría de Email Marketing', 
    description: 'Analizamos tu situación actual: tamaño de lista, salud de lista (engagement, bounces, spam complaints), herramienta usada (Mailchimp, Brevo, otra), historial de campañas (qué has enviado, resultados), segmentación actual, automatizaciones existentes, objetivos de negocio. Identificamos oportunidades de mejora rápida (quick wins). Benchmark vs tu industria. Análisis de competencia en Murcia.' 
  },
  { 
    step: '02', 
    title: 'Estrategia y Planificación', 
    description: 'Definimos estrategia de email marketing completa: calendario editorial de newsletters (frecuencia, temas, contenidos), segmentos clave y mensajes para cada uno, automatizaciones prioritarias a implementar (según ROI esperado), objetivos SMART: crecimiento de lista, tasa de apertura, conversiones. Diseño de plantillas base responsive. Integración con CRM/e-commerce si aplica. Estrategia de crecimiento de lista: lead magnets, pop-ups.' 
  },
  { 
    step: '03', 
    title: 'Implementación Técnica', 
    description: 'Configuramos herramienta de email marketing elegida. Diseñamos y programamos plantillas HTML responsive. Configuración de automatizaciones: flujos, triggers, delays, condiciones. Setup de seguimiento: tracking de clics, conversiones, Google Analytics integration. Configuración técnica: SPF, DKIM, DMARC para deliverability óptima (evitar spam). Importación y limpieza de listas. Segmentos creados. Testing de envíos.' 
  },
  { 
    step: '04', 
    title: 'Ejecución y Optimización Continua', 
    description: 'Enviamos campañas según calendario (newsletters, promociones). Automatizaciones funcionando 24/7. Análisis semanal de resultados: qué funciona, qué no. Testing A/B continuo para mejorar métricas. Ajustes de estrategia basados en datos. Reporte mensual con análisis y recomendaciones. Limpieza periódica de lista (eliminar bounces, inactivos). Crecimiento sostenido de métricas mes a mes. Email marketing es maratón, no sprint.' 
  },
]

const testimonial = {
  quote: 'Teníamos 5.000 suscriptores dormidos y no les enviábamos nada por miedo a molestar. ESKALA creó una estrategia de email marketing que genera 15.000€/mes consistentes en ventas directas atribuibles. El email es oro puro. Ojalá hubiéramos empezado antes.',
  author: 'Ana Belén Torres',
  position: 'Directora E-commerce',
  company: 'Moda Mediterránea Online',
}

export default function EmailMarketingPage() {
  // Schema Service para SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Email Marketing',
    name: 'Email Marketing y Newsletters en Murcia',
    description: 'Servicio profesional de email marketing. Diseño de newsletters, automatizaciones, segmentación y campañas con alto ROI.',
    provider: {
      '@type': 'MarketingAgency',
      name: 'ESKALA Marketing Digital',
      image: 'https://www.eskaladigital.com/icon.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Murcia',
        addressRegion: 'Región de Murcia',
        addressCountry: 'ES',
      },
      telephone: '+34626823404',
      priceRange: '€€',
    },
    areaServed: [
      { '@type': 'City', name: 'Murcia' },
      { '@type': 'City', name: 'Cartagena' },
      { '@type': 'City', name: 'Lorca' },
      { '@type': 'State', name: 'Región de Murcia' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Email Marketing',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diseño de Newsletters',
            description: 'Diseño y maquetación de emails profesionales responsive',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automatizaciones de Email',
            description: 'Secuencias automáticas de emails según comportamiento',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Segmentación de Listas',
            description: 'Segmentación avanzada para mensajes personalizados',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Copywriting para Email',
            description: 'Redacción de asuntos y contenidos que convierten',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
  }

  return (
    <StandardLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Qué incluye el servicio" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Tienes una lista de emails sin explotar?"
        subtitle="Auditoría gratuita de tu estrategia de email marketing"
      />
    </StandardLayout>
  )
}
