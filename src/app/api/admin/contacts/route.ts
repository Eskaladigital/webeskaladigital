import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getSupabaseServiceClient } from '@/lib/supabase-service'

async function requireAdmin() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return null
}

export async function GET() {
  const authError = await requireAdmin()
  if (authError) return authError

  const sb = getSupabaseServiceClient()
  if (!sb) {
    return NextResponse.json({ error: 'Supabase service role no configurado' }, { status: 503 })
  }

  const { data, error } = await sb
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function PATCH(request: Request) {
  const authError = await requireAdmin()
  if (authError) return authError

  const sb = getSupabaseServiceClient()
  if (!sb) {
    return NextResponse.json({ error: 'Supabase service role no configurado' }, { status: 503 })
  }

  const body = await request.json()
  const id = String(body.id || '')
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

  const { data, error } = await sb
    .from('contact_submissions')
    .update({
      is_read: Boolean(body.is_read),
      notes: body.notes ?? undefined,
    })
    .eq('id', id)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
