// Import original recipes from standalone file to break circular dependency
import { originalRecipes } from './recipes/originalRecipesData';

// Re-export for backward compatibility
export { originalRecipes } from './recipes/originalRecipesData';

// Backward compatibility - re-export from modular structure
export {
  getAllRecipes,
  getRecipeBySlug,
  getRecipesByCategory,
  getRecipesByVeganType,
  getRecipesByTag,
} from './recipes/index';

// Legacy export for backward compatibility
import { allRecipes } from './recipes/index';
export const recipes = allRecipes;
