import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        // Allow Googlebot to access optimized images for SEO
        userAgent: 'Googlebot',
        allow: ['/', '/_next/image'],
        disallow: ['/api/', '/_next/static', '/_next/data'],
      },
      {
        // Allow Googlebot-Image specifically for image crawling
        userAgent: 'Googlebot-Image',
        allow: ['/', '/_next/image', '/img/', '/recipe-images/'],
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://vegancooking.recipes/sitemap.xml',
  };
}

