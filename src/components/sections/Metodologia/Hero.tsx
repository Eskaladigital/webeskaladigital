'use client'

import styles from './Hero.module.css'
import Link from 'next/link'
import { heroStripes, href, type Lang } from '@/lib/i18n'
import { METHOD_EN } from '@/lib/en-content'

const ES = {
  badge: '◈ Nuestro Método',
  title: 'Proceso',
  titleSpan: 'claro y efectivo',
  desc: 'Una metodología probada que combina estrategia, creatividad y tecnología para garantizar el éxito de cada proyecto.',
  primary: 'Empezar proyecto →',
  secondary: 'Ver servicios',
}

export default function Hero({ lang = 'es' }: { lang?: Lang }) {
  const t = lang === 'en' ? METHOD_EN.hero : ES
  return (
    <section className={styles.hero}>
      <div className={styles.heroStripes}>
        {heroStripes(lang).map((stripe, index) => (
          <Link key={index} href={stripe.href}>
            <span className={styles.heroStripeLabel}>{stripe.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>{t.badge}</div>
        <h1 className={styles.heroTitle}>
          {t.title} <span>{t.titleSpan}</span>
        </h1>
        <p className={styles.heroDesc}>{t.desc}</p>
        <div className={styles.heroButtons}>
          <Link href={href('/contacto', lang)} className={`${styles.btn} ${styles.btnPrimary}`}>
            {t.primary}
          </Link>
          <Link href={href('/servicios', lang)} className={`${styles.btn} ${styles.btnSecondary}`}>
            {t.secondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
