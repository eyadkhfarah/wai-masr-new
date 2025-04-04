import type { MetadataRoute } from 'next'

const siteUrl =
  process.env.PUBLIC_DOMAIN_URL || "https://w3ieg.com";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/test/',
    },
    sitemap: siteUrl + '/sitemap.xml',
  }
}