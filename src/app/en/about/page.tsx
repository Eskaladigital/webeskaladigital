import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/QuienesSomos/Hero'
import About from '@/components/sections/QuienesSomos/About'
import Services from '@/components/sections/QuienesSomos/Services'
import Values from '@/components/sections/QuienesSomos/Values'
import CTA from '@/components/sections/QuienesSomos/CTA'
import { enMetadata } from '@/lib/i18n'

export const metadata = enMetadata(
  '/quienes-somos',
  'About us',
  'ESKALA is a digital studio based in Murcia, Spain, working since 2020. We design and build websites, SEO and AI tools for labels, artists and brands.'
)

export default function EnglishAboutPage() {
  return (
    <StandardLayout lang="en">
      <Hero lang="en" />
      <About lang="en" />
      <Services lang="en" />
      <Values lang="en" />
      <CTA lang="en" />
    </StandardLayout>
  )
}
