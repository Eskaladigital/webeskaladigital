import HomeStripes from '@/components/sections/Home/HomeStripes'
import { Footer } from '@/components/layout/Footer'
import { enMetadata } from '@/lib/i18n'

export const metadata = enMetadata(
  '/',
  'ESKALA | Digital Marketing Agency in Spain',
  'Digital marketing agency specialising in web design, SEO, social media, Google Ads, AI apps, chatbots, branding and email marketing. We help your business grow.',
  true
)

export default function EnglishHomePage() {
  return (
    <>
      <HomeStripes lang="en" />
      <Footer lang="en" />
    </>
  )
}
