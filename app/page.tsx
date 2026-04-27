import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VALeadForm from '@/components/VALeadForm'
import Link from 'next/link'
import { C, F } from '@/lib/theme'

export const metadata = {
  title: 'Alaska Military Home Loans | VA Loans for JBER, Eielson, Fort Wainwright',
  description:
    "Alaska's VA loan specialist. 0% down purchases for active duty, veterans, and surviving spouses. Derek Huit, NMLS #203980 — 18+ years, $1B+ closed.",
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much VA loan can I get in Alaska in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With full VA entitlement there is no maximum loan amount, but lenders typically follow the 2026 conforming loan limit of $806,500 (high-cost designation in most Alaska counties). Above that threshold loans are still possible but may require a small down payment proportional to the amount over the limit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the VA funding fee in Alaska?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For first-time use with 0% down the funding fee is 2.15%. Second-and-subsequent use is 3.3%. Down payments of 5% reduce it to 1.5%, and 10% or more reduces it to 1.25%. Veterans receiving VA disability compensation are exempt from the funding fee entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a VA loan to buy a home at JBER?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You cannot buy on-base housing with a VA loan since base housing is government-owned. But VA loans are the dominant financing for military families buying off-base in Eagle River, South Anchorage, JBER-adjacent neighborhoods, Mat-Su Valley, and surrounding areas — typically 0% down with no private mortgage insurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a VA loan take to close in Alaska?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard Alaska VA closings run 30-45 days. Properties on well/septic add 7-10 days for required water and septic inspections. PCS-driven purchases can sometimes be expedited to 21-30 days when a Notice of Value is in hand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I keep my VA entitlement when I PCS out of Alaska?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can rent the Alaska home and keep the VA loan. If you want to use VA financing again at your next duty station you may have partial entitlement available, or you can apply for a one-time entitlement restoration after the Alaska loan is paid off or assumed by another VA-eligible borrower.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do VA loans require PMI in Alaska?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. VA loans never require private mortgage insurance, regardless of down payment. The VA funding fee replaces PMI, and most borrowers finance it into the loan.',
      },
    },
  ],
}

export default function HubPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      {/* HERO */}
      <section style={{ padding: '60px 20px 40px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: 40, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-block', background: C.goldDim, color: C.gold, padding: '6px 14px', borderRadius: 30, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 22 }}>
              ★ Alaska's VA Loan Specialist
            </div>
            <h1 style={{ fontFamily: F.serif, fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', color: C.text, marginBottom: 18 }}>
              0% Down VA Loans for Alaska's Military Families.
            </h1>
            <p style={{ fontSize: 19, color: C.textDim, lineHeight: 1.6, marginBottom: 26, maxWidth: 600 }}>
              Whether you're stationed at JBER, Eielson, Fort Wainwright, or you're a veteran already living in Alaska — Derek Huit has closed VA loans for Alaska's service members for 18+ years. $1B+ in career production. No buy-down gimmicks. Just the right loan, closed on time.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
              <a href="#apply" style={{ background: C.gold, color: C.bg, padding: '15px 28px', borderRadius: 8, fontSize: 15, fontWeight: 800, textDecoration: 'none', minHeight: 48, display: 'inline-flex', alignItems: 'center' }}>
                Get My VA Pre-Approval →
              </a>
              <a href="tel:+19077272727" style={{ background: 'transparent', color: C.text, padding: '15px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none', border: `1px solid ${C.border}`, minHeight: 48, display: 'inline-flex', alignItems: 'center' }}>
                Call (907) 727-2727
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14, marginTop: 20 }}>
              <Stat value="$1B+" label="Career production" />
              <Stat value="18+" label="Years in Alaska VA" />
              <Stat value="24%" label="VA share of AK loans" sub="HMDA 2024" />
              <Stat value="0%" label="Down required" />
            </div>
          </div>

          <div id="apply">
            <VALeadForm source="hub-hero" />
          </div>
        </div>
      </section>

      {/* WHY HERE */}
      <Section eyebrow="Why Alaska military families choose Derek">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          <Card icon="★" title="JBER & Eielson local">
            18+ years closing VA loans for Anchorage and Fairbanks military families. Knows which neighborhoods, which inspectors, which appraisers actually understand bush properties.
          </Card>
          <Card icon="◈" title="Active-duty PCS expert">
            Build your Alaska pre-approval before you arrive. Rate locks that survive a 90-day PCS window, COE help, and remote signing for your final closing day.
          </Card>
          <Card icon="✦" title="Alaska-specific edge">
            Well-and-septic inspections, remote appraisers, and AHFC stack-able programs — handled. Typical Lower 48 lender stumbles here. Derek doesn't.
          </Card>
        </div>
      </Section>

      {/* VA ENTITLEMENT 101 */}
      <Section eyebrow="VA Entitlement, in plain English" title="What you actually have, and how to use it">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 16 }}>
          <Card title="First-time use">
            Full entitlement = no loan limit if you have full entitlement. With $0 down, you can typically borrow up to the conforming limit ($806,500 in 2026 high-cost areas, which covers most of Alaska) without contributing a down payment.
          </Card>
          <Card title="Restoration">
            Sold the previous VA-financed home, or had it assumed by another VA-eligible borrower? You're eligible for one-time entitlement restoration. Derek runs that process on your behalf.
          </Card>
          <Card title="Partial entitlement">
            Still own the prior VA-financed home? You may have partial entitlement remaining for a second VA loan. The math involves your prior loan amount and your new county loan limit. We'll calculate it.
          </Card>
          <Card title="Surviving spouse">
            Spouses of service members who died in service or from a service-connected disability are eligible. Funding fee is waived. Same 0% down purchase or IRRRL refinance available.
          </Card>
        </div>
      </Section>

      {/* FUNDING FEE TABLE */}
      <Section eyebrow="VA Funding Fee — 2026">
        <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: '28px 26px' }}>
          <h3 style={{ fontFamily: F.serif, fontSize: 22, color: C.gold, marginBottom: 12 }}>Funding Fee at a Glance</h3>
          <p style={{ color: C.textDim, marginBottom: 18, lineHeight: 1.6 }}>
            The VA funding fee is a one-time charge that helps keep the VA program self-funding. It can be paid at closing or financed into your loan. Veterans receiving VA disability compensation are exempt.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: 14 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                  <th style={th}>Down Payment</th>
                  <th style={th}>First-Time Use</th>
                  <th style={th}>Second & Subsequent</th>
                </tr>
              </thead>
              <tbody>
                <Row a="Less than 5%" b="2.15%" c="3.30%" />
                <Row a="5% to 9.99%" b="1.50%" c="1.50%" />
                <Row a="10% or more" b="1.25%" c="1.25%" />
                <Row a="VA disability comp" b="Exempt" c="Exempt" highlight />
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: C.textFaint, lineHeight: 1.5 }}>
            Reserve and National Guard funding fees match active duty as of 2020. Funding fee figures from the VA Lender's Handbook (38 CFR 36.4313). Always verify your specific funding fee on your COE.
          </p>
        </div>
      </Section>

      {/* RESIDUAL INCOME */}
      <Section eyebrow="Residual Income — what most lenders skip" title="The number that decides if you actually qualify">
        <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: '28px 26px' }}>
          <p style={{ color: C.textDim, lineHeight: 1.7, marginBottom: 18 }}>
            VA underwriting cares about your <em>residual income</em> — the dollars left over each month after housing, debts, taxes, and basic living expenses. Alaska is in the <strong>Western region</strong>. Hit the residual minimum and qualifying gets dramatically easier, even at higher debt-to-income ratios.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                  <th style={th}>Family Size</th>
                  <th style={th}>Loan ≤ $79,999</th>
                  <th style={th}>Loan ≥ $80,000</th>
                </tr>
              </thead>
              <tbody>
                <Row a="1" b="$382" c="$441" />
                <Row a="2" b="$641" c="$738" />
                <Row a="3" b="$772" c="$889" />
                <Row a="4" b="$868" c="$1,003" />
                <Row a="5" b="$902" c="$1,039" />
                <Row a="Each additional" b="+$75" c="+$75" />
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: C.textFaint, marginTop: 14, lineHeight: 1.5 }}>
            Western-region figures from VA Lender's Handbook Chapter 4. These are minimums for the West region; Alaska borrowers should target meaningfully above these to absorb cold-weather utility seasons.
          </p>
        </div>
      </Section>

      {/* GEO HUB LINKS */}
      <Section eyebrow="Pick your duty station">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
          <GeoCard href="/jber" title="JBER" subtitle="Joint Base Elmendorf-Richardson" body="Active-duty Anchorage. PCS resources, off-base neighborhood guides, BAH-vs-mortgage math." />
          <GeoCard href="/anchorage-va-loans" title="Anchorage" subtitle="South Anchorage, Eagle River, Mat-Su" body="Veterans and retirees. Eagle River and South Anchorage VA-friendly neighborhoods. JBER-adjacent purchases." />
          <GeoCard href="/fairbanks-va-loans" title="Fairbanks" subtitle="Eielson AFB, Fort Wainwright" body="Interior Alaska. Cold-soaked properties, fuel-cost residual income, well/septic guidance." />
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="Common Questions">
        <FAQ items={faqSchema.mainEntity} />
      </Section>

      {/* FINAL CTA */}
      <section style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.serif, fontSize: 32, color: C.text, marginBottom: 14 }}>
          Ready to put your VA benefit to work?
        </h2>
        <p style={{ color: C.textDim, fontSize: 17, lineHeight: 1.6, marginBottom: 26 }}>
          Get a real pre-approval — not a soft estimate. Derek will pull your COE, walk you through entitlement, and have you ready to make offers in days.
        </p>
        <a href="#apply" style={{ background: C.gold, color: C.bg, padding: '15px 32px', borderRadius: 8, fontSize: 15, fontWeight: 800, textDecoration: 'none', display: 'inline-block' }}>
          Start My VA Pre-Approval →
        </a>
      </section>

      <Footer />
    </main>
  )
}

// ─── helpers ───
function Stat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div style={{ background: C.bg2, border: `1px solid ${C.borderLight}`, borderRadius: 10, padding: '14px 14px' }}>
      <div style={{ fontFamily: F.serif, fontSize: 26, fontWeight: 800, color: C.gold, lineHeight: 1.1 }}>{value}</div>
      <div style={{ fontSize: 12, color: C.textDim, marginTop: 4, lineHeight: 1.4 }}>{label}</div>
      {sub && <div style={{ fontSize: 10, color: C.textFaint, marginTop: 2 }}>{sub}</div>}
    </div>
  )
}

function Section({ eyebrow, title, children }: { eyebrow: string; title?: string; children: React.ReactNode }) {
  return (
    <section style={{ padding: '36px 20px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, color: C.gold, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>{eyebrow}</div>
        {title && <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(24px, 3.5vw, 34px)', color: C.text, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.01em', maxWidth: 720 }}>{title}</h2>}
      </div>
      {children}
    </section>
  )
}

function Card({ icon, title, children }: { icon?: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: C.bg2, border: `1px solid ${C.borderLight}`, borderRadius: 10, padding: '20px 20px' }}>
      {icon && <div style={{ color: C.gold, fontSize: 22, marginBottom: 8 }}>{icon}</div>}
      <h3 style={{ fontFamily: F.serif, fontSize: 17, color: C.text, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
      <p style={{ color: C.textDim, fontSize: 14, lineHeight: 1.65 }}>{children}</p>
    </div>
  )
}

function GeoCard({ href, title, subtitle, body }: { href: string; title: string; subtitle: string; body: string }) {
  return (
    <a href={href} style={{ display: 'block', background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: '22px 22px', textDecoration: 'none', transition: 'border-color 0.15s' }}>
      <div style={{ fontFamily: F.serif, fontSize: 22, color: C.gold, fontWeight: 800, marginBottom: 4 }}>{title} →</div>
      <div style={{ fontSize: 13, color: C.textDim, marginBottom: 10, fontWeight: 600 }}>{subtitle}</div>
      <p style={{ color: C.textDim, fontSize: 14, lineHeight: 1.65 }}>{body}</p>
    </a>
  )
}

function Row({ a, b, c, highlight }: { a: string; b: string; c: string; highlight?: boolean }) {
  return (
    <tr style={{ borderBottom: `1px solid ${C.borderLight}`, background: highlight ? C.goldDim : 'transparent' }}>
      <td style={td}>{a}</td>
      <td style={td}>{b}</td>
      <td style={td}>{c}</td>
    </tr>
  )
}

function FAQ({ items }: { items: any[] }) {
  return (
    <div>
      {items.map((q: any, i: number) => (
        <details key={i} style={{ background: C.bg2, border: `1px solid ${C.borderLight}`, borderRadius: 10, padding: '16px 18px', marginBottom: 10 }}>
          <summary style={{ cursor: 'pointer', fontFamily: F.serif, fontSize: 16, color: C.text, fontWeight: 600 }}>{q.name}</summary>
          <p style={{ color: C.textDim, fontSize: 14.5, lineHeight: 1.7, marginTop: 12 }}>{q.acceptedAnswer.text}</p>
        </details>
      ))}
    </div>
  )
}

const th = { textAlign: 'left' as const, color: C.gold, fontWeight: 700, padding: '10px 14px', fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase' as const }
const td = { padding: '12px 14px', color: C.text, fontSize: 14 }
