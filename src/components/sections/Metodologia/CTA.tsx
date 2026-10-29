'use client'

import styles from './CTA.module.css'
import Link from 'next/link'
import { href, type Lang } from '@/lib/i18n'
import { METHOD_EN } from '@/lib/en-content'

const ES = {
  title: '¿Empezamos a <span>trabajar juntos</span>?',
  text: 'Cuéntanos tu proyecto',
  button: 'Contactar →',
}

export default function CTA({ lang = 'es' }: { lang?: Lang }) {
  const t = lang === 'en' ? METHOD_EN.cta : ES
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
