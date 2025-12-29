# Recipe Generator - Admin Tool

**⚠️ This is a pre-deployment admin tool. Use this BEFORE putting the site live to generate recipes.**

This tool uses OpenAI to generate accurate, detailed vegan recipes and saves them directly to category files in the codebase. It automatically cycles through all categories and generates recipes randomly distributed across them.

## Setup

1. Get an OpenAI API key from https://platform.openai.com/api-keys
2. Get a Replicate API token from https://replicate.com/account/api-tokens
3. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
4. Edit `.env` and add your API keys:
   ```
   OPENAI_API_KEY=your_api_key_here
   REPLICATE_API_TOKEN=your_replicate_token_here
   ```
   
   The `.env` file is gitignored, so your API keys won't be committed to the repository.

## Usage

### Generate N Recipes Randomly Across Categories

The tool will automatically cycle through all categories and generate recipes randomly:

```bash
# Generate 50 recipes randomly distributed across all categories
npm run generate-recipes -- --count 50

# Generate 100 recipes
npm run generate-recipes -- --count 100

# Generate 250 recipes
npm run generate-recipes -- --count 250
```

### How It Works

- The tool cycles through all 9 categories: `baking`, `savory`, `ethnic`, `breakfast`, `lunch`, `dinner`, `dessert`, `snack`, `beverage`
- Each category gets at least one recipe (if count >= 9)
- Remaining recipes are randomly distributed across categories
- Recipe titles are randomly selected from category-specific suggestions
- Recipes are shuffled before generation for variety

## Workflow

1. **Generate recipes** using the tool:
   ```bash
   npm run generate-recipes -- --count 50
   ```

2. **Review the generated recipes** in the category files:
   - `data/recipes/baking.ts`
   - `data/recipes/savory.ts`
   - `data/recipes/ethnic.ts`
   - etc.

3. **Rebuild the site** to include new recipes:
   ```bash
   npm run build
   ```

4. **Test locally**:
   ```bash
   npm run dev
   ```

5. **Deploy** when ready

## How It Works

1. The tool sends a detailed prompt to OpenAI's GPT-4o-mini model
2. OpenAI generates a complete recipe with:
   - ✅ Accurate ingredients with measurements
   - ✅ Step-by-step instructions
   - ✅ Realistic prep and cook times
   - ✅ Nutrition information
   - ✅ FAQs, tips, variations, and storage instructions
   - ✅ SEO-optimized content
3. **AI Image Generation**: The tool automatically generates a high-quality food photography image using Replicate's FLUX Schnell model
   - Images are optimized for recipe hero images (16:9 aspect ratio)
   - Professional food styling and lighting
   - Cost: $0.003 per image ($3 per 1000 images) - extremely affordable!
   - Fast generation time for quick results
4. The recipe is validated and saved to the appropriate category file
5. Recipes are automatically formatted as TypeScript code

## Recipe Storage

Recipes are saved to category files:
- `data/recipes/baking.ts` - Baking recipes
- `data/recipes/savory.ts` - Savory recipes
- `data/recipes/ethnic.ts` - Ethnic recipes
- `data/recipes/breakfast.ts` - Breakfast recipes
- `data/recipes/lunch.ts` - Lunch recipes
- `data/recipes/dinner.ts` - Dinner recipes
- `data/recipes/dessert.ts` - Dessert recipes
- `data/recipes/snack.ts` - Snack recipes
- `data/recipes/beverage.ts` - Beverage recipes

## Quality Assurance

All generated recipes:
- ✅ Are completely vegan (no animal products)
- ✅ Have specific, measurable ingredients
- ✅ Include detailed, actionable instructions
- ✅ Have realistic cooking times
- ✅ Include comprehensive SEO content
- ✅ Include AI-generated food photography images
- ✅ Are saved with proper TypeScript formatting
- ✅ Are checked for duplicates before saving

## Cost Estimate

For generating recipes with images:
- **Recipe generation** (OpenAI GPT-4o-mini): ~$0.001-0.002 per recipe
- **Image generation** (Replicate FLUX Schnell): $0.003 per image ($3 per 1000 images)
- **Total per recipe**: ~$0.004-0.005

**Example costs:**
- 50 recipes: ~$0.20 - $0.25
- 100 recipes: ~$0.40 - $0.50
- 250 recipes: ~$1.00 - $1.25

**Note**: FLUX Schnell is one of the fastest and most cost-effective image generation models available, making it perfect for bulk recipe generation.

## Notes

- The original 8 recipes are preserved in `data/recipes/originalRecipesData.ts`
- Generated recipes start with ID 9+
- After generating recipes, always rebuild: `npm run build`
- Recipes are checked for duplicates by slug before saving
- This tool is for pre-deployment use only - not available in production

## Example Commands

```bash
# Generate 50 recipes randomly across all categories
npm run generate-recipes -- --count 50

# Generate 100 recipes for a larger site
npm run generate-recipes -- --count 100

# Generate 250 recipes for comprehensive coverage
npm run generate-recipes -- --count 250
```

The tool will show you the distribution plan before generating, so you can see how many recipes will be generated per category.
