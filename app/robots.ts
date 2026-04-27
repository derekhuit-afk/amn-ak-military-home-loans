import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: 'https://akmilitaryhomeloans.com/sitemap.xml',
    host: 'https://akmilitaryhomeloans.com',
  }
}
