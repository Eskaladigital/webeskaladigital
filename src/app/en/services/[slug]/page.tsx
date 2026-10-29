import { notFound } from 'next/navigation'
import { StandardLayout } from '@/components/layout'
import ServiceHero from '@/components/sections/ServicioDetalle/ServiceHero'
import ServiceFeatures from '@/components/sections/ServicioDetalle/ServiceFeatures'
import ServiceBenefits from '@/components/sections/ServicioDetalle/ServiceBenefits'
import ServiceProcess from '@/components/sections/ServicioDetalle/ServiceProcess'
import ServiceCTA from '@/components/sections/ServicioDetalle/ServiceCTA'
import { SERVICES, enMetadata } from '@/lib/i18n'
import { SERVICES_EN } from '@/lib/en-content'

type Params = Promise<{ slug: string }>

function findService(enSlug: string) {
  const service = SERVICES.find((s) => s.en === enSlug)
  const content = service ? SERVICES_EN[service.slug] : undefined
  return service && content ? { service, content } : null
}

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.en }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const found = findService(slug)
  if (!found) return {}
  return enMetadata(`/servicios/${found.service.slug}`, found.content.metaTitle, found.content.metaDescription)
}

export default async function EnglishServicePage({ params }: { params: Params }) {
  const { slug } = await params
  const found = findService(slug)
  if (!found) notFound()
  const { service, content } = found

  return (
    <StandardLayout lang="en">
      <ServiceHero
        badge={content.badge}
        title={content.title}
        titleHighlight={content.titleHighlight}
        description={content.description}
        stripeColor={SERVICES.indexOf(service) + 1}
        lang="en"
      />
      <ServiceFeatures features={content.features} title={content.featuresTitle} lang="en" />
      <ServiceBenefits benefits={content.benefits} lang="en" />
      <ServiceProcess steps={content.process} lang="en" />
      <ServiceCTA title={content.ctaTitle} subtitle={content.ctaSubtitle} lang="en" />
    </StandardLayout>
  )
}
