import { MetadataRoute } from 'next'
import { createPublicClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.eskaladigital.com'
  
  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/quienes-somos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/metodologia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exitos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  // Páginas de servicios
  const servicios = [
    'diseno-web',
    'seo-local',
    'redes-sociales',
    'google-ads',
    'apps-ia',
    'chatbots',
    'branding',
    'email-marketing',
  ]

  const serviciosPages: MetadataRoute.Sitemap = servicios.map((servicio) => ({
    url: `${baseUrl}/servicios/${servicio}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Obtener posts del blog desde Supabase
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const supabase = createPublicClient()
    const { data: posts } = await supabase
      .from('articles')
      .select('slug, updated_at, published_at')
      .eq('published', true)
      .lte('published_at', new Date().toISOString())
      .order('published_at', { ascending: false })

    if (posts) {
      blogPages = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || post.published_at),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  // Obtener proyectos del portfolio desde Supabase
  let portfolioPages: MetadataRoute.Sitemap = []
  try {
    const supabase = createPublicClient()
    const { data: projects } = await supabase
      .from('portfolio_projects')
      .select('slug, updated_at')
      .eq('published', true)
      .order('order_position', { ascending: true })

    if (projects) {
      portfolioPages = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(project.updated_at),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error fetching portfolio projects for sitemap:', error)
  }

  return [...staticPages, ...serviciosPages, ...blogPages, ...portfolioPages]
}


