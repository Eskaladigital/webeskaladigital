import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Branding y Diseño de Marca en Murcia | Logo e Identidad Visual | ESKALA',
  description: 'Agencia de branding en Murcia. Diseño de marca, logotipo, identidad visual y manual de estilo profesional. Creamos marcas memorables que conectan con tu audiencia. Trabajamos con empresas de Murcia, Cartagena y toda la Región. Rebranding y creación de marca desde cero. Portfolio real.',
  keywords: [
    'branding murcia',
    'diseño de marca murcia',
    'logotipo murcia',
    'identidad visual murcia',
    'diseño logo murcia',
    'agencia branding murcia',
    'crear marca murcia',
    'manual de marca murcia',
    'identidad corporativa murcia',
    'rebranding murcia',
  ],
  openGraph: {
    title: 'Branding y Diseño de Marca en Murcia | ESKALA',
    description: 'Diseño de marca, logotipo e identidad visual profesional. Marcas que conectan y perduran.',
    url: 'https://www.eskaladigital.com/servicios/branding',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [{ 
      url: '/eskala_digital_opengraph.png', 
      width: 1200, 
      height: 630, 
      alt: 'Branding y Diseño de Marca en Murcia - ESKALA' 
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding y Diseño de Marca en Murcia | ESKALA',
    description: 'Diseño de marca e identidad visual profesional para empresas.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: { 
    canonical: 'https://www.eskaladigital.com/servicios/branding' 
  },
}

const heroData = {
  badge: '✏️ Branding en Murcia',
  title: 'Diseño de Marca e Identidad Visual',
  titleHighlight: 'que Deja Huella',
  description: 'Agencia de branding en Murcia especializada en crear identidades visuales memorables. Tu marca es mucho más que un logotipo: es la promesa que haces a tus clientes, la emoción que generas, el valor que transmites. Creamos marcas que conectan emocionalmente con tu audiencia. Trabajamos con empresas de Murcia, Cartagena, Lorca y toda la Región de Murcia. Diseño de logotipo, paleta de colores, tipografías, manual de marca y aplicaciones. Desde naming y estrategia de marca hasta implementación completa. Rebranding y creación de marca desde cero.',
  stripeColor: 7,
  jsonLdName: 'Branding',
  jsonLdSlug: 'branding',
}

const features = [
  {
    icon: '🎯',
    title: 'Estrategia de Marca (Brand Strategy)',
    description: 'Antes del diseño viene la estrategia. Definimos posicionamiento de marca: ¿quién eres? ¿qué te hace diferente? Propuesta de valor única (UVP). Personalidad de marca: ¿formal o cercana? ¿innovadora o tradicional? Tono de voz. Arquetipos de marca. Análisis de competencia en Murcia. Público objetivo (buyer persona). La estrategia guía todo el diseño visual. Sin estrategia, un logo es solo un dibujo bonito.',
  },
  {
    icon: '✨',
    title: 'Diseño de Logotipo Profesional',
    description: 'Creación de logotipo único, memorable y escalable. Investigación de referentes y competencia. Bocetos y conceptualización. Presentación de 3 propuestas diferentes. Iteraciones hasta perfección. Entregamos logotipo en versiones: color, blanco y negro, monocromo. Variantes: horizontal, vertical, isotipo (símbolo), imagotipo (texto+símbolo). Formatos vectoriales (AI, EPS, SVG) y raster (PNG, JPG). Tu logo funciona en cualquier tamaño: desde favicon hasta valla publicitaria.',
  },
  {
    icon: '🎨',
    title: 'Identidad Visual Completa',
    description: 'Sistema visual coherente más allá del logo. Paleta de colores corporativos (primarios, secundarios, neutros) con códigos RGB, CMYK, HEX, Pantone. Tipografías corporativas (principal y secundaria) con licencias incluidas. Iconografía y elementos gráficos (tramas, texturas, patrones). Estilo fotográfico. Tratamiento de imágenes. Todo documentado para uso consistente. Tu marca reconocible en cualquier aplicación.',
  },
  {
    icon: '📖',
    title: 'Manual de Marca (Brand Guidelines)',
    description: 'Documento PDF completo con todas las normas de uso de tu marca: construcción del logotipo, espacio de respiro, tamaños mínimos, versiones correctas e incorrectas, colores corporativos, tipografías, aplicaciones en fondos claros/oscuros, ejemplos de papelería, ejemplos digitales. El manual asegura que tu marca se use siempre correctamente, incluso por diseñadores externos. Inversión en coherencia visual. Documento profesional de 20-40 páginas.',
  },
  {
    icon: '📄',
    title: 'Papelería y Material Corporativo',
    description: 'Diseño de papelería corporativa aplicando tu nueva identidad: tarjetas de visita (business cards), papel carta con membrete (letterhead), sobres corporativos, carpetas presentación, firmas de email HTML, plantillas PowerPoint/Keynote, plantillas Word/Google Docs. Archivos listos para imprenta con marcas de corte y sangrado. También diseño de merchandising si necesitas: bolígrafos, carpetas, USB, bolsas.',
  },
  {
    icon: '📱',
    title: 'Branding Digital y Redes Sociales',
    description: 'Adaptación de la marca para ecosistema digital: diseño de favicon, app icon, perfil y portada para redes sociales (Instagram, Facebook, LinkedIn), plantillas para posts de Instagram/Facebook, stories templates, formato feed coherente. Tu marca optimizada para web y mobile. En 2026, tu presencia digital es tan importante como la física. Consistencia online es clave para reconocimiento de marca.',
  },
]

const benefits = [
  {
    title: 'Reconocimiento Inmediato',
    description: 'Una marca visual consistente se reconoce al instante, incluso sin leer el nombre. Piensa en Apple, Nike, Coca-Cola. Cada punto de contacto con tu marca (web, tarjeta, coche, uniforme, redes) refuerza tu presencia en la mente del cliente. El 80% de consumidores recuerda una marca por sus colores. La coherencia visual multiplica el reconocimiento hasta un 80%. Tu marca omnipresente y memorable.',
  },
  {
    title: 'Confianza y Profesionalidad',
    description: 'Las marcas profesionales transmiten solidez y seriedad. Los clientes confían más en empresas con imagen visual cuidada. Un logo mal diseñado hace dudar de tu profesionalidad. Estudios muestran que el 75% de consumidores juzga credibilidad por diseño. Primera impresión cuenta: tienes 7 segundos. Una marca profesional dice "somos serios, llevamos tiempo, sabemos lo que hacemos". Especialmente importante en Murcia para diferenciarte de competidores locales.',
  },
  {
    title: 'Mayor Valor Percibido (Premium Pricing)',
    description: 'Una marca bien diseñada permite cobrar más por el mismo producto/servicio. Los clientes asocian calidad visual con calidad real. Coca-Cola vs marca blanca: mismo producto, precio diferente. Apple cobra premium por diseño. Marcas fuertes justifican precios superiores. El branding no es gasto: es inversión que se recupera vía pricing y lealtad. Empresas con branding consistente crecen 23% más que competencia (Lucidpress 2024).',
  },
]

const process = [
  { 
    step: '01', 
    title: 'Descubrimiento y Research', 
    description: 'Workshop inicial para entender tu negocio: historia, valores, misión, visión, diferenciadores. Cuestionario detallado de marca. Análisis de competencia en Murcia: qué marcas funcionan, cuáles no, por qué. Estudio de tu audiencia objetivo: demografía, psicografía, preferencias. Referencias visuales (mood board). Identificamos oportunidades para destacar en tu sector.' 
  },
  { 
    step: '02', 
    title: 'Estrategia y Conceptualización', 
    description: 'Definimos estrategia de marca: posicionamiento, propuesta de valor, personalidad, tono de voz, arquetipos. Conceptualización: buscamos conceptos visuales que representen tu esencia. Bocetos iniciales exploratorios. Paleta de colores preliminar basada en psicología del color y sector. Selección tipográfica. Definimos dirección creativa antes de diseñar.' 
  },
  { 
    step: '03', 
    title: 'Diseño y Desarrollo Visual', 
    description: 'Diseño de logotipo: 3 propuestas conceptualmente diferentes. Presentación con mockups realistas. Feedback y selección. Refinamiento de propuesta elegida: iteraciones hasta perfección. Desarrollo de identidad visual completa: paleta, tipografías, iconografía, aplicaciones. Diseño de papelería y material digital. Creación del manual de marca. Todo en herramientas profesionales: Adobe Illustrator, Photoshop, InDesign.' 
  },
  { 
    step: '04', 
    title: 'Entrega e Implementación', 
    description: 'Entrega de todos los archivos: logo en formatos vectoriales (AI, EPS, SVG) y raster (PNG transparente, JPG), manual de marca PDF interactivo, papelería diseñada lista para imprenta, plantillas digitales editables. Sesión de formación sobre uso correcto de marca. Recomendaciones de imprentas en Murcia. Soporte post-entrega para dudas. Tu marca lista para conquistar el mercado.' 
  },
]

const testimonial = {
  quote: 'Teníamos un logo hecho en Paint hace 15 años. ESKALA nos creó una identidad de marca completa profesional que nos hace sentir orgullosos de representar. Clientes nos dicen que ahora nos ven más serios. Hasta nuestros empleados están más motivados con la nueva imagen.',
  author: 'Javier Hernández',
  position: 'Fundador',
  company: 'Construcciones Hernández',
}

export default function BrandingPage() {
  // Schema Service para SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Brand Design',
    name: 'Branding y Diseño de Marca en Murcia',
    description: 'Servicio de diseño de marca, logotipo e identidad visual para empresas. Creación de marcas memorables con estrategia, diseño y manual de marca.',
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
      name: 'Servicios de Branding',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diseño de Logotipo',
            description: 'Creación de logotipo profesional y memorable',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Identidad Visual',
            description: 'Sistema visual completo: colores, tipografías, elementos gráficos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manual de Marca',
            description: 'Brand guidelines con normas de uso de marca',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Papelería Corporativa',
            description: 'Diseño de tarjetas, papel carta y material corporativo',
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
      <ServiceFeatures features={features} title="Qué incluye el branding" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Tu marca necesita una renovación?"
        subtitle="Hablemos de cómo hacer que tu marca destaque"
      />
    </StandardLayout>
  )
}
