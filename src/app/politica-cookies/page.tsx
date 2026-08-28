import { StandardLayout } from '@/components/layout'
import type { Metadata } from 'next'
import styles from '../politica-privacidad/legal.module.css'
import { CookieSettingsButton } from '@/components/CookieConsentBar'
import { CONTACT_EMAIL, CONTACT_PHONE, formatFullAddress } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Cookies | ESKALA Marketing Digital',
  description:
    'Política de cookies de ESKALA Marketing Digital. Tipos de cookies, finalidad y cómo configurar tu consentimiento.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticaCookies() {
  return (
    <StandardLayout>
      <div className={styles.legalPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Política de Cookies</h1>
          <p className={styles.updated}>Última actualización: Agosto 2026</p>

          <section className={styles.section}>
            <h2>1. Qué son las cookies</h2>
            <p>
              Las cookies son pequeños archivos de texto que un sitio web almacena en tu
              dispositivo para recordar información sobre tu visita. En ESKALA Marketing
              Digital las usamos para el funcionamiento técnico del sitio y, solo si lo
              aceptas, para medir visitas y campañas.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Responsable</h2>
            <p>
              <strong>ESKALA Marketing Digital</strong>
              <br />
              Dirección: {formatFullAddress()}
              <br />
              Email: {CONTACT_EMAIL}
              <br />
              Teléfono: {CONTACT_PHONE}
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Categorías</h2>
            <ul>
              <li>
                <strong>Necesarias:</strong> esenciales para el sitio y para recordar tu
                consentimiento. No se pueden desactivar.
              </li>
              <li>
                <strong>Analíticas:</strong> Google Analytics 4. Miden páginas visitadas y
                origen del tráfico. Solo se activan con tu consentimiento.
              </li>
              <li>
                <strong>Marketing:</strong> Google Ads / GTM. Miden campañas. Solo se
                activan con tu consentimiento.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Base legal</h2>
            <p>
              Las cookies estrictamente necesarias se basan en el interés legítimo
              (funcionamiento del sitio). El resto requiere tu consentimiento previo,
              conforme al RGPD y la LSSI.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Cómo configurarlas</h2>
            <p>
              Puedes cambiar tus preferencias en cualquier momento desde el botón
              siguiente o desde el pie de esta web. También puedes bloquear cookies en
              tu navegador; algunas funciones pueden dejar de funcionar.
            </p>
            <p>
              <CookieSettingsButton className={styles.cookieBtn} />
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Más información</h2>
            <p>
              El tratamiento de datos personales se detalla en la{' '}
              <a href="/politica-privacidad">Política de Privacidad</a>. Para
              consultas: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </StandardLayout>
  )
}
