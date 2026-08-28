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
  title: 'Quiénes somos',
  description:
    'El equipo de ESKALA: desde 2020 en Murcia. Cómo trabajamos SEO local, diseño web, redes y Google Ads con pymes de la Región.',
  openGraph: {
    title: 'Quiénes somos | ESKALA Marketing Digital',
    description: 'Equipo y forma de trabajar. Agencia en Murcia desde 2020.',
    url: 'https://www.eskaladigital.com/quienes-somos',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Quiénes somos — ESKALA Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiénes somos | ESKALA Marketing Digital',
    description: 'Equipo y forma de trabajar. Agencia en Murcia desde 2020.',
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
      'Página de equipo de ESKALA Marketing Digital. Agencia en Murcia desde 2020.',
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
