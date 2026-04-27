import GeoPage from '@/components/GeoPage'

export const metadata = {
  title: 'Mat-Su Valley VA Loans | Wasilla, Palmer, Big Lake, Houston, Willow',
  description: 'VA loans across the Matanuska-Susitna Borough — Wasilla, Palmer, Big Lake, Houston, Willow. Acreage, well/septic, and recreational properties. Derek Huit, NMLS #203980.',
  alternates: { canonical: 'https://akmilitaryhomeloans.com/mat-su-va-loans' },
}

export default function MatSuPage() {
  return (
    <GeoPage
      base="mat-su"
      defaultLocation="Mat-Su Valley"
      hero={{
        eyebrow: 'Mat-Su Valley · Wasilla, Palmer, Big Lake, Houston, Willow',
        title: 'Mat-Su Valley VA Loans for Veterans Who Want Land.',
        subtitle:
          "The Matanuska-Susitna Borough is Alaska's biggest growth story — and the answer for veterans who want acreage, lake access, or a recreational property paired with primary residence. We close VA loans across all five Mat-Su core markets and know the specific appraisal traps in each.",
      }}
      intro="The Mat-Su Valley is not one market — it is five distinct ones. Wasilla is the JBER bedroom community. Palmer is the agricultural seat. Big Lake is recreational and lakefront. Houston is rural pass-through. Willow is the gateway to the Alaska Range and Iditarod country. Each has different price points, different VA appraisal challenges, and different commute realities. The wrong lender will treat them as one homogeneous market — and miss the property-specific pitfalls that derail 1 in 10 Mat-Su VA closings."
      bullets={[
        { title: 'Five distinct submarkets', body: 'Wasilla and Palmer dominate volume. Big Lake is recreational/lakefront. Houston and Willow trade on land and quiet. Each has different VA appraisal pool, different inspector pool, different price ceiling.' },
        { title: 'Acreage VA appraisal rules', body: 'VA can lend on rural acreage but the appraised value attaches mostly to the residence and a reasonable amount of surrounding land. Outbuildings, large barns, or commercial-use structures may not contribute to value — important when offering on a 5-acre Mat-Su parcel.' },
        { title: 'Well/septic is standard', body: 'Outside named subdivisions, Mat-Su properties are on private well and septic. VA appraisals include both certifications. Plan 7-14 extra days; budget $400-$800 for the inspections.' },
        { title: 'Private roads need maintenance agreements', body: 'Many Mat-Su properties access via private roads. VA requires a recorded road maintenance agreement (RMA) signed by all benefiting owners. Many roads do not have one. We pre-screen — finding this in escrow has killed countless Mat-Su deals.' },
      ]}
      neighborhoods={[
        { name: 'Wasilla', range: '$280K-$650K', note: 'Largest market, best inventory, JBER 40-50 min' },
        { name: 'Palmer', range: '$300K-$600K', note: 'Agricultural seat, established town, JBER 50-60 min' },
        { name: 'Big Lake', range: '$280K-$700K', note: 'Lakefront premium, recreational, JBER 60 min' },
        { name: 'Houston', range: '$220K-$420K', note: 'Rural, larger lots, lower prices' },
        { name: 'Willow', range: '$200K-$450K', note: 'Most rural, longest commute, gateway to Hatcher Pass' },
        { name: 'Sutton / Chickaloon', range: '$240K-$480K', note: 'East of Palmer, very rural, river-access homes' },
      ]}
      considerations={[
        'Private well water-quality testing is required for VA on every Mat-Su property not on a public utility. Standard test panel covers bacteria (coliform, E. coli) and basic chemicals (arsenic, nitrates). Some Mat-Su areas (notably Knik-Goose Bay corridor) have known arsenic — extra testing may be warranted.',
        'Septic systems must have a current functional certification — typically a pump-and-inspect within the last 90 days. Many Mat-Su sellers have not done this; budget $300-$500 for it.',
        "Recorded road maintenance agreements are non-negotiable for VA closing on private-road properties. If the property does not have one, the seller must obtain it from co-owning neighbors before close — this can take 30-90 days.",
        "Outbuildings (large garages, barns, shop buildings) can increase or decrease appraised value depending on condition and zoning. Mat-Su zoning is permissive — the appraiser treats them as either contributory or non-contributory based on quality.",
        'Mat-Su properties are subject to wildfire risk. Defensible-space requirements exist for some parcels and insurance underwriting may require firewise certification.',
      ]}
      faqs={[
        { q: 'Can I use a VA loan to buy a recreational cabin in Willow or Big Lake?', a: 'Only if it is your primary residence — VA does not lend on second homes or vacation properties. Many Mat-Su veterans buy a primary residence in Wasilla or Anchorage and a separate non-VA recreational property later. The VA loan must be for the home you actually live in.' },
        { q: 'How does VA handle Mat-Su properties on more than 5 acres?', a: "VA can lend on properties of any acreage but the appraisal value attaches primarily to the residence and 'a reasonable amount' of surrounding land — typically 5-10 acres in rural Alaska. Excess acreage (above 10 acres) often does not add to appraised value. If you are buying a 20-acre Mat-Su property, expect the appraisal to value the home plus 5-10 acres and ignore the rest." },
        { q: 'What is the typical timeline for a Mat-Su VA closing?', a: '35-50 days, vs 30-35 days in standard Anchorage subdivisions. The extra time covers well/septic certifications, road maintenance agreement verification, and rural appraiser scheduling. We sequence these in parallel where possible.' },
        { q: 'Are there VA appraisal issues specific to Mat-Su construction?', a: 'A few: post-and-pad foundations on permafrost or marginal soils can fail VA — engineered drawings are usually required. Wood-only heat (no propane, oil, or gas backup) does not satisfy VA primary heat requirements. Outbuildings with commercial-use evidence may flag as zoning issues. We pre-screen for all of these.' },
      ]}
    />
  )
}
