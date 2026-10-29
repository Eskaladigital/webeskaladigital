'use client'

import styles from './Hero.module.css'
import Link from 'next/link'
import { heroStripes, href, type Lang } from '@/lib/i18n'
import { ABOUT_EN } from '@/lib/en-content'

export default function Hero({ lang = 'es' }: { lang?: Lang }) {
  const en = ABOUT_EN.hero
  return (
    <section className={styles.hero} id="nosotros">
      {/* Franjas interactivas como en home */}
      <div className={styles.heroStripes}>
        {heroStripes(lang).map((stripe, index) => (
          <Link key={index} href={stripe.href}>
            <span className={styles.heroStripeLabel}>{stripe.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>{lang === 'en' ? en.badge : 'Desde 2020 en Murcia'}</div>
        <h1 className={styles.heroTitle}>
          {lang === 'en' ? en.title : 'Quiénes'} <span>{lang === 'en' ? en.titleSpan : 'somos'}</span>
        </h1>
        {lang === 'en' ? (
          <p className={styles.heroDesc}>{en.desc}</p>
        ) : (
          <p className={styles.heroDesc}>
            Somos el equipo de ESKALA. Desde 2020 trabajamos con pymes de Murcia en{' '}
            <strong>SEO local</strong>, <strong>diseño web</strong>, <strong>redes sociales</strong> y{' '}
            <strong>Google Ads</strong>. Sin postureo: brief claro, ejecución y números que se pueden
            mirar juntos.
          </p>
        )}
        <div className={styles.heroButtons}>
          <Link href={href('/contacto', lang)} className={`${styles.btn} ${styles.btnPrimary}`}>
            {lang === 'en' ? en.primary : 'Hablemos de tu proyecto →'}
          </Link>
          <Link href={href('/servicios', lang)} className={`${styles.btn} ${styles.btnSecondary}`}>
            {lang === 'en' ? en.secondary : 'Nuestros servicios'}
          </Link>
        </div>
      </div>
    </section>
  )
}
