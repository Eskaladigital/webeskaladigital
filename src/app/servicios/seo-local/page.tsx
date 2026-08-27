import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'SEO Local en Murcia | Posicionamiento Web Google Maps | ESKALA',
  description: 'Expertos en SEO local en Murcia. Aparece en Google Maps y búsquedas locales cuando tus clientes te buscan. Optimizamos Google My Business, keywords locales y contenido. Trabajamos con empresas de Murcia, Cartagena, Lorca y toda la Región. Más visibilidad local = más clientes. Auditoría SEO gratuita.',
  keywords: [
    'seo local murcia',
    'seo murcia',
    'posicionamiento web murcia',
    'posicionamiento google murcia',
    'google my business murcia',
    'aparecer en google murcia',
    'posicionamiento local murcia',
    'consultoria seo murcia',
    'expertos seo murcia',
    'agencia seo murcia',
    'seo cartagena',
    'posicionamiento web cartagena',
    'google maps murcia',
  ],
  openGraph: {
    title: 'SEO Local en Murcia | Posicionamiento Web Local | ESKALA',
    description: 'Agencia especializada en SEO local en Murcia. Aparecer primero en Google Maps cuando tus clientes buscan tus servicios.',
    url: 'https://www.eskaladigital.com/servicios/seo-local',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [{ 
      url: '/eskala_digital_opengraph.png', 
      width: 1200, 
      height: 630, 
      alt: 'SEO Local en Murcia - ESKALA' 
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Local en Murcia | ESKALA Marketing Digital',
    description: 'Aparece en Google Maps cuando tus clientes te buscan en Murcia.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: { 
    canonical: 'https://www.eskaladigital.com/servicios/seo-local' 
  },
}

const heroData = {
  badge: '📈 SEO Local en Murcia',
  title: 'Posicionamiento SEO Local',
  titleHighlight: 'para Negocios en Murcia',
  description: 'Somos especialistas en SEO local en Murcia. El 46% de las búsquedas en Google tienen intención local. Si no apareces en Google Maps cuando buscan "tu servicio + Murcia", estás perdiendo clientes cada día. Optimizamos tu Google My Business, posicionamos tu web para búsquedas locales y te ayudamos a dominar tu zona: Murcia capital, Cartagena, Lorca, Molina de Segura y toda la Región. Más visibilidad local = más llamadas, más visitas, más ventas.',
  stripeColor: 2,
  jsonLdName: 'SEO local',
  jsonLdSlug: 'seo-local',
}

const features = [
  {
    icon: '📍',
    title: 'Optimización Google My Business',
    description: 'Optimizamos tu ficha de Google My Business (perfil de empresa) para aparecer en Google Maps y en el pack local de búsquedas. Completamos todos los datos, añadimos fotos profesionales, categorías correctas, horarios, servicios y zonas de cobertura. El 76% de las personas que buscan un negocio local en su móvil lo visitan en menos de 24 horas.',
  },
  {
    icon: '🎯',
    title: 'Estudio de Keywords Locales',
    description: 'Identificamos las palabras clave exactas que usan tus clientes potenciales cuando buscan servicios como el tuyo en Murcia. Por ejemplo: "abogado Murcia", "dentista cerca de mí", "fontanero urgente Cartagena". Analizamos volumen de búsqueda, competencia y oportunidades específicas de tu sector en la Región de Murcia.',
  },
  {
    icon: '📝',
    title: 'Contenido SEO Localizado',
    description: 'Creamos contenido optimizado para tu zona geográfica: páginas específicas por barrios de Murcia (El Carmen, La Flota, Zarandona), ciudades cercanas (Cartagena, Lorca, Molina) y servicios locales. Artículos de blog con keywords locales que atraen tráfico cualificado de Google.',
  },
  {
    icon: '⭐',
    title: 'Gestión de Reseñas Google',
    description: 'Las reseñas son clave para el SEO local. El 88% de consumidores confía tanto en las reseñas online como en recomendaciones personales. Te enseñamos cómo conseguir más reseñas positivas, respondemos profesionalmente a todas las opiniones y gestionamos tu reputación online en Google.',
  },
  {
    icon: '🔗',
    title: 'Citaciones y Directorios Locales',
    description: 'Damos de alta tu negocio en directorios locales relevantes: Páginas Amarillas, TripAdvisor, Yelp, Facebook, Apple Maps y directorios específicos de tu sector. Estas "citaciones" (menciones de tu NAP: nombre, dirección, teléfono) mejoran tu autoridad local y posicionamiento en Google.',
  },
  {
    icon: '📊',
    title: 'Informes y Analítica Mensual',
    description: 'Seguimiento mensual de posiciones en Google, visitas a tu web desde búsquedas locales, llamadas telefónicas, solicitudes de ruta en Google Maps, acciones en tu perfil y conversiones. Dashboard personalizado con métricas claras. Sabrás exactamente qué retorno obtienes de tu inversión en SEO local.',
  },
]

const benefits = [
  {
    title: 'Clientes que buscan tu servicio HOY',
    description: 'El SEO local atrae personas con intención de compra alta que buscan activamente tu servicio en este momento. No es publicidad invasiva que interrumpe, sino responder a demanda real. Cuando alguien busca "abogado divorcios Murcia" o "restaurante italiano cerca de mí", está listo para contratar o comprar. El 78% de búsquedas locales en móvil resultan en compra offline en 24 horas.',
  },
  {
    title: 'Ventaja Competitiva en tu Zona',
    description: 'La mayoría de negocios locales en Murcia no invierten en SEO local o lo hacen mal. Muchos ni siquiera tienen su Google My Business optimizado. Esta es tu oportunidad de adelantarte a tu competencia y capturar el mercado antes que ellos. Ser el primero en aparecer en Google Maps marca la diferencia entre conseguir el cliente o que lo haga tu competidor.',
  },
  {
    title: 'ROI Medible y Predecible',
    description: 'A diferencia de otras estrategias de marketing, el SEO local es totalmente medible. Cada llamada, cada solicitud de ruta en Google Maps, cada visita a la web desde búsquedas locales es rastreable. Sabes exactamente cuántos clientes te trae Google cada mes. Inversión con retorno claro y predecible. El SEO local tiene uno de los ROIs más altos del marketing digital.',
  },
]

const process = [
  { 
    step: '01', 
    title: 'Auditoría SEO Local', 
    description: 'Analizamos tu visibilidad actual en Google, posiciones para keywords locales clave, estado de tu Google My Business, competencia directa en Murcia y oportunidades de mejora. Auditoría técnica de tu web y análisis de citaciones existentes.' 
  },
  { 
    step: '02', 
    title: 'Optimización Completa', 
    description: 'Configuramos y optimizamos tu Google My Business con fotos profesionales, descripción optimizada, categorías, servicios, zonas de cobertura y posts regulares. Optimización on-page de tu web con keywords locales: títulos, descripciones, contenido, schema markup LocalBusiness.' 
  },
  { 
    step: '03', 
    title: 'Estrategia de Posicionamiento', 
    description: 'Trabajamos keywords locales mes a mes, creamos contenido SEO localizado (artículos de blog sobre Murcia, páginas por zonas), construimos citaciones en directorios relevantes y gestionamos estrategia de reseñas. Link building local con sitios murcianos.' 
  },
  { 
    step: '04', 
    title: 'Seguimiento y Crecimiento', 
    description: 'Reportes mensuales detallados con posiciones en Google, tráfico desde búsquedas locales, llamadas, rutas solicitadas y conversiones. Ajustes continuos basados en datos para seguir mejorando resultados. El SEO es un trabajo continuo que da frutos a medio-largo plazo.' 
  },
]

const testimonial = {
  quote: 'Antes no aparecíamos en Google Maps. Ahora somos el primer resultado cuando buscan "clínica dental Murcia". Las primeras visitas desde Google empezaron a las 2 semanas.',
  author: 'Dr. Antonio García',
  position: 'Director',
  company: 'Clínica Dental García',
}

export default function SeoLocalPage() {
  // Schema Service para SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'SEO Local',
    name: 'SEO Local y Posicionamiento Web en Murcia',
    description: 'Servicio de SEO local en Murcia. Posicionamiento en Google Maps y búsquedas locales. Optimización de Google My Business, keywords locales y contenido SEO para negocios murcianos.',
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
        '@type': 'City',
        name: 'Molina de Segura',
      },
      {
        '@type': 'State',
        name: 'Región de Murcia',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de SEO Local',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Optimización Google My Business',
            description: 'Optimización completa de perfil de Google My Business para aparecer en Google Maps',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Posicionamiento Local',
            description: 'Posicionamiento web para keywords locales y búsquedas geográficas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Contenido SEO Localizado',
            description: 'Creación de contenido optimizado para búsquedas locales',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestión de Reseñas Google',
            description: 'Estrategia para conseguir y gestionar reseñas en Google',
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
      <ServiceFeatures features={features} title="Qué incluye el SEO Local" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Quieres aparecer en Google?"
        subtitle="Auditoría SEO gratuita. Te decimos exactamente qué mejorar."
      />
    </StandardLayout>
  )
}

