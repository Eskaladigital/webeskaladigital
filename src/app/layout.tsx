import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { CookieConsentBar } from '@/components/CookieConsentBar'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#ff6b35',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eskaladigital.com'),
  
  title: {
    default: 'ESKALA | Agencia de Marketing Digital en Murcia',
    template: '%s | ESKALA Marketing Digital',
  },
  
  description: 'Agencia de marketing digital en Murcia. Diseño web, SEO, redes sociales, Google Ads y aplicaciones con IA. Llevamos tu negocio al siguiente nivel.',
  
  keywords: ['agencia marketing murcia', 'marketing digital murcia', 'diseño web murcia', 'seo murcia', 'redes sociales murcia', 'google ads murcia', 'community manager murcia'],
  
  authors: [{ name: 'ESKALA Marketing Digital', url: 'https://www.eskaladigital.com' }],
  creator: 'ESKALA Marketing Digital',
  publisher: 'ESKALA Marketing Digital',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // CONFIGURACIÓN DE ICONOS (CRÍTICO PARA GOOGLE)
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  
  // PWA MANIFEST (CRÍTICO)
  manifest: '/manifest.json',
  
  // APPLE WEB APP
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ESKALA',
  },
  
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.eskaladigital.com',
    siteName: 'ESKALA Marketing Digital',
    title: 'ESKALA | Agencia de Marketing Digital en Murcia',
    description: 'Agencia de marketing digital en Murcia. Llevamos tu negocio al siguiente nivel.',
    images: [
      {
        url: '/eskala_digital_opengraph.png',
        width: 1200,
        height: 630,
        alt: 'ESKALA - Agencia de Marketing Digital en Murcia',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'ESKALA | Agencia de Marketing Digital en Murcia',
    description: 'Agencia de marketing digital en Murcia. Llevamos tu negocio al siguiente nivel.',
    site: '@eskaladigital',
    creator: '@eskaladigital',
    images: ['/eskala_digital_opengraph.png'],
  },
  
  // ROBOTS (CRÍTICO PARA INDEXACIÓN)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    // google: 'tu-codigo-verificacion-google',
    // yandex: 'tu-codigo-yandex',
  },
  
  category: 'marketing',
}

// Schema JSON-LD para datos estructurados
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: 'ESKALA Marketing Digital',
  description: 'Agencia de marketing digital en Murcia especializada en diseño web, SEO, redes sociales, Google Ads y aplicaciones con inteligencia artificial.',
  url: 'https://www.eskaladigital.com',
  logo: 'https://www.eskaladigital.com/logo.png',
  image: 'https://www.eskaladigital.com/eskala_digital_opengraph.png',
  telephone: '+34626823404',
  email: 'contacto@eskaladigital.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Murcia',
    addressRegion: 'Región de Murcia',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.9922,
    longitude: -1.1307,
  },
  areaServed: [
    { '@type': 'City', name: 'Murcia' },
    { '@type': 'State', name: 'Región de Murcia' },
    { '@type': 'Country', name: 'España' },
  ],
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.instagram.com/eskaladigital',
    'https://www.linkedin.com/company/eskaladigital',
    'https://www.facebook.com/eskaladigital',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Marketing Digital',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño Web' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Local' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestión de Redes Sociales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aplicaciones con IA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chatbots con IA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Marketing' } },
    ],
  },
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_ID
const AW_ID = process.env.NEXT_PUBLIC_AW_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={outfit.variable}>
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="ESKALA Marketing Digital" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ESKALA" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0f1729" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="gtag-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              var analytics = 'denied', ads = 'denied';
              try {
                var prefsRaw = localStorage.getItem('eskala_cookie_preferences');
                if (prefsRaw) {
                  var prefs = JSON.parse(prefsRaw);
                  if (prefs.analytics) analytics = 'granted';
                  if (prefs.marketing) ads = 'granted';
                } else if (localStorage.getItem('eskala_cookie_consent') === 'granted') {
                  analytics = ads = 'granted';
                }
              } catch (e) {}
              gtag('consent', 'default', {
                analytics_storage: analytics,
                ad_storage: ads,
                ad_user_data: ads,
                ad_personalization: ads,
                wait_for_update: 500
              });
            `,
          }}
        />
      </head>
      <body>
        {GTM_ID ? (
          <GoogleTagManager gtmId={GTM_ID} />
        ) : GA_ID ? (
          <>
            <GoogleAnalytics gaId={GA_ID} />
            {AW_ID ? (
              <Script id="google-ads-config" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('config', '${AW_ID}');
                `}
              </Script>
            ) : null}
          </>
        ) : null}
        {children}
        <CookieConsentBar />
      </body>
    </html>
  )
}
