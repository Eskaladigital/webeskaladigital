'use client'

import styles from './Hero.module.css'
import Link from 'next/link'

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

export default function Hero() {
  return (
    <section className={styles.hero} id="nosotros">
      {/* Franjas interactivas como en home */}
      <div className={styles.heroStripes}>
        {stripes.map((stripe, index) => (
          <Link key={index} href={stripe.href}>
            <span className={styles.heroStripeLabel}>{stripe.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>Desde 2020 en Murcia</div>
        <h1 className={styles.heroTitle}>
          Quiénes <span>somos</span>
        </h1>
        <p className={styles.heroDesc}>
          Somos el equipo de ESKALA. Desde 2020 trabajamos con pymes de Murcia en{' '}
          <strong>SEO local</strong>, <strong>diseño web</strong>, <strong>redes sociales</strong> y{' '}
          <strong>Google Ads</strong>. Sin postureo: brief claro, ejecución y números que se pueden
          mirar juntos.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
            Hablemos de tu proyecto →
          </Link>
          <Link href="/servicios" className={`${styles.btn} ${styles.btnSecondary}`}>
            Nuestros servicios
          </Link>
        </div>
      </div>
    </section>
  )
}











