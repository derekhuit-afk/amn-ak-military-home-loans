import type { Metadata } from 'next'
import { C, F } from '@/lib/theme'

export const metadata: Metadata = {
  metadataBase: new URL('https://akmilitaryhomeloans.com'),
  title: {
    default: 'Alaska Military Home Loans | VA Loans for JBER, Eielson, Fort Wainwright',
    template: '%s | Alaska Military Home Loans',
  },
  description:
    "Alaska's VA loan specialist. 0% down purchases for active duty, veterans, and surviving spouses at JBER, Eielson, Fort Wainwright, and Coast Guard families. Derek Huit, NMLS #203980 — 18+ years, $1B+ closed.",
  keywords: ['VA loan Alaska', 'JBER VA loan', 'Anchorage VA loan', 'Fairbanks VA loan', 'Eielson VA loan', 'military home loan Alaska', 'PCS Alaska VA loan'],
  openGraph: {
    type: 'website',
    siteName: 'Alaska Military Home Loans',
    locale: 'en_US',
    url: 'https://akmilitaryhomeloans.com',
    title: 'Alaska Military Home Loans — VA Loans for JBER, Eielson, Fort Wainwright',
    description: "Alaska's VA loan specialist. 0% down for active duty and veterans. Derek Huit, NMLS #203980.",
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://akmilitaryhomeloans.com' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'MortgageLoan',
  name: 'Alaska Military Home Loans',
  url: 'https://akmilitaryhomeloans.com',
  description:
    'VA-approved mortgage lender serving Alaska military families. Specializing in JBER, Eielson, Fort Wainwright, and Coast Guard purchase loans.',
  loanTerm: '15 to 30 years',
  loanType: ['VA Purchase', 'VA IRRRL Streamline Refinance', 'VA Cash-Out Refinance'],
  provider: {
    '@type': 'FinancialService',
    name: 'Cardinal Financial Company',
    identifier: 'NMLS #66247',
    url: 'https://www.cardinalfinancial.com',
  },
  brand: {
    '@type': 'Person',
    name: 'Derek Huit',
    identifier: 'NMLS #203980',
    url: 'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/203980',
    jobTitle: 'VP Retail Market Leader',
  },
  areaServed: [
    { '@type': 'State', name: 'Alaska' },
    { '@type': 'Place', name: 'Joint Base Elmendorf-Richardson (JBER)' },
    { '@type': 'Place', name: 'Eielson Air Force Base' },
    { '@type': 'Place', name: 'Fort Wainwright' },
    { '@type': 'City', name: 'Anchorage' },
    { '@type': 'City', name: 'Fairbanks' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://akmilitaryhomeloans.com/#localbusiness',
  name: 'Alaska Military Home Loans — Derek Huit',
  description: "Alaska's VA loan specialist for active duty, veterans, and military families.",
  url: 'https://akmilitaryhomeloans.com',
  telephone: '+1-907-244-9368',
  email: 'derek.huit@cardinalfinancial.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Anchorage',
    addressRegion: 'AK',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'State', name: 'Alaska' },
  priceRange: '$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Source+Serif+Pro:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content={C.bg} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body style={{
        margin: 0,
        background: C.bg,
        color: C.text,
        fontFamily: F.sans,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}>
        {children}
      </body>
    </html>
  )
}
