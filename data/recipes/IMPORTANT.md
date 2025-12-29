# Recipe Generation - 250 Recipes

## Current Status
- ✅ Modular structure created
- ✅ Recipe generator helper created
- ✅ Category files structure in place
- ⏳ Need to migrate existing 8 recipes
- ⏳ Need to generate 242 more recipes to reach 250

## Next Steps

1. **Migrate Existing Recipes**: Move the 8 existing recipes from `recipes.ts` to appropriate category files
2. **Generate Remaining Recipes**: Use the generator to create 242 more recipes across all categories

## Distribution Target (250 total)
- Baking: 30 recipes
- Savory: 30 recipes  
- International: 30 recipes
- Breakfast: 25 recipes
- Lunch: 25 recipes
- Dinner: 30 recipes
- Dessert: 30 recipes
- Snack: 25 recipes
- Beverage: 25 recipes

## How to Generate

Use the `generateRecipe` function from `recipeGenerator.ts`:

```typescript
import { generateRecipe } from './recipeGenerator';

const recipe = generateRecipe({
  title: 'Recipe Title',
  description: 'Description',
  prologue: 'SEO-optimized prologue...',
  // ... other fields
});
```

## Note

Due to the large scope, recipes can be generated in batches. The generator ensures unique IDs starting from 9 (after existing 8 recipes).

