/** @type {import('next').NextConfig} */
const nextConfig = {
  // Amplify necesita standalone. En Vercel (Next 16.3) standalone
  // rompe onBuildComplete: ENOENT .next/next-server.js.nft.json
  output: process.env.VERCEL ? undefined : 'standalone',
  
  // Configuración de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'www.eskaladigital.com',
      },
      {
        protocol: 'https',
        hostname: 'eskaladigital.com',
      },
    ],
    // Formatos optimizados
    formats: ['image/avif', 'image/webp'],
  },

  // Headers de seguridad y cache
  async headers() {
    return [
      // Cache headers para favicons (1 año)
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Headers de seguridad
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Redirecciones SEO: forzar www como canónico
  async redirects() {
    return [
      // Redirigir sin www a con www (URL canónica)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'eskaladigital.com' }],
        destination: 'https://www.eskaladigital.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
