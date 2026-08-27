'use client'

import styles from './ContactInfo.module.css'
import { Mail, Phone, MapPin, type LucideIcon } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  formatShortAddress,
} from '@/lib/site'

const contactMethods: {
  Icon: LucideIcon
  title: string
  info: string
  desc: string
  href?: string
}[] = [
  {
    Icon: Mail,
    title: 'Email',
    info: CONTACT_EMAIL,
    desc: 'Respuesta en menos de 24h',
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    Icon: Phone,
    title: 'Teléfono',
    info: CONTACT_PHONE,
    desc: 'Lun-Vie 9:00-18:00',
    href: `tel:${CONTACT_PHONE_TEL}`,
  },
  {
    Icon: MapPin,
    title: 'Ubicación',
    info: formatShortAddress(),
    desc: 'Atención presencial con cita',
  },
]

export default function ContactInfo() {
  return (
    <>

      <section className={styles.contactInfo}>
        <div className={`${styles.sectionHeader} fade-up`}>
          <span className={styles.sectionLabel}>Otras formas de contactar</span>
          <h2 className={styles.sectionTitle}>Estamos aquí para ti</h2>
        </div>
        <div className={styles.methodsGrid}>
          {contactMethods.map((method, index) => (
            <div key={index} className={`${styles.methodCard} fade-up`}>
              <div className={styles.methodIcon}>
                <method.Icon size={30} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className={styles.methodTitle}>{method.title}</h3>
              {method.href ? (
                <a href={method.href} className={styles.methodInfo}>
                  {method.info}
                </a>
              ) : (
                <p className={styles.methodInfo}>{method.info}</p>
              )}
              <p className={styles.methodDesc}>{method.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}






