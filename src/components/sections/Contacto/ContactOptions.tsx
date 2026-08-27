/**
 * Canales directos (mail, WhatsApp, teléfono) además del formulario.
 */

'use client'

import { useEffect } from 'react'
import styles from './ContactOptions.module.css'
import EmailContactButton from '@/components/ui/EmailContactButton'
import { Mail, MessageCircle, Phone, Instagram, Facebook, Linkedin, Twitter, Zap, type LucideIcon } from 'lucide-react'

const contactOptions: {
  Icon: LucideIcon
  title: string
  description: string
  action: string
  email?: string
  link?: string
  info?: string
}[] = [
  {
    Icon: Mail,
    title: 'Email Directo',
    description: 'Escríbenos un email y te respondemos en menos de 24h',
    action: 'email',
    email: 'contacto@eskaladigital.com',
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Si prefieres escribir al móvil, el mismo número de la agencia',
    action: 'whatsapp',
    link: 'https://wa.me/34626823404?text=Hola,%20me%20gustaría%20información%20sobre...',
  },
  {
    Icon: Phone,
    title: 'Teléfono',
    description: 'Llámanos de Lun-Vie de 9:00 a 18:00',
    action: 'phone',
    link: 'tel:+34626823404',
    info: '+34 626 82 34 04',
  },
]

const socialLinks: { name: string; Icon: LucideIcon; url: string; color: string }[] = [
  {
    name: 'Instagram',
    Icon: Instagram,
    url: 'https://instagram.com/eskalamarketing',
    color: '#E1306C',
  },
  {
    name: 'Facebook',
    Icon: Facebook,
    url: 'https://facebook.com/eskalamarketing',
    color: '#1877F2',
  },
  {
    name: 'LinkedIn',
    Icon: Linkedin,
    url: 'https://linkedin.com/company/eskala-marketing',
    color: '#0A66C2',
  },
  {
    name: 'Twitter',
    Icon: Twitter,
    url: 'https://twitter.com/eskalamarketing',
    color: '#1DA1F2',
  },
]

export default function ContactOptions() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    fadeElements.forEach((el) => fadeObserver.observe(el))
    return () => fadeObserver.disconnect()
  }, [])

  return (
    <section className={styles.contactOptions} id="contacto">
      {/* Header */}
      <div className={`${styles.header} fade-up`}>
        <span className={styles.label}>También por canal directo</span>
        <h2 className={styles.title}>
          ¿Prefieres <span>escribir o llamar</span>?
        </h2>
        <p className={styles.subtitle}>
          Si no quieres rellenar el formulario, elige la forma que más cómoda te resulte.
        </p>
      </div>

      {/* Opciones de contacto principales */}
      <div className={styles.optionsGrid}>
        {contactOptions.map((option, index) => (
          <div key={index} className={`${styles.optionCard} fade-up`}>
            <div className={styles.optionIcon}>
              <option.Icon size={32} strokeWidth={2} aria-hidden="true" />
            </div>
            <h3 className={styles.optionTitle}>{option.title}</h3>
            <p className={styles.optionDescription}>{option.description}</p>
            
            {option.action === 'email' && (
              <>
                <div className={styles.optionInfo}>{option.email}</div>
                <EmailContactButton 
                  variant="primary"
                  subject="Consulta desde la página de contacto"
                  email={option.email}
                  className={styles.optionButton}
                >
                  Enviar Email
                </EmailContactButton>
              </>
            )}

            {option.action === 'whatsapp' && (
              <>
                <div className={styles.optionInfo}>+34 626 82 34 04</div>
                <a 
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.optionButton} ${styles.whatsapp}`}
                >
                  Abrir WhatsApp
                </a>
              </>
            )}

            {option.action === 'phone' && (
              <>
                <div className={styles.optionInfo}>{option.info}</div>
                <a 
                  href={option.link}
                  className={`${styles.optionButton} ${styles.phone}`}
                >
                  Llamar Ahora
                </a>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Redes Sociales */}
      <div className={`${styles.socialSection} fade-up`}>
        <h3 className={styles.socialTitle}>También estamos en redes sociales</h3>
        <div className={styles.socialGrid}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              style={{ '--social-color': social.color } as React.CSSProperties}
            >
              <span className={styles.socialIcon}>
                <social.Icon size={26} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className={styles.socialName}>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Info adicional */}
      <div className={`${styles.infoBox} fade-up`}>
        <div className={styles.infoIcon}>
          <Zap size={28} strokeWidth={2} aria-hidden="true" />
        </div>
        <div className={styles.infoContent}>
          <h4>Respuesta rápida garantizada</h4>
          <p>
            Normalmente respondemos en <strong>menos de 2 horas</strong> en horario laboral.
            Los fines de semana, el lunes a primera hora. ¡Prometido!
          </p>
        </div>
      </div>
    </section>
  )
}

