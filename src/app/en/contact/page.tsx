import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Contacto/Hero'
import ContactForm from '@/components/sections/Contacto/ContactForm'
import ContactOptions from '@/components/sections/Contacto/ContactOptions'
import ContactInfo from '@/components/sections/Contacto/ContactInfo'
import { enMetadata } from '@/lib/i18n'

export const metadata = enMetadata(
  '/contacto',
  'Contact',
  'Contact ESKALA Digital Marketing. Ask for a free, no-commitment quote for your digital marketing, website or SEO project. Reply within 24 hours.'
)

export default function EnglishContactPage() {
  return (
    <StandardLayout lang="en">
      <Hero lang="en" />
      <ContactForm lang="en" />
      <ContactOptions lang="en" />
      <ContactInfo lang="en" />
    </StandardLayout>
  )
}
