# Recipe Data Structure

This directory contains all recipes organized by category for better maintainability.

## Structure

- `index.ts` - Main export file that combines all recipes
- `baking.ts` - Baking recipes (cookies, breads, cakes, etc.)
- `savory.ts` - Savory dishes
- `ethnic.ts` - Ethnic/international cuisine
- `breakfast.ts` - Breakfast recipes
- `lunch.ts` - Lunch recipes
- `dinner.ts` - Dinner recipes
- `dessert.ts` - Dessert recipes
- `snack.ts` - Snack recipes
- `beverage.ts` - Beverage recipes

## Adding Recipes

Use the `generateRecipe` helper from `recipeGenerator.ts` to create new recipes:

```typescript
import { generateRecipe } from './recipeGenerator';

export const newRecipe = generateRecipe({
  title: 'Recipe Title',
  description: 'Recipe description',
  // ... other fields
});
```

## Current Count

Target: 250 recipes
Current: 8 recipes (migrating from recipes.ts)

