'use client'

import styles from './Hero.module.css'
import Link from 'next/link'
import EmailContactButton from '@/components/ui/EmailContactButton'
import { CONTACT_EMAIL } from '@/lib/site'
import { heroStripes, type Lang } from '@/lib/i18n'
import { CONTACT_EN } from '@/lib/en-content'

export default function Hero({ lang = 'es' }: { lang?: Lang }) {
  const en = lang === 'en'
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
        <div className={styles.heroBadge}>{en ? CONTACT_EN.hero.badge : '★ Hablemos'}</div>
        <h1 className={styles.heroTitle}>
          {en ? CONTACT_EN.hero.title : 'Cuéntanos'} <span>{en ? CONTACT_EN.hero.titleSpan : 'tu proyecto'}</span>
        </h1>
        <p className={styles.heroDesc}>
          {en
            ? CONTACT_EN.hero.desc
            : 'Estamos aquí para ayudarte a hacer crecer tu negocio. Cuéntanos qué necesitas y te preparamos una propuesta personalizada sin compromiso.'}
        </p>
        <div className={styles.heroButtons}>
          <Link href="#formulario" className={`${styles.btn} ${styles.btnPrimary}`}>
            {en ? CONTACT_EN.hero.primary : 'Enviar mensaje ↓'}
          </Link>
          {en ? (
            <a href={`mailto:${CONTACT_EMAIL}`} className={`${styles.btn} ${styles.btnSecondary}`}>
              📧 {CONTACT_EMAIL}
            </a>
          ) : (
            <EmailContactButton 
              variant="secondary"
              subject="Consulta desde la página de contacto"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              📧 Email directo
            </EmailContactButton>
          )}
        </div>
      </div>
    </section>
  )
}
