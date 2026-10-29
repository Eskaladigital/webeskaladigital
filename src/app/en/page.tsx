import HomeStripes from '@/components/sections/Home/HomeStripes'
import { Footer } from '@/components/layout/Footer'
import { enMetadata } from '@/lib/i18n'

export const metadata = enMetadata(
  '/',
  'ESKALA | Web Design and Digital Studio for Labels and Brands',
  'Digital studio in Spain building websites, SEO, AI apps and campaigns for record labels, artists and brands. Built with Next.js, live and fast.',
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
