'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import LogoutButton from './LogoutButton'
import ArticlesTable from './ArticlesTable'
import styles from './admin.module.css'

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [articles, setArticles] = useState<any[]>([])
  const [filteredArticles, setFilteredArticles] = useState<any[]>([])
  
  // Cargar término de búsqueda desde localStorage
  const [searchTerm, setSearchTerm] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('admin_search_term') || ''
    }
    return ''
  })
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Guardar término de búsqueda en localStorage cuando cambie
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('admin_search_term', searchTerm)
    }
  }, [searchTerm])

  useEffect(() => {
    async function loadData() {
      const supabase = createClient()
      
      // Verificar autenticación
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/administrator/login')
        return
      }
      
      setUser(user)

      // Obtener artículos
      const { data: articlesData, error: articlesError } = await supabase
        .from('articles')
        .select(`
          id,
          title,
          slug,
          published,
          featured,
          views,
          published_at,
          created_at,
          updated_at,
          featured_image,
          category:categories(name)
        `)
        .order('created_at', { ascending: false })

      if (articlesError) {
        setError(articlesError.message)
      } else {
        setArticles(articlesData || [])
        setFilteredArticles(articlesData || [])
      }
      
      setLoading(false)
    }

    loadData()
  }, [router])

  // Filtrar artículos cuando cambia el término de búsqueda
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredArticles(articles)
    } else {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.slug.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredArticles(filtered)
    }
  }, [searchTerm, articles])

  if (loading) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.loading}>Cargando...</div>
      </div>
    )
  }

  const stats = {
    total: articles?.length || 0,
    published: articles?.filter(a => a.published).length || 0,
    drafts: articles?.filter(a => !a.published).length || 0,
    featured: articles?.filter(a => a.featured).length || 0,
  }

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1>Panel de Administración</h1>
            <p>{user?.email}</p>
          </div>
          <div className={styles.headerActions}>
            <Link href="/administrator/contactos" className={styles.btnSecondary}>
              Consultas
            </Link>
            <Link href="/administrator/chatbot" className={styles.btnSecondary}>
              Nora
            </Link>
            <Link href="/blog" className={styles.btnSecondary}>
              Ver Blog
            </Link>
            <Link href="/administrator/articles/new" className={styles.btnPrimary}>
              + Nuevo Artículo
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.total}</div>
          <div className={styles.statLabel}>Total Artículos</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.published}</div>
          <div className={styles.statLabel}>Publicados</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.drafts}</div>
          <div className={styles.statLabel}>Borradores</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats.featured}</div>
          <div className={styles.statLabel}>Destacados</div>
        </div>
      </div>

      {/* Articles Table */}
      <div className={styles.content}>
        <div className={styles.tableHeader}>
          <h2>Artículos</h2>
          
          {/* Barra de búsqueda */}
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Buscar por título o slug..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className={styles.clearBtn}
                title="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {searchTerm && (
          <div className={styles.searchInfo}>
            Mostrando {filteredArticles.length} de {articles.length} artículos
          </div>
        )}

        {error && (
          <div className={styles.error}>
            Error al cargar artículos: {error}
          </div>
        )}

        {filteredArticles && filteredArticles.length > 0 ? (
          <ArticlesTable articles={filteredArticles} />
        ) : searchTerm ? (
          <div className={styles.empty}>
            <p>No se encontraron artículos con "{searchTerm}"</p>
            <button 
              onClick={() => setSearchTerm('')}
              className={styles.btnSecondary}
            >
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No hay artículos todavía.</p>
            <Link href="/administrator/articles/new" className={styles.btnPrimary}>
              Crear el primero
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

