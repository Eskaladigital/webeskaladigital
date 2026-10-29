import { StandardLayout } from '@/components/layout'
import PortfolioContent from '@/components/sections/Portfolio/PortfolioContent'
import type { Metadata } from 'next'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Portfolio | Proyectos de Marketing Digital y Diseño Web',
  description: 'Descubre nuestros proyectos de marketing digital, diseño web y branding. +50 proyectos exitosos para empresas en Murcia y toda España.',
  keywords: [
    'portfolio marketing digital',
    'proyectos diseño web murcia',
    'casos exito marketing',
    'trabajos agencia marketing',
  ],
  openGraph: {
    title: 'Portfolio | ESKALA Marketing Murcia',
    description: '+50 proyectos exitosos de marketing digital, diseño web y branding.',
    url: 'https://www.eskaladigital.com/portfolio',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio ESKALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | ESKALA Marketing Murcia',
    description: '+50 proyectos exitosos de marketing digital, diseño web y branding.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: languageAlternates('/portfolio', 'es'),
}

export default function Portfolio() {
  return (
    <StandardLayout>
      <PortfolioContent />
    </StandardLayout>
  )
}
