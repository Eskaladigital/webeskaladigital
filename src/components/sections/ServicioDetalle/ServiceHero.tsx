'use client'

import styles from './ServiceHero.module.css'
import Link from 'next/link'
import { generateServiceBreadcrumb } from '@/lib/site'
import { heroStripes, href, type Lang } from '@/lib/i18n'
import { SERVICE_SECTIONS_EN } from '@/lib/en-content'

interface ServiceHeroProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  stripeColor: number
  jsonLdName?: string
  jsonLdSlug?: string
  lang?: Lang
}

export default function ServiceHero({
  badge,
  title,
  titleHighlight,
  description,
  jsonLdName,
  jsonLdSlug,
  lang = 'es',
}: ServiceHeroProps) {
  const breadcrumbJsonLd =
    jsonLdName && jsonLdSlug ? generateServiceBreadcrumb(jsonLdName, jsonLdSlug) : null
  const en = lang === 'en'

  return (
    <section className={styles.hero}>
      {breadcrumbJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      ) : null}
      <div className={styles.heroStripes}>
        {heroStripes(lang).map((stripe, index) => (
          <Link key={index} href={stripe.href}>
            <span className={styles.heroStripeLabel}>{stripe.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.heroContent}>
        <Link href={href('/servicios', lang)} className={styles.backLink}>
          {en ? SERVICE_SECTIONS_EN.back : '← Volver a servicios'}
        </Link>
        <div className={styles.heroBadge}>{badge}</div>
        <h1 className={styles.heroTitle}>
          {title} <span>{titleHighlight}</span>
        </h1>
        <p className={styles.heroDesc}>{description}</p>
        <div className={styles.heroButtons}>
          <Link href={href('/contacto', lang)} className={`${styles.btn} ${styles.btnPrimary}`}>
            {en ? SERVICE_SECTIONS_EN.quote : 'Solicitar presupuesto →'}
          </Link>
          <Link href={href('/portfolio', lang)} className={`${styles.btn} ${styles.btnSecondary}`}>
            {en ? SERVICE_SECTIONS_EN.projects : 'Ver proyectos'}
          </Link>
        </div>
      </div>
    </section>
  )
}
