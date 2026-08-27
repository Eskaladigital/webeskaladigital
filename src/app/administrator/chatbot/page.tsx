'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import LogoutButton from '../LogoutButton'
import NoraPanel from './NoraPanel'
import styles from '../admin.module.css'

export default function AdminNoraPage() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    async function gate() {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        router.push('/administrator/login')
        return
      }
      setEmail(user.email || '')
      setReady(true)
    }
    gate()
  }, [router])

  if (!ready) {
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
            <h1>Nora</h1>
            <p>{email}</p>
          </div>
          <div className={styles.headerActions}>
            <Link href="/administrator" className={styles.btnSecondary}>
              Artículos
            </Link>
            <Link href="/administrator/contactos" className={styles.btnSecondary}>
              Consultas
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>
      <div className={styles.content} style={{ maxWidth: 1400, margin: '0 auto', padding: '2rem' }}>
        <NoraPanel />
      </div>
    </div>
  )
}
