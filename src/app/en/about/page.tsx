import { StandardLayout } from '@/components/layout'
import Hero from '@/components/sections/QuienesSomos/Hero'
import About from '@/components/sections/QuienesSomos/About'
import Services from '@/components/sections/QuienesSomos/Services'
import Values from '@/components/sections/QuienesSomos/Values'
import CTA from '@/components/sections/QuienesSomos/CTA'
import { enMetadata } from '@/lib/i18n'
import { AGENCY_ID, SITE_URL, generateBreadcrumbSchema } from '@/lib/site'

export const metadata = enMetadata(
  '/quienes-somos',
  'About us',
  'ESKALA is a digital marketing agency based in Murcia, Spain, since 2020: web design, SEO, social media, Google Ads, AI apps, chatbots, branding and email marketing.'
)

export default function EnglishAboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/en/about#about`,
    url: `${SITE_URL}/en/about`,
    name: 'About us | ESKALA Digital Marketing',
    description: 'About ESKALA, a digital marketing agency in Murcia, Spain, since 2020.',
    inLanguage: 'en',
    about: { '@id': AGENCY_ID },
    isPartOf: { '@id': `${SITE_URL}/#website` },
  }
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: 'Home', path: '/en' },
    { name: 'About us', path: '/en/about' },
  ])

  return (
    <StandardLayout lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Hero lang="en" />
      <About lang="en" />
      <Services lang="en" />
      <Values lang="en" />
      <CTA lang="en" />
    </StandardLayout>
  )
}
