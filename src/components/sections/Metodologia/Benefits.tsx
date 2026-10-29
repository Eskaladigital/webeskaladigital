'use client'

import styles from './Benefits.module.css'
import { Gem, TrendingUp, Bot, type LucideIcon } from 'lucide-react'
import type { Lang } from '@/lib/i18n'
import { METHOD_EN } from '@/lib/en-content'

const benefits: { title: string; desc: string; Icon: LucideIcon }[] = [
  {
    title: 'Transparencia Total',
    desc: 'Reportes claros, acceso a todas las herramientas y comunicación constante. Sin sorpresas.',
    Icon: Gem,
  },
  {
    title: 'Resultados Medibles',
    desc: 'KPIs definidos desde el día 1. Medimos todo y optimizamos basándonos en datos reales.',
    Icon: TrendingUp,
  },
  {
    title: 'Tecnología Punta',
    desc: 'Usamos IA y las mejores herramientas del mercado para maximizar tu inversión.',
    Icon: Bot,
  },
]

export default function Benefits({ lang = 'es' }: { lang?: Lang }) {
  const items =
    lang === 'en' ? benefits.map((b, i) => ({ ...b, ...METHOD_EN.benefits[i] })) : benefits
  return (
    <>

      <section className={styles.benefits}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>{lang === 'en' ? METHOD_EN.benefitsLabel : 'Ventajas'}</span>
          <h2 className={styles.sectionTitle}>{lang === 'en' ? METHOD_EN.benefitsTitle : 'Por qué nuestra metodología funciona'}</h2>
        </div>
        <div className={styles.benefitsGrid}>
          {items.map((benefit, index) => (
            <div key={index} className={`${styles.benefitCard} fade-up`}>
              <div className={styles.benefitIcon}>
                <benefit.Icon size={32} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDesc}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}











