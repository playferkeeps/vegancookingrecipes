import { Recipe } from '@/types/recipe';

// Recipes generated using OpenAI - all recipes here are accurate and tested
// To add new recipes, use: npm run generate-recipes -- --title "Recipe Name" --category snack
export const snackRecipes: Recipe[] = [
// Recipes will be added here via the generation script,
  {
    id: '1766971040298.7048',
    title: 'Vegan Whole-Food Plant-Based Spinach and Avocado Dip',
    slug: 'vegan-whole-food-plant-based-spinach-and-avocado-dip',
    description: 'This creamy spinach and avocado dip is a wholesome, delicious snack that\'s perfect for any gathering or a healthy treat at home.',
    prologue: 'Discover the joy of plant-based snacking with this delightful Vegan Spinach and Avocado Dip. Made from whole-food ingredients, this dip is not only tasty but also packed with nutrients. Perfect for dipping veggies, whole-grain crackers, or spreading on toast, this recipe is a must-try for anyone looking to enhance their vegan cooking repertoire. Visit vegancooking.recipes for more delicious plant-based ideas.',
    image: '/recipe-images/vegan-whole-food-plant-based-spinach-and-avocado-d-1766974168634.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 6,
    difficulty: 'easy',
    category: ["snack"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Fresh spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "washed and chopped"
        },
        {
          "name": "Ripe avocado",
          "amount": "1",
          "unit": "medium",
          "notes": "peeled and pitted"
        },
        {
          "name": "Garlic",
          "amount": "1",
          "unit": "clove",
          "notes": "minced"
        },
        {
          "name": "Lemon juice",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "freshly squeezed"
        },
        {
          "name": "Nutritional yeast",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "adds a cheesy flavor"
        },
        {
          "name": "Tahini",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "optional, for creaminess"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "to taste"
        },
        {
          "name": "Water",
          "amount": "1-2",
          "unit": "tablespoons",
          "notes": "to adjust consistency if needed"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large mixing bowl, combine the chopped spinach, avocado, minced garlic, lemon juice, nutritional yeast, tahini (if using), salt, and black pepper."
        },
        {
          "step": 2,
          "text": "Using a fork or a potato masher, mash the ingredients together until well combined and creamy, leaving some chunks for texture."
        },
        {
          "step": 3,
          "text": "If the dip is too thick, gradually add water one tablespoon at a time, mixing until you reach your desired consistency."
        },
        {
          "step": 4,
          "text": "Taste and adjust the seasoning, adding more salt, pepper, or lemon juice as needed."
        },
        {
          "step": 5,
          "text": "Transfer the dip to a serving bowl and enjoy with fresh vegetable sticks, whole-grain crackers, or spread on whole-grain toast."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "3g",
        "carbs": "10g",
        "fat": "8g",
        "fiber": "4g",
        "sugar": "1g"
      },
    tags: ["vegan","snack","dip","whole-food","plant-based","snack","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Fresh spinach can be substituted with kale or arugula for a different flavor. Nutritional yeast is a great source of B vitamins and adds a cheesy taste, but can be omitted if unavailable.',
    faqs: [
        {
          "question": "Can I make this dip in advance?",
          "answer": "Yes, you can prepare the dip a day ahead. Store it in an airtight container in the refrigerator to keep it fresh. Stir well before serving."
        }
      ],
    tips: ["Use ripe avocados for the best creaminess.","Adjust the garlic based on your preference for a milder or stronger flavor."],
    variations: ["Add chopped sun-dried tomatoes for a tangy twist.","Incorporate fresh herbs like basil or cilantro for added flavor."],
    storage: 'Store any leftover dip in an airtight container in the refrigerator for up to 3 days. The dip may darken slightly due to the avocado, but it remains safe to eat.',
  },
];
