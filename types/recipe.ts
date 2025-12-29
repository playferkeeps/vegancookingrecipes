export type RecipeCategory = 
  | 'baking'
  | 'savory'
  | 'international'
  | 'breakfast'
  | 'lunch'
  | 'dinner'
  | 'dessert'
  | 'snack'
  | 'beverage';

export type VeganType = 
  | 'raw-vegan'
  | 'whole-food-plant-based'
  | 'gluten-free-vegan'
  | 'oil-free-vegan'
  | 'high-protein-vegan'
  | 'budget-vegan'
  | 'gourmet-vegan';

export interface Ingredient {
  name: string;
  amount: string;
  unit?: string;
  notes?: string;
}

export interface Instruction {
  step: number;
  text: string;
  image?: string;
}

export interface NutritionInfo {
  calories?: number;
  protein?: string;
  carbs?: string;
  fat?: string;
  fiber?: string;
  sugar?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  prologue: string; // SEO-optimized introductory text
  image: string;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  totalTime: number; // in minutes
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: RecipeCategory[];
  veganType: VeganType[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  nutritionInfo?: NutritionInfo;
  tags: string[];
  author: string;
  datePublished: string;
  dateModified?: string;
  // SEO enhancement fields
  ingredientNotes?: string; // Detailed ingredient explanations
  faqs?: FAQ[]; // Frequently asked questions
  tips?: string[]; // Tips and notes
  variations?: string[]; // Recipe variations
  storage?: string; // Storage instructions
  relatedRecipeIds?: string[]; // Related recipes for internal linking
}

