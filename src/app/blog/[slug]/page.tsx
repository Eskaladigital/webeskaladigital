import { Metadata } from 'next'
import type { JSX } from 'react'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { StandardLayout } from '@/components/layout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import ShareButtons from '@/components/blog/ShareButtons'
import TableOfContents from '@/components/blog/TableOfContents'
import ArticleCTA from '@/components/blog/ArticleCTA'
import styles from './article.module.css'
import { getBlogImageUrl } from '@/lib/supabase/storage'
import { decodeHtmlEntities } from '@/lib/htmlUtils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  
  // Solo generar metadatos si el artículo está publicado Y la fecha es <= ahora
  const { data: article } = await supabase
    .from('articles')
    .select('title, excerpt, meta_title, meta_description, keywords, featured_image, slug')
    .eq('slug', slug)
    .eq('published', true)
    .lte('published_at', new Date().toISOString())
    .single()

  if (!article) {
    return {
      title: 'Artículo no encontrado',
    }
  }

  // URL base para las imágenes OpenGraph
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.eskaladigital.com'
  
  // Obtener URL de imagen (puede ser relativa)
  const imageRelativeUrl = article.featured_image 
    ? getBlogImageUrl(article.featured_image)
    : '/eskala_digital_opengraph.png'
  
  // Convertir a URL absoluta si es necesaria
  const ogImage = imageRelativeUrl.startsWith('http') 
    ? imageRelativeUrl 
    : `${baseUrl}${imageRelativeUrl}`

  return {
    title: article.meta_title || article.title,
    description: article.meta_description || article.excerpt,
    keywords: article.keywords?.join(', '),
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description || article.excerpt,
      type: 'article',
      url: `${baseUrl}/blog/${article.slug}`,
      siteName: 'ESKALA Marketing Digital',
      locale: 'es_ES',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.meta_title || article.title,
      description: article.meta_description || article.excerpt,
      images: [ogImage],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${article.slug}`,
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  // Fetch el artículo con su categoría
  // Solo mostrar si está publicado Y la fecha es <= ahora
  const { data: article, error } = await supabase
    .from('articles')
    .select(`
      *,
      category:categories(name)
    `)
    .eq('slug', slug)
    .eq('published', true)
    .lte('published_at', new Date().toISOString())
    .single()

  if (error || !article) {
    notFound()
  }

  // Incrementar contador de vistas
  await supabase
    .from('articles')
    .update({ views: (article.views || 0) + 1 })
    .eq('id', article.id)

  // Manejar categoría (puede venir como array o objeto)
  const categoryData = Array.isArray(article.category) ? article.category[0] : article.category
  const categoryName = categoryData?.name || 'General'

  // Formatear fecha
  const date = new Date(article.published_at)
  const formattedDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Calcular tiempo de lectura
  const wordsPerMinute = 200
  const wordCount = article.content.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)

  // Obtener artículos relacionados (también con fecha <= ahora)
  const { data: relatedArticles } = await supabase
    .from('articles')
    .select('slug, title, excerpt')
    .eq('published', true)
    .lte('published_at', new Date().toISOString())
    .neq('id', article.id)
    .eq('category_id', article.category_id)
    .limit(3)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.eskaladigital.com'
  const ogImage = getBlogImageUrl(article.featured_image)
  const articleUrl = `${baseUrl}/blog/${article.slug}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    headline: article.meta_title || article.title,
    description: article.meta_description || article.excerpt,
    image: [ogImage],
    datePublished: article.published_at,
    dateModified: article.updated_at || article.published_at,
    author: {
      '@type': 'Organization',
      name: article.author || 'ESCALA Marketing',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ESCALA Marketing',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  }

  // Componente personalizado para renderizar headings con IDs
  const HeadingRenderer = ({ level, children, ...props }: any) => {
    const text = children?.toString() || ''
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
    
    const Tag = `h${level}` as keyof JSX.IntrinsicElements
    return <Tag id={id} {...props}>{children}</Tag>
  }

  return (
    <StandardLayout>
      <article className={styles.article}>
        {/* SEO: Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Header del artículo */}
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.meta}>
              <span className={styles.category}>{categoryName}</span>
              <span className={styles.separator}>•</span>
              <time className={styles.date}>{formattedDate}</time>
              <span className={styles.separator}>•</span>
              <span className={styles.readTime}>{readTime} min de lectura</span>
            </div>

            <h1 className={styles.title}>{article.title}</h1>

            {article.excerpt && (
              <p className={styles.excerpt}>{decodeHtmlEntities(article.excerpt)}</p>
            )}

            <div className={styles.authorInfo}>
              <div className={styles.avatar}>EM</div>
              <div>
                <p className={styles.authorName}>{article.author || 'ESCALA Marketing'}</p>
                <p className={styles.views}>{article.views} lecturas</p>
              </div>
            </div>
          </div>

          {/* Imagen de portada */}
          {article.featured_image && (
            <div className={styles.featuredImageContainer}>
              <img 
                src={getBlogImageUrl(article.featured_image)}
                alt={article.title}
                className={styles.featuredImage}
              />
            </div>
          )}
        </header>

        {/* Botones de compartir */}
        <div className={styles.container}>
          <ShareButtons url={articleUrl} title={article.title} />
        </div>

        {/* Layout con TOC + Contenido */}
        <div className={styles.container}>
          <div className={styles.contentLayout}>
            {/* Tabla de contenidos (desktop) */}
            <div className={styles.tocWrapper}>
              <TableOfContents content={article.content} />
            </div>

            {/* Contenido principal */}
            <div className={styles.contentWrapper}>
              <div className={styles.content}>
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h2: (props) => <HeadingRenderer level={2} {...props} />,
                    h3: (props) => <HeadingRenderer level={3} {...props} />,
                  }}
                >
                  {article.content}
                </ReactMarkdown>
              </div>

              {/* CTA de newsletter/contacto */}
              <ArticleCTA />
            </div>
          </div>
        </div>

        {/* Artículos relacionados */}
        {relatedArticles && relatedArticles.length > 0 && (
          <div className={styles.related}>
            <div className={styles.container}>
              <h2 className={styles.relatedTitle}>Artículos Relacionados</h2>
              <div className={styles.relatedGrid}>
                {relatedArticles.map((related) => (
                  <a
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className={styles.relatedCard}
                  >
                    <h3>{related.title}</h3>
                    <p>{related.excerpt}</p>
                    <span className={styles.readMoreLink}>Leer más →</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </StandardLayout>
  )
}
