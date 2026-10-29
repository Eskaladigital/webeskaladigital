import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Metodologia/Hero'
import Process from '@/components/sections/Metodologia/Process'
import Benefits from '@/components/sections/Metodologia/Benefits'
import CTA from '@/components/sections/Metodologia/CTA'
import { enMetadata } from '@/lib/i18n'

export const metadata = enMetadata(
  '/metodologia',
  'Methodology',
  'How we work: a clear process from research to launch and ongoing improvement, with one point of contact and no surprises.'
)

export default function EnglishMethodologyPage() {
  return (
    <StandardLayout lang="en">
      <Hero lang="en" />
      <Process lang="en" />
      <Benefits lang="en" />
      <CTA lang="en" />
    </StandardLayout>
  )
}
