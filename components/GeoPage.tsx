import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VALeadForm from '@/components/VALeadForm'
import { C, F } from '@/lib/theme'

export default function GeoPage({
  base,
  hero,
  intro,
  bullets,
  neighborhoods,
  considerations,
  faqs,
  formVariant = 'standard',
  defaultLocation,
}: {
  base: string
  hero: { eyebrow: string; title: string; subtitle: string }
  intro: string
  bullets: { title: string; body: string }[]
  neighborhoods: { name: string; range: string; note: string }[]
  considerations: string[]
  faqs: { q: string; a: string }[]
  formVariant?: 'standard' | 'pcs'
  defaultLocation?: string
}) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <section style={{ padding: '50px 20px 40px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: 38, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-block', background: C.goldDim, color: C.gold, padding: '5px 14px', borderRadius: 30, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18 }}>
              ★ {hero.eyebrow}
            </div>
            <h1 style={{ fontFamily: F.serif, fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', color: C.text, marginBottom: 16 }}>
              {hero.title}
            </h1>
            <p style={{ fontSize: 18, color: C.textDim, lineHeight: 1.6, marginBottom: 28 }}>
              {hero.subtitle}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#apply" style={{ background: C.gold, color: C.bg, padding: '14px 26px', borderRadius: 8, fontSize: 14, fontWeight: 800, textDecoration: 'none' }}>
                Get My VA Pre-Approval →
              </a>
              <a href="tel:+19077272727" style={{ background: 'transparent', color: C.text, padding: '14px 26px', borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: 'none', border: `1px solid ${C.border}` }}>
                Call (907) 727-2727
              </a>
            </div>
          </div>
          <div id="apply">
            <VALeadForm source={`geo-${base}`} variant={formVariant} defaultLocation={defaultLocation} />
          </div>
        </div>
      </section>

      <Section eyebrow="Why this market matters">
        <p style={{ color: C.textDim, fontSize: 16, lineHeight: 1.75, maxWidth: 800 }}>{intro}</p>
      </Section>

      <Section eyebrow="What you need to know">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
          {bullets.map((b) => (
            <div key={b.title} style={{ background: C.bg2, border: `1px solid ${C.borderLight}`, borderRadius: 10, padding: '18px 18px' }}>
              <h3 style={{ fontFamily: F.serif, fontSize: 16, color: C.gold, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
              <p style={{ color: C.textDim, fontSize: 14, lineHeight: 1.65 }}>{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Neighborhoods & Price Points">
        <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: 'rgba(212,175,55,0.06)' }}>
                <th style={th}>Area</th>
                <th style={th}>Typical Range</th>
                <th style={th}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {neighborhoods.map((n) => (
                <tr key={n.name} style={{ borderTop: `1px solid ${C.borderLight}` }}>
                  <td style={td}><strong style={{ color: C.text }}>{n.name}</strong></td>
                  <td style={td}>{n.range}</td>
                  <td style={td}>{n.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: C.textFaint, marginTop: 12, lineHeight: 1.5 }}>
          Ranges reflect typical Alaska MLS data and shift quarterly. Always verify with current listings before making offers.
        </p>
      </Section>

      <Section eyebrow="Local Considerations">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {considerations.map((c, i) => (
            <li key={i} style={{ color: C.textDim, fontSize: 15, lineHeight: 1.7, padding: '10px 0', borderBottom: i < considerations.length - 1 ? `1px solid ${C.borderLight}` : 'none', display: 'flex', gap: 12 }}>
              <span style={{ color: C.gold, fontWeight: 700, flexShrink: 0 }}>★</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Common Questions">
        <div>
          {faqs.map((q, i) => (
            <details key={i} style={{ background: C.bg2, border: `1px solid ${C.borderLight}`, borderRadius: 10, padding: '16px 18px', marginBottom: 10 }}>
              <summary style={{ cursor: 'pointer', fontFamily: F.serif, fontSize: 16, color: C.text, fontWeight: 600 }}>{q.q}</summary>
              <p style={{ color: C.textDim, fontSize: 14.5, lineHeight: 1.7, marginTop: 12 }}>{q.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.serif, fontSize: 30, color: C.text, marginBottom: 14 }}>
          Ready to get pre-approved?
        </h2>
        <p style={{ color: C.textDim, fontSize: 17, lineHeight: 1.6, marginBottom: 22 }}>
          18+ years closing VA loans in this market. Derek will pull your COE and walk you through entitlement, funding fee, and what your real monthly payment looks like.
        </p>
        <a href="#apply" style={{ background: C.gold, color: C.bg, padding: '14px 30px', borderRadius: 8, fontSize: 15, fontWeight: 800, textDecoration: 'none', display: 'inline-block' }}>
          Start My VA Pre-Approval →
        </a>
      </section>

      <Footer />
    </main>
  )
}

function Section({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <section style={{ padding: '34px 20px', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ fontSize: 11, color: C.gold, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>{eyebrow}</div>
      {children}
    </section>
  )
}

const th = { textAlign: 'left' as const, color: C.gold, fontWeight: 700, padding: '12px 16px', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase' as const }
const td = { padding: '12px 16px', color: C.textDim, fontSize: 14 }
