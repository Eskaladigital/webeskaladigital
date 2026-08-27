'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { BarChart3, Cookie, Megaphone, Shield, X } from 'lucide-react'

export const OPEN_COOKIE_SETTINGS = 'openCookieSettings'
const KEY = 'eskala_cookie_consent'
const PREFS_KEY = 'eskala_cookie_preferences'

type Prefs = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

const ALL_ON: Prefs = { necessary: true, analytics: true, marketing: true }
const ONLY_NECESSARY: Prefs = { necessary: true, analytics: false, marketing: false }

function updateGtag(prefs: Prefs) {
  if (typeof window === 'undefined' || !(window as any).gtag) return
  const analytics = prefs.analytics ? 'granted' : 'denied'
  const ads = prefs.marketing ? 'granted' : 'denied'
  ;(window as any).gtag('consent', 'update', {
    analytics_storage: analytics,
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
  })
}

function persist(prefs: Prefs) {
  const granted = prefs.analytics || prefs.marketing
  localStorage.setItem(KEY, granted ? 'granted' : 'denied')
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs))
  updateGtag(prefs)
}

function readPrefs(): Prefs | null {
  try {
    const raw = localStorage.getItem(PREFS_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<Prefs>
      return { necessary: true, analytics: Boolean(parsed.analytics), marketing: Boolean(parsed.marketing) }
    }
    const legacy = localStorage.getItem(KEY)
    if (legacy === 'granted') return ALL_ON
    if (legacy === 'denied') return ONLY_NECESSARY
  } catch {
    /* modo privado */
  }
  return null
}

export function openCookieSettings() {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))
}

export function CookieSettingsButton({
  className,
  label = 'Configurar cookies',
}: {
  className?: string
  label?: string
}) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {label}
    </button>
  )
}

export function CookieConsentBar() {
  const [view, setView] = useState<'hidden' | 'banner' | 'settings'>('hidden')
  const [prefs, setPrefs] = useState<Prefs>(ALL_ON)

  useEffect(() => {
    const stored = readPrefs()
    if (stored) {
      setPrefs(stored)
      updateGtag(stored)
    } else {
      setView('banner')
    }
    const open = () => {
      const current = readPrefs()
      if (current) setPrefs(current)
      setView('settings')
    }
    window.addEventListener(OPEN_COOKIE_SETTINGS, open)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, open)
  }, [])

  const acceptAll = useCallback(() => {
    persist(ALL_ON)
    setPrefs(ALL_ON)
    setView('hidden')
  }, [])

  const rejectAll = useCallback(() => {
    persist(ONLY_NECESSARY)
    setPrefs(ONLY_NECESSARY)
    setView('hidden')
  }, [])

  const save = useCallback(() => {
    persist(prefs)
    setView('hidden')
  }, [prefs])

  if (view === 'hidden') return null

  if (view === 'settings') {
    return (
      <div className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title">
        <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Cookie className="h-8 w-8 text-orange-500" aria-hidden="true" />
              <h2 id="cookie-settings-title" className="text-xl font-bold text-slate-900">Configuración de cookies</h2>
            </div>
            <button type="button" onClick={() => setView(readPrefs() ? 'hidden' : 'banner')} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg" aria-label="Cerrar">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <p className="text-slate-600 mb-6">Elige qué tipos de cookies deseas aceptar. Las cookies necesarias no se pueden desactivar.</p>
            <Category icon={Shield} title="Cookies necesarias" description="Esenciales para el funcionamiento del sitio y recordar tu consentimiento." enabled required />
            <Category icon={BarChart3} title="Cookies analíticas" description="Nos permiten medir visitas y mejorar eskaladigital.com (Google Analytics)." enabled={prefs.analytics} onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))} />
            <Category icon={Megaphone} title="Cookies de marketing" description="Miden campañas y anuncios (Google Ads / GTM)." enabled={prefs.marketing} onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))} />
            <p className="text-sm text-slate-500 mt-6">
              Más información en la{' '}
              <Link href="/politica-privacidad" className="text-orange-500 hover:underline" onClick={() => setView('hidden')}>
                Política de privacidad
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 bg-slate-50">
            <button type="button" onClick={rejectAll} className="flex-1 px-4 py-2.5 text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-white">Rechazar todas</button>
            <button type="button" onClick={save} className="flex-1 px-4 py-2.5 text-slate-700 bg-white border border-slate-300 rounded-lg font-medium hover:bg-slate-50">Guardar preferencias</button>
            <button type="button" onClick={acceptAll} className="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-400">Aceptar todas</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 bg-white border-t border-slate-200 shadow-lg md:p-6" role="region" aria-label="Banner de consentimiento de cookies">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex-1 flex items-start gap-3">
          <Cookie className="h-8 w-8 text-orange-500 flex-shrink-0 mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Utilizamos cookies</h3>
            <p className="text-slate-600 text-sm">
              Usamos cookies de analítica y publicidad para medir visitas y mejorar la web. Puedes aceptar todas o configurar tus preferencias.{' '}
              <Link href="/politica-privacidad" className="text-orange-500 hover:underline">Política de privacidad</Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0">
          <button type="button" onClick={() => setView('settings')} className="px-4 py-2 text-slate-700 bg-slate-100 rounded-lg font-medium hover:bg-slate-200 text-sm">Configurar</button>
          <button type="button" onClick={acceptAll} className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-400 text-sm">Aceptar todas</button>
        </div>
      </div>
    </div>
  )
}

function Category({
  icon: Icon,
  title,
  description,
  enabled,
  required,
  onChange,
}: {
  icon: typeof Shield
  title: string
  description: string
  enabled: boolean
  required?: boolean
  onChange?: (v: boolean) => void
}) {
  return (
    <div className={`p-4 rounded-xl border-2 mb-4 ${enabled ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-gray-50'}`}>
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${enabled ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`} aria-hidden="true">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1 gap-3">
            <h3 className="font-semibold text-slate-900">{title}</h3>
            {required ? (
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full whitespace-nowrap">Siempre activas</span>
            ) : (
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={enabled} onChange={(e) => onChange?.(e.target.checked)} aria-label={title} />
                <span className="w-10 h-6 bg-gray-300 rounded-full peer-checked:bg-orange-500 transition-colors" />
                <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4" />
              </label>
            )}
          </div>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  )
}
