import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VALeadForm from '@/components/VALeadForm'
import Link from 'next/link'
import { C, F } from '@/lib/theme'

export const metadata = {
  title: 'PCS to Alaska? Start Your VA Pre-Approval Before You Arrive',
  description: 'PCS orders to JBER, Eielson, Fort Wainwright, or Kodiak? Get your Alaska VA pre-approval started from your prior duty station. Lock a rate, sign electronically, walk into the keys ready.',
  alternates: { canonical: 'https://akmilitaryhomeloans.com/pcs' },
}

const pcsFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I get a VA pre-approval before I PCS to Alaska?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, and you should. We can pull your COE, run full underwriting, and issue a real pre-approval letter from any U.S. duty station. The only step that typically requires you to be in-state is final-loan signing, which can be done within a few days of arrival or remotely via mobile notary.' },
    },
    {
      '@type': 'Question',
      name: 'How early should I start the VA pre-approval before PCS?',
      acceptedAnswer: { '@type': 'Answer', text: 'Start 60-90 days before your report date. That gives time for COE retrieval, underwriting, locating an Alaska realtor, finding a property, getting it under contract, ordering the VA Notice of Value, and closing — all sequenced to coincide with your arrival.' },
    },
    {
      '@type': 'Question',
      name: 'Can I lock a VA rate before I have a property under contract?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Cardinal Financial offers float-down options and 90-day locks (longer in some cases) that protect you during a PCS window. If rates drop after you lock, the float-down lets you capture the lower rate. Critical for a 60-90 day PCS timeline.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to fly to Alaska to close on the home?',
      acceptedAnswer: { '@type': 'Answer', text: 'In most cases, no. Cardinal supports remote closings via mobile notary at your current location. Some Alaska transactions still require physical presence for final signing depending on the title company — we will tell you upfront which scenario yours is.' },
    },
    {
      '@type': 'Question',
      name: 'What if my orders change after I lock a VA rate?',
      acceptedAnswer: { '@type': 'Answer', text: 'PCS-related order changes happen. We do not penalize you for that. Locks can be extended, transferred to a different Alaska property, or canceled without prejudice. Just tell us as soon as you know.' },
    },
    {
      '@type': 'Question',
      name: 'Can I use my BAH to qualify for the VA loan?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. BAH counts as qualifying income for VA underwriting. We use your projected post-PCS Alaska BAH (which is typically higher than your current rate) once orders are issued. This often unlocks 15-20% more buying power than your prior duty station rate would.' },
    },
  ],
}

export default function PCSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pcsFaqSchema) }} />
      <Header />

      {/* HERO */}
      <section style={{ padding: '50px 20px 40px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: 40, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-block', background: C.goldDim, color: C.gold, padding: '6px 14px', borderRadius: 30, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 22 }}>
              ★ PCS Orders to Alaska
            </div>
            <h1 style={{ fontFamily: F.serif, fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', color: C.text, marginBottom: 18 }}>
              Walk into the keys. Not into a 60-day loan process.
            </h1>
            <p style={{ fontSize: 19, color: C.textDim, lineHeight: 1.6, marginBottom: 26 }}>
              We start your Alaska VA pre-approval the moment your orders are cut. Lock a rate, sign electronically, and have keys ready when you arrive at JBER, Eielson, Fort Wainwright, or USCG Kodiak. 60-90 days is the right window — start now.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#apply" style={{ background: C.gold, color: C.bg, padding: '15px 28px', borderRadius: 8, fontSize: 15, fontWeight: 800, textDecoration: 'none' }}>
                Start My PCS Pre-Approval →
              </a>
              <a href="tel:+19072449368" style={{ background: 'transparent', color: C.text, padding: '15px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none', border: `1px solid ${C.border}` }}>
                Call (907) 244-9368
              </a>
            </div>
          </div>
          <div id="apply">
            <VALeadForm source="pcs-hero" variant="pcs" />
          </div>
        </div>
      </section>

      {/* PCS TIMELINE */}
      <section style={{ padding: '36px 20px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: C.gold, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>The 60-90 Day PCS Timeline</div>
        <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(24px, 3.5vw, 32px)', color: C.text, fontWeight: 700, marginBottom: 24, maxWidth: 700 }}>
          Sequenced so the loan finishes when you arrive
        </h2>
        <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: '24px 26px' }}>
          <Step n="60-90 days out" title="Get pre-approved + pull COE">
            We retrieve your COE through WebLGY (instant for most active duty), run a full underwrite using your projected Alaska BAH, and issue a real pre-approval letter you can submit with offers. No surprises later.
          </Step>
          <Step n="45-60 days out" title="Connect with an Alaska realtor">
            We refer to military-friendly realtors who specialize in JBER, Eagle River, Mat-Su, or your assigned base area. They pre-screen properties for VA appraisal-friendly characteristics so you do not waste offers.
          </Step>
          <Step n="30-45 days out" title="Property under contract, lock the rate">
            Once you have an accepted offer, we lock your rate (with float-down protection if rates drop). Cardinal supports 90-day locks; if your timeline goes longer, we extend.
          </Step>
          <Step n="15-30 days out" title="VA Notice of Value + final underwriting">
            VA appraisal ordered. In Alaska this can add 7-14 days for well/septic certification or remote-area logistics — we sequence accordingly so it does not delay your closing.
          </Step>
          <Step n="0-7 days out" title="Closing">
            We coordinate signing remotely from your prior duty station via mobile notary, or a few days after arrival in Alaska. Funds wire, deed records, you have keys.
          </Step>
        </div>
      </section>

      {/* PER-BASE NOTES */}
      <section style={{ padding: '36px 20px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: C.gold, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>By Reporting Base</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
          <BaseCard href="/jber" name="JBER" body="Joint Base Elmendorf-Richardson. Anchorage. Eagle River, South Anchorage, Mat-Su Valley off-base options. 3-4 year typical assignment, breakeven on ownership at 18-24 months." />
          <BaseCard href="/fairbanks-va-loans" name="Eielson AFB / Fort Wainwright" body="Fairbanks. North Pole, Salcha, Goldstream off-base. 3-year typical assignment for Eielson airmen. Cold-weather property requirements add VA appraisal complexity." />
          <BaseCard href="/kodiak-va-loans" name="USCG Base Kodiak" body="Coast Guard. Small island market, limited inventory. Requires Kodiak-aware lender — seasonal ferry logistics for inspections, narrow appraiser pool." />
          <div style={{ background: C.bg2, border: `1px solid ${C.borderLight}`, borderRadius: 10, padding: '20px 22px' }}>
            <h3 style={{ fontFamily: F.serif, fontSize: 17, color: C.gold, fontWeight: 700, marginBottom: 8 }}>Other Alaska Stations</h3>
            <p style={{ color: C.textDim, fontSize: 14, lineHeight: 1.65 }}>
              Reporting to a smaller installation (Clear AFS, Galena, Adak Naval Station, Coast Guard Cutter ports)? We have closed loans in every Alaska borough. Mention your station in the form and we will tailor the recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* BAH NOTE */}
      <section style={{ padding: '36px 20px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: '28px 28px' }}>
          <div style={{ fontSize: 11, color: C.gold, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>BAH-Powered Buying Capacity</div>
          <h3 style={{ fontFamily: F.serif, fontSize: 22, color: C.text, marginBottom: 14, fontWeight: 700 }}>
            Use your post-PCS Alaska BAH to qualify, not your current rate
          </h3>
          <p style={{ color: C.textDim, lineHeight: 1.75, marginBottom: 14 }}>
            Most lenders default to your current BAH on the application. That undersells your real buying capacity if you are PCSing from a low-BAH installation to a higher-BAH one. JBER and Eielson BAH for E-5 with dependents is roughly $2,400-$2,900; Fort Bliss equivalent is $1,400-$1,700. That is a 60-70% income increase that we factor in once orders are dated.
          </p>
          <p style={{ color: C.textDim, lineHeight: 1.75, margin: 0 }}>
            VA underwriting allows the use of <strong style={{ color: C.text }}>future BAH</strong> as qualifying income once you have signed orders. We pull your projected Alaska rate from the official DoD BAH calculator and apply it directly to your debt-to-income calculation. This unlocks meaningful additional purchase power on day one.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '36px 20px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: C.gold, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>PCS Questions</div>
        {pcsFaqSchema.mainEntity.map((q, i) => (
          <details key={i} style={{ background: C.bg2, border: `1px solid ${C.borderLight}`, borderRadius: 10, padding: '16px 18px', marginBottom: 10 }}>
            <summary style={{ cursor: 'pointer', fontFamily: F.serif, fontSize: 16, color: C.text, fontWeight: 600 }}>{q.name}</summary>
            <p style={{ color: C.textDim, fontSize: 14.5, lineHeight: 1.7, marginTop: 12 }}>{q.acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '40px 20px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.serif, fontSize: 30, color: C.text, marginBottom: 14 }}>
          Orders to Alaska? Start the clock now.
        </h2>
        <p style={{ color: C.textDim, fontSize: 17, lineHeight: 1.6, marginBottom: 22 }}>
          The veterans who get into the right house at the right time start their VA pre-approval 60-90 days before report date. The ones in temp lodging for 3 months started 2 weeks out.
        </p>
        <a href="#apply" style={{ background: C.gold, color: C.bg, padding: '14px 30px', borderRadius: 8, fontSize: 15, fontWeight: 800, textDecoration: 'none', display: 'inline-block' }}>
          Start My PCS Pre-Approval →
        </a>
      </section>

      <Footer />
    </main>
  )
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 18, padding: '14px 0', borderBottom: `1px solid ${C.borderLight}` }}>
      <div style={{ flexShrink: 0, minWidth: 110, color: C.gold, fontFamily: F.mono, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', paddingTop: 3 }}>
        {n}
      </div>
      <div>
        <h4 style={{ fontFamily: F.serif, color: C.text, fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{title}</h4>
        <p style={{ color: C.textDim, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{children}</p>
      </div>
    </div>
  )
}

function BaseCard({ href, name, body }: { href: string; name: string; body: string }) {
  return (
    <a href={href} style={{ display: 'block', background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 10, padding: '20px 22px', textDecoration: 'none' }}>
      <h3 style={{ fontFamily: F.serif, fontSize: 17, color: C.gold, fontWeight: 700, marginBottom: 8 }}>{name} →</h3>
      <p style={{ color: C.textDim, fontSize: 14, lineHeight: 1.65 }}>{body}</p>
    </a>
  )
}
