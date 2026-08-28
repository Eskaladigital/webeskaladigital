import Link from 'next/link'
import styles from './Footer.module.css'
import { CookieSettingsButton } from '@/components/CookieConsentBar'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  formatShortAddress,
} from '@/lib/site'

const SERVICES = [
  { href: '/servicios/diseno-web', label: 'Diseño Web' },
  { href: '/servicios/seo-local', label: 'SEO Local' },
  { href: '/servicios/redes-sociales', label: 'Redes Sociales' },
  { href: '/servicios/google-ads', label: 'Google Ads' },
  { href: '/servicios/apps-ia', label: 'Apps con IA' },
  { href: '/servicios/chatbots', label: 'Chatbots' },
  { href: '/servicios/branding', label: 'Branding' },
  { href: '/servicios/email-marketing', label: 'Email Marketing' },
]

const COMPANY = [
  { href: '/quienes-somos', label: 'Nosotros' },
  { href: '/metodologia', label: 'Metodología' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/exitos', label: 'Éxitos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.stripes}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMain}>ESKALA</span>
            <span className={styles.logoSub}>Marketing Digital</span>
          </Link>
          <p>
            Agencia de marketing digital en Murcia. Llevamos tu negocio al 
            siguiente nivel con estrategia, creatividad y tecnología.
          </p>
        </div>

        <div>
          <h4 className={styles.title}>Servicios</h4>
          <ul className={styles.links}>
            {SERVICES.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Empresa</h4>
          <ul className={styles.links}>
            {COMPANY.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Contacto</h4>
          <ul className={styles.links}>
            <li>📍 {formatShortAddress()}</li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Legal</h4>
          <ul className={styles.links}>
            <li>
              <Link href="/aviso-legal">Aviso legal</Link>
            </li>
            <li>
              <Link href="/politica-privacidad">Política de privacidad</Link>
            </li>
            <li>
              <Link href="/politica-cookies">Política de cookies</Link>
            </li>
            <li>
              <CookieSettingsButton className={styles.linkButton} />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomLinks}>
          <span>© {new Date().getFullYear()} ESKALA Marketing Digital. Todos los derechos reservados.</span>
          <Link href="/sitemap-html" className={styles.sitemapLink}>Mapa del Sitio</Link>
        </div>
        <span className={styles.credit}>
          Hecho con <span className={styles.heart}>❤️</span> en Murcia
          <span className={styles.creditDot}> · </span>
          Web desarrollada por{' '}
          <a href="https://www.eskaladigital.com" target="_blank" rel="noopener noreferrer">
            ESKALA Agencia de Marketing Digital
          </a>
        </span>
      </div>
    </footer>
  )
}
