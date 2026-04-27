'use client'

import { useState } from 'react'
import { C, F } from '@/lib/theme'

export default function VALeadForm({
  source = 'hub',
  variant = 'standard',
  defaultLocation = '',
}: {
  source?: string
  variant?: 'standard' | 'pcs'
  defaultLocation?: string
}) {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      source,
      first_name: String(fd.get('first_name') || '').trim(),
      last_name: String(fd.get('last_name') || '').trim(),
      email: String(fd.get('email') || '').trim().toLowerCase(),
      phone: String(fd.get('phone') || '').trim(),
      branch: String(fd.get('branch') || ''),
      service_status: String(fd.get('service_status') || ''),
      va_entitlement: String(fd.get('va_entitlement') || ''),
      loan_purpose: String(fd.get('loan_purpose') || ''),
      target_location: String(fd.get('target_location') || defaultLocation),
      target_price: String(fd.get('target_price') || ''),
      timeframe: String(fd.get('timeframe') || ''),
      pcs_orders: String(fd.get('pcs_orders') || ''),
      notes: String(fd.get('notes') || ''),
    }

    if (!payload.first_name || !payload.email || !payload.phone) {
      setError('First name, email, and phone are required.')
      setSubmitting(false)
      return
    }

    try {
      const res = await fetch('/api/va-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Submission failed. Please call (907) 727-2727.')
        setSubmitting(false)
        return
      }
      setSuccess(true)
    } catch {
      setError('Connection issue. Please call (907) 727-2727.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: '32px 28px', textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
        <h3 style={{ fontFamily: F.serif, fontSize: 24, color: C.gold, marginBottom: 10 }}>Request received.</h3>
        <p style={{ color: C.textDim, lineHeight: 1.6, marginBottom: 16 }}>
          Derek will contact you within one business day to walk through your VA entitlement, certificate of eligibility, and pre-approval next steps.
        </p>
        <p style={{ color: C.textFaint, fontSize: 13 }}>
          Need answers sooner? Call <a href="tel:+19077272727" style={{ color: C.gold }}>(907) 727-2727</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: '24px 22px' }}>
      <h3 style={{ fontFamily: F.serif, fontSize: 22, color: C.gold, marginBottom: 4 }}>
        {variant === 'pcs' ? 'Moving to Alaska on Orders?' : 'Get Your VA Loan Estimate'}
      </h3>
      <p style={{ color: C.textDim, fontSize: 13.5, marginBottom: 18, lineHeight: 1.55 }}>
        {variant === 'pcs'
          ? 'Get your Alaska VA pre-approval started before you arrive. No cost, no obligation.'
          : 'No cost, no obligation. Derek Huit, NMLS #203980, 18+ years of Alaska VA loans.'}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
        <Input name="first_name" label="First name *" required />
        <Input name="last_name" label="Last name" />
      </div>

      <Input name="email" label="Email *" type="email" required />
      <Input name="phone" label="Phone *" type="tel" required placeholder="(907) 555-1234" />

      <Select name="branch" label="Branch of Service" options={[
        '', 'Army', 'Navy', 'Air Force', 'Marines', 'Coast Guard', 'Space Force', 'National Guard', 'Reserves', 'Veteran (any branch)', 'Surviving spouse',
      ]} />

      <Select name="service_status" label="Service Status" options={[
        '', 'Active duty', 'Reserve / Guard', 'Veteran', 'Retired', 'Surviving spouse',
      ]} />

      <Select name="va_entitlement" label="VA Entitlement Status" options={[
        '', 'First-time use', 'Restoration of entitlement', 'Partial entitlement remaining', 'Not sure — please help me check',
      ]} />

      <Select name="loan_purpose" label="Purpose" options={[
        '', 'Purchase a home', 'Refinance (IRRRL streamline)', 'Cash-out refinance', 'Just exploring',
      ]} />

      {variant === 'pcs' && (
        <Input name="pcs_orders" label="PCS report date (if known)" placeholder="e.g. June 2026" />
      )}

      <Input
        name="target_location"
        label={variant === 'pcs' ? 'Reporting to (base or city)' : 'Target location in Alaska'}
        placeholder="JBER, Anchorage, Fairbanks, Mat-Su…"
        defaultValue={defaultLocation}
      />

      <Input name="target_price" label="Target purchase price" placeholder="$450,000" />

      <Select name="timeframe" label="Timeframe" options={[
        '', 'Within 30 days', '1–3 months', '3–6 months', '6+ months', 'Just researching',
      ]} />

      <label style={{ display: 'block', fontSize: 13, color: C.textDim, marginBottom: 4, marginTop: 8 }}>Anything else we should know?</label>
      <textarea
        name="notes"
        rows={3}
        style={{
          width: '100%',
          background: C.bg3,
          border: `1px solid ${C.borderLight}`,
          borderRadius: 8,
          padding: '10px 12px',
          color: C.text,
          fontSize: 14,
          fontFamily: F.sans,
          resize: 'vertical',
          marginBottom: 14,
        }}
      />

      {error && (
        <div style={{ background: 'rgba(193,39,45,0.12)', border: '1px solid rgba(193,39,45,0.4)', color: '#FF8A8E', borderRadius: 8, padding: '10px 12px', fontSize: 13, marginBottom: 12 }}>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        style={{
          width: '100%',
          background: submitting ? C.bg3 : C.gold,
          color: submitting ? C.textFaint : C.bg,
          border: 'none',
          borderRadius: 10,
          padding: '15px 20px',
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: '0.02em',
          cursor: submitting ? 'wait' : 'pointer',
          minHeight: 48,
          transition: 'opacity 0.15s',
        }}
      >
        {submitting ? 'Submitting…' : 'Get My VA Loan Estimate →'}
      </button>

      <p style={{ fontSize: 11, color: C.textFaint, marginTop: 12, lineHeight: 1.5, textAlign: 'center' }}>
        By submitting you agree to be contacted by Derek Huit (NMLS #203980) about your VA loan. See our{' '}
        <a href="https://huit.ai/terms" style={{ color: C.textFaint, textDecoration: 'underline' }}>Terms</a> and{' '}
        <a href="https://huit.ai/privacy" style={{ color: C.textFaint, textDecoration: 'underline' }}>Privacy Policy</a>.
        VA-approved lender. Equal Housing Lender.
      </p>
    </form>
  )
}

function Input({ name, label, type = 'text', required, placeholder, defaultValue }: any) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ display: 'block', fontSize: 13, color: C.textDim, marginBottom: 4 }}>{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        style={{
          width: '100%',
          background: C.bg3,
          border: `1px solid ${C.borderLight}`,
          borderRadius: 8,
          padding: '10px 12px',
          color: C.text,
          fontSize: 14,
          fontFamily: F.sans,
          minHeight: 44,
        }}
      />
    </div>
  )
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ display: 'block', fontSize: 13, color: C.textDim, marginBottom: 4 }}>{label}</label>
      <select
        name={name}
        style={{
          width: '100%',
          background: C.bg3,
          border: `1px solid ${C.borderLight}`,
          borderRadius: 8,
          padding: '10px 12px',
          color: C.text,
          fontSize: 14,
          fontFamily: F.sans,
          minHeight: 44,
          appearance: 'none',
        }}
      >
        {options.map((o) => (
          <option key={o} value={o} style={{ background: C.bg2, color: C.text }}>
            {o || 'Select one…'}
          </option>
        ))}
      </select>
    </div>
  )
}
