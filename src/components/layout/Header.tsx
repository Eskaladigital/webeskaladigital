'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { SERVICES, UI, counterpartPath, href, langFromPath } from '@/lib/i18n'
import styles from './Header.module.css'

export function Header() {
  const pathname = usePathname()
  const lang = langFromPath(pathname)
  const t = UI[lang]
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const navLinks = [
    { href: href('/', lang), label: t.home },
    { href: href('/quienes-somos', lang), label: t.about },
    { href: href('/metodologia', lang), label: t.methodology },
    { href: href('/portfolio', lang), label: t.portfolio },
    { href: href('/exitos', lang), label: t.success },
    { href: '/blog', label: t.blog },
  ]
  const services = SERVICES.map((s) => ({
    href: href(`/servicios/${s.slug}`, lang),
    label: t.serviceLabel(s),
    icon: s.icon,
  }))
  const servicesHref = href('/servicios', lang)
  const contactHref = href('/contacto', lang)
  const homeHref = href('/', lang)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (link: string) => {
    if (link === homeHref) return pathname === homeHref
    return pathname.startsWith(link)
  }

  const langSwitch = (
    <Link
      href={counterpartPath(pathname)}
      className={styles.langSwitch}
      hrefLang={lang === 'en' ? 'es' : 'en'}
      title={t.switchTitle}
      onClick={() => setMobileMenuOpen(false)}
    >
      {t.switchLabel}
    </Link>
  )

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link href={homeHref} className={styles.logo}>
        <Image 
          src="/images/logo.png" 
          alt="ESKALA" 
          width={40} 
          height={40}
          className={styles.logoImage}
        />
        <div className={styles.logoText}>
          <span className={styles.logoMain}>ESKALA</span>
          <span className={styles.logoSub}>{t.tagline}</span>
        </div>
      </Link>

      <nav className={styles.nav}>
        {navLinks.slice(0, 3).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
          >
            {link.label}
          </Link>
        ))}

        {/* Dropdown de Servicios */}
        <div 
          className={styles.dropdown}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Link
            href={servicesHref}
            className={`${styles.navLink} ${isActive(servicesHref) ? styles.active : ''}`}
          >
            {t.services}
            <span className={styles.dropdownArrow}>▾</span>
          </Link>
          
          <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownOpen : ''}`}>
            <div className={styles.dropdownHeader}>
              <span>{t.ourServices}</span>
            </div>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={styles.dropdownItem}
              >
                <span className={styles.dropdownIcon}>{service.icon}</span>
                {service.label}
              </Link>
            ))}
            <div className={styles.dropdownFooter}>
              <Link href={servicesHref} className={styles.dropdownViewAll}>
                {t.allServices}
              </Link>
            </div>
          </div>
        </div>

        {navLinks.slice(3).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
          >
            {link.label}
          </Link>
        ))}

        <Link href={contactHref} className={styles.navCta}>
          {t.contactCta}
        </Link>
        {langSwitch}
      </nav>

      <button 
        className={styles.mobileMenuBtn}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={t.menu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Servicios en móvil */}
          <div className={styles.mobileDropdown}>
            <button 
              className={styles.mobileDropdownBtn}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              {t.services}
              <span className={`${styles.mobileArrow} ${mobileServicesOpen ? styles.arrowOpen : ''}`}>▾</span>
            </button>
            {mobileServicesOpen && (
              <div className={styles.mobileDropdownContent}>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={styles.mobileSubLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{service.icon}</span>
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link 
            href={contactHref} 
            className={styles.mobileCta}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.contactCta}
          </Link>
          {langSwitch}
        </div>
      )}
    </header>
  )
}
