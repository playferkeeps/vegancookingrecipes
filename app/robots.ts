import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration
 * Ensures all pages are crawlable and indexable
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://vegancooking.recipes';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/setup-social-media',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/setup-social-media',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
