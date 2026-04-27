import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VALeadForm from '@/components/VALeadForm'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getPostSlugs, renderBody } from '@/lib/blog'
import { C, F } from '@/lib/theme'

export const dynamicParams = false

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://akmilitaryhomeloans.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { '@type': 'Person', name: post.author, identifier: 'NMLS #203980' },
    publisher: {
      '@type': 'Organization',
      name: 'Alaska Military Home Loans',
      logo: { '@type': 'ImageObject', url: 'https://akmilitaryhomeloans.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://akmilitaryhomeloans.com/blog/${post.slug}` },
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />

      <article style={{ padding: '40px 20px 30px', maxWidth: 760, margin: '0 auto' }}>
        <Link href="/blog" style={{ color: C.textDim, fontSize: 13, textDecoration: 'none', marginBottom: 18, display: 'inline-block' }}>
          ← All posts
        </Link>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
          <span style={{ background: C.goldDim, color: C.gold, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 30, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{post.category}</span>
          <span style={{ color: C.textFaint, fontSize: 12 }}>{formatDate(post.publishedAt)}</span>
          <span style={{ color: C.textFaint, fontSize: 12 }}>· {post.readingTime} min read</span>
        </div>
        <h1 style={{ fontFamily: F.serif, fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.01em', color: C.text, marginBottom: 18 }}>
          {post.title}
        </h1>
        <p style={{ color: C.textDim, fontSize: 18, lineHeight: 1.6, marginBottom: 28 }}>{post.description}</p>
        <div style={{ paddingBottom: 18, borderBottom: `1px solid ${C.borderLight}`, marginBottom: 28, color: C.textFaint, fontSize: 13 }}>
          By <strong style={{ color: C.text }}>{post.author}</strong> · NMLS #203980 · Cardinal Financial NMLS #66247
        </div>

        <style>{`
          .post-h2 { font-family: ${F.serif}; font-size: 22px; color: ${C.gold}; font-weight: 700; margin: 32px 0 14px; }
          .post-p { color: ${C.textDim}; font-size: 16.5px; line-height: 1.78; margin: 0 0 18px; }
          .post-p strong { color: ${C.text}; }
        `}</style>
        <div dangerouslySetInnerHTML={{ __html: renderBody(post.body) }} />
      </article>

      {/* CTA inline lead form */}
      <section style={{ padding: '40px 20px 30px', maxWidth: 760, margin: '0 auto' }}>
        <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 12, padding: '28px 28px' }}>
          <div style={{ fontSize: 11, color: C.gold, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>Ready to run your numbers?</div>
          <h3 style={{ fontFamily: F.serif, fontSize: 24, color: C.text, marginBottom: 12, fontWeight: 700 }}>Free Alaska VA pre-approval — 18+ years, $1B+ closed</h3>
          <p style={{ color: C.textDim, fontSize: 15, lineHeight: 1.65, marginBottom: 20 }}>
            Pull your COE, run real underwriting, and get a usable pre-approval letter — at no cost and no obligation.
          </p>
          <Link href="/#apply" style={{ background: C.gold, color: C.bg, padding: '13px 26px', borderRadius: 8, fontSize: 14, fontWeight: 800, textDecoration: 'none', display: 'inline-block' }}>
            Start My VA Pre-Approval →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}
