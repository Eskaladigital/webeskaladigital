import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getSupabaseServiceClient } from '@/lib/supabase-service'
import type { SupabaseClient } from '@supabase/supabase-js'

export async function requireAdminService(): Promise<
  { ok: true; sb: SupabaseClient } | { ok: false; response: NextResponse }
> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { ok: false, response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  }
  const sb = getSupabaseServiceClient()
  if (!sb) {
    return {
      ok: false,
      response: NextResponse.json({ error: 'Supabase service role no configurado' }, { status: 503 }),
    }
  }
  return { ok: true, sb }
}
