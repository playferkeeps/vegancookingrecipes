# Vegan Cooking Website

A modern, SEO-friendly vegan cooking website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🥗 **Comprehensive Recipe Collection**: Recipes covering baking, savory dishes, ethnic cuisine, breakfast, lunch, dinner, desserts, and more
- 🔍 **SEO Optimized**: 
  - Structured data (JSON-LD) for recipes
  - Meta tags and Open Graph tags
  - Sitemap generation
  - Robots.txt
  - Semantic HTML
- 📱 **Mobile Friendly**: Fully responsive design that works on all devices
- ♿ **Accessible**: WCAG compliant with proper ARIA labels, keyboard navigation, and focus management
- 🚀 **Jump to Recipe Button**: Sticky button that appears when scrolling past the recipe section
- 💬 **Comments System**: Users can leave comments on all recipes (stored in localStorage)
- 📤 **Social Sharing**: Share buttons for Facebook, Twitter, Pinterest, LinkedIn, WhatsApp, and Email
- 🎨 **Modern UI**: Beautiful, clean interface with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── recipes/            # Recipe pages
│   ├── categories/        # Category pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Comments.tsx       # Comments section
│   ├── JumpToRecipe.tsx   # Jump to recipe button
│   ├── SocialShare.tsx    # Social media share buttons
│   └── RecipeCard.tsx     # Recipe card component
├── data/                  # Recipe data
│   └── recipes.ts         # Recipe database
├── types/                 # TypeScript types
│   └── recipe.ts          # Recipe type definitions
└── public/                # Static files
```

## Recipe Data

Recipes are currently stored in `data/recipes.ts`. In production, you would replace this with:
- A database (PostgreSQL, MongoDB, etc.)
- An API endpoint
- A headless CMS

## SEO Features

- **Structured Data**: All recipes include JSON-LD structured data for rich snippets
- **Meta Tags**: Comprehensive meta tags for search engines and social media
- **Sitemap**: Auto-generated sitemap at `/sitemap.xml`
- **Robots.txt**: Configured for search engine crawlers
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **Alt Text**: All images include descriptive alt text

## Accessibility

- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Skip to main content link
- High contrast colors
- Screen reader friendly

## Customization

### Adding Recipes

Add recipes to `data/recipes.ts` following the `Recipe` type definition.

### Styling

The site uses Tailwind CSS. Customize colors and styles in `tailwind.config.js`.

### SEO Settings

Update metadata in:
- `app/layout.tsx` - Global metadata
- Individual page files - Page-specific metadata
- `app/sitemap.ts` - Sitemap configuration

## Building for Production

```bash
npm run build
npm start
```

## License

MIT

