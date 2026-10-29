import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Contacto/Hero'
import ContactForm from '@/components/sections/Contacto/ContactForm'
import ContactOptions from '@/components/sections/Contacto/ContactOptions'
import ContactInfo from '@/components/sections/Contacto/ContactInfo'
import { enMetadata } from '@/lib/i18n'

export const metadata = enMetadata(
  '/contacto',
  'Contact',
  'Tell us about your label, artist or brand. We reply within 24 working hours, in English.'
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
