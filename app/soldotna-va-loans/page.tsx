import GeoPage from '@/components/GeoPage'

export const metadata = {
  title: 'Soldotna & Kenai VA Loans | Kenai Peninsula Veterans Home Loans',
  description: 'VA loans for Soldotna, Kenai, Sterling, Nikiski — the Kenai Peninsula. Lower price points, fishing-river properties, and a quieter market for retired veterans. Derek Huit, NMLS #203980.',
  alternates: { canonical: 'https://akmilitaryhomeloans.com/soldotna-va-loans' },
}

export default function SoldotnaPage() {
  return (
    <GeoPage
      base="soldotna"
      defaultLocation="Soldotna / Kenai Peninsula"
      hero={{
        eyebrow: 'Kenai Peninsula · Soldotna, Kenai, Sterling, Nikiski',
        title: 'Kenai Peninsula VA Loans for Retired Veterans.',
        subtitle:
          "The Kenai Peninsula is the favored retirement market for Alaska veterans — lower prices than the Anchorage Bowl, world-class fishing, smaller communities, and the natural light of a coastal climate. Soldotna is the population center; Kenai, Sterling, and Nikiski round out the peninsula's VA-friendly inventory.",
      }}
      intro="The Kenai Peninsula is where many Alaska veterans retire. Drive 2.5-3 hours south of Anchorage and prices drop 20-30% for similar size and condition. The Kenai River and Cook Inlet draw veterans who fish, the smaller communities suit those tired of Anchorage traffic, and the medical infrastructure (Central Peninsula Hospital, plus VA telehealth) supports aging-in-place. The peninsula has its own market dynamics — different price corridors, different appraisal pool, and seasonal flux that affects buyer leverage."
      bullets={[
        { title: 'Population centers', body: 'Soldotna (~5,500) and Kenai (~7,500) form the central population hub. Sterling, Nikiski, Kasilof, and Ninilchik fan out around them. Homer (1.5 hours south of Soldotna) is its own market with its own dynamics.' },
        { title: 'Price reality', body: 'A typical 3-bedroom, 2-bath home that costs $400K in Anchorage costs $300K-$340K in Soldotna or Kenai. River-access and waterfront properties carry meaningful premiums but are still well below Anchorage waterfront comps.' },
        { title: 'Fishing premium', body: 'Properties with Kenai River frontage, Cook Inlet view, or proximity to popular fishing access points carry 15-30% premiums over comparable inland properties. VA appraisals reflect this only partially — be prepared for some out-of-pocket if the property comps are limited.' },
        { title: 'Seasonal market flux', body: 'Peninsula inventory peaks in spring (May-July) when fishing-property listings come online. Off-season (October-February) buyers get the strongest leverage. Many summer buyers overpay relative to fall buyers.' },
      ]}
      neighborhoods={[
        { name: 'Soldotna (in-town)', range: '$260K-$450K', note: 'Population center, walkable, schools' },
        { name: 'Kenai (in-town)', range: '$240K-$420K', note: 'Hospital, airport, established neighborhoods' },
        { name: 'Sterling', range: '$280K-$500K', note: 'Kenai River corridor, fishing premium' },
        { name: 'Nikiski', range: '$260K-$420K', note: 'Industrial-adjacent, family neighborhoods, lower prices' },
        { name: 'Kasilof', range: '$240K-$400K', note: 'South of Soldotna, smaller community, river access' },
        { name: 'Funny River / K-Beach', range: '$280K-$520K', note: 'Rural, larger lots, seasonal road access for some' },
      ]}
      considerations={[
        'Kenai River frontage properties may sit in flood zones — mandatory flood insurance can run $1,500-$4,000/year, materially affecting affordability. Verify FEMA flood designation before offering.',
        'Most Peninsula properties outside in-town Soldotna and Kenai are on private well and septic. VA appraisal includes both certifications — same 7-10 day add as Mat-Su or Eagle River Valley.',
        "Wood and oil heat are common. VA requires a primary heat source that is not wood-only. If a Peninsula property has wood-only heat, plan for installing a propane or oil-fired backup before close.",
        "Snow load and roof requirements differ from the Anchorage Bowl — Peninsula homes built for the Kenai climate are typically fine, but homes built without proper Kenai snow-load engineering have failed VA appraisal.",
        "Driving distance to Anchorage is 2.5-3 hours one-way. Plan accordingly for medical specialty appointments, retail, or commercial flights — many retirees factor in the drive as a 4-6 trips per year overhead.",
      ]}
      faqs={[
        { q: 'Is the Kenai Peninsula realistic for an active-duty service member?', a: 'Generally no — the commute to JBER (2.5-3 hours each way) is impractical. Active-duty members at Eielson, Fort Wainwright, JBER, or USCG Kodiak should look at properties within 1 hour of their base. The Peninsula is overwhelmingly a retirement market for veterans no longer required to commute to a duty station.' },
        { q: 'Can I use a VA loan for a Peninsula fishing-river property as my primary residence?', a: 'Yes, as long as it is your actual primary residence and you intend to occupy it. VA loans cannot be used for second homes or vacation properties. If you plan to live on the Peninsula full-time and the home becomes your primary residence, the Kenai River frontage premium is fine — VA does not exclude waterfront.' },
        { q: 'How does the VA appraisal handle remote Peninsula properties?', a: 'Remote properties (Funny River end of Kalifornsky Beach Road, Kasilof rural areas, Nikiski outskirts) require a specialty appraiser who covers that area. Sometimes only 1-2 are available for a given parcel. Plan extra time. Standard in-town Soldotna and Kenai close at standard VA pace (30-35 days).' },
        { q: 'Is there flood insurance complexity on Peninsula properties?', a: 'For Kenai River corridor and some Kasilof flat-area properties, yes — FEMA flood zones apply. Mandatory flood insurance can run $1,500-$4,000+/year. We help you check FEMA designation before you write an offer; if the property is in a high-risk flood zone, you should know that affordability number before binding.' },
      ]}
    />
  )
}
