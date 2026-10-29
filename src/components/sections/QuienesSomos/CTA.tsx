'use client'

import Link from 'next/link'
import styles from './CTA.module.css'
import EmailContactButton from '@/components/ui/EmailContactButton'
import { href, type Lang } from '@/lib/i18n'
import { ABOUT_EN } from '@/lib/en-content'

export default function CTA({ lang = 'es' }: { lang?: Lang }) {
  return (
    <section className={styles.cta} id="contacto">
      <div className={styles.ctaStripes}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {lang === 'en' ? (
        <>
          <h2 className="fade-up" dangerouslySetInnerHTML={{ __html: ABOUT_EN.cta.title }} />
          <p className={`${styles.ctaEmail} fade-up`}>{ABOUT_EN.cta.text}</p>
          <Link href={href('/contacto', lang)} className={`${styles.ctaBtn} fade-up`}>
            {ABOUT_EN.cta.button}
          </Link>
        </>
      ) : (
        <>
          <h2 className="fade-up">
            ¿Listo para <span>escalar</span>?
          </h2>
          <p className={`${styles.ctaEmail} fade-up`}>contacto@eskaladigital.com</p>
          <EmailContactButton 
            variant="primary"
            subject="Consulta desde Quiénes Somos"
            className={`${styles.ctaBtn} fade-up`}
          >
            Hablemos →
          </EmailContactButton>
        </>
      )}
    </section>
  )
}
