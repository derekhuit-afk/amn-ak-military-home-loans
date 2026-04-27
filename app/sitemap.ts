import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://akmilitaryhomeloans.com'
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/jber`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/anchorage-va-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/fairbanks-va-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
