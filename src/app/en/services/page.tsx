import Universo3DClient from '@/components/sections/Servicios/Universo3DClient'
import { enMetadata } from '@/lib/i18n'

export const metadata = enMetadata(
  '/servicios',
  'Services',
  'Eight services in one 3D journey: web design, SEO, social media, Google Ads, AI apps, chatbots, branding and email marketing.'
)

export default function EnglishServicesPage() {
  return <Universo3DClient lang="en" />
}
