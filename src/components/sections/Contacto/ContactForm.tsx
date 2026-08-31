'use client'

import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import styles from './ContactForm.module.css'
import { formatShortAddress } from '@/lib/site'

interface FormData {
  contact_type: 'particular' | 'professional'
  name: string
  email: string
  phone: string
  company: string
  website: string
  inquiry_type: string
  referral_source: string
  message: string
  privacy: boolean
}

interface FormErrors {
  name?: string
  email?: string
  inquiry_type?: string
  message?: string
  privacy?: string
  submit?: string
}

const INQUIRY_OPTIONS = [
  { value: 'diseno-web', label: 'Diseño Web' },
  { value: 'seo-local', label: 'SEO Local' },
  { value: 'redes-sociales', label: 'Redes Sociales' },
  { value: 'google-ads', label: 'Google Ads' },
  { value: 'apps-ia', label: 'Apps con IA' },
  { value: 'chatbots', label: 'Chatbots' },
  { value: 'branding', label: 'Branding' },
  { value: 'email-marketing', label: 'Email Marketing' },
  { value: 'otro', label: 'Otro' },
]

const emptyForm: FormData = {
  contact_type: 'particular',
  name: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  inquiry_type: '',
  referral_source: '',
  message: '',
  privacy: false,
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formStartedAt, setFormStartedAt] = useState(0)

  useEffect(() => {
    setFormStartedAt(Date.now())
  }, [])

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio'
    else if (!validateEmail(formData.email)) newErrors.email = 'El email no es válido'
    if (!formData.inquiry_type) newErrors.inquiry_type = 'Elige el tipo de consulta'
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio'
    else if (formData.message.length < 20) newErrors.message = 'El mensaje debe tener al menos 20 caracteres'
    if (!formData.privacy) newErrors.privacy = 'Debes aceptar la política de privacidad'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({})
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          gdpr_consent: formData.privacy,
          form_started_at: formStartedAt,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setErrors({ submit: data.error || 'No se pudo enviar. Inténtalo de nuevo.' })
        return
      }
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'No se pudo enviar. Inténtalo de nuevo.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  return (
    <section className={styles.contactForm} id="formulario">
      <div className={styles.split}>
        <aside className={styles.infoCol}>
          <span className={styles.sectionLabel}>Hablemos</span>
          <h2 className={styles.infoTitle}>Cuéntanos qué necesitas</h2>
          <p className={styles.infoLead}>
            Particular o empresa, el servicio que te interesa y de dónde nos has oído. Te preparamos una propuesta sin compromiso.
          </p>
          <ul className={styles.infoList}>
            <li>
              <Mail size={20} strokeWidth={2} aria-hidden="true" />
              <div>
                <strong>Email</strong>
                <a href="mailto:contacto@eskaladigital.com">contacto@eskaladigital.com</a>
              </div>
            </li>
            <li>
              <Phone size={20} strokeWidth={2} aria-hidden="true" />
              <div>
                <strong>Teléfono</strong>
                <a href="tel:+34626823404">+34 626 82 34 04</a>
              </div>
            </li>
            <li>
              <Clock size={20} strokeWidth={2} aria-hidden="true" />
              <div>
                <strong>Horario</strong>
                <span>Lunes a viernes, 9:00–18:00</span>
              </div>
            </li>
            <li>
              <MapPin size={20} strokeWidth={2} aria-hidden="true" />
              <div>
                <strong>Ubicación</strong>
                <span>{formatShortAddress()} · presencial con cita</span>
              </div>
            </li>
          </ul>
        </aside>

        <div className={styles.formWrap}>
          {isSubmitted ? (
            <div className={styles.successBlock}>
              <CheckCircle size={40} strokeWidth={2} aria-hidden="true" />
              <h3>¡Mensaje enviado!</h3>
              <p>Gracias por contactar con nosotros. Te responderemos en menos de 24 horas.</p>
              <button
                type="button"
                className={styles.submitBtn}
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData(emptyForm)
                  setFormStartedAt(Date.now())
                }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.formIntro}>
                <h2>Envíanos un mensaje</h2>
                <p>Cuéntanos tu proyecto y nos pondremos en contacto contigo.</p>
              </div>

              <div className={styles.formGroup}>
                <p className={styles.radioLegend}>Tipo de consulta</p>
                <div className={styles.radioRow}>
                  <label>
                    <input
                      type="radio"
                      name="contact_type"
                      value="particular"
                      checked={formData.contact_type === 'particular'}
                      onChange={handleChange}
                    />
                    Particular
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="contact_type"
                      value="professional"
                      checked={formData.contact_type === 'professional'}
                      onChange={handleChange}
                    />
                    Empresa
                  </label>
                </div>
              </div>

              <div className={styles.hp} aria-hidden="true">
                <label htmlFor="website">Sitio web</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {formData.contact_type === 'professional' && (
                <div className={styles.formGroup}>
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              )}

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="inquiry_type">Tipo de consulta *</label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.inquiry_type)}
                  >
                    <option value="">Selecciona un servicio</option>
                    {INQUIRY_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.inquiry_type && <span className={styles.fieldError}>{errors.inquiry_type}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="referral_source">¿Cómo nos has conocido?</label>
                <select
                  id="referral_source"
                  name="referral_source"
                  value={formData.referral_source}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="google">Búsqueda en Google</option>
                  <option value="social">Redes sociales</option>
                  <option value="referral">Recomendación</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
              </div>

              <div className={styles.privacyRow}>
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                />
                <label htmlFor="privacy">
                  He leído y acepto la{' '}
                  <a href="/politica-privacidad" target="_blank" rel="noreferrer">
                    política de privacidad
                  </a>
                  . *
                </label>
              </div>
              {errors.privacy && <span className={styles.fieldError}>{errors.privacy}</span>}
              {errors.submit && <span className={styles.fieldError}>{errors.submit}</span>}

              <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
