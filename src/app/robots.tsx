import type { MetadataRoute } from 'next'

const siteUrl =
  process.env.PUBLIC_DOMAIN_URL || "https://designs-by-eyad.vercel.app/";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/unused/',
    },
    sitemap: siteUrl + 'sitemap.xml',
  }
}