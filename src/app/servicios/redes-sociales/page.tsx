import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Gestión de Redes Sociales en Murcia | Community Manager | ESKALA',
  description: 'Community Manager profesional en Murcia. Gestión de Instagram, Facebook, LinkedIn, TikTok. Creamos contenido que engancha, gestionamos tu comunidad y convertimos seguidores en clientes. Trabajamos con empresas de Murcia, Cartagena y toda la Región. Estrategia, diseño, copywriting y análisis de métricas. Presupuesto personalizado.',
  keywords: [
    'community manager murcia',
    'redes sociales murcia',
    'gestión redes sociales murcia',
    'social media murcia',
    'instagram murcia',
    'facebook murcia',
    'community manager cartagena',
    'gestión instagram murcia',
    'agencia redes sociales murcia',
    'contenido redes sociales murcia',
    'marketing redes sociales murcia',
    'community manager profesional murcia',
  ],
  openGraph: {
    title: 'Gestión de Redes Sociales en Murcia | Community Manager | ESKALA',
    description: 'Community Manager profesional en Murcia. Gestión de Instagram, Facebook, LinkedIn y TikTok para empresas.',
    url: 'https://www.eskaladigital.com/servicios/redes-sociales',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [{ 
      url: '/eskala_digital_opengraph.png', 
      width: 1200, 
      height: 630, 
      alt: 'Gestión de Redes Sociales en Murcia - ESKALA' 
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestión de Redes Sociales en Murcia | ESKALA',
    description: 'Community Manager profesional. Contenido que engancha y convierte.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: { 
    canonical: 'https://www.eskaladigital.com/servicios/redes-sociales' 
  },
}

const heroData = {
  badge: '📱 Community Manager en Murcia',
  title: 'Gestión Profesional de Redes Sociales',
  titleHighlight: 'para Empresas en Murcia',
  description: 'Somos tu Community Manager en Murcia. Gestionamos tus redes sociales (Instagram, Facebook, LinkedIn, TikTok) de forma profesional. Las redes sociales son el escaparate digital de tu marca. Creamos contenido que engancha a tu audiencia, construimos comunidad y convertimos seguidores en clientes. Trabajamos con empresas de Murcia, Cartagena, Lorca y toda la Región de Murcia. Estrategia, diseño, copywriting, gestión de comunidad y análisis de métricas. Tu marca siempre activa y profesional en redes.',
  stripeColor: 3,
  jsonLdName: 'Redes sociales',
  jsonLdSlug: 'redes-sociales',
}

const features = [
  {
    icon: '📅',
    title: 'Estrategia y Calendario Editorial',
    description: 'Planificación mensual de contenidos alineada con tus objetivos de negocio, temporadas comerciales y eventos relevantes de tu sector en Murcia. Definimos pilares de contenido, frecuencia de publicación y tono de comunicación. Calendario editorial aprobado por ti cada mes. No improvisamos: cada post tiene un propósito estratégico.',
  },
  {
    icon: '🎨',
    title: 'Diseño Profesional de Contenido',
    description: 'Posts, stories, reels, carruseles y vídeos con diseño profesional y coherente con tu identidad de marca. Utilizamos Canva, Adobe Suite y herramientas de diseño avanzadas. Tu feed de Instagram impecable y reconocible. Formatos adaptados a cada red social: Instagram, Facebook, LinkedIn, TikTok. Contenido visual que destaca en el scroll infinito.',
  },
  {
    icon: '✍️',
    title: 'Copywriting que Convierte',
    description: 'Textos que conectan emocionalmente con tu audiencia murciana. Tono de voz definido según tu marca (formal, cercano, divertido). Llamadas a la acción (CTAs) efectivas que generan interacción. Hashtags estratégicos para aumentar alcance. Storytelling que humaniza tu negocio. Cada palabra cuenta para captar atención y generar engagement.',
  },
  {
    icon: '💬',
    title: 'Gestión de Comunidad (Community Management)',
    description: 'Respondemos comentarios y mensajes directos en tu nombre de forma profesional y cercana. Atención a clientes por redes sociales. Gestión de crisis y comentarios negativos. Moderación de spam. Tu comunidad siempre atendida. En 2026, las redes sociales son el primer canal de contacto: el 67% de clientes prefiere Instagram o WhatsApp antes que email.',
  },
  {
    icon: '📊',
    title: 'Análisis y Reporting Mensual',
    description: 'Seguimiento de métricas clave: alcance, impresiones, engagement rate, crecimiento de seguidores, clics al perfil, visitas a la web desde redes y conversiones. Utilizamos Meta Business Suite, Instagram Insights y herramientas profesionales. Informes mensuales con gráficas claras y recomendaciones de mejora. Decisiones basadas en datos, no en intuición.',
  },
  {
    icon: '📣',
    title: 'Campañas de Social Ads',
    description: 'Publicidad en Instagram Ads, Facebook Ads, LinkedIn Ads y TikTok Ads para amplificar tu alcance orgánico. Campañas para conseguir seguidores cualificados, tráfico a tu web, generación de leads o ventas directas. Segmentación precisa por ubicación (Murcia, Cartagena), edad, intereses y comportamientos. Gestión del presupuesto publicitario optimizada para máximo ROI.',
  },
]

const benefits = [
  {
    title: 'Presencia Profesional y Constante',
    description: 'Una marca activa y coherente en redes sociales transmite profesionalidad y seriedad. Tus competidores en Murcia ya están en redes: si tú no estás, pierdes oportunidades cada día. El 90% de consumidores visita el Instagram o Facebook de una empresa antes de comprar o contratar. Una presencia descuidada daña tu reputación. Nosotros mantenemos tus redes impecables.',
  },
  {
    title: 'Cercanía y Humanización de Marca',
    description: 'Las redes sociales son el canal de comunicación directo con tu audiencia. No hay intermediarios. Humaniza tu marca mostrando tu equipo, tu día a día y tus valores. Crea relaciones duraderas con tus clientes. El 71% de consumidores que tiene una experiencia positiva con una marca en redes sociales la recomendará a familiares y amigos. Las redes construyen comunidad y lealtad.',
  },
  {
    title: 'Tráfico Web y Generación de Ventas',
    description: 'Redes sociales bien gestionadas no son solo "likes": generan visitas cualificadas a tu web, consultas por WhatsApp, llamadas telefónicas y ventas directas por Instagram Shopping o mensajes. Son un canal de adquisición de clientes real. El Social Commerce (compra a través de redes) está creciendo exponencialmente. Tu competencia ya vende por Instagram: ¿y tú?',
  },
]

const process = [
  { 
    step: '01', 
    title: 'Auditoría de Redes Sociales', 
    description: 'Analizamos tus perfiles actuales (Instagram, Facebook, LinkedIn), contenido previo, engagement, audiencia demográfica, competencia directa en Murcia y oportunidades de mejora. Identificamos qué funciona y qué no. Estudio de tu sector y benchmarking.' 
  },
  { 
    step: '02', 
    title: 'Estrategia de Contenido', 
    description: 'Definimos tono de voz de tu marca (formal/informal, serio/divertido), pilares de contenido (4-5 temas principales), frecuencia de publicación (diaria, 3x semana, etc), objetivos medibles (seguidores, engagement, conversiones) y calendario editorial mensual. Estrategia personalizada según tu negocio.' 
  },
  { 
    step: '03', 
    title: 'Creación y Publicación', 
    description: 'Diseñamos posts, stories, reels y carruseles con herramientas profesionales. Redactamos copys persuasivos con CTAs y hashtags. Programamos publicaciones en horarios óptimos para tu audiencia en Murcia. Publicación constante y de calidad. Tu marca siempre presente.' 
  },
  { 
    step: '04', 
    title: 'Análisis y Optimización Continua', 
    description: 'Analizamos resultados mensualmente: qué contenido funcionó mejor, qué horarios tienen más engagement, qué formatos prefiere tu audiencia. Ajustamos la estrategia según datos reales. Testing A/B de copys y diseños. Mejora continua basada en métricas. Las redes sociales son dinámicas: nos adaptamos constantemente.' 
  },
]

const testimonial = {
  quote: 'Pasamos de 500 a 8.000 seguidores en Instagram en 6 meses. Pero lo importante es que ahora recibimos 3-4 consultas diarias desde redes. ESCALA transformó nuestra presencia digital.',
  author: 'María López',
  position: 'CEO',
  company: 'Boutique Mía',
}

export default function RedesSocialesPage() {
  // Schema Service para SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Social Media Management',
    name: 'Gestión de Redes Sociales y Community Manager en Murcia',
    description: 'Servicio profesional de gestión de redes sociales en Murcia. Community Manager para Instagram, Facebook, LinkedIn y TikTok. Creación de contenido, gestión de comunidad y estrategia de social media para empresas.',
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
      {
        '@type': 'City',
        name: 'Murcia',
      },
      {
        '@type': 'City',
        name: 'Cartagena',
      },
      {
        '@type': 'City',
        name: 'Lorca',
      },
      {
        '@type': 'State',
        name: 'Región de Murcia',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Community Manager',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestión de Instagram',
            description: 'Creación de contenido y gestión de Instagram para empresas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestión de Facebook',
            description: 'Community management y contenido para Facebook',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Estrategia de Redes Sociales',
            description: 'Planificación estratégica de contenido para redes sociales',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Ads',
            description: 'Campañas de publicidad en Instagram y Facebook Ads',
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
      <ServiceFeatures features={features} title="Qué incluye la gestión" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Listo para brillar en redes?"
        subtitle="Cuéntanos tu marca y te proponemos una estrategia"
      />
    </StandardLayout>
  )
}

