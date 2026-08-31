import { NextResponse } from 'next/server'
import { getSupabaseServiceClient } from '@/lib/supabase-service'
import { sendContactEmails } from '@/lib/email'

/** Token tipo bot: una sola palabra, mayúsculas en medio (iNgXrKYUMiecBwtr). */
function looksLikeRandomToken(value: string): boolean {
  const t = value.trim()
  if (t.length < 12 || /\s/.test(t) || !/^[A-Za-z0-9]+$/.test(t)) return false
  const innerCaps = t.slice(1).replace(/[^A-Z]/g, '').length
  const lowers = (t.match(/[a-z]/g) || []).length
  const uppers = (t.match(/[A-Z]/g) || []).length
  return innerCaps >= 3 && lowers >= 3 && uppers >= 3
}

/** Gmail con muchos puntos en el local: n.u.k.og.i.sul.i76.6@gmail.com */
function dottedGmailSpam(email: string): boolean {
  const [local, domain] = email.toLowerCase().split('@')
  if (!domain?.endsWith('gmail.com') || !local) return false
  return (local.match(/\./g) || []).length >= 4
}

function isBotSubmission(input: {
  name: string
  email: string
  message: string
  website: string
  startedAt: string
}): boolean {
  if (input.website) return true
  const started = Number(input.startedAt)
  if (!Number.isFinite(started) || started <= 0) return true
  const elapsed = Date.now() - started
  if (elapsed < 2500 || elapsed > 24 * 60 * 60 * 1000) return true
  if (looksLikeRandomToken(input.name) && looksLikeRandomToken(input.message)) return true
  if (dottedGmailSpam(input.email) && looksLikeRandomToken(input.name)) return true
  return false
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const message = String(body.message || '').trim()
    const phone = String(body.phone || '').trim()
    const contactType = body.contact_type === 'professional' ? 'professional' : 'particular'
    const company = String(body.company || '').trim()
    const inquiryType = String(body.inquiry_type || body.service || '').trim()
    const referralSource = String(body.referral_source || '').trim()
    const gdprConsent = Boolean(body.gdpr_consent || body.privacy)
    const website = String(body.website || '').trim()
    const startedAt = String(body.form_started_at || '')

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 })
    }
    if (!gdprConsent) {
      return NextResponse.json({ error: 'Debes aceptar la política de privacidad' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email no válido' }, { status: 400 })
    }
    if (isBotSubmission({ name, email, message, website, startedAt })) {
      return NextResponse.json({ success: true })
    }

    const sb = getSupabaseServiceClient()
    if (!sb) {
      return NextResponse.json({ error: 'Servicio no configurado' }, { status: 503 })
    }

    const { error } = await sb.from('contact_submissions').insert({
      name,
      email,
      phone: phone || null,
      contact_type: contactType,
      company: contactType === 'professional' ? company || null : null,
      service_interest: inquiryType || null,
      source: referralSource || null,
      message,
      gdpr_consent: gdprConsent,
      status: 'new',
      is_read: false,
    })

    if (error) {
      console.error('Contact insert error:', error)
      return NextResponse.json({ error: 'No se pudo guardar la consulta' }, { status: 500 })
    }

    try {
      await sendContactEmails({
        name,
        email,
        phone,
        contactType,
        company,
        inquiryType,
        referralSource,
        message,
      })
    } catch (mailError) {
      console.error('Contact email error:', mailError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
