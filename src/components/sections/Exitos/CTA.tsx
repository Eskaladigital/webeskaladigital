'use client'

import styles from './CTA.module.css'
import Link from 'next/link'
import { href, type Lang } from '@/lib/i18n'
import { SUCCESS_EN } from '@/lib/en-content'

const ES = {
  title: '¿Listo para <span>tu historia de éxito</span>?',
  text: 'Empieza hoy mismo',
  button: 'Contáctanos →',
}

export default function CTA({ lang = 'es' }: { lang?: Lang }) {
  const t = lang === 'en' ? SUCCESS_EN.cta : ES
  return (
    <section className={styles.cta}>
      <div className={styles.ctaStripes}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
      <h2 className="fade-up" dangerouslySetInnerHTML={{ __html: t.title }} />
      <p className={`${styles.ctaEmail} fade-up`}>{t.text}</p>
      <Link href={href('/contacto', lang)} className={`${styles.ctaBtn} fade-up`}>
        {t.button}
      </Link>
    </section>
  )
}
