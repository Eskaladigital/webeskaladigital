import { NextResponse } from 'next/server'
import { getSupabaseServiceClient } from '@/lib/supabase-service'
import { sendContactEmails } from '@/lib/email'

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

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 })
    }
    if (!gdprConsent) {
      return NextResponse.json({ error: 'Debes aceptar la política de privacidad' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email no válido' }, { status: 400 })
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
