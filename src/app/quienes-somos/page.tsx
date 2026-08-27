import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/QuienesSomos/Hero'
import About from '@/components/sections/QuienesSomos/About'
import WhyMurcia from '@/components/sections/QuienesSomos/WhyMurcia'
import Services from '@/components/sections/QuienesSomos/Services'
import Values from '@/components/sections/QuienesSomos/Values'
import CTA from '@/components/sections/QuienesSomos/CTA'
import type { Metadata } from 'next'
import { AGENCY_ID, SITE_URL, generateBreadcrumbSchema } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Agencia de Marketing Digital en Murcia | ESKALA - Expertos Locales',
  description: 'ESKALA es tu agencia de marketing digital en Murcia. Especialistas en SEO local, diseño web, redes sociales y Google Ads. Ayudamos a empresas murcianas a crecer online desde 2020. Resultados reales, estrategias personalizadas.',
  keywords: [
    'agencia marketing digital murcia',
    'marketing digital murcia',
    'agencia marketing murcia',
    'seo murcia',
    'diseño web murcia',
    'agencia publicidad murcia',
    'marketing online murcia',
    'consultora marketing murcia',
    'agencia digital murcia',
    'expertos marketing murcia',
    'community manager murcia',
    'google ads murcia',
    'redes sociales murcia',
    'branding murcia',
  ],
  openGraph: {
    title: 'Agencia de Marketing Digital en Murcia | ESKALA',
    description: 'Agencia de marketing digital en Murcia especializada en hacer crecer negocios locales. SEO, diseño web, redes sociales y más.',
    url: 'https://www.eskaladigital.com/quienes-somos',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'ESKALA - Agencia de Marketing Digital en Murcia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agencia de Marketing Digital en Murcia | ESKALA',
    description: 'Especialistas en marketing digital para empresas murcianas. Hacemos crecer tu negocio online.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: {
    canonical: 'https://www.eskaladigital.com/quienes-somos',
  },
}

export default function QuienesSomosPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/quienes-somos#about`,
    url: `${SITE_URL}/quienes-somos`,
    name: 'Quiénes somos | ESKALA Marketing Digital',
    description:
      'ESKALA es la agencia de marketing digital en Murcia. SEO local, diseño web, redes sociales y Google Ads desde 2020.',
    about: { '@id': AGENCY_ID },
    isPartOf: { '@id': `${SITE_URL}/#website` },
  }
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Quiénes somos', path: '/quienes-somos' },
  ])

  return (
    <StandardLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero />
      <About />
      <WhyMurcia />
      <Services />
      <Values />
      <CTA />
    </StandardLayout>
  )
}
