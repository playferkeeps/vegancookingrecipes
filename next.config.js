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
  },
  // Optimize for Vercel
  output: 'standalone',
  // Compress output (SWC minification is enabled by default in Next.js 16)
  compress: true,
}

module.exports = nextConfig

