/**
 * NAP y schema de la agencia. La calle/CP solo salen si están en env
 * (idénticos a Google Business). No inventar domicilio.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://www.eskaladigital.com'

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME?.trim() || 'ESKALA Marketing Digital'

export const CONTACT_EMAIL = 'contacto@eskaladigital.com'
export const CONTACT_PHONE = '+34 626 82 34 04'
export const CONTACT_PHONE_TEL = '+34626823404'

export const siteAddress = {
  street: process.env.NEXT_PUBLIC_ADDRESS_STREET?.trim() || '',
  postalCode: process.env.NEXT_PUBLIC_ADDRESS_POSTAL_CODE?.trim() || '',
  city: 'Murcia',
  region: 'Región de Murcia',
  country: 'España',
  countryCode: 'ES',
}

export const AGENCY_ID = `${SITE_URL}/#agency`
export const AGENCY_LOGO = `${SITE_URL}/icon.png`
export const AGENCY_IMAGE = `${SITE_URL}/eskala_digital_opengraph.png`

export function formatFullAddress(): string {
  const { street, postalCode, city, region, country } = siteAddress
  if (street) {
    const line = postalCode ? `${street}, ${postalCode} ${city}` : `${street}, ${city}`
    return `${line}, ${region}, ${country}`
  }
  return `${city}, ${country}`
}

export function formatShortAddress(): string {
  const { street, city, country } = siteAddress
  return street ? `${street}, ${city}` : `${city}, ${country}`
}

export function buildPostalAddress() {
  const { street, postalCode, city, region, countryCode } = siteAddress
  return {
    '@type': 'PostalAddress' as const,
    ...(street ? { streetAddress: street } : {}),
    ...(postalCode ? { postalCode } : {}),
    addressLocality: city,
    addressRegion: region,
    addressCountry: countryCode,
  }
}

const AREA_SERVED = [
  { '@type': 'City', name: 'Murcia' },
  { '@type': 'AdministrativeArea', name: 'Región de Murcia' },
  { '@type': 'Country', name: 'España' },
]

export function generateMarketingAgencySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    '@id': AGENCY_ID,
    name: SITE_NAME,
    alternateName: 'ESKALA',
    description:
      'Agencia de marketing digital en Murcia especializada en diseño web, SEO local, redes sociales, Google Ads y aplicaciones con inteligencia artificial.',
    url: SITE_URL,
    logo: AGENCY_LOGO,
    image: AGENCY_IMAGE,
    telephone: CONTACT_PHONE_TEL,
    email: CONTACT_EMAIL,
    address: buildPostalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.9922,
      longitude: -1.1307,
    },
    areaServed: AREA_SERVED,
    priceRange: '€€',
    foundingDate: '2020',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_PHONE_TEL,
      email: CONTACT_EMAIL,
      contactType: 'customer service',
      availableLanguage: ['Spanish'],
      areaServed: 'ES',
    },
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
    knowsLanguage: 'es',
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
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: 'es-ES',
    publisher: { '@id': AGENCY_ID },
  }
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${SITE_URL}${item.path}`,
    })),
  }
}

export function generateServiceBreadcrumb(name: string, slug: string) {
  return generateBreadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name, path: `/servicios/${slug}` },
  ])
}
