import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL || 'derekhuit@gmail.com'

function escapeHtml(s: string) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      source, first_name, last_name, email, phone,
      branch, service_status, va_entitlement,
      loan_purpose, target_location, target_price,
      timeframe, pcs_orders, notes,
    } = body || {}

    if (!first_name || !email || !phone) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      null
    const ua = req.headers.get('user-agent') || null

    // Insert into Supabase. Failure to log MUST NOT lose the lead — we still email.
    let logged = false
    try {
      const { error } = await supabaseAdmin.from('va_leads').insert({
        source: source || 'unknown',
        first_name, last_name: last_name || null, email: String(email).toLowerCase(), phone,
        branch: branch || null, service_status: service_status || null,
        va_entitlement: va_entitlement || null, loan_purpose: loan_purpose || null,
        target_location: target_location || null, target_price: target_price || null,
        timeframe: timeframe || null, pcs_orders: pcs_orders || null, notes: notes || null,
        ip_address: ip, user_agent: ua,
      })
      if (!error) logged = true
      else console.error('va_leads insert error:', error)
    } catch (e) {
      console.error('va_leads insert exception:', e)
    }

    // Email Derek immediately
    let emailed = false
    if (resend) {
      try {
        const html = `
<h2 style="color:#0B1020">New VA Loan Lead — Alaska Military Home Loans</h2>
<p style="color:#666">Source: <strong>${escapeHtml(source || 'unknown')}</strong></p>
<table style="border-collapse:collapse;width:100%;max-width:600px">
  <tr><td style="padding:6px;color:#666;width:160px">Name</td><td style="padding:6px"><strong>${escapeHtml(first_name)} ${escapeHtml(last_name || '')}</strong></td></tr>
  <tr><td style="padding:6px;color:#666">Email</td><td style="padding:6px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
  <tr><td style="padding:6px;color:#666">Phone</td><td style="padding:6px"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
  <tr><td style="padding:6px;color:#666">Branch</td><td style="padding:6px">${escapeHtml(branch || '—')}</td></tr>
  <tr><td style="padding:6px;color:#666">Status</td><td style="padding:6px">${escapeHtml(service_status || '—')}</td></tr>
  <tr><td style="padding:6px;color:#666">Entitlement</td><td style="padding:6px">${escapeHtml(va_entitlement || '—')}</td></tr>
  <tr><td style="padding:6px;color:#666">Purpose</td><td style="padding:6px">${escapeHtml(loan_purpose || '—')}</td></tr>
  <tr><td style="padding:6px;color:#666">Location</td><td style="padding:6px">${escapeHtml(target_location || '—')}</td></tr>
  <tr><td style="padding:6px;color:#666">Target price</td><td style="padding:6px">${escapeHtml(target_price || '—')}</td></tr>
  <tr><td style="padding:6px;color:#666">Timeframe</td><td style="padding:6px">${escapeHtml(timeframe || '—')}</td></tr>
  ${pcs_orders ? `<tr><td style="padding:6px;color:#666">PCS report</td><td style="padding:6px">${escapeHtml(pcs_orders)}</td></tr>` : ''}
  ${notes ? `<tr><td style="padding:6px;color:#666">Notes</td><td style="padding:6px;white-space:pre-wrap">${escapeHtml(notes)}</td></tr>` : ''}
</table>
<p style="color:#999;font-size:12px;margin-top:18px">IP ${escapeHtml(ip || '—')} · ${escapeHtml(ua || '—')}</p>`

        await resend.emails.send({
          from: 'Alaska Military Home Loans <leads@huit.ai>',
          to: NOTIFY_EMAIL,
          replyTo: String(email),
          subject: `🇺🇸 New VA Lead — ${first_name} ${last_name || ''} (${target_location || branch || 'AK'})`,
          html,
        })
        emailed = true
      } catch (e) {
        console.error('Resend error:', e)
      }
    }

    return NextResponse.json({ ok: true, logged, emailed })
  } catch (err: any) {
    console.error('va-leads handler error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
