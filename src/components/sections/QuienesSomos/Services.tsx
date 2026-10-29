'use client'

import styles from './Services.module.css'
import { Monitor, Search, Share2, Target, Cpu, Bot, Palette, Mail, type LucideIcon } from 'lucide-react'
import { SERVICES, type Lang } from '@/lib/i18n'
import { ABOUT_EN } from '@/lib/en-content'

const services: { slug: string; Icon: LucideIcon; title: string; desc: string }[] = [
  { slug: 'diseno-web', Icon: Monitor, title: 'Diseño Web', desc: 'Webs modernas que convierten visitantes en clientes.' },
  { slug: 'seo-local', Icon: Search, title: 'SEO Local', desc: 'Domina las búsquedas en Murcia y alrededores.' },
  { slug: 'redes-sociales', Icon: Share2, title: 'Redes Sociales', desc: 'Contenido que conecta con tu audiencia.' },
  { slug: 'google-ads', Icon: Target, title: 'Google Ads', desc: 'Campañas optimizadas para máximo ROI.' },
  { slug: 'apps-ia', Icon: Cpu, title: 'Apps con IA', desc: 'Automatización inteligente para tu negocio.' },
  { slug: 'chatbots', Icon: Bot, title: 'Chatbots', desc: 'Atención al cliente 24/7 con inteligencia artificial.' },
  { slug: 'branding', Icon: Palette, title: 'Branding', desc: 'Identidades de marca memorables.' },
  { slug: 'email-marketing', Icon: Mail, title: 'Email Marketing', desc: 'Emails que se abren y convierten.' },
]

export default function Services({ lang = 'es' }: { lang?: Lang }) {
  const items =
    lang === 'en'
      ? services.map((s) => ({
          ...s,
          title: SERVICES.find((x) => x.slug === s.slug)!.enLabel,
          desc: ABOUT_EN.services[s.slug],
        }))
      : services
  return (
    <section className={styles.services} id="servicios">
      <div className={`${styles.sectionHeader} fade-up`}>
        <span className={styles.sectionLabel}>{lang === 'en' ? ABOUT_EN.servicesLabel : 'Nuestros servicios'}</span>
        <h2 className={styles.sectionTitle}>{lang === 'en' ? ABOUT_EN.servicesTitle : 'Todo lo que necesitas para crecer'}</h2>
      </div>
      <div className={styles.servicesGrid}>
        {items.map((service, index) => (
          <div key={index} className={`${styles.serviceCard} fade-up`}>
            <div className={styles.serviceIcon}>
              <service.Icon size={24} strokeWidth={2} aria-hidden="true" />
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
