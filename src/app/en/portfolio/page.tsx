import Link from 'next/link'
import { StandardLayout } from '@/components/layout'
import styles from '@/components/sections/Portfolio/PortfolioContent.module.css'
import { createPublicClient } from '@/lib/supabase/server'
import { enMetadata } from '@/lib/i18n'
import { PORTFOLIO_EN, PROJECTS_EN, SERVICE_TAGS_EN } from '@/lib/en-content'

export const revalidate = 3600

export const metadata = enMetadata(
  '/portfolio',
  'Portfolio',
  'Digital marketing, web design and development projects: B2B shops, marketplaces, booking platforms, AI apps and more. All live.'
)

type Row = {
  slug: string
  client: string
  title: string
  short_description: string | null
  services: string[] | string | null
  metrics: Record<string, string> | null
  featured_image: string | null
  website_url: string | null
  project_date: string | null
}

const COLORS = ['#ff6b35', '#4a7c9b', '#e84a23', '#1e3a5f']

async function loadRows(): Promise<Row[]> {
  try {
    const { data } = await createPublicClient()
      .from('portfolio_projects')
      .select('slug, client, title, short_description, services, metrics, featured_image, website_url, project_date')
      .eq('published', true)
      .order('project_date', { ascending: false })
    return (data ?? []) as Row[]
  } catch {
    return []
  }
}

function tagsOf(services: Row['services']): string[] {
  let list: string[] = []
  if (Array.isArray(services)) list = services
  else if (typeof services === 'string') {
    try {
      list = JSON.parse(services)
    } catch {
      list = []
    }
  }
  return [...new Set(list.map((s) => SERVICE_TAGS_EN[s] ?? s))]
}

export default async function EnglishPortfolioPage() {
  const rows = await loadRows()
  return (
    <StandardLayout lang="en">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>{PORTFOLIO_EN.badge}</div>
          <h1 className={styles.heroTitle}>
            {PORTFOLIO_EN.title} <span>{PORTFOLIO_EN.titleSpan}</span>
          </h1>
          <p className={styles.heroDesc}>{PORTFOLIO_EN.desc}</p>
        </div>
      </section>

      <section className={styles.projectsSection}>
          <div className={styles.projectsGrid}>
            {rows.map((row, i) => {
              const en = PROJECTS_EN[row.slug]
              const project = {
                slug: row.slug,
                client: row.client,
                title: en?.title ?? row.title,
                description: en?.description ?? row.short_description ?? '',
                tags: tagsOf(row.services),
                metrics: en?.metrics ?? Object.values(row.metrics ?? {}).slice(0, 3),
              }
              const color = COLORS[i % COLORS.length]
              const external = row.website_url
              const cardHref = external || `/portfolio/${project.slug}`
              const year = row.project_date ? new Date(row.project_date).getFullYear() : null
              return (
                <a
                  key={project.slug}
                  href={cardHref}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={styles.projectCard}
                  style={{ '--project-color': color } as React.CSSProperties}
                >
                  <div className={styles.projectVisual}>
                    {row.featured_image ? (
                      <img
                        src={row.featured_image}
                        alt={project.title}
                        className={styles.projectImage}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div
                        className={styles.projectBg}
                        style={{ background: `linear-gradient(135deg, ${color}33 0%, ${color}77 100%)` }}
                      />
                    )}
                    <div className={styles.projectCategories}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.projectCategory} style={{ background: color }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {year ? <span className={styles.projectYear}>{year}</span> : null}
                  </div>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectClient}>{project.client}</span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.5, margin: '0.5rem 0 0.75rem', opacity: 0.8 }}>
                      {project.description}
                    </p>
                    <div className={styles.projectResults}>
                      {project.metrics.map((m) => (
                        <span key={m} className={styles.resultTag}>
                          {m}
                        </span>
                      ))}
                    </div>
                    <span className={styles.projectCta}>{external ? PORTFOLIO_EN.visit : PORTFOLIO_EN.caseStudy}</span>
                  </div>
                </a>
              )
            })}
          </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>{PORTFOLIO_EN.ctaTitle}</h2>
          <p>{PORTFOLIO_EN.ctaText}</p>
          <Link href="/en/contact" className={styles.ctaBtn}>
            {PORTFOLIO_EN.ctaButton}
          </Link>
        </div>
      </section>
    </StandardLayout>
  )
}
