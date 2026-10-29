import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Exitos/Hero'
import Testimonials from '@/components/sections/Exitos/Testimonials'
import Results from '@/components/sections/Exitos/Results'
import CTA from '@/components/sections/Exitos/CTA'
import type { Metadata } from 'next'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Casos de Éxito | Resultados Reales de Marketing Digital',
  description: 'Testimonios y casos de éxito de nuestros clientes. Resultados reales: +300% ventas, +200% tráfico web. Descubre cómo podemos ayudarte.',
  keywords: [
    'casos exito marketing digital',
    'testimonios agencia marketing',
    'resultados marketing murcia',
    'opiniones escala marketing',
  ],
  openGraph: {
    title: 'Casos de Éxito | ESKALA Marketing Murcia',
    description: 'Resultados reales de nuestros clientes. Testimonios y métricas que demuestran nuestro trabajo.',
    url: 'https://www.eskaladigital.com/exitos',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Casos de Éxito ESKALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Éxito | ESKALA Marketing Murcia',
    description: 'Resultados reales de nuestros clientes. Testimonios y métricas que demuestran nuestro trabajo.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: languageAlternates('/exitos', 'es'),
}

export default function ExitosPage() {
  return (
    <StandardLayout>
      <Hero />
      <Testimonials />
      <Results />
      <CTA />
    </StandardLayout>
  )
}

