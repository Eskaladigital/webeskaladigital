import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Diseño Web en Murcia | Páginas Web Profesionales | ESKALA',
  description: 'Agencia de diseño web en Murcia. Creamos páginas web profesionales, modernas y optimizadas para SEO. Diseño responsive, rápido y que convierte. Trabajamos con empresas de Murcia, Cartagena, Lorca y toda la Región. Presupuesto sin compromiso.',
  keywords: [
    'diseño web murcia',
    'páginas web murcia',
    'desarrollo web murcia',
    'crear web murcia',
    'diseñador web murcia',
    'agencia web murcia',
    'diseño web profesional murcia',
    'desarrollo web profesional murcia',
    'páginas web cartagena',
    'diseño web lorca',
    'crear página web murcia',
    'empresa diseño web murcia',
  ],
  openGraph: {
    title: 'Diseño Web en Murcia | Páginas Web Profesionales | ESKALA',
    description: 'Agencia de diseño web en Murcia. Páginas web modernas, rápidas y que convierten visitantes en clientes.',
    url: 'https://www.eskaladigital.com/servicios/diseno-web',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [{ 
      url: '/eskala_digital_opengraph.png', 
      width: 1200, 
      height: 630, 
      alt: 'Diseño Web Profesional en Murcia - ESKALA' 
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web en Murcia | ESKALA Marketing Digital',
    description: 'Páginas web modernas, rápidas y que convierten. Diseño web profesional en Murcia.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: { 
    canonical: 'https://www.eskaladigital.com/servicios/diseno-web' 
  },
}

const heroData = {
  badge: '🌐 Diseño Web en Murcia',
  title: 'Diseño de Páginas Web Profesionales',
  titleHighlight: 'en Murcia que Convierten',
  description: 'Somos una agencia de diseño web en Murcia especializada en crear páginas web modernas, rápidas y optimizadas para SEO. Trabajamos con empresas de Murcia, Cartagena, Lorca y toda la Región de Murcia. Tu web es tu mejor comercial, disponible 24/7. Diseño responsive, velocidad de carga optimizada y estrategia de conversión incluida.',
  stripeColor: 1,
  jsonLdName: 'Diseño web',
  jsonLdSlug: 'diseno-web',
}

const features = [
  {
    icon: '🎨',
    title: 'Diseño Web Personalizado',
    description: 'Cada página web que creamos es única. Diseñamos a medida según tu marca, sector y objetivos de negocio. No usamos plantillas genéricas. Tu web reflejará la identidad de tu empresa murciana.',
  },
  {
    icon: '📱',
    title: '100% Responsive y Móvil',
    description: 'Tu página web se verá perfecta en móviles, tablets y ordenadores. Más del 60% del tráfico web en Murcia es móvil. Un diseño responsive es imprescindible para captar clientes.',
  },
  {
    icon: '⚡',
    title: 'Velocidad Optimizada',
    description: 'Desarrollamos páginas web ultra-rápidas que cargan en menos de 3 segundos. La velocidad mejora la experiencia de usuario y el posicionamiento SEO en Google. Tecnología moderna y optimización de imágenes.',
  },
  {
    icon: '🔒',
    title: 'Seguridad SSL Incluida',
    description: 'Certificado SSL incluido en todos nuestros proyectos. Tu web segura con HTTPS, imprescindible para Google y para transmitir confianza a tus clientes. Protección contra ataques y malware.',
  },
  {
    icon: '📊',
    title: 'Panel de Control Intuitivo',
    description: 'Gestiona tu contenido fácilmente sin necesidad de programador. Te formamos para que seas autónomo con tu web. Añade textos, imágenes y productos cuando quieras.',
  },
  {
    icon: '🔍',
    title: 'SEO Local Incluido',
    description: 'Optimización SEO básica incluida en todas las páginas web. Tu web preparada para posicionar en Google desde el día 1. Configuramos Google My Business y te ayudamos a aparecer en búsquedas locales de Murcia.',
  },
]

const benefits = [
  {
    title: 'Más Credibilidad para tu Negocio',
    description: 'Una página web profesional transmite confianza y seriedad. El 75% de usuarios juzga la credibilidad de una empresa por su diseño web. En Murcia, destacar frente a tu competencia es fundamental. Una web bien diseñada te posiciona como líder en tu sector.',
  },
  {
    title: 'Disponible 24 horas, 7 días',
    description: 'Tu negocio nunca cierra. Con una página web, tus clientes pueden informarse, contactarte o comprar a cualquier hora del día. Mientras duermes, tu web trabaja para ti captando clientes en Murcia y toda España.',
  },
  {
    title: 'Más Conversiones y Ventas',
    description: 'No solo diseñamos webs bonitas, diseñamos webs que venden. Aplicamos estrategia de conversión: CTAs claros, formularios optimizados, experiencia de usuario cuidada al detalle. Cada elemento está pensado para convertir visitantes en clientes.',
  },
]

const process = [
  { 
    step: '01', 
    title: 'Briefing y Análisis', 
    description: 'Entendemos tu negocio, analizamos tu competencia en Murcia, definimos objetivos claros y estudiamos a tu público objetivo. Reunión inicial presencial o videollamada.' 
  },
  { 
    step: '02', 
    title: 'Diseño Visual', 
    description: 'Creamos el diseño visual de tu página web. Colores, tipografías, imágenes y estructura. Revisamos contigo cada detalle hasta que esté perfecto. Diseño 100% personalizado.' 
  },
  { 
    step: '03', 
    title: 'Desarrollo y Programación', 
    description: 'Programamos tu web con las últimas tecnologías (React, Next.js) y mejores prácticas de desarrollo. Responsive, rápida, segura y optimizada para SEO. Pruebas exhaustivas en todos los dispositivos.' 
  },
  { 
    step: '04', 
    title: 'Lanzamiento y Formación', 
    description: 'Publicamos tu web, configuramos Google Analytics, Search Console y te formamos en el uso del panel de control. Soporte técnico y mantenimiento disponible. Tu web lista para captar clientes.' 
  },
]

const testimonial = {
  quote: 'Nuestra web anterior era un desastre. ESCALA nos creó una web moderna que refleja realmente quiénes somos. Las reservas online se han triplicado.',
  author: 'Laura Martínez',
  position: 'Gerente',
  company: 'Restaurante La Huerta',
}

export default function DisenoWebPage() {
  // Schema Service para SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Diseño Web',
    name: 'Diseño de Páginas Web Profesionales en Murcia',
    description: 'Servicio de diseño y desarrollo de páginas web profesionales en Murcia. Creamos sitios web modernos, responsive, rápidos y optimizados para SEO. Especializados en webs para empresas locales.',
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
      name: 'Servicios de Diseño Web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Diseño Web Personalizado',
            description: 'Diseño de páginas web a medida para empresas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desarrollo Web Responsive',
            description: 'Desarrollo de webs optimizadas para móviles y tablets',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Optimización SEO',
            description: 'Optimización de páginas web para posicionamiento en Google',
          },
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
      },
    },
  }

  return (
    <StandardLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Qué incluye tu web" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Necesitas una web profesional?"
        subtitle="Cuéntanos tu proyecto y te enviamos presupuesto en 24h"
      />
    </StandardLayout>
  )
}

