'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { NAV_ITEMS, LIGHT_STRIPES, STRIPE_COLORS } from '@/types'
import { heroStripes, langFromPath } from '@/lib/i18n'
import styles from './StripeNav.module.css'

interface StripeNavProps {
  position: 'left' | 'right'
}

export function StripeNav({ position }: StripeNavProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [expandedStripe, setExpandedStripe] = useState<string | null>(null)
  const lang = langFromPath(pathname)
  const items =
    lang === 'en'
      ? NAV_ITEMS.map((item, i) => ({ ...item, ...heroStripes('en')[i] }))
      : NAV_ITEMS

  const isActive = (href: string) => {
    if (href === '/' || href === '/en') return pathname === href
    return pathname.startsWith(href)
  }

  const handleStripeClick = (e: React.MouseEvent, href: string) => {
    // Solo aplicar lógica de doble tap en móvil
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      e.preventDefault() // Prevenir navegación por defecto
      
      if (expandedStripe === href) {
        // Segundo tap en la misma franja, navegar
        router.push(href)
      } else {
        // Primer tap, expandir franja
        setExpandedStripe(href)
      }
    }
    // En desktop, el Link funciona normalmente (navegación directa)
  }

  return (
    <nav className={`${styles.stripeNav} ${styles[position]}`}>
      {items.map((item) => {
        const isLightStripe = LIGHT_STRIPES.includes(item.stripeNumber)
        const active = isActive(item.href)
        const expanded = expandedStripe === item.href
        
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleStripeClick(e, item.href)}
            className={`${styles.stripe} ${active ? styles.active : ''} ${expanded ? styles.expanded : ''}`}
            style={{ 
              backgroundColor: STRIPE_COLORS[item.stripeNumber as keyof typeof STRIPE_COLORS] 
            }}
            data-stripe={item.stripeNumber}
          >
            <span 
              className={styles.label}
              style={{ 
                color: isLightStripe ? 'var(--text)' : 'white',
                textShadow: isLightStripe ? 'none' : '0 1px 3px rgba(0,0,0,0.3)'
              }}
            >
              {item.label}
            </span>
            {active && (
              <span 
                className={styles.activeIndicator}
                style={{
                  backgroundColor: isLightStripe ? 'var(--text)' : 'white'
                }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
