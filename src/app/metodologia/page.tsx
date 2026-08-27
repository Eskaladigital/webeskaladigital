import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Metodologia/Hero'
import Process from '@/components/sections/Metodologia/Process'
import Benefits from '@/components/sections/Metodologia/Benefits'
import CTA from '@/components/sections/Metodologia/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metodología de Trabajo | Proceso de Marketing Digital',
  description: 'Descubre nuestra metodología probada de marketing digital. 4 fases claras: análisis, estrategia, ejecución y optimización. Resultados garantizados.',
  keywords: [
    'metodologia marketing digital',
    'proceso marketing',
    'estrategia digital murcia',
    'consultoria marketing',
  ],
  openGraph: {
    title: 'Metodología | ESKALA Marketing Murcia',
    description: 'Proceso de trabajo transparente y orientado a resultados. Conoce cómo trabajamos.',
    url: 'https://www.eskaladigital.com/metodologia',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Metodología ESKALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metodología | ESKALA Marketing Murcia',
    description: 'Proceso de trabajo transparente y orientado a resultados.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: {
    canonical: 'https://www.eskaladigital.com/metodologia',
  },
}

export default function MetodologiaPage() {
  return (
    <StandardLayout>
      <Hero />
      <Process />
      <Benefits />
      <CTA />
    </StandardLayout>
  )
}

