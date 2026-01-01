import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecaptchaProvider from '@/components/RecaptchaProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vegancooking.recipes'),
  icons: {
    icon: '/img/vcr-favicon.png',
    apple: '/img/vcr-favicon.png',
  },
  title: {
    default: 'Vegan Cooking Recipes - Delicious Plant-Based Meals | vegancooking.recipes',
    template: '%s | vegancooking.recipes',
  },
  description: 'Discover amazing vegan recipes for every meal at vegancooking.recipes. From baking to savory dishes, international cuisine, and more. All recipes are plant-based, delicious, and easy to follow.',
  keywords: ['vegan recipes', 'plant-based cooking', 'vegan meals', 'vegan baking', 'vegan food', 'dairy-free recipes', 'egg-free recipes', 'vegancooking.recipes', 'vegan cooking recipes'],
  authors: [{ name: 'vegancooking.recipes', url: 'https://vegancooking.recipes' }],
  creator: 'vegancooking.recipes',
  publisher: 'vegancooking.recipes',
  alternates: {
    canonical: 'https://vegancooking.recipes/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vegancooking.recipes',
    siteName: 'vegancooking.recipes',
    title: 'Vegan Cooking Recipes - Delicious Plant-Based Meals | vegancooking.recipes',
    description: 'Discover amazing vegan recipes for every meal at vegancooking.recipes. From baking to savory dishes, international cuisine, and more.',
    images: [
      {
        url: 'https://vegancooking.recipes/img/vcr-logo-lg.png',
        width: 150,
        height: 150,
        alt: 'vegancooking.recipes - Vegan Cooking Recipes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vegan Cooking Recipes - Delicious Plant-Based Meals',
    description: 'Discover amazing vegan recipes for every meal. Plant-based cooking made easy.',
    site: '@vegancooking',
    creator: '@vegancooking',
    images: ['https://vegancooking.recipes/img/vcr-logo-lg.png'],
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
    'og:image:width': '150',
    'og:image:height': '150',
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
        {/* DNS Prefetch and Preconnect for CDN and external resources */}
        {/* <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" /> */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" /> */}
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        
        <link rel="icon" href="/img/vcr-favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/vcr-favicon.png" />
        <meta name="application-name" content="vegancooking.recipes" />
        <meta name="apple-mobile-web-app-title" content="vegancooking.recipes" />
      </head>
      <body className={inter.className}>
        <RecaptchaProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </RecaptchaProvider>
        {/* Google Analytics - Load with beforeInteractive to place in head for detection */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5PG8FMRN5R"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5PG8FMRN5R');
          `}
        </Script>
        {/* AdSense Script - Load after page is interactive to avoid blocking */}
        {/* <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-XXXXXXXXXX'}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        /> */}
      </body>
    </html>
  );
}

