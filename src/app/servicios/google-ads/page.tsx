import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Agencia Google Ads en Murcia',
  description:
    'Agencia Google Ads en Murcia. Campañas SEM de búsqueda, display, shopping y YouTube. Presupuesto controlado, medición clara, auditoría gratuita.',
  keywords: [
    'agencia google ads murcia',
    'google ads murcia',
    'sem murcia',
    'adwords murcia',
    'campañas google murcia',
    'gestión google ads murcia',
  ],
  openGraph: {
    title: 'Agencia Google Ads en Murcia | ESKALA',
    description: 'Campañas SEM desde Murcia: búsqueda, display, shopping y YouTube. Auditoría gratuita.',
    url: 'https://www.eskaladigital.com/servicios/google-ads',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [{ 
      url: '/eskala_digital_opengraph.png', 
      width: 1200, 
      height: 630, 
      alt: 'Google Ads en Murcia - ESKALA' 
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agencia Google Ads en Murcia | ESKALA',
    description: 'Campañas SEM desde Murcia. Más clics, más conversiones, mejor ROI.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: { 
    canonical: 'https://www.eskaladigital.com/servicios/google-ads' 
  },
}

const heroData = {
  badge: 'Google Ads en Murcia',
  title: 'Agencia Google Ads',
  titleHighlight: 'en Murcia',
  description:
    'Gestionamos campañas SEM de búsqueda, display, shopping y YouTube para negocios de Murcia. Presupuesto que controlas, conversiones que se miden. Sin permanencia. Auditoría gratuita de la cuenta.',
  stripeColor: 4,
  jsonLdName: 'Google Ads',
  jsonLdSlug: 'google-ads',
}

const features = [
  {
    icon: '🔍',
    title: 'Campañas de Búsqueda (Search)',
    description: 'Anuncios de texto en los resultados de búsqueda de Google. Tu negocio aparece cuando alguien busca exactamente lo que ofreces: "abogado Murcia", "fontanero urgente", "clínica dental Cartagena". Solo pagas por clic (PPC). Selección estratégica de keywords con intención de compra alta. Extensiones de anuncio para mayor visibilidad: llamadas, ubicación, enlaces adicionales. El 65% de clics con intención de compra van a anuncios, no a resultados orgánicos.',
  },
  {
    icon: '🖼️',
    title: 'Display y Remarketing',
    description: 'Banners visuales en millones de webs de la Red de Display de Google. Ideal para branding y remarketing: recuerda a los visitantes de tu web que vuelvan y completen la compra. El 70% de usuarios que abandonan tu web sin comprar pueden convertirse con remarketing. Segmentación por intereses, demografía y comportamiento. Diseño de banners profesionales en todos los tamaños.',
  },
  {
    icon: '🛒',
    title: 'Google Shopping (E-commerce)',
    description: 'Para tiendas online: tus productos aparecen con foto, precio y valoraciones directamente en Google. Imprescindible si vendes productos. Feed de productos optimizado. Campañas Performance Max para máximo alcance. Sincronización con tu catálogo. El shopping representa el 76% de gasto publicitario retail en Google. Aumenta ventas online significativamente.',
  },
  {
    icon: '📱',
    title: 'YouTube Ads (Vídeo Publicidad)',
    description: 'Anuncios en vídeo en YouTube y Google Video Partners. Alcanza audiencias masivas con contenido audiovisual. Formatos: in-stream (skippable/non-skippable), bumper ads (6 segundos), discovery ads. Segmentación precisa por intereses y demografía. Creación de vídeos publicitarios profesionales. YouTube es el segundo buscador más grande del mundo después de Google.',
  },
  {
    icon: '📈',
    title: 'Optimización y Testing Continuo',
    description: 'Ajustamos pujas, keywords y anuncios diariamente para mejorar rendimiento. Testing A/B de copys y páginas de destino. Negativización de keywords que no convierten (ahorro de presupuesto). Ajuste de pujas por dispositivo, ubicación y horario. Optimización de Quality Score para reducir CPC. Análisis semanal de competencia. Las cuentas bien gestionadas mejoran ROI un 30-50% en 3 meses.',
  },
  {
    icon: '📊',
    title: 'Reporting Transparente y Métricas Reales',
    description: 'Informes mensuales claros con métricas que realmente importan: coste por lead (CPL), coste por adquisición (CPA), tasa de conversión, ROI real, ROAS (retorno de inversión publicitaria). Dashboard personalizado con Google Data Studio. Tracking de conversiones configurado (llamadas, formularios, compras). Acceso total a tu cuenta de Google Ads. Transparencia absoluta: sabes exactamente dónde va cada euro.',
  },
]

const benefits = [
  {
    title: 'Resultados Inmediatos y Medibles',
    description: 'A diferencia del SEO orgánico (que tarda meses), los anuncios de Google Ads aparecen desde el primer día. Tráfico cualificado y leads desde la primera semana. Resultados 100% medibles: sabes exactamente cuánto inviertes y cuánto ganas. El 41% de clics van a los 3 primeros anuncios de Google. Si no estás ahí, tu competencia sí. Google Ads es la forma más rápida de validar demanda y conseguir clientes.',
  },
  {
    title: 'Control Total del Presupuesto Publicitario',
    description: 'Tú decides cuánto invertir diariamente. Puedes pausar, aumentar o reducir el presupuesto en cualquier momento sin penalización ni permanencia. Empezar desde 300€/mes es viable. No hay mínimos. Escalas cuando ves resultados. Control total: sabes el coste de cada clic, cada conversión, cada cliente. A diferencia de medios tradicionales (radio, prensa), en Google Ads pagas solo por resultados (clics).',
  },
  {
    title: 'Audiencia Hiper-Cualificada con Intención de Compra',
    description: 'Solo pagas cuando alguien hace clic en tu anuncio. Y ese clic viene de alguien que buscaba activamente tu servicio en ese momento. Intención de compra alta. No es publicidad invasiva que interrumpe: es responder a demanda real. Segmentación geográfica: muestra anuncios solo en Murcia, Cartagena o el radio que necesites. Segmentación por dispositivo, horario, idioma. Llegas exactamente a quien necesitas.',
  },
]

const process = [
  { 
    step: '01', 
    title: 'Análisis y Estrategia', 
    description: 'Estudiamos tu negocio, sector, competencia en Murcia, público objetivo y presupuesto óptimo. Investigación exhaustiva de keywords con herramientas profesionales (Google Keyword Planner, SEMrush). Definimos objetivos SMART: leads, ventas, llamadas, visitas a web. Análisis de competencia: qué anuncios usan, qué keywords pujan, sus páginas de destino.' 
  },
  { 
    step: '02', 
    title: 'Configuración de Campañas', 
    description: 'Estructuramos campañas por tipo (búsqueda, display, shopping), grupos de anuncios por temas y keywords. Creamos los textos de anuncios con copys persuasivos y CTAs efectivos. Configuración de extensiones (llamada, ubicación, enlaces). Tracking de conversiones (GA4, Tag Manager). Segmentación geográfica en Murcia y el radio que pida el cliente.' 
  },
  { 
    step: '03', 
    title: 'Lanzamiento y Monitorización', 
    description: 'Activamos las campañas con presupuesto inicial conservador. Tracking de conversiones verificado: llamadas telefónicas, formularios, compras online. Monitorización diaria los primeros 7 días para detectar problemas. Ajustes rápidos según primeros datos. Configuración de alertas automáticas. Tu cuenta de Google Ads lista para generar resultados desde día 1.' 
  },
  { 
    step: '04', 
    title: 'Optimización Continua (Mensual)', 
    description: 'Mejoramos el rendimiento constantemente: ajustes de pujas automáticas y manuales, negativización de keywords sin conversión, pausado de anuncios con bajo CTR, testing A/B de copys y landing pages, ajustes de segmentación. Análisis mensual completo: qué funciona, qué no, por qué. Reportes con recomendaciones de mejora. Reunión mensual de seguimiento. Las cuentas bien gestionadas mejoran mes a mes.' 
  },
]

const testimonial = {
  quote: 'Invertíamos 2.000€/mes en Google Ads sin saber si funcionaba. ESCALA reorganizó todo: ahora invertimos lo mismo pero conseguimos el triple de leads cualificados.',
  author: 'Carlos Ruiz',
  position: 'Director Comercial',
  company: 'Reformas Integrales Murcia',
}

export default function GoogleAdsPage() {
  // Schema Service para SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Google Ads Management',
    name: 'Gestión de Google Ads y Campañas SEM en Murcia',
    description: 'Servicio profesional de gestión de Google Ads en Murcia. Campañas SEM de búsqueda, display, shopping y YouTube optimizadas para máximo ROI. Agencia Google Partner certificada.',
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
      name: 'Servicios de Google Ads',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Campañas de Búsqueda Google Ads',
            description: 'Anuncios de texto en resultados de búsqueda de Google',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Display y Remarketing',
            description: 'Banners publicitarios en la Red de Display de Google',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Shopping',
            description: 'Campañas de shopping para e-commerce',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'YouTube Ads',
            description: 'Publicidad en vídeo en YouTube',
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
      <ServiceFeatures features={features} title="Tipos de campañas" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Quieres más clientes desde Google?"
        subtitle="Auditoría gratuita de tu cuenta de Google Ads"
      />
    </StandardLayout>
  )
}

