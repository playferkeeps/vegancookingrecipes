/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    // Allow local images
    unoptimized: false,
    // Optimize images for better performance
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable CDN for images (Vercel automatically uses CDN, but this makes it explicit)
    loader: 'default',
    minimumCacheTTL: 60,
  },
  // Optimize for Vercel
  output: 'standalone',
  // Compress output (SWC minification is enabled by default in Next.js 16)
  compress: true,
  // Remove X-Powered-By header for security
  poweredByHeader: false,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  // Headers for CDN and caching
  async headers() {
    return [
      {
        // Static assets (images, fonts, etc.) - aggressive caching
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|eot|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Next.js static files
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Public folder assets
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Recipe images
        source: '/recipe-images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig

