import Link from 'next/link'
import styles from './Footer.module.css'
import { CookieSettingsButton } from '@/components/CookieConsentBar'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  LEGAL_OWNER,
  formatShortAddress,
} from '@/lib/site'
import { SERVICES, UI, href, type Lang } from '@/lib/i18n'

export function Footer({ lang = 'es' }: { lang?: Lang }) {
  const t = UI[lang]
  const services = SERVICES.map((s) => ({
    href: href(`/servicios/${s.slug}`, lang),
    label: t.serviceLabel(s),
  }))
  const company = [
    { href: href('/quienes-somos', lang), label: t.about },
    { href: href('/metodologia', lang), label: t.methodology },
    { href: href('/portfolio', lang), label: t.portfolio },
    { href: href('/exitos', lang), label: t.success },
    { href: '/blog', label: t.blog },
    { href: href('/contacto', lang), label: t.contact },
  ]

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
          <Link href={href('/', lang)} className={styles.logo}>
            <span className={styles.logoMain}>ESKALA</span>
            <span className={styles.logoSub}>{t.tagline}</span>
          </Link>
          <p>{t.footerAbout}</p>
        </div>

        <div>
          <h4 className={styles.title}>{t.services}</h4>
          <ul className={styles.links}>
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>{t.company}</h4>
          <ul className={styles.links}>
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>{t.contact}</h4>
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
          <h4 className={styles.title}>{t.legal}</h4>
          <ul className={styles.links}>
            <li>
              <Link href="/aviso-legal">{t.legalNotice}</Link>
            </li>
            <li>
              <Link href="/politica-privacidad">{t.privacy}</Link>
            </li>
            <li>
              <Link href="/politica-cookies">{t.cookies}</Link>
            </li>
            <li>
              <CookieSettingsButton className={styles.linkButton} label={t.cookieSettings} />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomLinks}>
          <span>© {new Date().getFullYear()} {LEGAL_OWNER.brand}, {t.brandOf} {LEGAL_OWNER.name} (NIF {LEGAL_OWNER.nif}). {t.rights}</span>
          <Link href="/sitemap-html" className={styles.sitemapLink}>{t.sitemap}</Link>
        </div>
        <span className={styles.credit}>
          {t.madeIn} <span className={styles.heart}>❤️</span> {t.madeInPlace}
          <span className={styles.creditDot}> · </span>
          {t.builtBy}{' '}
          <a href="https://www.eskaladigital.com" target="_blank" rel="noopener noreferrer">
            {t.builtByName}
          </a>
        </span>
      </div>
    </footer>
  )
}
