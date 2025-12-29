import { Recipe } from '@/types/recipe';

// Recipes generated using OpenAI - all recipes here are accurate and tested
// To add new recipes, use: npm run generate-recipes -- --title "Recipe Name" --category lunch
export const lunchRecipes: Recipe[] = [
// Recipes will be added here via the generation script,
  {
    id: '1766971116156.8057',
    title: 'Vegan Chili',
    slug: 'vegan-chili',
    description: 'This hearty vegan chili is a comforting blend of beans, vegetables, and spices, perfect for a satisfying lunch.',
    prologue: 'Discover the rich flavors of this vegan chili that uses whole food plant-based ingredients to create a nutritious and delicious meal. Packed with protein and fiber, this chili is not only satisfying but also incredibly easy to make. Perfect for meal prep or a quick lunch, this recipe is a must-try for any vegan cooking enthusiast. Visit vegancooking.recipes for more delightful vegan recipes.',
    image: '/recipe-images/vegan-chili-1766974118550.webp',
    prepTime: 15,
    cookTime: 45,
    totalTime: 60,
    servings: 6,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for sautéing"
        },
        {
          "name": "Onion",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Garlic",
          "amount": "4",
          "unit": "cloves",
          "notes": "minced"
        },
        {
          "name": "Bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced (any color)"
        },
        {
          "name": "Carrot",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Celery",
          "amount": "2",
          "unit": "stalks",
          "notes": "diced"
        },
        {
          "name": "Canned diced tomatoes",
          "amount": "28",
          "unit": "oz",
          "notes": "with juices"
        },
        {
          "name": "Canned kidney beans",
          "amount": "15",
          "unit": "oz",
          "notes": "drained and rinsed"
        },
        {
          "name": "Canned black beans",
          "amount": "15",
          "unit": "oz",
          "notes": "drained and rinsed"
        },
        {
          "name": "Vegetable broth",
          "amount": "2",
          "unit": "cups",
          "notes": "low sodium"
        },
        {
          "name": "Chili powder",
          "amount": "2",
          "unit": "tbsp",
          "notes": "adjust to taste"
        },
        {
          "name": "Cumin",
          "amount": "1",
          "unit": "tbsp",
          "notes": "ground"
        },
        {
          "name": "Smoked paprika",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for smoky flavor"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "tsp",
          "notes": "adjust to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "freshly ground"
        },
        {
          "name": "Fresh cilantro",
          "amount": "1/4",
          "unit": "cup",
          "notes": "chopped, for garnish"
        },
        {
          "name": "Lime",
          "amount": "1",
          "unit": "medium",
          "notes": "juiced, for serving"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat the olive oil over medium heat. Add the diced onion and sauté for about 5 minutes until translucent."
        },
        {
          "step": 2,
          "text": "Add the minced garlic, diced bell pepper, carrot, and celery to the pot. Cook for an additional 5-7 minutes, stirring occasionally, until the vegetables have softened."
        },
        {
          "step": 3,
          "text": "Stir in the canned diced tomatoes (with juices), drained kidney beans, drained black beans, and vegetable broth."
        },
        {
          "step": 4,
          "text": "Add the chili powder, cumin, smoked paprika, salt, and black pepper. Stir well to combine all ingredients."
        },
        {
          "step": 5,
          "text": "Bring the mixture to a boil, then reduce the heat to low. Cover and let simmer for 30 minutes, stirring occasionally."
        },
        {
          "step": 6,
          "text": "After simmering, taste and adjust seasoning if necessary. If you prefer a thicker chili, let it simmer uncovered for an additional 10 minutes."
        },
        {
          "step": 7,
          "text": "Serve hot, garnished with fresh cilantro and a squeeze of lime juice."
        }
      ],
    nutritionInfo: {
        "calories": 280,
        "protein": "15g",
        "carbs": "45g",
        "fat": "6g",
        "fiber": "12g",
        "sugar": "6g"
      },
    tags: ["vegan","chili","whole-food-plant-based","lunch","healthy","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute the beans with any other varieties you prefer, such as pinto beans or lentils. You can also add more vegetables like zucchini or corn for extra flavor and nutrition.',
    faqs: [
        {
          "question": "Can I freeze the chili?",
          "answer": "Yes, this chili freezes well. Let it cool completely before transferring it to an airtight container or freezer bag. It can be stored in the freezer for up to 3 months."
        },
        {
          "question": "Is this chili spicy?",
          "answer": "The spice level can be adjusted by adding more or less chili powder. For extra heat, consider adding diced jalapeños or a dash of hot sauce."
        }
      ],
    tips: ["For a creamier texture, blend a portion of the chili with an immersion blender before serving.","Serve with whole grain bread or over brown rice for a complete meal."],
    variations: ["Add quinoa or millet for added protein and texture.","Top with avocado slices or dairy-free yogurt for creaminess."],
    storage: 'Store leftover chili in an airtight container in the refrigerator for up to 5 days. Reheat on the stove or in the microwave until warmed through.',
  },
];
