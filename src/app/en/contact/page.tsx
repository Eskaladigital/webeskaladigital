import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Contacto/Hero'
import ContactForm from '@/components/sections/Contacto/ContactForm'
import ContactOptions from '@/components/sections/Contacto/ContactOptions'
import ContactInfo from '@/components/sections/Contacto/ContactInfo'
import { enMetadata } from '@/lib/i18n'
import { AGENCY_ID, SITE_URL, generateBreadcrumbSchema } from '@/lib/site'

export const metadata = enMetadata(
  '/contacto',
  'Contact',
  'Contact ESKALA Digital Marketing. Ask for a free, no-commitment quote for your digital marketing, website or SEO project. Reply within 24 hours.'
)

export default function EnglishContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/en/contact#page`,
    url: `${SITE_URL}/en/contact`,
    name: 'Contact | ESKALA Digital Marketing',
    inLanguage: 'en',
    about: { '@id': AGENCY_ID },
  }
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: 'Home', path: '/en' },
    { name: 'Contact', path: '/en/contact' },
  ])

  return (
    <StandardLayout lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Hero lang="en" />
      <ContactForm lang="en" />
      <ContactOptions lang="en" />
      <ContactInfo lang="en" />
    </StandardLayout>
  )
}
