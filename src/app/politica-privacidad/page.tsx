import { StandardLayout } from '@/components/layout'
import type { Metadata } from 'next'
import styles from './legal.module.css'
import { CookieSettingsButton } from '@/components/CookieConsentBar'
import { CONTACT_EMAIL, CONTACT_PHONE, formatFullAddress } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidad | ESKALA Marketing Digital',
  description: 'Política de privacidad y protección de datos de ESKALA Marketing Digital. Conoce cómo tratamos tus datos personales.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticaPrivacidad() {
  return (
    <StandardLayout>
      <div className={styles.legalPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Política de Privacidad</h1>
          <p className={styles.updated}>Última actualización: Diciembre 2025</p>

          <section className={styles.section}>
            <h2>1. Responsable del Tratamiento</h2>
            <p>
              <strong>ESKALA Marketing Digital</strong><br />
              CIF: [Tu CIF]<br />
              Dirección: {formatFullAddress()}<br />
              Email: {CONTACT_EMAIL}<br />
              Teléfono: {CONTACT_PHONE}
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Datos que Recopilamos</h2>
            <p>Podemos recopilar los siguientes datos personales:</p>
            <ul>
              <li><strong>Datos de contacto:</strong> nombre, email, teléfono, empresa</li>
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas</li>
              <li><strong>Datos proporcionados voluntariamente:</strong> a través de formularios de contacto o emails</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Finalidad del Tratamiento</h2>
            <p>Tratamos tus datos personales para:</p>
            <ul>
              <li>Responder a tus consultas y solicitudes de información</li>
              <li>Gestionar la relación comercial y prestación de servicios</li>
              <li>Enviarte comunicaciones comerciales (solo si has dado tu consentimiento)</li>
              <li>Mejorar nuestros servicios y la experiencia de usuario</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Base Legal</h2>
            <p>El tratamiento de tus datos se basa en:</p>
            <ul>
              <li><strong>Consentimiento:</strong> cuando nos proporcionas tus datos voluntariamente</li>
              <li><strong>Ejecución de contrato:</strong> para la prestación de servicios contratados</li>
              <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios</li>
              <li><strong>Obligación legal:</strong> cuando sea requerido por ley</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Conservación de Datos</h2>
            <p>
              Conservamos tus datos personales mientras sean necesarios para la finalidad 
              para la que fueron recogidos, y posteriormente durante los plazos legalmente 
              establecidos. Los datos de contacto comercial se conservarán mientras no 
              solicites su supresión.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Destinatarios de los Datos</h2>
            <p>
              No cedemos tus datos a terceros, salvo obligación legal. Podemos utilizar 
              proveedores de servicios (hosting, email, analíticas) que actúan como 
              encargados del tratamiento bajo contrato de confidencialidad.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Tus Derechos</h2>
            <p>Puedes ejercer los siguientes derechos:</p>
            <ul>
              <li><strong>Acceso:</strong> conocer qué datos tratamos sobre ti</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos</li>
              <li><strong>Limitación:</strong> limitar el tratamiento en ciertos casos</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado</li>
            </ul>
            <p>
              Para ejercer estos derechos, contacta con nosotros en: 
              <a href="mailto:contacto@eskaladigital.com"> contacto@eskaladigital.com</a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Cookies</h2>
            <p>
              Utilizamos cookies propias y de terceros para mejorar la experiencia de 
              navegación y analizar el uso de nuestra web. Puedes cambiar tus preferencias
              en cualquier momento:
            </p>
            <p>
              <CookieSettingsButton className={styles.cookieBtn} />
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger tus datos 
              personales contra accesos no autorizados, pérdida o destrucción. Utilizamos 
              cifrado SSL/TLS para la transmisión segura de información.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar esta política de privacidad para 
              adaptarla a novedades legislativas o jurisprudenciales. Te recomendamos 
              revisarla periódicamente.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Contacto y Reclamaciones</h2>
            <p>
              Si tienes dudas sobre esta política o deseas presentar una reclamación, 
              puedes contactarnos en <a href="mailto:contacto@eskaladigital.com">contacto@eskaladigital.com</a>.
            </p>
            <p>
              También puedes presentar una reclamación ante la Agencia Española de 
              Protección de Datos (AEPD): <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>
            </p>
          </section>
        </div>
      </div>
    </StandardLayout>
  )
}




