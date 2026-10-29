'use client'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { langFromPath, type Lang } from '@/lib/i18n'
import { UNIVERSE_EN } from '@/lib/en-content'

const loadingStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: '#0F1729',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#F4F2EE',
  fontFamily: 'system-ui, sans-serif',
  letterSpacing: '0.3em',
  textTransform: 'uppercase',
  fontSize: '0.75rem',
}

function Loading() {
  const lang = langFromPath(usePathname())
  return <div style={loadingStyle}>{lang === 'en' ? UNIVERSE_EN.loading : 'Despegando…'}</div>
}

const Universo3D = dynamic(() => import('./Universo3D'), {
  ssr: false,
  loading: Loading,
})

export default function Universo3DClient({ lang = 'es' }: { lang?: Lang }) {
  return <Universo3D lang={lang} />
}
