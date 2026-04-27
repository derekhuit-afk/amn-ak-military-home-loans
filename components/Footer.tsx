import { C, F } from '@/lib/theme'

export default function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${C.border}`,
      background: C.bg2,
      padding: '36px 20px 32px',
      marginTop: 48,
      fontFamily: F.sans,
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28, marginBottom: 28 }}>
          <div>
            <div style={{ fontFamily: F.serif, color: C.gold, fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Alaska Military Home Loans</div>
            <p style={{ color: C.textDim, fontSize: 13, lineHeight: 1.6 }}>
              VA-approved lending for Alaska's military community. JBER, Eielson, Fort Wainwright, and Coast Guard families.
            </p>
          </div>
          <div>
            <div style={{ color: C.text, fontSize: 13, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Locations</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="/jber" style={fLink}>JBER</a></li>
              <li><a href="/anchorage-va-loans" style={fLink}>Anchorage</a></li>
              <li><a href="/eagle-river-va-loans" style={fLink}>Eagle River</a></li>
              <li><a href="/wasilla-va-loans" style={fLink}>Wasilla</a></li>
              <li><a href="/mat-su-va-loans" style={fLink}>Mat-Su Valley</a></li>
              <li><a href="/fairbanks-va-loans" style={fLink}>Fairbanks / Eielson</a></li>
              <li><a href="/kodiak-va-loans" style={fLink}>Kodiak / USCG</a></li>
              <li><a href="/soldotna-va-loans" style={fLink}>Soldotna / Kenai</a></li>
            </ul>
          </div>
          <div>
            <div style={{ color: C.text, fontSize: 13, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Resources</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="/pcs" style={fLink}>PCS to Alaska</a></li>
              <li><a href="/blog" style={fLink}>VA Loan Insights</a></li>
              <li><a href="/#apply" style={fLink}>Get Pre-Approved</a></li>
            </ul>
          </div>
          <div>
            <div style={{ color: C.text, fontSize: 13, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Network</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="https://anchoragemortgageguide.com" style={fLink}>Anchorage Mortgage Guide</a></li>
              <li><a href="https://alaskainvestorguide.com" style={fLink}>Alaska Investor Guide</a></li>
              <li><a href="https://alaskalenderrankings.com" style={fLink}>Alaska Lender Rankings</a></li>
              <li><a href="https://askalaskamortgage.ai" style={fLink}>Ask Alaska Mortgage</a></li>
            </ul>
          </div>
          <div>
            <div style={{ color: C.text, fontSize: 13, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Contact</div>
            <p style={{ color: C.textDim, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              Derek Huit<br />
              <a href="tel:+19072449368" style={fLink}>(907) 244-9368</a><br />
              <a href="mailto:derek.huit@cardinalfinancial.com" style={fLink}>derek.huit@cardinalfinancial.com</a>
            </p>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${C.borderLight}`, paddingTop: 18, fontSize: 11, color: C.textFaint, lineHeight: 1.7 }}>
          <p style={{ margin: '0 0 6px' }}>
            © 2026 Alaska Military Home Loans · A Huit.AI Network Property · Derek Huit, Loan Officer NMLS #203980 · Cardinal Financial Company, Limited Partnership · Company NMLS #66247 · VA-approved lender
          </p>
          <p style={{ margin: '0 0 6px' }}>
            <a href="https://huit.ai/terms" style={fLinkSmall}>Terms</a> ·{' '}
            <a href="https://huit.ai/privacy" style={fLinkSmall}>Privacy</a> ·{' '}
            <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/203980" style={fLinkSmall} target="_blank" rel="noopener noreferrer">Verify Derek Huit on NMLS</a> ·{' '}
            <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/66247" style={fLinkSmall} target="_blank" rel="noopener noreferrer">Verify Cardinal Financial on NMLS</a>
          </p>
          <p style={{ margin: 0 }}>
            VA-approved lender. This site is not affiliated with or endorsed by the U.S. Department of Veterans Affairs or any government agency. Loan products subject to credit approval. Rates, fees, and terms subject to change without notice. Equal Housing Lender.
          </p>
        </div>
      </div>
    </footer>
  )
}

const fLink = {
  color: C.textDim,
  textDecoration: 'none',
  fontSize: 13,
  display: 'inline-block',
  padding: '3px 0',
}

const fLinkSmall = {
  color: C.textFaint,
  textDecoration: 'underline',
  fontSize: 11,
}
