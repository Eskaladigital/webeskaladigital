import { StripeNav } from './StripeNav'
import { Header } from './Header'
import { Footer } from './Footer'
import BackToTop from './BackToTop'
import type { Lang } from '@/lib/i18n'

export default function StandardLayout({
  children,
  lang = 'es',
}: {
  children: React.ReactNode
  lang?: Lang
}) {
  return (
    <>
      <StripeNav position="left" />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer lang={lang} />
      
      <BackToTop />
    </>
  )
}
