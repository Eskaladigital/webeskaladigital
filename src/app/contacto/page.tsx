import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Contacto/Hero'
import ContactForm from '@/components/sections/Contacto/ContactForm'
import ContactOptions from '@/components/sections/Contacto/ContactOptions'
import ContactInfo from '@/components/sections/Contacto/ContactInfo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | Presupuesto Sin Compromiso',
  description: 'Contacta con ESCALA Marketing en Murcia. Solicita presupuesto sin compromiso para tu proyecto de marketing digital, web o SEO. Respuesta en 24h.',
  keywords: [
    'contacto agencia marketing murcia',
    'presupuesto marketing digital',
    'consulta gratuita seo',
    'telefono escala marketing',
  ],
  openGraph: {
    title: 'Contacto | ESKALA Marketing Murcia',
    description: 'Cuéntanos tu proyecto y te enviamos presupuesto en 24 horas. Sin compromiso.',
    url: 'https://www.eskaladigital.com/contacto',
    siteName: 'ESKALA Marketing Digital',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Contacta con ESKALA Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | ESKALA Marketing Murcia',
    description: 'Cuéntanos tu proyecto y te enviamos presupuesto en 24 horas.',
    images: ['/eskala_digital_opengraph.png'],
  },
  alternates: {
    canonical: 'https://www.eskaladigital.com/contacto',
  },
}

export default function ContactoPage() {
  return (
    <StandardLayout>
      <Hero />
      <ContactForm />
      <ContactOptions />
      <ContactInfo />
    </StandardLayout>
  )
}

