'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import styles from './About.module.css'
import type { Lang } from '@/lib/i18n'
import { ABOUT_EN } from '@/lib/en-content'

export default function About({ lang = 'es' }: { lang?: Lang }) {
  useEffect(() => {
    // Intersection Observer para animaciones fade-up
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

  if (lang === 'en') {
    const en = ABOUT_EN.about
    return (
      <section className={styles.about} id="about">
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutImageContainer} fade-up`}>
            <Image
              src="/images/oficina-creativa-murcia.png"
              alt={en.imageAlt}
              fill
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.imageOverlay}></div>
          </div>

          <div className={`${styles.aboutContent} fade-up`}>
            <h2>
              {en.title} <span>{en.titleSpan}</span>
            </h2>
            {en.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <h3>{en.h3}</h3>
            <p>{en.why}</p>
            <div className={styles.aboutStats}>
              {en.stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <div className={styles.statNumber}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.about} id="about">
        <div className={styles.aboutGrid}>
          {/* Imagen optimizada para SEO en lugar del carrusel repetido */}
          <div className={`${styles.aboutImageContainer} fade-up`}>
            <Image 
              src="/images/oficina-creativa-murcia.png" 
              alt="Equipo de la Agencia de Marketing Digital ESKALA trabajando en estrategias SEO en su oficina de Murcia" 
              fill
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.imageOverlay}></div>
          </div>

          <div className={`${styles.aboutContent} fade-up`}>
            <h2>
              Agencia de Marketing Digital <span>nacida en Murcia</span>
            </h2>
            
            <p>
              <strong>ESKALA</strong> es una <strong>agencia de marketing digital con sede en Murcia</strong>, pero con mentalidad global. Nos especializamos 
              en ayudar a empresas locales y pymes de ámbito nacional a multiplicar su visibilidad y facturación en el entorno digital. Desde nuestra oficina en el corazón 
              de la <strong>Región de Murcia</strong>, impulsamos negocios de todos los sectores: despachos de abogados, asesorías, 
              clínicas de salud, e-commerce, restaurantes, inmobiliarias y empresas de servicios profesionales.
            </p>

            <h3>¿Por qué elegir una agencia local en Murcia?</h3>
            <p>
              Conocemos a fondo el tejido empresarial y el mercado murciano. Entendemos perfectamente las necesidades, retos y el comportamiento del consumidor de negocios en <strong>Murcia capital</strong>, 
              <strong> Cartagena</strong>, <strong>Lorca</strong>, <strong>Molina de Segura</strong> y toda la región. 
              Esta cercanía territorial y cultural nos permite diseñar <strong>estrategias de marketing digital personalizadas</strong> que conectan genuinamente 
              con tu audiencia local y te hacen destacar indiscutiblemente frente a tu competencia más directa.
            </p>

            <h3>Nuestro enfoque: Resultados reales orientados al retorno</h3>
            <p>
              No vendemos humo ni métricas vanidosas. En ESKALA combinamos <strong>creatividad, tecnología avanzada y visión de negocio</strong> para impulsar 
              tu empresa. Aplicamos las últimas tendencias en <strong>marketing digital e inteligencia artificial</strong> 
              para optimizar procesos y maximizar cada euro que inviertes. Cada proyecto es único, cada estrategia es a medida, y cada resultado 
              es 100% medible a través de KPIs concretos.
            </p>

            <p>
              Ya sea que necesites <strong>posicionar tu web en lo más alto de Google</strong> mediante SEO local, desarrollar un <strong>diseño web corporativo de alto rendimiento</strong>, 
              gestionar estratégicamente tus <strong>redes sociales</strong>, o lanzar campañas hiper-segmentadas de <strong>Google Ads y Meta Ads</strong>, nuestro equipo de expertos está aquí para 
              acompañarte como tu <strong>partner tecnológico y estratégico de confianza</strong>.
            </p>

            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Proyectos Exitosos</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Satisfacción</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3x</div>
                <div className={styles.statLabel}>ROI Medio</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

