'use client'

import { useEffect } from 'react'
import styles from './Process.module.css'
import { Search, Target, Zap, BarChart3, Rocket, RefreshCw, type LucideIcon } from 'lucide-react'
import type { Lang } from '@/lib/i18n'
import { METHOD_EN } from '@/lib/en-content'

const steps: { number: string; title: string; desc: string; Icon: LucideIcon }[] = [
  {
    number: '01',
    title: 'Análisis',
    desc: 'Estudiamos tu negocio, competencia y audiencia para entender tu situación actual y objetivos.',
    Icon: Search,
  },
  {
    number: '02',
    title: 'Estrategia',
    desc: 'Diseñamos un plan personalizado con KPIs claros y acciones concretas para alcanzar tus metas.',
    Icon: Target,
  },
  {
    number: '03',
    title: 'Ejecución',
    desc: 'Implementamos la estrategia con agilidad, creatividad y las mejores herramientas del mercado.',
    Icon: Zap,
  },
  {
    number: '04',
    title: 'Medición',
    desc: 'Monitorizamos resultados en tiempo real y optimizamos continuamente para maximizar el ROI.',
    Icon: BarChart3,
  },
  {
    number: '05',
    title: 'Escalado',
    desc: 'Identificamos oportunidades de crecimiento y escalamos las acciones que más funcionan.',
    Icon: Rocket,
  },
  {
    number: '06',
    title: 'Mejora',
    desc: 'Iteramos constantemente basándonos en datos para seguir mejorando tus resultados.',
    Icon: RefreshCw,
  },
]

export default function Process({ lang = 'es' }: { lang?: Lang }) {
  const items =
    lang === 'en' ? steps.map((step, i) => ({ ...step, ...METHOD_EN.steps[i] })) : steps
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    fadeElements.forEach((el) => fadeObserver.observe(el))
    return () => fadeObserver.disconnect()
  }, [])

  return (
    <section className={styles.process}>
      <div className={`${styles.sectionHeader} fade-up`}>
        <span className={styles.sectionLabel}>{lang === 'en' ? METHOD_EN.processLabel : 'Cómo trabajamos'}</span>
        <h2 className={styles.sectionTitle}>{lang === 'en' ? METHOD_EN.processTitle : '6 pasos hacia el éxito'}</h2>
      </div>
      <div className={styles.processGrid}>
        {items.map((step, index) => (
          <div key={index} className={`${styles.stepCard} fade-up`}>
            <div className={styles.stepIcon}>
              <step.Icon size={36} strokeWidth={2} aria-hidden="true" />
            </div>
            <div className={styles.stepNumber}>{step.number}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
