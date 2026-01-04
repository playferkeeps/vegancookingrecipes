import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://vegancooking.recipes'),
  title: 'Vegan Recipe Converter - Get Vegan Version of Any Recipe Instantly | vegancooking.recipes',
  description: 'Transform any recipe into a vegan version instantly! Our free AI-powered vegan recipe converter creates delicious plant-based versions with perfect ingredient substitutions. Get vegan recipes, vegan versions of your favorite dishes, and plant-based alternatives. Convert non-vegan recipes to vegan in seconds.',
  keywords: [
    'vegan recipe',
    'vegan version',
    'vegan recipes',
    'vegan recipe converter',
    'veganize recipe',
    'vegan recipe generator',
    'plant based recipe',
    'vegan alternative',
    'vegan substitute',
    'vegan conversion',
    'make recipe vegan',
    'vegan recipe tool',
    'vegan recipe maker',
    'convert to vegan',
    'vegan recipe transformer',
    'vegan recipe creator',
    'vegan recipe converter tool',
    'vegan recipe maker online',
    'free vegan recipe converter',
    'vegan recipe generator free',
    'vegan recipe transformer tool',
    'how to make recipe vegan',
    'vegan recipe substitutions',
    'vegan recipe alternatives',
    'vegan recipe converter online',
    'vegan recipe maker tool',
    'vegan recipe generator tool',
    'vegan recipe converter free',
    'vegan recipe transformer free',
    'vegan recipe maker free',
    'vegan recipe converter tool free',
    'vegan recipe generator tool free',
    'vegan recipe transformer tool free',
    'vegan recipe maker tool free',
    'vegan recipe converter online free',
    'vegan recipe generator online free',
    'vegan recipe transformer online free',
    'vegan recipe maker online free',
  ],
  alternates: {
    canonical: 'https://vegancooking.recipes/veganize',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vegancooking.recipes/veganize',
    siteName: 'vegancooking.recipes',
    title: 'Vegan Recipe Converter - Get Vegan Version of Any Recipe Instantly',
    description: 'Transform any recipe into a vegan version instantly! Our free AI-powered vegan recipe converter creates delicious plant-based versions with perfect ingredient substitutions. Get vegan recipes and vegan versions of your favorite dishes.',
    images: [
      {
        url: 'https://vegancooking.recipes/img/vcr-logo-lg.png',
        width: 150,
        height: 150,
        alt: 'Vegan Recipe Converter - Transform Any Recipe to Vegan',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vegan Recipe Converter - Get Vegan Version of Any Recipe Instantly',
    description: 'Transform any recipe into a vegan version instantly! Free AI-powered vegan recipe converter with perfect plant-based substitutions.',
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
};

export default function VeganizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Vegan Recipe Converter',
            description: 'Transform any recipe into a vegan version instantly with our free AI-powered vegan recipe converter. Get vegan recipes, vegan versions of your favorite dishes, and perfect plant-based ingredient substitutions.',
            url: 'https://vegancooking.recipes/veganize',
            applicationCategory: 'FoodApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '1000',
            },
            featureList: [
              'Convert any recipe to vegan version',
              'AI-powered ingredient substitutions',
              'Instant vegan recipe generation',
              'Free vegan recipe converter',
              'Plant-based recipe alternatives',
            ],
            keywords: 'vegan recipe, vegan version, vegan recipes, vegan recipe converter, veganize recipe, plant based recipe, vegan alternative, vegan substitute',
            publisher: {
              '@type': 'Organization',
              name: 'vegancooking.recipes',
              url: 'https://vegancooking.recipes',
              logo: {
                '@type': 'ImageObject',
                url: 'https://vegancooking.recipes/img/vcr-logo-lg.png',
                width: 150,
                height: 150,
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I convert a recipe to vegan?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply paste the recipe URL into our vegan recipe converter tool. Our AI will instantly transform it into a vegan version with plant-based ingredient substitutions and updated instructions.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a vegan version of a recipe?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A vegan version of a recipe is a plant-based adaptation that replaces all animal products (meat, dairy, eggs, honey) with vegan alternatives. Our tool automatically creates vegan versions with appropriate substitutions.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I make a recipe vegan?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use our free vegan recipe converter! Paste any recipe URL and get an instant vegan version with perfect plant-based substitutions. Our AI handles all the conversions automatically.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is there a free vegan recipe converter?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Our vegan recipe converter is completely free. Just paste any recipe URL and get an instant vegan version with plant-based ingredient substitutions.',
                },
              },
              {
                '@type': 'Question',
                name: 'What vegan substitutions does the converter use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our vegan recipe converter uses intelligent AI to suggest the best plant-based alternatives. Common substitutions include plant-based milks, vegan cheeses, egg replacers, and meat alternatives.',
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
