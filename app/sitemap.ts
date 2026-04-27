import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://akmilitaryhomeloans.com'
  const now = new Date()
  const posts = getAllPosts()

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/pcs`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/jber`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/anchorage-va-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/eagle-river-va-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/wasilla-va-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/mat-su-va-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/fairbanks-va-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/kodiak-va-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/soldotna-va-loans`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt || p.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
