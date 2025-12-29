/**
 * Recipe Generator Script
 * This generates 250 recipes programmatically
 * Run with: npx ts-node data/recipes/generateRecipes.ts
 */

import { generateRecipe } from './recipeGenerator';
import { RecipeCategory, VeganType } from '@/types/recipe';

// Recipe templates for different categories
const recipeTemplates = {
  baking: [
    { base: 'Chocolate Chip Cookies', variations: ['Oatmeal', 'Double Chocolate', 'Peanut Butter', 'White Chocolate Macadamia'] },
    { base: 'Brownies', variations: ['Fudge', 'Blondie', 'Walnut', 'Mint'] },
    { base: 'Muffins', variations: ['Blueberry', 'Banana', 'Chocolate', 'Apple Cinnamon'] },
    { base: 'Bread', variations: ['Banana', 'Zucchini', 'Pumpkin', 'Cornbread'] },
    { base: 'Cake', variations: ['Vanilla', 'Chocolate', 'Carrot', 'Lemon'] },
  ],
  savory: [
    { base: 'Soup', variations: ['Tomato', 'Lentil', 'Minestrone', 'Broccoli'] },
    { base: 'Stew', variations: ['Vegetable', 'Bean', 'Mushroom', 'Chickpea'] },
    { base: 'Casserole', variations: ['Green Bean', 'Potato', 'Rice', 'Pasta'] },
  ],
  // ... more templates
};

// This would generate recipes, but for now let's create category files manually
// with a good mix of recipes

