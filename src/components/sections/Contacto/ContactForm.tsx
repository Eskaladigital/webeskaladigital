'use client'

import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import styles from './ContactForm.module.css'
import { formatShortAddress } from '@/lib/site'
import { SERVICES, type Lang } from '@/lib/i18n'
import { CONTACT_EN } from '@/lib/en-content'

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

const ES: typeof CONTACT_EN.form = {
  label: 'Hablemos',
  infoTitle: 'Cuéntanos qué necesitas',
  infoLead: 'Particular o empresa, el servicio que te interesa y de dónde nos has oído. Te preparamos una propuesta sin compromiso.',
  phone: 'Teléfono',
  hours: 'Horario',
  hoursValue: 'Lunes a viernes, 9:00–18:00',
  location: 'Ubicación',
  locationSuffix: 'presencial con cita',
  sentTitle: '¡Mensaje enviado!',
  sentText: 'Gracias por contactar con nosotros. Te responderemos en menos de 24 horas.',
  sendAnother: 'Enviar otro mensaje',
  formTitle: 'Envíanos un mensaje',
  formText: 'Cuéntanos tu proyecto y nos pondremos en contacto contigo.',
  typeLegend: 'Tipo de consulta',
  individual: 'Particular',
  business: 'Empresa',
  company: 'Empresa',
  companyPh: 'Nombre de tu empresa',
  name: 'Nombre *',
  namePh: 'Tu nombre completo',
  email: 'Email *',
  phoneLabel: 'Teléfono',
  phonePh: '+34 600 000 000',
  inquiry: 'Tipo de consulta *',
  inquiryPh: 'Selecciona un servicio',
  other: 'Otro',
  referral: '¿Cómo nos has conocido?',
  referralPh: 'Selecciona una opción',
  referralGoogle: 'Búsqueda en Google',
  referralSocial: 'Redes sociales',
  referralRecommendation: 'Recomendación',
  referralOther: 'Otro',
  message: 'Mensaje *',
  messagePh: 'Cuéntanos sobre tu proyecto...',
  privacyPre: 'He leído y acepto la',
  privacyLink: 'política de privacidad',
  sending: 'Enviando...',
  submit: 'Enviar mensaje →',
  errName: 'El nombre es obligatorio',
  errEmail: 'El email es obligatorio',
  errEmailInvalid: 'El email no es válido',
  errInquiry: 'Elige el tipo de consulta',
  errMessage: 'El mensaje es obligatorio',
  errMessageShort: 'El mensaje debe tener al menos 20 caracteres',
  errPrivacy: 'Debes aceptar la política de privacidad',
  errSubmit: 'No se pudo enviar. Inténtalo de nuevo.',
}

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

export default function ContactForm({ lang = 'es' }: { lang?: Lang }) {
  const t = lang === 'en' ? CONTACT_EN.form : ES
  const inquiryOptions = [
    ...SERVICES.map((s) => ({ value: s.slug, label: lang === 'en' ? s.enLabel : s.es })),
    { value: 'otro', label: t.other },
  ]
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
    if (!formData.name.trim()) newErrors.name = t.errName
    if (!formData.email.trim()) newErrors.email = t.errEmail
    else if (!validateEmail(formData.email)) newErrors.email = t.errEmailInvalid
    if (!formData.inquiry_type) newErrors.inquiry_type = t.errInquiry
    if (!formData.message.trim()) newErrors.message = t.errMessage
    else if (formData.message.length < 20) newErrors.message = t.errMessageShort
    if (!formData.privacy) newErrors.privacy = t.errPrivacy
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
          lang,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setErrors({ submit: lang === 'en' ? t.errSubmit : data.error || t.errSubmit })
        return
      }
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: t.errSubmit })
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
          <span className={styles.sectionLabel}>{t.label}</span>
          <h2 className={styles.infoTitle}>{t.infoTitle}</h2>
          <p className={styles.infoLead}>{t.infoLead}</p>
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
                <strong>{t.phone}</strong>
                <a href="tel:+34626823404">+34 626 82 34 04</a>
              </div>
            </li>
            <li>
              <Clock size={20} strokeWidth={2} aria-hidden="true" />
              <div>
                <strong>{t.hours}</strong>
                <span>{t.hoursValue}</span>
              </div>
            </li>
            <li>
              <MapPin size={20} strokeWidth={2} aria-hidden="true" />
              <div>
                <strong>{t.location}</strong>
                <span>{formatShortAddress()} · {t.locationSuffix}</span>
              </div>
            </li>
          </ul>
        </aside>

        <div className={styles.formWrap}>
          {isSubmitted ? (
            <div className={styles.successBlock}>
              <CheckCircle size={40} strokeWidth={2} aria-hidden="true" />
              <h3>{t.sentTitle}</h3>
              <p>{t.sentText}</p>
              <button
                type="button"
                className={styles.submitBtn}
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData(emptyForm)
                  setFormStartedAt(Date.now())
                }}
              >
                {t.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.formIntro}>
                <h2>{t.formTitle}</h2>
                <p>{t.formText}</p>
              </div>

              <div className={styles.formGroup}>
                <p className={styles.radioLegend}>{t.typeLegend}</p>
                <div className={styles.radioRow}>
                  <label>
                    <input
                      type="radio"
                      name="contact_type"
                      value="particular"
                      checked={formData.contact_type === 'particular'}
                      onChange={handleChange}
                    />
                    {t.individual}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="contact_type"
                      value="professional"
                      checked={formData.contact_type === 'professional'}
                      onChange={handleChange}
                    />
                    {t.business}
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
                  <label htmlFor="company">{t.company}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.companyPh}
                  />
                </div>
              )}

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePh}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={lang === 'en' ? 'you@email.com' : 'tu@email.com'}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">{t.phoneLabel}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.phonePh}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="inquiry_type">{t.inquiry}</label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.inquiry_type)}
                  >
                    <option value="">{t.inquiryPh}</option>
                    {inquiryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.inquiry_type && <span className={styles.fieldError}>{errors.inquiry_type}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="referral_source">{t.referral}</label>
                <select
                  id="referral_source"
                  name="referral_source"
                  value={formData.referral_source}
                  onChange={handleChange}
                >
                  <option value="">{t.referralPh}</option>
                  <option value="google">{t.referralGoogle}</option>
                  <option value="social">{t.referralSocial}</option>
                  <option value="referral">{t.referralRecommendation}</option>
                  <option value="other">{t.referralOther}</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder={t.messagePh}
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
                  {t.privacyPre}{' '}
                  <a href="/politica-privacidad" target="_blank" rel="noreferrer">
                    {t.privacyLink}
                  </a>
                  . *
                </label>
              </div>
              {errors.privacy && <span className={styles.fieldError}>{errors.privacy}</span>}
              {errors.submit && <span className={styles.fieldError}>{errors.submit}</span>}

              <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                {isSubmitting ? t.sending : t.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
