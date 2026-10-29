'use client'

import styles from './ServiceBenefits.module.css'
import type { Lang } from '@/lib/i18n'
import { SERVICE_SECTIONS_EN } from '@/lib/en-content'

interface Benefit {
  title: string
  description: string
}

interface ServiceBenefitsProps {
  benefits: Benefit[]
  lang?: Lang
}

export default function ServiceBenefits({ benefits, lang = 'es' }: ServiceBenefitsProps) {
  const en = lang === 'en'
  return (
    <>

      <section className={styles.benefits}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>{en ? SERVICE_SECTIONS_EN.benefitsLabel : 'Ventajas'}</span>
          <h2 className={styles.sectionTitle}>{en ? SERVICE_SECTIONS_EN.benefitsTitle : 'Por qué lo necesitas'}</h2>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={`${styles.benefitCard} fade-up`}>
              <div className={styles.benefitNumber}>{String(index + 1).padStart(2, '0')}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDesc}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}











