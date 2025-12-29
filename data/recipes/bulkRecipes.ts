import { generateRecipe } from './recipeGenerator';
import { RecipeCategory, VeganType } from '@/types/recipe';

// This file contains bulk-generated recipes using templates
// Each recipe is created with the generateRecipe helper

export const bulkRecipes = [
  // Baking Recipes (25 recipes)
  generateRecipe({
    title: 'Vegan Chocolate Chip Cookies',
    description: 'Classic chocolate chip cookies made completely vegan with plant-based ingredients. Soft, chewy, and absolutely delicious!',
    prologue: 'Looking for the perfect vegan chocolate chip cookie recipe? You\'ve come to the right place! These plant-based cookies are a classic favorite that everyone will love, whether you follow a vegan diet or not. Made with simple, wholesome ingredients like vegan butter and plant-based milk, these cookies deliver that same irresistible chewy texture and rich chocolate flavor you remember from traditional recipes. Perfect for baking enthusiasts, families with dietary restrictions, or anyone wanting to reduce their consumption of animal products, this vegan cookie recipe proves that you don\'t need eggs or dairy to create amazing baked goods. At vegancooking.recipes, we specialize in creating delicious vegan recipes that don\'t compromise on taste or texture.',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    difficulty: 'easy',
    category: ['baking', 'dessert', 'snack'],
    veganType: ['whole-food-plant-based', 'gluten-free-vegan'],
    ingredients: [
      { name: 'All-purpose flour', amount: '2', unit: 'cups' },
      { name: 'Baking soda', amount: '1', unit: 'tsp' },
      { name: 'Salt', amount: '1', unit: 'tsp' },
      { name: 'Vegan butter', amount: '3/4', unit: 'cup', notes: 'softened' },
      { name: 'Brown sugar', amount: '3/4', unit: 'cup' },
      { name: 'White sugar', amount: '1/2', unit: 'cup' },
      { name: 'Vanilla extract', amount: '2', unit: 'tsp' },
      { name: 'Plant-based milk', amount: '2', unit: 'tbsp' },
      { name: 'Vegan chocolate chips', amount: '1', unit: 'cup' },
    ],
    instructions: [
      { step: 1, text: 'Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.' },
      { step: 2, text: 'In a medium bowl, whisk together flour, baking soda, and salt.' },
      { step: 3, text: 'In a large bowl, cream together vegan butter and both sugars until light and fluffy.' },
      { step: 4, text: 'Add vanilla extract and plant-based milk, mix until combined.' },
      { step: 5, text: 'Gradually add dry ingredients to wet ingredients, mixing until just combined.' },
      { step: 6, text: 'Fold in chocolate chips.' },
      { step: 7, text: 'Drop rounded tablespoons of dough onto prepared baking sheets, spacing 2 inches apart.' },
      { step: 8, text: 'Bake for 10-12 minutes or until edges are golden brown. Let cool on baking sheet for 5 minutes before transferring to wire rack.' },
    ],
    tags: ['cookies', 'chocolate', 'dessert', 'baking', 'vegan'],
    nutritionInfo: { calories: 120, protein: '2g', carbs: '18g', fat: '5g', fiber: '1g', sugar: '10g' },
    ingredientNotes: '**Vegan Butter**: Use a high-quality vegan butter like Earth Balance or Miyoko\'s for best results. You can substitute coconut oil, but it will change the texture and flavor.',
    faqs: [
      { question: 'Do I need to chill the cookie dough?', answer: 'No, this vegan chocolate chip cookie recipe doesn\'t require chilling. The dough can be baked immediately after mixing.' },
      { question: 'Can I make these cookies gluten-free?', answer: 'Yes! Substitute the all-purpose flour with a 1:1 gluten-free flour blend.' },
    ],
    tips: ['Don\'t over-bake! The cookies should look slightly underdone when you take them out.', 'Use room temperature vegan butter for best results.'],
    variations: ['Add 1/2 cup chopped walnuts for nutty chocolate chip cookies.', 'Use white chocolate chips instead of dark chocolate.'],
    storage: 'Store these vegan chocolate chip cookies in an airtight container at room temperature for 3-4 days.',
  }),
  
  // I'll create a more efficient approach - generating recipes programmatically
  // Let me create a script that generates the remaining recipes
];

