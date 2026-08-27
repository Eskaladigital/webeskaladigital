import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

let _transporter: Transporter | null = null
let _warned = false

function smtpPass() {
  return process.env.SMTP_PASS?.trim() || process.env.SMTP_PASSWORD?.trim() || ''
}

function getTransporter(): Transporter | null {
  if (_transporter) return _transporter
  const host = process.env.SMTP_HOST?.trim() || 'ssl0.ovh.net'
  const port = Number(process.env.SMTP_PORT) || 465
  const user = process.env.SMTP_USER?.trim()
  const pass = smtpPass()
  if (!user || !pass) {
    if (!_warned) {
      console.warn('[email] SMTP_USER / SMTP_PASS no configurados; correo omitido')
      _warned = true
    }
    return null
  }
  _transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    tls: { rejectUnauthorized: process.env.NODE_ENV === 'production' },
  })
  return _transporter
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function referralLabel(value: string) {
  const map: Record<string, string> = {
    google: 'Búsqueda en Google',
    social: 'Redes sociales',
    referral: 'Recomendación',
    other: 'Otro',
  }
  return map[value] || value
}

function inquiryLabel(value: string) {
  const map: Record<string, string> = {
    'diseno-web': 'Diseño Web',
    'seo-local': 'SEO Local',
    'redes-sociales': 'Redes Sociales',
    'google-ads': 'Google Ads',
    'apps-ia': 'Apps con IA',
    chatbots: 'Chatbots',
    branding: 'Branding',
    'email-marketing': 'Email Marketing',
    otro: 'Otro',
  }
  return map[value] || value
}

const C = {
  page: '#f8fafc',
  paper: '#ffffff',
  ink: '#0f1729',
  muted: '#5c6478',
  line: '#e2e8f0',
  header: '#0f1729',
  headerFg: '#ff6b35',
  accent: '#ff6b35',
  box: '#fff4ef',
}

function layout(content: string) {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ESKALA</title></head>
<body style="margin:0;padding:0;background-color:${C.page};font-family:Arial,Helvetica,sans-serif;color:${C.ink};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.page};">
<tr><td align="center" style="padding:24px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:${C.paper};border:1px solid ${C.line};">
<tr><td style="background-color:${C.header};padding:24px 32px;text-align:center;">
<span style="font-size:20px;font-weight:bold;color:${C.headerFg};letter-spacing:2px;text-transform:uppercase;">ESKALA</span>
<br><span style="font-size:11px;color:#c5c8dc;letter-spacing:1px;text-transform:uppercase;">Marketing Digital</span>
</td></tr>
<tr><td style="padding:32px;">${content}</td></tr>
<tr><td style="background-color:${C.page};padding:20px 32px;border-top:1px solid ${C.line};text-align:center;">
<p style="margin:0;font-size:12px;color:${C.muted};">ESKALA Marketing Digital — www.eskaladigital.com</p>
<p style="margin:6px 0 0;font-size:11px;color:${C.line};">Este correo se ha enviado de forma automática.</p>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`
}

async function sendSmtpEmail(opts: {
  from: string
  to: string
  subject: string
  html: string
  replyTo?: string
}) {
  const transporter = getTransporter()
  if (!transporter) return { ok: false, skipped: true as const }
  try {
    await transporter.sendMail({
      from: opts.from,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
      replyTo: opts.replyTo,
    })
    return { ok: true, skipped: false as const }
  } catch (err) {
    console.error('[email] SMTP error', err)
    return { ok: false, skipped: false as const }
  }
}

const FROM = process.env.SMTP_FROM?.trim() || 'ESKALA Marketing <contacto@eskaladigital.com>'
const ADMIN = process.env.SMTP_TO?.trim() || 'contacto@eskaladigital.com'

function contactAdminHtml(lead: {
  name: string
  email: string
  phone?: string
  contactType?: string
  company?: string
  inquiryType?: string
  referralSource?: string
  message: string
}) {
  const isPro = lead.contactType === 'professional'
  const name = escapeHtml(lead.name)
  const email = escapeHtml(lead.email)
  const phone = lead.phone ? escapeHtml(lead.phone) : ''
  const company = lead.company ? escapeHtml(lead.company) : ''
  const inquiry = lead.inquiryType ? escapeHtml(inquiryLabel(lead.inquiryType)) : ''
  const referral = lead.referralSource ? escapeHtml(referralLabel(lead.referralSource)) : ''
  const message = escapeHtml(lead.message)
  return layout(`
<h1 style="margin:0 0 4px;font-size:20px;font-weight:bold;text-transform:uppercase;color:${isPro ? C.accent : C.ink};">Nueva consulta${isPro ? ' (Empresa)' : ''}</h1>
<p style="margin:0 0 24px;font-size:14px;color:${C.muted};">${new Date().toLocaleDateString('es-ES')} — ${name}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;background-color:${C.box};border:1px solid ${C.line};">
<p style="margin:0 0 2px;font-size:11px;font-weight:bold;text-transform:uppercase;color:${C.muted};letter-spacing:1px;">Contacto</p>
<p style="margin:0;font-size:14px;font-weight:bold;">${name}</p>
${company ? `<p style="margin:2px 0 0;font-size:13px;color:${C.muted};">${company}</p>` : ''}
<p style="margin:4px 0 0;font-size:13px;"><a href="mailto:${email}" style="color:${C.accent};">${email}</a></p>
${phone ? `<p style="margin:2px 0 0;font-size:13px;">${phone}</p>` : ''}
</td></tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;border:1px solid ${C.line};">
<p style="margin:0 0 8px;font-size:11px;font-weight:bold;text-transform:uppercase;color:${C.muted};letter-spacing:1px;">Tipo de consulta</p>
<p style="margin:0;font-size:13px;"><strong>${isPro ? 'Empresa' : 'Particular'}</strong>${inquiry ? ` — ${inquiry}` : ''}</p>
${referral ? `<p style="margin:8px 0 0;font-size:13px;color:${C.muted};">Origen: ${referral}</p>` : ''}
</td></tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;border:1px solid ${C.line};">
<p style="margin:0 0 8px;font-size:11px;font-weight:bold;text-transform:uppercase;color:${C.muted};letter-spacing:1px;">Mensaje</p>
<p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
</td></tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td align="center">
<a href="https://www.eskaladigital.com/administrator/contactos" style="display:inline-block;padding:12px 32px;background-color:${C.accent};color:#ffffff;font-size:13px;font-weight:bold;text-transform:uppercase;text-decoration:none;letter-spacing:1px;">Ver en el panel admin</a>
</td></tr></table>`)
}

function contactClientHtml(lead: { name: string; message: string }) {
  const name = escapeHtml(lead.name)
  const message = escapeHtml(lead.message)
  return layout(`
<h1 style="margin:0 0 4px;font-size:20px;font-weight:bold;text-transform:uppercase;color:${C.ink};">Hemos recibido tu consulta</h1>
<p style="margin:0 0 24px;font-size:14px;color:${C.muted};">ESKALA Marketing Digital</p>
<p style="margin:0 0 16px;font-size:14px;line-height:1.6;">Hola <strong>${name}</strong>,</p>
<p style="margin:0 0 24px;font-size:14px;line-height:1.6;">Gracias por escribirnos. Te responderemos en menos de 24 horas laborables.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;background-color:${C.box};border:1px solid ${C.line};">
<p style="margin:0 0 8px;font-size:11px;font-weight:bold;text-transform:uppercase;color:${C.muted};letter-spacing:1px;">Tu mensaje</p>
<p style="margin:0;font-size:13px;line-height:1.6;white-space:pre-wrap;">${message}</p>
</td></tr></table>
<p style="margin:0 0 8px;font-size:14px;line-height:1.6;">Si necesitas añadir algo, responde a este correo o escribe a <a href="mailto:contacto@eskaladigital.com" style="color:${C.accent};">contacto@eskaladigital.com</a>.</p>
<p style="margin:24px 0 0;font-size:14px;line-height:1.6;">ESKALA · Murcia</p>`)
}

export async function sendContactEmails(lead: {
  name: string
  email: string
  phone?: string
  contactType?: string
  company?: string
  inquiryType?: string
  referralSource?: string
  message: string
}) {
  const admin = await sendSmtpEmail({
    from: FROM,
    to: ADMIN,
    subject: `[Web] Nueva consulta de ${lead.name}${lead.contactType === 'professional' ? ' (Empresa)' : ''}`,
    html: contactAdminHtml(lead),
    replyTo: lead.email,
  })
  const client = await sendSmtpEmail({
    from: FROM,
    to: lead.email,
    subject: 'Hemos recibido tu consulta — ESKALA',
    html: contactClientHtml(lead),
  })
  return { admin, client }
}
