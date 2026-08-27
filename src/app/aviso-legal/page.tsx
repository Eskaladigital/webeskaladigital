import { StandardLayout } from '@/components/layout'
import type { Metadata } from 'next'
import styles from '../politica-privacidad/legal.module.css'
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_URL, formatFullAddress } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Aviso Legal | ESKALA Marketing Digital',
  description: 'Aviso legal y condiciones de uso de ESKALA Marketing Digital. Información legal sobre nuestra empresa y servicios.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function AvisoLegal() {
  return (
    <StandardLayout>
      <div className={styles.legalPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Aviso Legal</h1>
          <p className={styles.updated}>Última actualización: Diciembre 2025</p>

          <section className={styles.section}>
            <h2>1. Datos Identificativos</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios 
              de la Sociedad de la Información y Comercio Electrónico (LSSICE), se informa:
            </p>
            <ul>
              <li><strong>Denominación social:</strong> ESKALA Marketing Digital</li>
              <li><strong>CIF:</strong> [Tu CIF]</li>
              <li><strong>Domicilio:</strong> {formatFullAddress()}</li>
              <li><strong>Email:</strong> {CONTACT_EMAIL}</li>
              <li><strong>Teléfono:</strong> {CONTACT_PHONE}</li>
              <li><strong>Sitio web:</strong> {SITE_URL.replace(/^https:\/\//, '')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso del sitio web www.eskaladigital.com, 
              del que es titular ESKALA Marketing Digital.
            </p>
            <p>
              La navegación por el sitio web atribuye la condición de usuario e implica 
              la aceptación plena y sin reservas de todas las disposiciones incluidas 
              en este Aviso Legal.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Condiciones de Uso</h2>
            <p>El usuario se compromete a:</p>
            <ul>
              <li>Hacer un uso adecuado de los contenidos y servicios ofrecidos</li>
              <li>No realizar actividades ilícitas, ilegales o contrarias a la buena fe</li>
              <li>No difundir contenidos de carácter racista, xenófobo, pornográfico, 
                  de apología del terrorismo o que atenten contra los derechos humanos</li>
              <li>No provocar daños en los sistemas físicos y lógicos del sitio web</li>
              <li>No introducir virus informáticos o sistemas que puedan causar daños</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, gráficos, logotipos, 
              iconos, software, nombres comerciales, marcas) son propiedad de ESKALA 
              Marketing Digital o de terceros que han autorizado su uso.
            </p>
            <p>
              Queda prohibida la reproducción, distribución, comunicación pública, 
              transformación o cualquier otra forma de explotación sin autorización 
              expresa y por escrito del titular.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Exclusión de Responsabilidad</h2>
            <p>ESKALA Marketing Digital no se hace responsable de:</p>
            <ul>
              <li>Errores u omisiones en los contenidos</li>
              <li>Falta de disponibilidad temporal del sitio web</li>
              <li>Daños causados por terceros mediante intromisiones ilegítimas</li>
              <li>Contenidos de sitios web de terceros enlazados desde esta página</li>
              <li>Virus o malware que pudieran afectar al equipo del usuario</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Enlaces a Terceros</h2>
            <p>
              Este sitio web puede contener enlaces a páginas de terceros. ESKALA 
              Marketing Digital no asume responsabilidad por el contenido, veracidad 
              o políticas de privacidad de dichos sitios externos.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Protección de Datos</h2>
            <p>
              El tratamiento de datos personales se realiza conforme a nuestra 
              <a href="/politica-privacidad"> Política de Privacidad</a>, en cumplimiento 
              del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 
              3/2018 de Protección de Datos Personales y garantía de los derechos digitales.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Legislación Aplicable</h2>
            <p>
              Este aviso legal se rige por la legislación española. Para cualquier 
              controversia que pudiera derivarse del acceso o uso de este sitio web, 
              las partes se someten a los Juzgados y Tribunales de Murcia, con renuncia 
              expresa a cualquier otro fuero.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Modificaciones</h2>
            <p>
              ESKALA Marketing Digital se reserva el derecho de modificar el presente 
              aviso legal para adaptarlo a novedades legislativas, jurisprudenciales 
              o de práctica empresarial. Se recomienda al usuario revisar periódicamente 
              este aviso legal.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con este aviso legal, puede contactarnos en:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:contacto@eskaladigital.com">contacto@eskaladigital.com</a></li>
              <li><strong>Teléfono:</strong> +34 626 82 34 04</li>
            </ul>
          </section>
        </div>
      </div>
    </StandardLayout>
  )
}




