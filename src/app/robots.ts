import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/administrator/', '/pruebas/', '/private/'],
      },
    ],
    sitemap: 'https://www.eskaladigital.com/sitemap.xml',
  }
}







