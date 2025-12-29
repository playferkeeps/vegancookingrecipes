import { Recipe, RecipeCategory, VeganType } from '@/types/recipe';
import { createRecipe, generateSlug, getImageUrl } from '../recipeHelpers';

interface RecipeTemplate {
  title: string;
  description: string;
  prologue: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: RecipeCategory[];
  veganType: VeganType[];
  ingredients: Array<{ name: string; amount: string; unit?: string; notes?: string }>;
  instructions: Array<{ step: number; text: string }>;
  tags: string[];
  nutritionInfo?: {
    calories?: number;
    protein?: string;
    carbs?: string;
    fat?: string;
    fiber?: string;
    sugar?: string;
  };
  ingredientNotes?: string;
  faqs?: Array<{ question: string; answer: string }>;
  tips?: string[];
  variations?: string[];
  storage?: string;
  relatedRecipeIds?: string[];
}

// Global recipe ID counter - starts at 9 to preserve existing 8 recipes
// This ensures backward compatibility with existing recipe IDs
let recipeIdCounter = 9;

export function resetRecipeIdCounter(startId: number = 9) {
  recipeIdCounter = startId;
}

export function getCurrentRecipeId() {
  return recipeIdCounter;
}

export function generateRecipe(template: RecipeTemplate): Recipe {
  const id = String(recipeIdCounter++);
  const slug = generateSlug(template.title);
  const category = template.category[0] || 'savory';
  
  return createRecipe({
    id,
    title: template.title,
    slug,
    description: template.description,
    prologue: template.prologue,
    image: getImageUrl(category),
    prepTime: template.prepTime,
    cookTime: template.cookTime,
    totalTime: template.prepTime + template.cookTime,
    servings: template.servings,
    difficulty: template.difficulty,
    category: template.category,
    veganType: template.veganType,
    ingredients: template.ingredients,
    instructions: template.instructions,
    tags: template.tags,
    nutritionInfo: template.nutritionInfo,
    ingredientNotes: template.ingredientNotes,
    faqs: template.faqs,
    tips: template.tips,
    variations: template.variations,
    storage: template.storage,
    relatedRecipeIds: template.relatedRecipeIds,
  });
}

