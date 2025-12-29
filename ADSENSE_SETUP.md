# Google AdSense Setup Guide

This site has been configured with Google AdSense in a clean, non-invasive, but profit-optimal way.

## Setup Instructions

### 1. Get Your AdSense Publisher ID

1. Sign up for Google AdSense at https://www.google.com/adsense
2. Once approved, go to your AdSense dashboard
3. Find your Publisher ID (format: `ca-pub-XXXXXXXXXX`)

### 2. Configure Environment Variables

Create or update your `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE=your-google-verification-code
```

Replace:
- `ca-pub-XXXXXXXXXX` with your actual AdSense Publisher ID
- `your-google-verification-code` with your Google Search Console verification code (if you have one)

### 3. Create Ad Units in AdSense

You need to create the following ad units in your AdSense dashboard:

1. **Banner Ad (Horizontal)** - For top/bottom placements
   - Format: Display ad
   - Size: Responsive
   - Name: "Banner Ad - Top/Bottom"
   - Copy the Ad Slot ID (format: `1234567890`)

2. **Rectangle Ad (In-Content)** - For between content sections
   - Format: Display ad
   - Size: 300x250 (Medium Rectangle)
   - Name: "Rectangle Ad - In-Content"
   - Copy the Ad Slot ID

3. **In-Feed Ad** - For recipe listings
   - Format: In-feed ad
   - Name: "In-Feed Ad - Recipe Listings"
   - Copy the Ad Slot ID

### 4. Update Ad Slot IDs

Update the following files with your actual Ad Slot IDs:

#### `components/AdBanner.tsx`
```typescript
adSlot="1234567890" // Replace with your banner ad slot ID
```

#### `components/AdRectangle.tsx`
```typescript
adSlot="1234567891" // Replace with your rectangle ad slot ID
```

#### `components/AdInFeed.tsx`
```typescript
adSlot="1234567892" // Replace with your in-feed ad slot ID
```

## Ad Placements

### Homepage (`app/page.tsx`)
- **Top Banner**: Below hero section, above featured recipes
- **In-Feed**: After 3rd featured recipe card

### Recipe Pages (`app/recipes/[slug]/page.tsx`)
- **After Prologue**: Banner ad after the recipe introduction
- **Between Ingredients & Instructions**: Rectangle ad (desktop only)
- **After Recipe Content**: Banner ad after the recipe card

## Ad Strategy

The ad placements are optimized for:

1. **User Experience**: Ads are placed naturally between content sections, not interrupting the reading flow
2. **Revenue Optimization**: 
   - Top-of-page placement for high visibility
   - In-content placement for engaged readers
   - Multiple placements per page for maximum revenue
3. **Mobile Responsive**: All ads are responsive and work on all devices
4. **Non-Intrusive**: No pop-ups, overlays, or sticky ads that block content

## Testing

After setup:

1. Build and run the site locally:
   ```bash
   npm run build
   npm run start
   ```

2. Check the browser console for any AdSense errors

3. Verify ads appear in the correct locations

4. Test on mobile devices to ensure responsive behavior

## AdSense Ownership Verification

The AdSense ownership verification snippet has been added to the site layout. This meta tag is automatically included in the `<head>` section:

```html
<meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX">
```

This verification tag:
- Proves ownership of your AdSense account
- Is required for AdSense approval
- Uses your Publisher ID from the environment variable
- Is automatically updated when you change `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID`

## Important Notes

- **AdSense Approval**: Your site must be approved by Google AdSense before ads will display
- **Content Requirements**: Ensure your site has enough quality content for approval
- **Policy Compliance**: Follow Google AdSense policies (no clicking your own ads, etc.)
- **Performance**: Ads are loaded asynchronously to not impact page load times
- **Verification**: The ownership verification meta tag is automatically included in the site head

## Troubleshooting

### Ads Not Showing
- Verify your Publisher ID is correct in `.env.local`
- Check that Ad Slot IDs are correct in component files
- Ensure your site is approved by AdSense
- Check browser console for errors

### Build Errors
- Make sure `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` is set in `.env.local`
- Restart your dev server after adding environment variables

## Revenue Optimization Tips

1. **A/B Testing**: Test different ad placements to find what works best
2. **Ad Density**: Don't exceed 3 ads per page (we're currently at optimal levels)
3. **Content Quality**: High-quality content = better ad rates
4. **User Engagement**: Longer time on page = more ad views
5. **Mobile Optimization**: Ensure mobile experience is good (ads are responsive)

