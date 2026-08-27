'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import LogoutButton from '../LogoutButton'
import styles from '../admin.module.css'

interface Lead {
  id: string
  created_at: string
  name: string
  email: string
  phone: string | null
  contact_type: string | null
  company: string | null
  service_interest: string | null
  source: string | null
  message: string
  is_read: boolean
}

const INQUIRY: Record<string, string> = {
  'diseno-web': 'Diseño Web',
  'seo-local': 'SEO Local',
  'redes-sociales': 'Redes Sociales',
  'google-ads': 'Google Ads',
  'apps-ia': 'Apps con IA',
  chatbots: 'Chatbots',
  branding: 'Branding',
  'email-marketing': 'Email Marketing',
  otro: 'Otro',
}

const ORIGIN: Record<string, string> = {
  google: 'Búsqueda en Google',
  social: 'Redes sociales',
  referral: 'Recomendación',
  other: 'Otro',
}

export default function AdminContactosPage() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState('')
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Lead | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        router.push('/administrator/login')
        return
      }
      setUserEmail(user.email || '')

      try {
        const res = await fetch('/api/admin/contacts')
        if (!res.ok) throw new Error('No autorizado')
        const data = await res.json()
        setLeads(Array.isArray(data) ? data : [])
      } catch {
        setError('No se pudieron cargar las consultas')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [router])

  async function markRead(lead: Lead) {
    await fetch('/api/admin/contacts', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: lead.id, is_read: true }),
    })
    setLeads((prev) => prev.map((l) => (l.id === lead.id ? { ...l, is_read: true } : l)))
    setSelected({ ...lead, is_read: true })
  }

  if (loading) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.loading}>Cargando...</div>
      </div>
    )
  }

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1>Consultas web</h1>
            <p>{userEmail}</p>
          </div>
          <div className={styles.headerActions}>
            <Link href="/administrator" className={styles.btnSecondary}>
              Artículos
            </Link>
            <Link href="/administrator/chatbot" className={styles.btnSecondary}>
              Nora
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.tableHeader}>
          <h2>Leads de /contacto</h2>
        </div>

        {error && <p className={styles.leadsError}>{error}</p>}
        {!error && leads.length === 0 && (
          <p className={styles.leadsEmpty}>Aún no hay consultas.</p>
        )}

        {leads.length > 0 && (
          <div className={styles.leadsGrid}>
            <div className={styles.leadList}>
              {leads.map((lead) => (
                <button
                  key={lead.id}
                  type="button"
                  className={`${styles.leadItem} ${!lead.is_read ? styles.leadItemUnread : ''} ${
                    selected?.id === lead.id ? styles.leadItemActive : ''
                  }`}
                  onClick={() => {
                    setSelected(lead)
                    if (!lead.is_read) markRead(lead)
                  }}
                >
                  <span className={styles.leadName}>{lead.name}</span>
                  <span className={styles.leadMeta}>
                    {new Date(lead.created_at).toLocaleDateString('es-ES')}
                  </span>
                  <span className={styles.leadEmail}>{lead.email}</span>
                </button>
              ))}
            </div>
            <div className={styles.leadDetail}>
              {selected ? (
                <>
                  <h3>{selected.name}</h3>
                  <p>
                    <a href={`mailto:${selected.email}`}>{selected.email}</a>
                  </p>
                  {selected.phone && <p>{selected.phone}</p>}
                  <p>
                    Tipo:{' '}
                    {selected.contact_type === 'professional' ? 'Empresa' : 'Particular'}
                  </p>
                  {selected.company && <p>Empresa: {selected.company}</p>}
                  {selected.service_interest && (
                    <p>Consulta: {INQUIRY[selected.service_interest] || selected.service_interest}</p>
                  )}
                  {selected.source && (
                    <p>Origen: {ORIGIN[selected.source] || selected.source}</p>
                  )}
                  <p className={styles.leadMessage}>{selected.message}</p>
                </>
              ) : (
                <p className={styles.leadsEmpty}>Selecciona una consulta</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
