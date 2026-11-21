import HomeStripes from '@/components/sections/Home/HomeStripes'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: { absolute: 'Agencia de Marketing Digital en Murcia · SEO, Web e IA | ESKALA' },
  description: 'Agencia de marketing digital en Murcia: posicionamiento SEO, diseño web, Google Ads y chatbots con IA para empresas. Solicita auditoría gratuita.',
  keywords: [
    'agencia marketing digital murcia',
    'marketing digital murcia',
    'agencia publicidad murcia',
    'diseño web murcia',
    'seo murcia',
  ],
  openGraph: {
    title: 'ESKALA | Agencia de Marketing Digital en Murcia',
    description: 'Hacemos crecer tu negocio con estrategias de marketing digital que funcionan. Diseño web, SEO, redes sociales y más.',
    url: 'https://www.eskaladigital.com',
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
    title: 'ESKALA | Agencia de Marketing Digital en Murcia',
    description: 'Hacemos crecer tu negocio con estrategias de marketing digital que funcionan.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: languageAlternates('/', 'es'),
}

export default function HomePage() {
  return (
    <>
      <HomeStripes />
      <Footer />
    </>
  )
}

