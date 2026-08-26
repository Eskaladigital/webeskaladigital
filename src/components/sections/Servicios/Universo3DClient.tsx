'use client'

import dynamic from 'next/dynamic'

const Universo3D = dynamic(() => import('./Universo3D'), {
  ssr: false,
  loading: () => (
    <div
      style={{
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
      }}
    >
      Despegando…
    </div>
  ),
})

export default function Universo3DClient() {
  return <Universo3D />
}
