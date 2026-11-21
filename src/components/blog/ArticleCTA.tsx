'use client'

import Link from 'next/link'
import styles from './ArticleCTA.module.css'

const SERVICE_LINKS = [
  { href: '/servicios/seo-local', label: 'SEO Local en Murcia' },
  { href: '/servicios/google-ads', label: 'Agencia Google Ads Murcia' },
  { href: '/servicios/chatbots', label: 'Chatbots con IA' },
  { href: '/servicios/diseno-web', label: 'Diseño Web Murcia' },
] as const

export default function ArticleCTA() {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <div className={styles.ctaText}>
          <h3 className={styles.ctaTitle}>¿Quieres aplicar esto en tu negocio en Murcia?</h3>
          <p className={styles.ctaDescription}>
            En ESKALA Marketing Digital ayudamos a empresas con posicionamiento SEO, campañas de Google Ads,
            diseño web orientado a conversión y chatbots con IA.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.25rem' }}>
          {SERVICE_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '0.5rem 0.95rem',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.18)',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                color: '#ffffff',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.ctaAlternative}>
        <p className={styles.ctaAlternativeText}>¿Necesitas una auditoría gratuita de tu web o campañas?</p>
        <Link href="/contacto" className={styles.ctaAlternativeLink}>
          Solicitar auditoría →
        </Link>
      </div>
    </div>
  )
}

