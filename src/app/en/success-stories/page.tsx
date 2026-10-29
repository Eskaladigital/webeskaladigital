import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/Exitos/Hero'
import Results from '@/components/sections/Exitos/Results'
import CTA from '@/components/sections/Exitos/CTA'
import { enMetadata } from '@/lib/i18n'

export const metadata = enMetadata(
  '/exitos',
  'Results',
  'Figures from live projects we designed and built: a London bass label with 413 releases, a B2B shop in 7 languages, a map with 10,000+ areas.'
)

export default function EnglishSuccessPage() {
  return (
    <StandardLayout lang="en">
      <Hero lang="en" />
      <Results lang="en" />
      <CTA lang="en" />
    </StandardLayout>
  )
}
