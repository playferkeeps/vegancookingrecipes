# SEO Optimization for Recipes

This document explains how to use the SEO optimization feature to ensure all recipes have high-converting, search-engine-optimized content.

## Overview

The SEO optimization script uses AI to enhance recipe content for maximum search visibility and conversion. It optimizes:

- **Titles** (50-60 characters, keyword-rich, compelling)
- **Descriptions** (150-160 characters, meta-description optimized)
- **Prologues** (200-300 words, SEO-optimized intro text)
- **Tags** (10-15 highly relevant, searchable keywords)
- **FAQs** (3-5 questions targeting featured snippets)
- **Ingredient Notes** (SEO-friendly explanations and substitutions)

## Usage

### Option 1: Automatically Optimize During Recipe Generation

Add the `--optimize-seo` flag when generating recipes:

```bash
# Generate 10 recipes with SEO optimization
npm run generate-recipes -- --count 10 --optimize-seo

# Generate a specific recipe with SEO optimization
npm run generate-recipes -- --count 1 --title "Vegan Chocolate Cake" --optimize-seo

# Generate with all options and SEO optimization
npm run generate-recipes -- --count 5 --category dessert --optimize-seo --supabase
```

The SEO optimization happens **after** recipe generation but **before** saving, so the optimized content is what gets saved to the database or files.

### Option 2: Optimize Existing Recipes (Standalone)

Run the SEO optimization script on existing recipes:

```bash
# Dry run - see what would be optimized (default)
npm run optimize-seo -- --limit 10

# Optimize first 10 recipes (actually apply changes)
npm run optimize-seo -- --limit 10 --execute

# Optimize a specific recipe by ID
npm run optimize-seo -- --recipe-id <recipe-id> --execute

# Optimize all recipes (use with caution!)
npm run optimize-seo -- --all --execute
```

**⚠️ Important**: By default, the script runs in **DRY RUN** mode. Add `--execute` to actually apply optimizations.

## What Gets Optimized

### 1. Title Optimization

- Includes primary keyword at the beginning
- Adds compelling modifiers ("Easy", "Best", "Perfect", "Delicious")
- Ensures "Vegan" is present if not already
- Optimized to 50-60 characters for search results
- Example: "Easy Vegan Chocolate Chip Cookies Recipe"

### 2. Description Optimization

- Starts with primary keyword
- Includes compelling benefit or unique selling point
- Adds call-to-action or urgency
- Includes relevant secondary keywords naturally
- Optimized to 150-160 characters for meta descriptions
- Example: "Make the best vegan chocolate chip cookies in just 20 minutes! Soft, chewy, and perfectly sweet. This easy recipe uses simple ingredients you already have."

### 3. Prologue Optimization

- Starts with a hook that includes primary keyword
- Answers "why this recipe" in first 2 sentences
- Includes 2-3 relevant keywords naturally
- Maintains Katie's authentic, warm voice
- Includes benefits or unique features
- Optimized for featured snippets (answers common questions)
- 200-300 words for optimal SEO value

### 4. Tag Enhancement

- Primary keyword variations
- Long-tail keywords
- Category and vegan type tags
- Seasonal/occasion tags (if relevant)
- Ingredient-based tags
- Difficulty and time-based tags
- Total: 10-15 highly relevant tags

### 5. FAQ Optimization

- Targets featured snippet opportunities
- Answers common search queries
- Includes "how to", "what is", "can I" questions
- Comprehensive answers (50-100 words)
- Includes keywords naturally
- Example: "How long do vegan cookies last?" with detailed answer

### 6. Ingredient Notes Enhancement

- SEO-friendly explanations
- Substitution tips (for search queries)
- Health benefits where relevant
- Storage tips for ingredients

## Conversion Optimization

The script also applies conversion-focused optimizations:

- **Power words**: "easy", "quick", "delicious", "perfect", "best", "amazing"
- **Time/servings**: Included in descriptions when relevant
- **Urgency/scarcity**: Subtle hints to encourage action
- **Benefits over features**: Emphasizes what users get, not just what it is
- **Emotional language**: Maintains Katie's warm, authentic voice

## Examples

### Example 1: Generate with SEO Optimization

```bash
npm run generate-recipes -- --count 1 --title "Vegan Lasagna" --category dinner --optimize-seo --supabase
```

This will:

1. Generate a vegan lasagna recipe
2. Optimize it for SEO (title, description, prologue, tags, FAQs)
3. Save the optimized version to Supabase

### Example 2: Optimize Existing Recipes

```bash
# First, see what would be optimized
npm run optimize-seo -- --limit 5

# Then apply the optimizations
npm run optimize-seo -- --limit 5 --execute
```

### Example 3: Optimize All Recipes

```bash
# Dry run first to see what would change
npm run optimize-seo -- --all

# Then execute (this may take a while!)
npm run optimize-seo -- --all --execute
```

## Logging

The standalone optimization script creates detailed logs:

- **Console output**: Real-time progress and results
- **Log file**: Timestamped log file in `/logs` directory
- **Report**: Summary of all optimizations applied

## Best Practices

1. **Always dry run first**: Use `--limit` without `--execute` to preview changes
2. **Start small**: Test with `--limit 5` before optimizing all recipes
3. **Review changes**: Check the log file to see what was optimized
4. **Use during generation**: Add `--optimize-seo` to your recipe generation workflow for new recipes
5. **Batch updates**: Optimize recipes in batches (e.g., 10-20 at a time) to avoid rate limits

## Technical Details

- **AI Model**: Uses GPT-4o-mini for fast, cost-effective optimization
- **Temperature**: 0.5 (balanced creativity and consistency)
- **Response Format**: JSON for reliable parsing
- **Error Handling**: Continues with recipe generation even if SEO optimization fails
- **Rate Limits**: Respects OpenAI API rate limits automatically

## Troubleshooting

### "OPENAI_API_KEY is not configured"

- Make sure your `.env` file has `OPENAI_API_KEY=your_key_here`

### "Prisma Client is not initialized"

- Check that `DATABASE_URL` or `DIRECT_URL` is set in your `.env` file
- Run `npm run db:generate` to regenerate Prisma client

### SEO optimization fails but recipe generation continues

- This is expected behavior - the script logs a warning but continues
- Check the console output for the specific error message
- Common issues: API rate limits, network issues, invalid recipe data

## Integration with Recipe Generator

The SEO optimization is seamlessly integrated into the recipe generator:

1. Recipe is generated normally
2. If `--optimize-seo` flag is present, optimization runs
3. Optimized content replaces original content
4. Recipe is saved with optimized content
5. If optimization fails, original recipe is still saved

This ensures all new recipes can be automatically optimized during generation.
