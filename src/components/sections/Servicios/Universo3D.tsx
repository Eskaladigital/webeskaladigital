'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Sora } from 'next/font/google'
import { initUniversoScene } from './universoScene'
import { UI, counterpartPath, href, type Lang } from '@/lib/i18n'
import { UNIVERSE_EN } from '@/lib/en-content'
import styles from './Universo3D.module.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

type ServiceStat = { value: string; label: string }

type ServiceWorld = {
  id: string
  num: number
  title: string
  metafora: string
  color: string
  slug: string
  text: string
  stats: ServiceStat[]
}

const WORLDS: ServiceWorld[] = [
  {
    id: 'mundo-1',
    num: 1,
    title: 'Diseño Web',
    metafora: '— el planeta estructura',
    color: '#FF6B35',
    slug: 'diseno-web',
    text: 'Todo empieza aquí: una web rápida, moderna y construida para convertir. La malla que ves girando es tu arquitectura — cada nodo, una página; cada línea, un camino que lleva al cliente justo donde quieres.',
    stats: [
      { value: '<2 s', label: 'de carga' },
      { value: '100%', label: 'responsive' },
      { value: '1', label: 'objetivo: convertir' },
    ],
  },
  {
    id: 'mundo-2',
    num: 2,
    title: 'SEO Local',
    metafora: '— el planeta visible',
    color: '#FFB23E',
    slug: 'seo-local',
    text: 'Los satélites que lo orbitan son búsquedas: "cerrajero murcia", "clínica dental cerca", "abogado laboral". Cada una es un cliente buscándote ahora mismo. El SEO local decide si te encuentra a ti o a tu competencia.',
    stats: [
      { value: '76%', label: 'busca antes de comprar' },
      { value: 'Top 3', label: 'se lleva los clics' },
      { value: '24/7', label: 'trabajando' },
    ],
  },
  {
    id: 'mundo-3',
    num: 3,
    title: 'Redes Sociales',
    metafora: '— la constelación',
    color: '#00BBF9',
    slug: 'redes-sociales',
    text: 'Cada punto de luz es una persona; cada línea, una conversación. Las marcas que brillan en redes no publican más: publican mejor. Contenido con estrategia que convierte seguidores en comunidad, y comunidad en clientes.',
    stats: [
      { value: '+5 h', label: 'al día en redes' },
      { value: '1ª', label: 'impresión de tu marca' },
      { value: '∞', label: 'alcance orgánico bien hecho' },
    ],
  },
  {
    id: 'mundo-4',
    num: 4,
    title: 'Google Ads',
    metafora: '— la diana orbital',
    color: '#F7444E',
    slug: 'google-ads',
    text: 'Mientras el SEO construye, los anuncios disparan. Campañas con segmentación quirúrgica que ponen tu negocio delante de quien ya está buscando comprar — y cada euro se mide, se optimiza y vuelve multiplicado.',
    stats: [
      { value: 'Día 1', label: 'primeros clientes' },
      { value: '100%', label: 'medible' },
      { value: '0', label: 'permanencias' },
    ],
  },
  {
    id: 'mundo-5',
    num: 5,
    title: 'Apps con IA',
    metafora: '— la nube que piensa',
    color: '#9B5DE5',
    slug: 'apps-ia',
    text: 'Esta nebulosa de partículas procesa mientras duermes: aplicaciones a medida que automatizan presupuestos, citas, seguimiento e informes. La IA no sustituye a tu equipo — le quita lo aburrido para que decida en vez de copiar y pegar.',
    stats: [
      { value: '−80%', label: 'tareas repetitivas' },
      { value: 'A medida', label: 'no genérico' },
      { value: 'Integra', label: 'tus herramientas' },
    ],
  },
  {
    id: 'mundo-6',
    num: 6,
    title: 'Chatbots',
    metafora: '— el satélite que conversa',
    color: '#00F5D4',
    slug: 'chatbots',
    text: 'Las ondas que emite no se apagan nunca: tu chatbot responde dudas, agenda citas y capta datos de contacto a cualquier hora, en tu web, WhatsApp e Instagram. Cada burbuja que orbita es una conversación que tú no tuviste que atender.',
    stats: [
      { value: '24/7', label: 'sin descansos' },
      { value: '3', label: 'canales: web, WA, IG' },
      { value: '0 s', label: 'de espera' },
    ],
  },
  {
    id: 'mundo-7',
    num: 7,
    title: 'Branding',
    metafora: '— la gema',
    color: '#FFD166',
    slug: 'branding',
    text: 'En todo el universo no hay dos iguales: eso es una marca bien hecha. Logo, colores, voz y materiales tallados como facetas de una misma pieza, para que tu negocio se reconozca a un año luz de distancia.',
    stats: [
      { value: '1', label: 'sistema visual completo' },
      { value: 'Manual', label: 'de marca incluido' },
      { value: '100%', label: 'reconocible' },
    ],
  },
  {
    id: 'mundo-8',
    num: 8,
    title: 'Email Marketing',
    metafora: '— el cometa mensajero',
    color: '#FF8C5A',
    slug: 'email-marketing',
    text: 'El cometa lleva una carta dentro y siempre llega: tu lista de correo es el único canal que ningún algoritmo te puede quitar. Secuencias automáticas que dan la bienvenida, recuperan carritos y reactivan clientes mientras el cometa sigue su órbita.',
    stats: [
      { value: '36:1', label: 'ROI medio del email' },
      { value: '100%', label: 'canal propio' },
      { value: 'Auto', label: 'secuencias que venden' },
    ],
  },
]

const ES = {
  tag: 'explora · descubre · escala',
  eyebrow: 'Agencia de marketing digital · Murcia',
  title: 'El universo',
  titleGrad: 'ESKALA',
  lead: 'Tu negocio es una nave. Internet, el espacio. Haz scroll y atraviesa los ocho mundos que hacen crecer una marca: cada planeta que ves es un servicio real, renderizado en 3D en tu pantalla ahora mismo. Al final del viaje sabrás exactamente qué órbita le falta a tu negocio.',
  scroll: '▼ Scroll para despegar',
  world: 'Mundo',
  service: 'Servicio',
  explore: 'Explorar este servicio →',
  destEyebrow: 'Destino · Tu marca',
  destTitle: 'Has llegado<br />a la estrella.',
  destText: 'La estrella eres tú: branding, email y todo lo anterior orbitando alrededor de un negocio que crece. Cuéntanos el tuyo y te decimos, sin compromiso, qué mundo te dará más resultados primero.',
  ctaProposal: 'Pedir propuesta',
  ctaAgency: 'Ver la agencia',
  ctaAll: 'Los 8 servicios →',
}

export default function Universo3D({ lang = 'es' }: { lang?: Lang }) {
  const t = lang === 'en' ? UNIVERSE_EN : ES
  const worlds =
    lang === 'en' ? WORLDS.map((w) => ({ ...w, ...UNIVERSE_EN.worlds[w.slug] })) : WORLDS
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const shipRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    document.body.style.overflowX = 'hidden'
    document.documentElement.style.overscrollBehavior = 'none'
    return () => {
      document.body.style.overflowX = ''
      document.documentElement.style.overscrollBehavior = ''
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const main = mainRef.current
    if (!canvas || !main) return

    const scene = initUniversoScene(canvas, main, (value) => {
      setProgress(value >= 0.995 ? 1 : value)
      if (shipRef.current) shipRef.current.style.top = `${(value >= 0.995 ? 1 : value) * 100}%`
    })

    return () => scene.dispose()
  }, [])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const el = document.getElementById(hash)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400)
  }, [])

  const pctLabel = String(Math.round(progress * 100)).padStart(3, '0') + '%'
  const servicesPath = href('/servicios', lang)

  return (
    <div className={`${styles.root} ${sora.variable}`}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={styles.top}>
        <Link href={href('/', lang)} className={styles.logo}>
          ESKA<span>LA</span>
        </Link>
        <div className={styles.tag}>{t.tag}</div>
        <Link
          href={counterpartPath(servicesPath)}
          hrefLang={lang === 'en' ? 'es' : 'en'}
          title={UI[lang].switchTitle}
          className={styles.langSwitch}
        >
          {UI[lang].switchLabel}
        </Link>
      </div>

      <div className={styles.route} aria-hidden="true">
        <div className={styles.routeLine}>
          <div ref={shipRef} className={styles.ship} />
        </div>
        <div className={styles.pct}>{pctLabel}</div>
      </div>

      <main ref={mainRef} className={styles.main}>
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.card}>
            <span className={styles.eyebrow} style={{ color: 'var(--orange)' }}>
              {t.eyebrow}
            </span>
            <h1 className={styles.title1}>
              {t.title}
              <br />
              <span className={styles.grad}>{t.titleGrad}</span>
            </h1>
            <p className={`${styles.cardText} ${styles.heroLead}`}>{t.lead}</p>
          </div>
          <span className={styles.scroll}>{t.scroll}</span>
        </section>

        {worlds.map((world) => (
          <section key={world.id} id={world.id} className={styles.section}>
            <div className={styles.card}>
              <span className={styles.eyebrow} style={{ color: world.color }}>
                {t.world} {world.num} / 8 · {t.service}
              </span>
              <h2 className={styles.title2} style={{ color: world.color }}>
                {world.title}
              </h2>
              <span className={styles.metafora}>{world.metafora}</span>
              <p className={styles.cardText}>{world.text}</p>
              <div className={styles.data} style={{ color: world.color }}>
                {world.stats.map((stat) => (
                  <span key={stat.label}>
                    <b>{stat.value}</b>
                    {stat.label}
                  </span>
                ))}
              </div>
              <Link
                className={styles.cta2}
                style={{ color: world.color }}
                href={href(`/servicios/${world.slug}`, lang)}
              >
                {t.explore}
              </Link>
            </div>
          </section>
        ))}

        <section className={`${styles.section} ${styles.final}`} id="destino">
          <div className={styles.card}>
            <span className={styles.eyebrow} style={{ color: 'var(--orange)' }}>
              {t.destEyebrow}
            </span>
            <h2
              className={`${styles.title2} ${styles.finalTitle}`}
              dangerouslySetInnerHTML={{ __html: t.destTitle }}
            />
            <p className={styles.cardText}>{t.destText}</p>
            <div className={styles.ctaGroup}>
              <Link className={styles.btn} href={href('/contacto', lang)}>
                {t.ctaProposal}
              </Link>
              <Link className={`${styles.btn} ${styles.btnGhost}`} href={href('/', lang)}>
                {t.ctaAgency}
              </Link>
              <Link className={`${styles.btn} ${styles.btnGhost}`} href="#mundo-1">
                {t.ctaAll}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
