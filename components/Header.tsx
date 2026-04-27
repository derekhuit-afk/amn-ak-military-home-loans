import Link from 'next/link'
import { C, F } from '@/lib/theme'

export default function Header() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(11, 16, 32, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span aria-hidden style={{ fontSize: 22, lineHeight: 1 }}>★</span>
          <span style={{ fontFamily: F.serif, fontSize: 17, fontWeight: 700, color: C.text, letterSpacing: '-0.01em' }}>
            Alaska Military Home Loans
          </span>
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
          <Link href="/jber" style={navLink}>JBER</Link>
          <Link href="/anchorage-va-loans" style={navLink}>Anchorage</Link>
          <Link href="/fairbanks-va-loans" style={navLink}>Fairbanks</Link>
          <Link href="/pcs" style={navLink}>PCS</Link>
          <Link href="/blog" style={navLink}>Insights</Link>
          <a href="#apply" style={{ ...navLink, background: C.gold, color: C.bg, padding: '8px 16px', borderRadius: 6, fontWeight: 700 }}>
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}

const navLink = {
  fontSize: 14,
  color: C.textDim,
  textDecoration: 'none',
  fontFamily: F.sans,
  fontWeight: 500,
}
