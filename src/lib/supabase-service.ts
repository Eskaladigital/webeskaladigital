import { createClient, type SupabaseClient } from '@supabase/supabase-js'

function resolveSupabaseUrl(): string {
  return (
    process.env.SUPABASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
    ''
  )
}

function resolveServiceRoleKey(): string {
  return process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || ''
}

const noStoreFetch: typeof fetch = (input, init) =>
  fetch(input, { ...init, cache: 'no-store' })

export function getSupabaseServiceClient(): SupabaseClient | null {
  const url = resolveSupabaseUrl()
  const key = resolveServiceRoleKey()
  if (!url || !key) return null
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { fetch: noStoreFetch },
  })
}

export function getSupabaseServiceConfigError(): string | null {
  if (!resolveSupabaseUrl()) return 'Falta NEXT_PUBLIC_SUPABASE_URL en el servidor'
  if (!resolveServiceRoleKey()) return 'Falta SUPABASE_SERVICE_ROLE_KEY en el servidor'
  return null
}
