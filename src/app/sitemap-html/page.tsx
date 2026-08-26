import { StandardLayout } from '@/components/layout'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './sitemap.module.css'
import { createPublicClient } from '@/lib/supabase/server'

export const metadata: Metadata = {
  title: 'Mapa del Sitio | ESKALA Marketing Digital',
  description: 'Mapa completo del sitio web de ESKALA Marketing Digital. Encuentra todas nuestras páginas de servicios, blog, portfolio y más.',
  robots: {
    index: true,
    follow: true,
  },
}

const SERVICES = [
  { href: '/servicios/diseno-web', label: 'Diseño Web' },
  { href: '/servicios/seo-local', label: 'SEO Local' },
  { href: '/servicios/redes-sociales', label: 'Gestión de Redes Sociales' },
  { href: '/servicios/google-ads', label: 'Google Ads' },
  { href: '/servicios/apps-ia', label: 'Aplicaciones con IA' },
  { href: '/servicios/chatbots', label: 'Chatbots con IA' },
  { href: '/servicios/branding', label: 'Branding' },
  { href: '/servicios/email-marketing', label: 'Email Marketing' },
]

const PAGES = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/metodologia', label: 'Metodología' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/exitos', label: 'Casos de Éxito' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default async function SitemapPage() {
  // Obtener artículos del blog
  const supabase = createPublicClient()
  const { data: articles } = await supabase
    .from('articles')
    .select('slug, title')
    .eq('published', true)
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false })

  // Obtener proyectos del portfolio
  const { data: projects } = await supabase
    .from('portfolio_projects')
    .select('slug, title')
    .eq('published', true)
    .order('order_position', { ascending: true })
  return (
    <StandardLayout>
      <section className={styles.sitemap}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Mapa del Sitio</h1>
            <p>Encuentra fácilmente todas las páginas de nuestro sitio web</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.section}>
              <h2>Páginas Principales</h2>
              <ul>
                {PAGES.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href}>{page.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Servicios</h2>
              <ul>
                {SERVICES.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href}>{service.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Artículos del Blog</h2>
              <ul>
                <li>
                  <Link href="/blog">Ver todos los artículos</Link>
                </li>
                {articles && articles.map((article) => (
                  <li key={article.slug}>
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Proyectos Portfolio</h2>
              <ul>
                <li>
                  <Link href="/portfolio">Ver todos los proyectos</Link>
                </li>
                {projects && projects.map((project) => (
                  <li key={project.slug}>
                    <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Legal y Contacto</h2>
              <ul>
                <li>
                  <Link href="/contacto">Formulario de Contacto</Link>
                </li>
                <li>
                  <a href="mailto:contacto@eskaladigital.com">Email: contacto@eskaladigital.com</a>
                </li>
                <li>
                  <a href="tel:+34626823404">Teléfono: +34 626 82 34 04</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </StandardLayout>
  )
}


