import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceTestimonial from '@/components/sections/ServicioDetalle/ServiceTestimonial'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'

export const metadata = {
  title: 'Chatbots con IA en Murcia | WhatsApp, Web y Voz | ESKALA',
  description: 'Desarrollo de chatbots inteligentes para empresas en Murcia. Chatbots para WhatsApp Business, web y voz con IA conversacional. Atiende clientes 24/7, automatiza respuestas, agenda citas y aumenta ventas. Trabajamos con empresas de Murcia, Cartagena y toda la Región. Powered by GPT-4. Demo gratuita.',
  keywords: [
    'chatbot ia murcia',
    'chatbot whatsapp murcia',
    'bot conversacional murcia',
    'automatizacion atencion cliente murcia',
    'chatbot para empresas murcia',
    'chatbot murcia',
    'asistente virtual murcia',
    'bot whatsapp business murcia',
    'desarrollo chatbot murcia',
  ],
  openGraph: {
    title: 'Chatbots con IA en Murcia | WhatsApp, Web y Voz | ESKALA',
    description: 'Chatbots inteligentes con IA para WhatsApp, web y voz. Atención al cliente 24/7 automatizada.',
    url: 'https://www.eskaladigital.com/servicios/chatbots',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [{ 
      url: '/eskala_digital_opengraph.png', 
      width: 1200, 
      height: 630, 
      alt: 'Chatbots con IA en Murcia - ESKALA' 
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatbots con IA en Murcia | ESKALA Marketing Digital',
    description: 'Chatbots inteligentes para WhatsApp, web y voz. Atención 24/7 automatizada.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: { 
    canonical: 'https://www.eskaladigital.com/servicios/chatbots' 
  },
}

const heroData = {
  badge: '🤖 Chatbots con IA en Murcia',
  title: 'Atención al Cliente 24/7',
  titleHighlight: 'con Chatbots Inteligentes',
  description: 'Desarrollamos chatbots con inteligencia artificial avanzada para empresas en Murcia. Chatbots para WhatsApp Business, web, Facebook Messenger, Instagram y llamadas de voz. Powered by GPT-4 y Claude. No son bots simples con respuestas prefabricadas: entienden lenguaje natural, contexto y aprenden de cada conversación. Atienden a tus clientes 24/7, responden al instante, reservan citas, califican leads y venden mientras duermes. Trabajamos con clínicas, despachos, tiendas online y empresas de servicios en Murcia, Cartagena y toda la Región. Atención personalizada, siempre disponible.',
  stripeColor: 6,
  jsonLdName: 'Chatbots con IA',
  jsonLdSlug: 'chatbots',
  ctaPrimary: 'Solicitar demo',
  ctaSecondary: 'Ver proyectos',
}

const features = [
  {
    icon: '💬',
    title: 'Chatbot para WhatsApp',
    description: 'Bot inteligente para WhatsApp Business. Responde preguntas, envía catálogos, agenda citas y procesa pedidos automáticamente.',
  },
  {
    icon: '🌐',
    title: 'Chatbot para Web',
    description: 'Widget de chat en tu web que resuelve dudas, captura leads y guía a los usuarios. Integrado con tu CRM y base de datos.',
  },
  {
    icon: '🎙️',
    title: 'Chatbot de Voz',
    description: 'Asistente de voz que atiende llamadas telefónicas, reserva citas y deriva casos complejos. Como tener un recepcionista 24/7.',
  },
  {
    icon: '📱',
    title: 'Multicanal',
    description: 'Un solo bot, múltiples plataformas: WhatsApp, web, Facebook Messenger, Instagram, Telegram. Todo centralizado.',
  },
  {
    icon: '🧠',
    title: 'IA Conversacional',
    description: 'Entiende lenguaje natural, no respuestas pre-programadas. Aprende de cada conversación y mejora con el tiempo.',
  },
  {
    icon: '🔗',
    title: 'Integraciones',
    description: 'Conecta con tu CRM, calendario, e-commerce, base de datos. Automatiza todo el flujo de atención al cliente.',
  },
]

const benefits = [
  {
    title: 'Disponibilidad Total',
    description: 'Tu chatbot nunca duerme, no se enferma y no pide vacaciones. Atiende a tus clientes a las 3 AM como si fueran las 3 PM.',
  },
  {
    title: 'Respuesta Instantánea',
    description: 'Cero tiempos de espera. El 82% de los clientes esperan respuesta inmediata. Tu bot responde en milisegundos.',
  },
  {
    title: 'Escala sin Límites',
    description: 'Atiende 1 o 1,000 conversaciones simultáneas. El mismo coste, cero estrés. Crece sin contratar más personal.',
  },
]

const process = [
  { step: '01', title: 'Análisis', description: 'Estudiamos tu negocio, preguntas frecuentes, flujos de atención y objetivos específicos.' },
  { step: '02', title: 'Diseño', description: 'Creamos los flujos conversacionales, personalidad del bot y entrenamos la IA con tus datos.' },
  { step: '03', title: 'Desarrollo', description: 'Programamos el chatbot, integramos con tus sistemas y configuramos los canales.' },
  { step: '04', title: 'Entrenamiento', description: 'Probamos, refinamos respuestas y te enseñamos a gestionar y mejorar el bot continuamente.' },
]

const testimonial = {
  quote: 'Nuestro chatbot de WhatsApp atiende el 70% de las consultas automáticamente. Hemos reducido costes y mejorado la satisfacción del cliente. Es como tener 3 personas trabajando 24/7.',
  author: 'Carlos Martínez',
  position: 'CEO',
  company: 'Clínica Dental Martínez',
}

export default function ChatbotsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Chatbots con IA',
    name: 'Chatbots con IA en Murcia',
    description:
      'Desarrollo de chatbots inteligentes para WhatsApp, web y voz. Atención 24/7 y captación de leads para empresas de Murcia y la Región.',
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
      { '@type': 'AdministrativeArea', name: 'Región de Murcia' },
    ],
  }

  return (
    <StandardLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceHero {...heroData} />
      <ServiceFeatures features={features} title="Tipos de chatbots" />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess steps={process} />
      <ServiceTestimonial {...testimonial} />
      <ServiceCTA 
        title="¿Listo para automatizar tu atención al cliente?"
        subtitle="Te mostramos cómo un chatbot puede transformar tu negocio"
      />
    </StandardLayout>
  )
}

