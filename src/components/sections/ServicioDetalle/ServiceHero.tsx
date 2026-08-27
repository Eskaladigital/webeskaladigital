'use client'

import styles from './ServiceHero.module.css'
import Link from 'next/link'
import { generateServiceBreadcrumb } from '@/lib/site'

interface ServiceHeroProps {
  badge: string
  title: string
  titleHighlight: string
  description: string
  stripeColor: number
  jsonLdName?: string
  jsonLdSlug?: string
}

const stripes = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/quienes-somos' },
  { label: 'Método', href: '/metodologia' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Éxitos', href: '/exitos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

export default function ServiceHero({
  badge,
  title,
  titleHighlight,
  description,
  jsonLdName,
  jsonLdSlug,
}: ServiceHeroProps) {
  const breadcrumbJsonLd =
    jsonLdName && jsonLdSlug ? generateServiceBreadcrumb(jsonLdName, jsonLdSlug) : null

  return (
    <section className={styles.hero}>
      {breadcrumbJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      ) : null}
      <div className={styles.heroStripes}>
        {stripes.map((stripe, index) => (
          <Link key={index} href={stripe.href}>
            <span className={styles.heroStripeLabel}>{stripe.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.heroContent}>
        <Link href="/servicios" className={styles.backLink}>
          ← Volver a servicios
        </Link>
        <div className={styles.heroBadge}>{badge}</div>
        <h1 className={styles.heroTitle}>
          {title} <span>{titleHighlight}</span>
        </h1>
        <p className={styles.heroDesc}>{description}</p>
        <div className={styles.heroButtons}>
          <Link href="/contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
            Solicitar presupuesto →
          </Link>
          <Link href="/portfolio" className={`${styles.btn} ${styles.btnSecondary}`}>
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}











