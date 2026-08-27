'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Sora } from 'next/font/google'
import { Monitor, Search, Share2, Target, Cpu, Bot, Palette, Mail, type LucideIcon } from 'lucide-react'
import styles from './HomeStripes.module.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
})

interface SectionLink {
  label: string
  href: string
  ghost?: boolean
}

interface Section {
  id: string
  route: string
  t: string
  n: string
  top: string
  bot: string
  ink: string
  lab: string
  stars: number
  h: string
  p: string
  feat: string
  links?: SectionLink[]
  sun?: boolean
}

const SECCIONES: Section[] = [
  {
    id: 'quienes-somos',
    route: '/quienes-somos',
    t: 'Quiénes somos',
    n: '01',
    top: '#1A2C49',
    bot: '#0F1B33',
    ink: '#F4F2EE',
    lab: '#9FB6D6',
    stars: 8,
    h: 'Murcianos.<br>Digitales.<br>Directos.',
    p: 'Desde 2020 ayudamos a empresas de Murcia, Cartagena, Lorca y toda la Región a crecer online. No somos una agencia más: somos tu partner estratégico, con reuniones presenciales cuando hagan falta y un conocimiento del mercado local que no se aprende en remoto.',
    feat: '<b>→</b> Sede en Murcia, clientes en toda España &nbsp;·&nbsp; <b>→</b> Abogados, clínicas, comercios, restaurantes, inmobiliarias',
  },
  {
    id: 'metodologia',
    route: '/metodologia',
    t: 'Metodología',
    n: '02',
    top: '#2E4E70',
    bot: '#24405E',
    ink: '#F4F2EE',
    lab: '#A8C6E0',
    stars: 0,
    h: 'Primero el diagnóstico.<br>Luego, el despegue.',
    p: 'Nada de plantillas: cada negocio arranca con una auditoría de dónde está y a dónde quiere llegar. Después construimos las bases, lanzamos la estrategia y medimos cada semana para ajustar. Sin humo: objetivos, plazos y números encima de la mesa.',
    feat: '<b>1.</b> Diagnóstico &nbsp;·&nbsp; <b>2.</b> Estrategia &nbsp;·&nbsp; <b>3.</b> Ejecución &nbsp;·&nbsp; <b>4.</b> Medición y mejora continua',
  },
  {
    id: 'servicios',
    route: '/servicios',
    t: 'Servicios',
    n: '03',
    top: '#6FA3BC',
    bot: '#5E92AC',
    ink: '#13202E',
    lab: '#13202E',
    stars: 0,
    h: 'Ocho formas<br>de crecer.',
    p: 'Diseño web, SEO local, redes sociales, Google Ads, apps con IA, chatbots, branding y email marketing. Puedes verlos en franjas interactivas o, si te apetece volar, recorrerlos planeta a planeta en nuestro universo 3D.',
    feat: '<b>→</b> Cada servicio con su equipo y su métrica &nbsp;·&nbsp; <b>→</b> Combinables según tu objetivo',
    links: [
      { label: 'Ver todos los servicios', href: '/servicios' },
      { label: 'Diseño Web', href: '/servicios/diseno-web', ghost: true },
      { label: 'SEO Local', href: '/servicios/seo-local', ghost: true },
      { label: 'Redes Sociales', href: '/servicios/redes-sociales', ghost: true },
      { label: 'Google Ads', href: '/servicios/google-ads', ghost: true },
      { label: 'Apps con IA', href: '/servicios/apps-ia', ghost: true },
      { label: 'Chatbots', href: '/servicios/chatbots', ghost: true },
      { label: 'Branding', href: '/servicios/branding', ghost: true },
      { label: 'Email Marketing', href: '/servicios/email-marketing', ghost: true },
    ],
  },
  {
    id: 'exitos',
    route: '/exitos',
    t: 'Casos de éxito',
    n: '04',
    top: '#BFE0EF',
    bot: '#A9D2E6',
    ink: '#13202E',
    lab: '#1E3346',
    stars: 0,
    h: '+300% ventas.<br>+200% tráfico.',
    p: 'No lo decimos nosotros: lo dicen los números de nuestros clientes. Negocios murcianos que duplicaron su tráfico web y triplicaron sus ventas con estrategias medibles. Cada caso con su antes, su después y su cómo.',
    feat: '<b>→</b> Resultados verificables, no promesas &nbsp;·&nbsp; <b>→</b> Testimonios con nombre y apellido',
  },
  {
    id: 'portfolio',
    route: '/portfolio',
    t: 'Portfolio',
    n: '05',
    top: '#FAEEDC',
    bot: '#F4E2C4',
    ink: '#3A2A18',
    lab: '#7A5A36',
    stars: 0,
    h: 'Proyectos que<br>hablan solos.',
    p: 'Como Health4Spain: el primer marketplace de España que centraliza seguros, abogados, inmobiliarias y gestorías para extranjeros — multiidioma en 5 lenguas, formulario inteligente de 4 pasos y +150 profesionales en 19 ciudades. Diseñado y desarrollado por ESKALA.',
    feat: '<b>→</b> Webs, plataformas y apps reales &nbsp;·&nbsp; <b>→</b> De la idea al lanzamiento',
  },
  {
    id: 'blog',
    route: '/blog',
    t: 'Blog',
    n: '06',
    top: '#FFB23E',
    bot: '#F99B2A',
    ink: '#3A2208',
    lab: '#5A3508',
    stars: 0,
    sun: true,
    h: 'Ideas que<br>iluminan.',
    p: 'Guías prácticas sin paja: cómo optimizar tu Google Business Profile en 30 minutos, qué publicar cuando no sabes qué publicar, cuánto invertir en Ads según tu sector. Lo que aprendemos con clientes reales, contado para que lo apliques tú.',
    feat: '<b>→</b> Checklists accionables &nbsp;·&nbsp; <b>→</b> Cero teoría que no sirva mañana',
  },
  {
    id: 'contacto',
    route: '/contacto',
    t: 'Contacto',
    n: '07',
    top: '#E55A28',
    bot: '#D14A1E',
    ink: '#FFF4EA',
    lab: '#FFD9C2',
    stars: 0,
    h: 'Hablemos antes<br>de que anochezca.',
    p: 'Cuéntanos tu negocio y te decimos, sin compromiso y sin jerga, qué haríamos primero y qué resultados puedes esperar. Respondemos rápido, presupuestamos claro y si no somos tu mejor opción, también te lo diremos.',
    feat: '<b>→</b> Respuesta en menos de 24 h &nbsp;·&nbsp; <b>→</b> Primera consultoría gratuita',
  },
  {
    id: 'universo',
    route: '/servicios',
    t: 'El Universo',
    n: '08',
    top: '#16203E',
    bot: '#0D1430',
    ink: '#F4F2EE',
    lab: '#8FA8D6',
    stars: 26,
    h: '¿Y si los servicios<br>fueran planetas?',
    p: 'Nuestra cara más juguetona: una travesía espacial en 3D donde cada servicio es un mundo — un planeta wireframe, una constelación, una gema, un cometa con una carta dentro. Hecha con WebGL, renderizada en tu pantalla. Abróchate.',
    feat: '<b>→</b> 8 mundos · 1 estrella · 0 plugins',
  },
]

const SECTION_CTA_LABELS: Record<string, string> = {
  'quienes-somos': 'Conócenos',
  metodologia: 'Cómo trabajamos',
  servicios: 'Ver servicios',
  exitos: 'Ver los casos',
  portfolio: 'Ver portfolio',
  blog: 'Leer el blog',
  contacto: 'Contactar',
  universo: 'Explorar servicios',
}

function getSectionLinks(section: Section): SectionLink[] {
  if (section.links?.length) return section.links
  return [{ label: SECTION_CTA_LABELS[section.id] ?? 'Ver más', href: section.route }]
}

const services: { slug: string; Icon: LucideIcon; title: string; desc: string }[] = [
  { slug: 'diseno-web', Icon: Monitor, title: 'Diseño Web', desc: 'Webs rápidas, modernas y optimizadas para convertir visitas en clientes.' },
  { slug: 'seo-local', Icon: Search, title: 'SEO Local', desc: 'Aparece en Google cuando buscan tu negocio en Murcia y alrededores.' },
  { slug: 'redes-sociales', Icon: Share2, title: 'Redes Sociales', desc: 'Contenido y gestión que conecta con tu audiencia y construye marca.' },
  { slug: 'google-ads', Icon: Target, title: 'Google Ads', desc: 'Campañas rentables que atraen clientes desde el primer día.' },
  { slug: 'apps-ia', Icon: Cpu, title: 'Apps con IA', desc: 'Aplicaciones a medida que automatizan y potencian tu negocio.' },
  { slug: 'chatbots', Icon: Bot, title: 'Chatbots', desc: 'Atención 24/7 que responde y capta clientes de forma automática.' },
  { slug: 'branding', Icon: Palette, title: 'Branding', desc: 'Identidad de marca memorable que te diferencia de la competencia.' },
  { slug: 'email-marketing', Icon: Mail, title: 'Email Marketing', desc: 'Campañas de email que fidelizan y aumentan tus ventas.' },
]

const reasons = [
  { num: '01', title: 'Estrategia a medida', desc: 'Analizamos tu negocio y tu mercado para diseñar un plan de marketing digital con objetivos claros y medibles.' },
  { num: '02', title: 'SEO local que posiciona', desc: 'Optimizamos tu presencia para que te encuentren cuando buscan tus servicios en Murcia y la Región.' },
  { num: '03', title: 'Tecnología e IA', desc: 'Aplicamos automatización, apps y chatbots con inteligencia artificial para que vendas más con menos esfuerzo.' },
  { num: '04', title: 'Cercanía murciana', desc: 'Somos una agencia local: trabajamos contigo de tú a tú, con resultados reales y reportes transparentes.' },
]

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}

function SectionCta({ link, ink, top }: { link: SectionLink; ink: string; top: string }) {
  const className = `${styles.cta}${link.ghost ? ` ${styles.ctaGhost}` : ''}`
  const style = { '--ink': ink, '--top': top } as React.CSSProperties

  return (
    <Link className={className} href={link.href} style={style}>
      {link.label}
    </Link>
  )
}

export default function HomeStripes() {
  const [openIndex, setOpenIndex] = useState(-1)
  const isOpen = openIndex >= 0

  const starSets = useMemo(
    () =>
      SECCIONES.map((section, sectionIndex) =>
        Array.from({ length: section.stars }, (_, k) => {
          const seed = sectionIndex * 100 + k
          const size = pseudoRandom(seed) * 2.2 + 1
          return {
            id: `${section.id}-${k}`,
            size,
            left: pseudoRandom(seed + 1) * 92 + 4,
            top: pseudoRandom(seed + 2) * 90 + 4,
            opacity: 0.4 + pseudoRandom(seed + 3) * 0.6,
            delay: pseudoRandom(seed + 4) * 3,
          }
        })
      ),
    []
  )

  const openStripe = useCallback((index: number) => {
    const next = ((index % SECCIONES.length) + SECCIONES.length) % SECCIONES.length
    setOpenIndex(next)
    window.history.replaceState(null, '', `#${SECCIONES[next].id}`)
  }, [])

  const closeAll = useCallback(() => {
    setOpenIndex(-1)
    window.history.replaceState(null, '', window.location.pathname)
  }, [])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    const idx = SECCIONES.findIndex((section) => section.id === hash)
    if (idx >= 0) setOpenIndex(idx)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAll()
        return
      }
      if (openIndex < 0) return
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        openStripe(openIndex + 1)
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        openStripe(openIndex - 1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closeAll, openIndex, openStripe])

  useEffect(() => {
    let wheelLock = 0

    const onWheel = (event: WheelEvent) => {
      if (openIndex < 0) return
      const now = Date.now()
      if (now - wheelLock < 650) return
      if (Math.abs(event.deltaY) < 18) return
      wheelLock = now
      openStripe(openIndex + (event.deltaY > 0 ? 1 : -1))
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [openIndex, openStripe])

  useEffect(() => {
    let touchY: number | null = null
    let touchX: number | null = null

    const onTouchStart = (event: TouchEvent) => {
      touchY = event.touches[0].clientY
      touchX = event.touches[0].clientX
    }

    const onTouchEnd = (event: TouchEvent) => {
      if (openIndex < 0 || touchY === null || touchX === null) return
      const dy = event.changedTouches[0].clientY - touchY
      const dx = event.changedTouches[0].clientX - touchX
      const delta = Math.abs(dy) > Math.abs(dx) ? dy : dx
      if (Math.abs(delta) > 48) openStripe(openIndex + (delta < 0 ? 1 : -1))
      touchY = null
      touchX = null
    }

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [openIndex, openStripe])

  const handleStripeClick = (index: number, event: React.MouseEvent) => {
    if ((event.target as HTMLElement).closest('a')) return
    if (openIndex === index) return
    openStripe(index)
  }

  const handleStripeKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openStripe(index)
    }
  }

  return (
    <>
      <div className={`${styles.heroRoot} ${sora.variable}`}>
        <div className={styles.stage} data-open={isOpen ? '' : undefined} id="stage">
          {SECCIONES.map((section, index) => (
            <div
              key={section.id}
              className={`${styles.stripe} ${openIndex === index ? styles.stripeOpen : ''}`}
              style={
                {
                  '--top': section.top,
                  '--bot': section.bot,
                  '--ink': section.ink,
                  '--lab': section.lab,
                } as React.CSSProperties
              }
              tabIndex={0}
              role="button"
              aria-label={section.t}
              onClick={(event) => handleStripeClick(index, event)}
              onKeyDown={(event) => handleStripeKeyDown(index, event)}
            >
              {section.sun && <div className={styles.sun} aria-hidden="true" />}
              {starSets[index].map((star) => (
                <span
                  key={star.id}
                  className={styles.star}
                  aria-hidden="true"
                  style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.left}%`,
                    top: `${star.top}%`,
                    opacity: star.opacity,
                    animationDelay: `${star.delay}s`,
                  }}
                />
              ))}

              <div className={styles.idle}>
                <span className={styles.idleTitle}>{section.t}</span>
                <span className={styles.idleNum}>{section.n}</span>
              </div>

              <div className={styles.full}>
                <div className={styles.fullInner}>
                  <span className={styles.crumb}>
                    {section.n} / {section.t}
                  </span>
                  <h2 className={styles.fullTitle} dangerouslySetInnerHTML={{ __html: section.h }} />
                  <p className={styles.fullText}>{section.p}</p>
                  <p className={styles.feat} dangerouslySetInnerHTML={{ __html: section.feat }} />
                  <div className={styles.ctas}>
                    {getSectionLinks(section).map((link) => (
                      <SectionCta key={link.href} link={link} ink={section.ink} top={section.top} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.centerBrand} ${isOpen ? styles.hiddenWhenOpen : ''}`}>
          <h1>ESKALA</h1>
          <p>Marketing Digital</p>
        </div>

        <div className={`${styles.tagline} ${isOpen ? styles.hiddenWhenOpen : ''}`}>Explora · Descubre · Escala</div>

        <nav className={`${styles.nav} ${isOpen ? styles.navVisible : ''}`} aria-label="Navegación de secciones">
          <button type="button" aria-label="Sección anterior" onClick={() => openStripe(openIndex - 1)}>
            ←
          </button>
          <div className={styles.dots}>
            {SECCIONES.map((section, index) => (
              <button
                key={section.id}
                type="button"
                className={`${styles.dot} ${openIndex === index ? styles.dotOn : ''}`}
                aria-label={`Ir a ${section.t}`}
                onClick={() => openStripe(index)}
              />
            ))}
          </div>
          <button type="button" aria-label="Sección siguiente" onClick={() => openStripe(openIndex + 1)}>
            →
          </button>
          <button type="button" className={styles.navClose} onClick={closeAll}>
            ✕ Cerrar
          </button>
        </nav>

        <p className={`${styles.hint} ${isOpen ? styles.hiddenWhenOpen : ''}`}>
          Cada franja es una sección · Click para entrar
        </p>
      </div>

      <main className={styles.content}>
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <span className={styles.kicker}>Desde 2020 · Murcia y la Región</span>
            <h1 className={styles.h1}>
              Agencia de marketing digital{' '}
              <span>en Murcia</span>
            </h1>
            <p className={styles.lead}>
              Hacemos crecer tu negocio con marketing digital que funciona. Somos{' '}
              <strong>ESKALA</strong>: diseño web, SEO local, redes sociales, Google Ads y
              aplicaciones con IA para empresas de Murcia, Cartagena, Lorca y toda la Región.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/contacto" className={`${styles.btn} ${styles.btnPrimary}`}>
                Hablemos de tu proyecto →
              </Link>
              <Link href="/servicios" className={`${styles.btn} ${styles.btnGhost}`}>
                Ver servicios
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.servicesSeo}>
          <div className={styles.sectionInner}>
            <header className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Qué hacemos</span>
              <h2 className={styles.h2}>Servicios de marketing digital en Murcia</h2>
              <p className={styles.sectionDesc}>
                Todo lo que tu negocio necesita para crecer en internet, bajo un mismo equipo.
              </p>
            </header>
            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className={styles.serviceCard}
                >
                  <span className={styles.serviceIcon}>
                    <service.Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.why}>
          <div className={styles.sectionInner}>
            <header className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Por qué ESKALA</span>
              <h2 className={`${styles.h2} ${styles.h2White}`}>
                Una agencia cercana, con resultados medibles
              </h2>
            </header>
            <div className={styles.whyGrid}>
              {reasons.map((reason) => (
                <article key={reason.num} className={styles.whyCard}>
                  <span className={styles.whyNum}>{reason.num}</span>
                  <h3 className={styles.whyTitle}>{reason.title}</h3>
                  <p className={styles.whyDesc}>{reason.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <h2 className={styles.ctaTitle}>
            ¿Listo para <span>escalar</span> tu negocio?
          </h2>
          <p className={styles.ctaText}>
            Cuéntanos tu proyecto y diseñamos una estrategia de marketing digital a tu medida.
          </p>
          <Link href="/contacto" className={styles.ctaBtn}>
            Empezar ahora →
          </Link>
        </section>
      </main>
    </>
  )
}
