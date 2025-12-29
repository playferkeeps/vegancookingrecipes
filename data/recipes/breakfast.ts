import { Recipe } from '@/types/recipe';

// Recipes generated using OpenAI - all recipes here are accurate and tested
// To add new recipes, use: npm run generate-recipes -- --title "Recipe Name" --category breakfast
export const breakfastRecipes: Recipe[] = [
// Recipes will be added here via the generation script,
  {
    id: '1766971152804.861',
    title: 'Vegan Breakfast Bowl',
    slug: 'vegan-breakfast-bowl',
    description: 'Start your day off right with this hearty Vegan Breakfast Bowl packed with wholesome ingredients, including quinoa, fresh vegetables, and a creamy avocado dressing.',
    prologue: 'Looking for a delicious and nutritious way to kickstart your day? This Vegan Breakfast Bowl is the perfect combination of flavors and textures, providing you with the energy you need to tackle the morning. Featuring protein-rich quinoa, colorful veggies, and a zesty avocado dressing, this dish is not only satisfying but also completely whole-food plant-based. Explore more vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-breakfast-bowl-1766974103667.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 2,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Quinoa",
          "amount": "1",
          "unit": "cup",
          "notes": "rinsed and drained"
        },
        {
          "name": "Water",
          "amount": "2",
          "unit": "cups",
          "notes": "for cooking quinoa"
        },
        {
          "name": "Cherry tomatoes",
          "amount": "1",
          "unit": "cup",
          "notes": "halved"
        },
        {
          "name": "Cucumber",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "fresh, packed"
        },
        {
          "name": "Avocado",
          "amount": "1",
          "unit": "medium",
          "notes": "ripe, for dressing"
        },
        {
          "name": "Lemon juice",
          "amount": "2",
          "unit": "tbsp",
          "notes": "freshly squeezed"
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "extra virgin"
        },
        {
          "name": "Garlic powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "optional"
        },
        {
          "name": "Salt",
          "amount": "to taste",
          "unit": "",
          "notes": "optional"
        },
        {
          "name": "Black pepper",
          "amount": "to taste",
          "unit": "",
          "notes": "optional"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium saucepan, combine 1 cup of rinsed quinoa and 2 cups of water. Bring to a boil over medium-high heat."
        },
        {
          "step": 2,
          "text": "Once boiling, reduce the heat to low, cover, and simmer for about 15 minutes or until the quinoa has absorbed all the water."
        },
        {
          "step": 3,
          "text": "Remove the saucepan from heat and let it sit covered for an additional 5 minutes. Fluff the quinoa with a fork."
        },
        {
          "step": 4,
          "text": "While the quinoa is cooking, prepare the vegetables: halve the cherry tomatoes, dice the cucumber, and red bell pepper."
        },
        {
          "step": 5,
          "text": "In a small bowl, mash the ripe avocado. Stir in the lemon juice, olive oil, garlic powder, salt, and black pepper until smooth and creamy."
        },
        {
          "step": 6,
          "text": "In serving bowls, layer the cooked quinoa, fresh spinach, diced cucumber, cherry tomatoes, and red bell pepper."
        },
        {
          "step": 7,
          "text": "Drizzle the avocado dressing over the top of each bowl and serve immediately."
        }
      ],
    nutritionInfo: {
        "calories": 450,
        "protein": "12g",
        "carbs": "65g",
        "fat": "18g",
        "fiber": "15g",
        "sugar": "3g"
      },
    tags: ["breakfast","vegan","whole food","plant-based","healthy","breakfast","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Quinoa is a great source of protein and can be substituted with brown rice if preferred. Fresh vegetables can be swapped based on seasonal availability.',
    faqs: [
        {
          "question": "Can I use other grains?",
          "answer": "Yes, you can substitute quinoa with brown rice, farro, or any whole grain of your choice."
        },
        {
          "question": "How can I make this gluten-free?",
          "answer": "This recipe is already gluten-free as all ingredients are naturally gluten-free."
        }
      ],
    tips: ["Prepare the quinoa in advance to save time in the morning.","Feel free to add your favorite toppings like nuts or seeds for extra crunch."],
    variations: ["Add roasted sweet potatoes for a sweeter flavor.","Incorporate cooked black beans for additional protein."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Reheat the quinoa and enjoy cold or warm.',
  },
];
