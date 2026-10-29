'use client'

import { useEffect } from 'react'
import styles from './Results.module.css'
import type { Lang } from '@/lib/i18n'
import { SUCCESS_EN } from '@/lib/en-content'

const results = [
  { metric: '+250%', label: 'Crecimiento medio en tráfico web' },
  { metric: '+180%', label: 'Aumento en conversiones' },
  { metric: '3.2x', label: 'ROI medio para nuestros clientes' },
  { metric: '98%', label: 'Clientes que nos recomiendan' },
]

export default function Results({ lang = 'es' }: { lang?: Lang }) {
  const items = lang === 'en' ? SUCCESS_EN.results : results

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    fadeElements.forEach((el) => fadeObserver.observe(el))
    return () => fadeObserver.disconnect()
  }, [])

  return (
    <>

      <section className={styles.results}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>{lang === 'en' ? SUCCESS_EN.resultsLabel : 'Resultados'}</span>
          <h2 className={styles.sectionTitle}>{lang === 'en' ? SUCCESS_EN.resultsTitle : 'Impacto medible en tu negocio'}</h2>
        </div>
        <div className={styles.resultsGrid}>
          {items.map((result, index) => (
            <div key={index} className={`${styles.resultCard} fade-up`}>
              <div className={styles.resultMetric}>{result.metric}</div>
              <div className={styles.resultLabel}>{result.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
