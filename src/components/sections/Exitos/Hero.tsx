'use client'

import styles from './Hero.module.css'
import Link from 'next/link'
import { heroStripes, href, type Lang } from '@/lib/i18n'
import { SUCCESS_EN } from '@/lib/en-content'

const ES = {
  badge: '▲ Casos de Éxito',
  title: 'Clientes felices,',
  titleSpan: 'resultados reales',
  desc: 'No vendemos humo. Descubre lo que nuestros clientes dicen sobre trabajar con ESKALA y los resultados que hemos conseguido juntos.',
  primary: 'Únete a ellos →',
  secondary: 'Ver proyectos',
}

export default function Hero({ lang = 'es' }: { lang?: Lang }) {
  const t = lang === 'en' ? SUCCESS_EN.hero : ES
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
          <Link href={href('/portfolio', lang)} className={`${styles.btn} ${styles.btnSecondary}`}>
            {t.secondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
