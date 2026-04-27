import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { C, F } from '@/lib/theme'

export const metadata = {
  title: 'Alaska VA Loan Insights — Rates, BAH, COE, and PCS',
  description: 'Alaska VA loan rate updates, BAH analysis, COE walkthroughs, and PCS-season planning. Written for Alaska military families by Derek Huit.',
  alternates: { canonical: 'https://akmilitaryhomeloans.com/blog' },
}

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <main>
      <Header />
      <section style={{ padding: '50px 20px 30px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontSize: 11, color: C.gold, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>Alaska VA Loan Insights</div>
        <h1 style={{ fontFamily: F.serif, fontSize: 'clamp(34px, 5vw, 48px)', fontWeight: 900, lineHeight: 1.1, color: C.text, marginBottom: 14 }}>
          Real numbers, real markets, no sales fluff.
        </h1>
        <p style={{ color: C.textDim, fontSize: 17, lineHeight: 1.7, maxWidth: 700, marginBottom: 36 }}>
          Rate updates, BAH changes, COE walkthroughs, and PCS-season planning — written for Alaska's military families by Derek Huit. Updated as the market changes.
        </p>
      </section>

      <section style={{ padding: '0 20px 60px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 16 }}>
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <article style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: '24px 26px', transition: 'border-color 0.15s' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
                  <span style={{ background: C.goldDim, color: C.gold, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 30, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.category}</span>
                  <span style={{ color: C.textFaint, fontSize: 12 }}>{formatDate(p.publishedAt)}</span>
                  <span style={{ color: C.textFaint, fontSize: 12 }}>· {p.readingTime} min read</span>
                </div>
                <h2 style={{ fontFamily: F.serif, fontSize: 22, color: C.text, fontWeight: 700, marginBottom: 8, lineHeight: 1.25 }}>{p.title}</h2>
                <p style={{ color: C.textDim, fontSize: 14.5, lineHeight: 1.65, margin: 0 }}>{p.description}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '20px 20px 50px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: F.serif, fontSize: 26, color: C.text, marginBottom: 10 }}>Want a free pre-approval?</h2>
        <p style={{ color: C.textDim, fontSize: 16, lineHeight: 1.6, marginBottom: 20 }}>
          Numbers from a blog only get you so far. Real numbers — your numbers — start with a pre-approval.
        </p>
        <Link href="/#apply" style={{ background: C.gold, color: C.bg, padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 800, textDecoration: 'none', display: 'inline-block' }}>
          Start My VA Pre-Approval →
        </Link>
      </section>

      <Footer />
    </main>
  )
}

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}
