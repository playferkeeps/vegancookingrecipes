# Blog Post Scheduling Guide

This guide explains how to automatically generate blog posts 4 times a day for different meal categories.

## Overview

The blog post scheduler automatically generates SEO-optimized, humanized blog posts for recipes in different categories:

- **Breakfast** - 6:00 AM
- **Lunch** - 12:00 PM
- **Dinner** - 6:00 PM
- **Beverage** - 9:00 PM

Each blog post is:

- Written in Noah's authentic, personal voice
- SEO-optimized with natural keyword integration
- Includes personal anecdotes and stories
- 800-1200 words long
- Includes 3-5 generated images

## Quick Start

### 1. Start the Scheduler

```bash
npm run schedule-blog-posts
```

This will:

- Start the scheduler immediately
- Generate blog posts at the scheduled times
- Run continuously until stopped (Ctrl+C)

### 2. Customize Schedule (Optional)

Set environment variable in `.env.local`:

```bash
# Custom schedule: category:hour:minute (comma-separated)
BLOG_POST_SCHEDULE=breakfast:6:0,lunch:12:0,dinner:18:0,beverage:21:0
```

Example: Post breakfast at 7 AM instead of 6 AM

```bash
BLOG_POST_SCHEDULE=breakfast:7:0,lunch:12:0,dinner:18:0,beverage:21:0
```

## How It Works

### Schedule

The scheduler runs 4 times per day at default times:

- **6:00 AM** - Breakfast blog post
- **12:00 PM** - Lunch blog post
- **6:00 PM** - Dinner blog post
- **9:00 PM** - Beverage blog post

### Blog Post Generation

For each scheduled time:

1. Finds a random recipe in the specified category
2. Generates SEO-optimized blog post content using AI
3. Creates 3-5 images for the blog post
4. Saves the blog post to the database
5. Links the blog post to the recipe

### Humanization

Blog posts are automatically humanized with:

- Personal voice (first person: "I", "my", "me")
- Authentic anecdotes and memories
- Specific tips from experience
- Conversational tone (like sharing with a friend)
- Avoids generic marketing phrases
- No AI-sounding language

## Manual Generation

You can also generate blog posts manually:

```bash
# Generate for a specific category
npm run generate-blog -- --category breakfast
npm run generate-blog -- --category lunch
npm run generate-blog -- --category dinner
npm run generate-blog -- --category beverage

# Generate for a specific recipe
npm run generate-blog -- --title "Vegan Pancakes"

# Generate multiple blog posts
npm run generate-blog -- --category dinner --count 5
```

## Production Deployment

### Option 1: Always-Running Process

Run the scheduler as a background service:

```bash
# Using PM2
pm2 start npm --name "blog-scheduler" -- run schedule-blog-posts
pm2 save
pm2 startup
```

### Option 2: Cron Job

Add to crontab (`crontab -e`):

```bash
# Generate blog posts at scheduled times
0 6 * * * cd /path/to/cooking-site && npm run generate-blog -- --category breakfast >> /path/to/logs/blog-posts.log 2>&1
0 12 * * * cd /path/to/cooking-site && npm run generate-blog -- --category lunch >> /path/to/logs/blog-posts.log 2>&1
0 18 * * * cd /path/to/cooking-site && npm run generate-blog -- --category dinner >> /path/to/logs/blog-posts.log 2>&1
0 21 * * * cd /path/to/cooking-site && npm run generate-blog -- --category beverage >> /path/to/logs/blog-posts.log 2>&1
```

### Option 3: GitHub Actions

Create `.github/workflows/blog-posts.yml`:

```yaml
name: Generate Blog Posts

on:
  schedule:
    # Breakfast - 6 AM UTC (adjust for your timezone)
    - cron: '0 6 * * *'
    # Lunch - 12 PM UTC
    - cron: '0 12 * * *'
    # Dinner - 6 PM UTC
    - cron: '0 18 * * *'
    # Beverage - 9 PM UTC
    - cron: '0 21 * * *'
  workflow_dispatch: # Allow manual trigger

jobs:
  generate-blog:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - name: Generate Breakfast Blog Post
        if: github.event.schedule == '0 6 * * *'
        run: npm run generate-blog -- --category breakfast
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          REPLICATE_API_TOKEN: ${{ secrets.REPLICATE_API_TOKEN }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
      - name: Generate Lunch Blog Post
        if: github.event.schedule == '0 12 * * *'
        run: npm run generate-blog -- --category lunch
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          REPLICATE_API_TOKEN: ${{ secrets.REPLICATE_API_TOKEN }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
      - name: Generate Dinner Blog Post
        if: github.event.schedule == '0 18 * * *'
        run: npm run generate-blog -- --category dinner
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          REPLICATE_API_TOKEN: ${{ secrets.REPLICATE_API_TOKEN }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
      - name: Generate Beverage Blog Post
        if: github.event.schedule == '0 21 * * *'
        run: npm run generate-blog -- --category beverage
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          REPLICATE_API_TOKEN: ${{ secrets.REPLICATE_API_TOKEN }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

### Option 4: Vercel Cron (If hosting on Vercel)

Add to `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/blog-breakfast",
      "schedule": "0 6 * * *"
    },
    {
      "path": "/api/cron/blog-lunch",
      "schedule": "0 12 * * *"
    },
    {
      "path": "/api/cron/blog-dinner",
      "schedule": "0 18 * * *"
    },
    {
      "path": "/api/cron/blog-beverage",
      "schedule": "0 21 * * *"
    }
  ]
}
```

Then create API routes that call the blog post generation script.

## Environment Variables

Required:

- `OPENAI_API_KEY` - For generating blog post content
- `REPLICATE_API_TOKEN` - For generating blog post images
- `DATABASE_URL` - For saving blog posts

Optional:

- `BLOG_POST_SCHEDULE` - Custom schedule (see above)

## Blog Post Content

Each blog post includes:

1. **Title** - SEO-optimized (60-70 characters)
2. **Excerpt** - Compelling summary (150-160 characters)
3. **Content** - Full blog post (800-1200 words) with:
   - Personal introduction with story/anecdote
   - Recipe overview
   - Ingredient highlights
   - Preparation tips
   - Serving suggestions
   - Variations
   - Conclusion encouraging readers to try
4. **Meta Tags** - SEO meta title, description, keywords
5. **Images** - 3-5 generated images (ingredients, process, final dish)

## Humanization Features

Blog posts are written to sound authentic and personal:

- ✅ First person voice ("I", "my", "me")
- ✅ Personal anecdotes and memories
- ✅ Specific tips from experience
- ✅ Conversational tone
- ✅ Avoids generic marketing phrases
- ✅ No AI-sounding language
- ✅ Natural keyword integration (no stuffing)

## Troubleshooting

### No recipes found for category

- Ensure you have recipes in that category in your database
- Check category spelling (lowercase: `breakfast`, `lunch`, `dinner`, `beverage`)
- Generate recipes first: `npm run generate-recipes -- --category breakfast --count 5`

### Blog post generation fails

- Check OpenAI API key is set
- Check Replicate API token is set
- Check database connection
- Review error logs for specific issues

### Scheduler not running

- Check if process is still running
- Verify no errors in logs
- Ensure system time is correct
- Check timezone settings

### Images not generating

- Verify Replicate API token is valid
- Check API rate limits
- Ensure sufficient API credits

## Monitoring

Monitor blog post generation:

```bash
# Check scheduler logs
tail -f /path/to/logs/blog-posts.log

# Check database for new blog posts
# Query BlogPost table ordered by datePublished DESC
```

## Best Practices

1. **Recipe Selection**: Ensure you have enough recipes in each category
2. **Timing**: Schedule posts at optimal times for your audience
3. **Content Quality**: Review generated blog posts periodically
4. **Images**: Ensure recipe images are high quality
5. **SEO**: Blog posts are automatically SEO-optimized, but review meta tags

## Resources

- [Blog Post Generator Script](./scripts/generate-blog-post.ts)
- [Blog Post Scheduler Script](./scripts/schedule-blog-posts.ts)
- [Humanize Content Script](./scripts/humanize-content.ts)
