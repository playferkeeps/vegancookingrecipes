import { Recipe } from '@/types/recipe';

// Recipes generated using OpenAI - all recipes here are accurate and tested
// To add new recipes, use: npm run generate-recipes -- --title "Recipe Name" --category beverage
export const beverageRecipes: Recipe[] = [
// Recipes will be added here via the generation script,
  {
    id: '1766971058160.4521',
    title: 'Vegan Cocoa',
    slug: 'vegan-cocoa',
    description: 'Indulge in a rich and creamy vegan cocoa made from whole food ingredients, perfect for cozy evenings or a refreshing treat.',
    prologue: 'Looking for a delightful vegan cocoa recipe that is both simple and satisfying? This whole-food-plant-based cocoa is made with natural ingredients, ensuring you can enjoy a delicious beverage without any animal products. With just a few ingredients and easy steps, you can whip up a comforting drink that will warm your soul. Visit vegancooking.recipes for more plant-based inspiration!',
    image: '/recipe-images/vegan-cocoa-1766974180157.webp',
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    servings: 2,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Unsweetened cocoa powder",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Choose a high-quality cocoa for the best flavor."
        },
        {
          "name": "Almond milk",
          "amount": "2",
          "unit": "cups",
          "notes": "You can substitute with any plant-based milk."
        },
        {
          "name": "Maple syrup",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Adjust sweetness to taste."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "Pure vanilla extract adds depth of flavor."
        },
        {
          "name": "Cinnamon",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "Optional, for a warm spice note."
        },
        {
          "name": "Salt",
          "amount": "a pinch",
          "unit": "",
          "notes": "Enhances the overall flavors."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium saucepan, combine the cocoa powder, maple syrup, and a pinch of salt."
        },
        {
          "step": 2,
          "text": "Gradually whisk in the almond milk, ensuring there are no lumps."
        },
        {
          "step": 3,
          "text": "Place the saucepan over medium heat and slowly heat the mixture, stirring frequently."
        },
        {
          "step": 4,
          "text": "Once the cocoa is hot but not boiling, add the vanilla extract and cinnamon (if using)."
        },
        {
          "step": 5,
          "text": "Continue to whisk until fully combined and heated through, about 5-7 minutes."
        },
        {
          "step": 6,
          "text": "Remove from heat and pour the cocoa into mugs."
        },
        {
          "step": 7,
          "text": "Serve immediately and enjoy your delicious vegan cocoa!"
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "3g",
        "carbs": "22g",
        "fat": "4g",
        "fiber": "3g",
        "sugar": "10g"
      },
    tags: ["vegan","beverage","cocoa","whole-food-plant-based","beverage","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute almond milk with any other plant-based milk such as oat, soy, or coconut milk. Adjust the sweetness of the cocoa by adding more or less maple syrup according to your taste. For a richer cocoa, consider adding a tablespoon of nut butter.',
    faqs: [
        {
          "question": "Can I use sweetened cocoa powder?",
          "answer": "Yes, but you may want to reduce or eliminate the maple syrup to avoid making the cocoa too sweet."
        },
        {
          "question": "How can I make this cocoa richer?",
          "answer": "You can substitute part of the almond milk with a dairy-free cream or add a tablespoon of nut butter."
        }
      ],
    tips: ["For an extra treat, top with vegan whipped cream or a sprinkle of vegan chocolate chips.","Make a larger batch and store it in the fridge for a quick reheat later."],
    variations: ["Add a tablespoon of peanut butter for a chocolate-peanut butter flavor.","Mix in a teaspoon of peppermint extract for a refreshing twist."],
    storage: 'Store any leftover cocoa in an airtight container in the refrigerator for up to 3 days. Reheat on the stove or in the microwave before serving.',
  },
];
