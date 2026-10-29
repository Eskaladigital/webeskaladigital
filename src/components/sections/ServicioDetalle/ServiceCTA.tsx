'use client'

import Link from 'next/link'
import styles from './ServiceCTA.module.css'
import { CONTACT_PHONE_TEL } from '@/lib/site'
import { href, type Lang } from '@/lib/i18n'
import { SERVICE_SECTIONS_EN } from '@/lib/en-content'

interface ServiceCTAProps {
  title: string
  subtitle: string
  lang?: Lang
}

export default function ServiceCTA({ title, subtitle, lang = 'es' }: ServiceCTAProps) {
  const en = lang === 'en'
  return (
    <>

      <section className={styles.cta}>
        <div className={styles.ctaDecor}></div>
        <div className={`${styles.ctaContent} fade-up`}>
          <h2 className={styles.ctaTitle}>{title}</h2>
          <p className={styles.ctaDesc}>{subtitle}</p>
          <div className={styles.ctaButtons}>
            <Link href={href('/contacto', lang)} className={`${styles.btn} ${styles.btnPrimary}`}>
              {en ? SERVICE_SECTIONS_EN.quote : 'Solicitar presupuesto →'}
            </Link>
            <a href={`tel:${CONTACT_PHONE_TEL}`} className={`${styles.btn} ${styles.btnSecondary}`}>
              {en ? SERVICE_SECTIONS_EN.call : '📞 Llamar ahora'}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
