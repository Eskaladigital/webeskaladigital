import Link from 'next/link'
import { StandardLayout } from '@/components/layout'
import styles from '@/components/sections/Portfolio/PortfolioContent.module.css'
import { createPublicClient } from '@/lib/supabase/server'
import { enMetadata } from '@/lib/i18n'
import { PORTFOLIO_EN, PROJECTS_EN } from '@/lib/en-content'

export const revalidate = 3600

export const metadata = enMetadata(
  '/portfolio',
  'Portfolio',
  'Live projects: a London bass label site with 413 releases, a breakbeat archive, a B2B shop in 7 languages and more.'
)

type Row = { slug: string; featured_image: string | null; website_url: string | null; project_date: string | null }

const COLORS = ['#ff6b35', '#4a7c9b', '#e84a23', '#1e3a5f']

async function loadRows(): Promise<Record<string, Row>> {
  try {
    const { data } = await createPublicClient()
      .from('portfolio_projects')
      .select('slug, featured_image, website_url, project_date')
      .in('slug', PROJECTS_EN.map((p) => p.slug))
      .eq('published', true)
    return Object.fromEntries((data ?? []).map((r: Row) => [r.slug, r]))
  } catch {
    return {}
  }
}

export default async function EnglishPortfolioPage() {
  const rows = await loadRows()
  const groups = [
    { title: PORTFOLIO_EN.music, projects: PROJECTS_EN.filter((p) => p.music) },
    { title: PORTFOLIO_EN.other, projects: PROJECTS_EN.filter((p) => !p.music) },
  ]

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

      {groups.map((group, g) => (
        <section key={group.title} className={styles.projectsSection}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 1.5rem' }}>
            {group.title}
          </h2>
          <div className={styles.projectsGrid}>
            {group.projects.map((project, i) => {
              const row = rows[project.slug]
              const color = COLORS[(g * 2 + i) % COLORS.length]
              const external = row?.website_url
              const cardHref = external || `/portfolio/${project.slug}`
              const year = row?.project_date ? new Date(row.project_date).getFullYear() : null
              return (
                <a
                  key={project.slug}
                  href={cardHref}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={styles.projectCard}
                  style={{ '--project-color': color } as React.CSSProperties}
                >
                  <div className={styles.projectVisual}>
                    {row?.featured_image ? (
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
      ))}

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
