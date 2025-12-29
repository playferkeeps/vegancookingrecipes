import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vegancooking.recipes'),
  title: {
    default: 'Vegan Cooking Recipes - Delicious Plant-Based Meals | vegancooking.recipes',
    template: '%s | vegancooking.recipes',
  },
  description: 'Discover amazing vegan recipes for every meal at vegancooking.recipes. From baking to savory dishes, ethnic cuisine, and more. All recipes are plant-based, delicious, and easy to follow.',
  keywords: ['vegan recipes', 'plant-based cooking', 'vegan meals', 'vegan baking', 'vegan food', 'dairy-free recipes', 'egg-free recipes', 'vegancooking.recipes', 'vegan cooking recipes'],
  authors: [{ name: 'vegancooking.recipes', url: 'https://vegancooking.recipes' }],
  creator: 'vegancooking.recipes',
  publisher: 'vegancooking.recipes',
  alternates: {
    canonical: 'https://vegancooking.recipes',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vegancooking.recipes',
    siteName: 'vegancooking.recipes',
    title: 'Vegan Cooking Recipes - Delicious Plant-Based Meals | vegancooking.recipes',
    description: 'Discover amazing vegan recipes for every meal at vegancooking.recipes. From baking to savory dishes, ethnic cuisine, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vegan Cooking Recipes - Delicious Plant-Based Meals | vegancooking.recipes',
    description: 'Discover amazing vegan recipes for every meal at vegancooking.recipes.',
    site: '@vegancooking',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE || 'your-google-verification-code',
  },
  other: {
    'og:site': 'vegancooking.recipes',
    'google-adsense-account': process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-XXXXXXXXXX',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://vegancooking.recipes" />
        <meta name="application-name" content="vegancooking.recipes" />
        <meta name="apple-mobile-web-app-title" content="vegancooking.recipes" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* AdSense Script - Load once for entire site */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-XXXXXXXXXX'}`}
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

