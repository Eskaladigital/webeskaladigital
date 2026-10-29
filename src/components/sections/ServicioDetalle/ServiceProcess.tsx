'use client'

import styles from './ServiceProcess.module.css'
import type { Lang } from '@/lib/i18n'
import { SERVICE_SECTIONS_EN } from '@/lib/en-content'

interface Step {
  step: string
  title: string
  description: string
}

interface ServiceProcessProps {
  steps: Step[]
  lang?: Lang
}

export default function ServiceProcess({ steps, lang = 'es' }: ServiceProcessProps) {
  const en = lang === 'en'
  return (
    <>

      <section className={styles.process}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>{en ? SERVICE_SECTIONS_EN.processLabel : 'Metodología'}</span>
          <h2 className={styles.sectionTitle}>{en ? SERVICE_SECTIONS_EN.processTitle : 'Cómo trabajamos'}</h2>
        </div>
        <div className={styles.processSteps}>
          {steps.map((item, index) => (
            <div key={index} className={`${styles.processStep} fade-up`}>
              <div className={styles.stepNumber}>{item.step}</div>
              <div className={styles.stepContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.stepConnector}></div>}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}











