import { Recipe } from '@/types/recipe';

// Recipes generated using OpenAI - all recipes here are accurate and tested
// To add new recipes, use: npm run generate-recipes -- --title "Recipe Name" --category savory
export const savoryRecipes: Recipe[] = [
// Recipes will be added here via the generation script,
  {
    id: '1766971135585.0215',
    title: 'Vegan Roasted Vegetables',
    slug: 'vegan-roasted-vegetables',
    description: 'A colorful medley of roasted vegetables that are perfectly seasoned and bursting with flavor. This dish makes a wonderful side or a hearty addition to any meal.',
    prologue: 'Discover the art of roasting with this simple yet delicious vegan roasted vegetables recipe on vegancooking.recipes. Roasting brings out the natural sweetness of vegetables, making them a fantastic addition to salads, grain bowls, or enjoyed on their own. Packed with nutrients and flavor, this recipe is perfect for those looking to embrace whole-food, plant-based eating.',
    image: '/recipe-images/vegan-roasted-vegetables-1766974092058.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Carrots",
          "amount": "2",
          "unit": "medium",
          "notes": "peeled and sliced into 1-inch pieces"
        },
        {
          "name": "Zucchini",
          "amount": "1",
          "unit": "medium",
          "notes": "sliced into half-moons"
        },
        {
          "name": "Red Bell Pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "seeded and chopped into bite-sized pieces"
        },
        {
          "name": "Red Onion",
          "amount": "1",
          "unit": "medium",
          "notes": "cut into wedges"
        },
        {
          "name": "Brussels Sprouts",
          "amount": "1",
          "unit": "pound",
          "notes": "trimmed and halved"
        },
        {
          "name": "Olive Oil",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for drizzling"
        },
        {
          "name": "Garlic Powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for seasoning"
        },
        {
          "name": "Dried Oregano",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for seasoning"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "to taste"
        },
        {
          "name": "Black Pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "to taste"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 425°F (220°C)."
        },
        {
          "step": 2,
          "text": "Prepare all your vegetables: peel and slice the carrots, slice the zucchini into half-moons, chop the red bell pepper, cut the red onion into wedges, and trim and halve the Brussels sprouts."
        },
        {
          "step": 3,
          "text": "In a large mixing bowl, combine all the prepared vegetables."
        },
        {
          "step": 4,
          "text": "Drizzle the olive oil over the vegetables and sprinkle with garlic powder, dried oregano, salt, and black pepper."
        },
        {
          "step": 5,
          "text": "Toss the vegetables until they are evenly coated with the oil and seasonings."
        },
        {
          "step": 6,
          "text": "Spread the vegetables in a single layer on a large baking sheet lined with parchment paper."
        },
        {
          "step": 7,
          "text": "Roast in the preheated oven for about 25-30 minutes, or until the vegetables are tender and slightly caramelized, stirring halfway through."
        },
        {
          "step": 8,
          "text": "Once done, remove from the oven and let cool slightly before serving."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "4g",
        "carbs": "28g",
        "fat": "5g",
        "fiber": "7g",
        "sugar": "5g"
      },
    tags: ["vegan","whole-food-plant-based","roasted vegetables","healthy","savory","savory","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to swap out any of the vegetables for your favorites. Sweet potatoes, cauliflower, or asparagus also work well. For oil-free options, you can use vegetable broth or water to toss the vegetables.',
    faqs: [
        {
          "question": "Can I use frozen vegetables?",
          "answer": "Yes, you can use frozen vegetables, but they may require a longer roasting time and may not get as crispy as fresh vegetables."
        },
        {
          "question": "What can I serve roasted vegetables with?",
          "answer": "Roasted vegetables pair well with quinoa, rice, or can be added to salads and wraps for extra flavor."
        }
      ],
    tips: ["Cut the vegetables into similar sizes for even cooking.","Try adding fresh herbs like rosemary or thyme for an extra flavor boost."],
    variations: ["Add cherry tomatoes for a burst of sweetness.","Include cubed tofu or chickpeas for added protein."],
    storage: 'Store any leftover roasted vegetables in an airtight container in the refrigerator for up to 3 days. Reheat in the oven or microwave before serving.',
  },
];

