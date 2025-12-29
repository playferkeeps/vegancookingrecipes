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
  {
    id: '1766979912808.5427',
    title: 'Vegan Bean Stew',
    slug: 'vegan-bean-stew',
    description: 'This hearty vegan bean stew is perfect for a cozy night in. Packed with protein-rich beans and a medley of vegetables, it\'s a nutritious and filling meal.',
    prologue: 'If you\'re searching for a comforting and nutritious meal, look no further than this delicious vegan bean stew. Made with wholesome ingredients, this stew is not only satisfying but also incredibly easy to prepare. Whether you\'re a seasoned vegan or just looking to incorporate more plant-based meals into your diet, this recipe from vegancooking.recipes will warm you from the inside out.',
    image: '/recipe-images/vegan-bean-stew-1766979914167.webp',
    prepTime: 15,
    cookTime: 45,
    totalTime: 60,
    servings: 6,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for sautéing"
        },
        {
          "name": "Yellow onion",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Carrots",
          "amount": "2",
          "unit": "medium",
          "notes": "peeled and diced"
        },
        {
          "name": "Celery",
          "amount": "2",
          "unit": "stalks",
          "notes": "diced"
        },
        {
          "name": "Garlic",
          "amount": "4",
          "unit": "cloves",
          "notes": "minced"
        },
        {
          "name": "Canned diced tomatoes",
          "amount": "28",
          "unit": "oz",
          "notes": "with juices"
        },
        {
          "name": "Vegetable broth",
          "amount": "4",
          "unit": "cups",
          "notes": "low-sodium preferred"
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
          "name": "Canned chickpeas",
          "amount": "15",
          "unit": "oz",
          "notes": "drained and rinsed"
        },
        {
          "name": "Bay leaves",
          "amount": "2",
          "unit": "leaves",
          "notes": "for flavor"
        },
        {
          "name": "Ground cumin",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for seasoning"
        },
        {
          "name": "Smoked paprika",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for depth of flavor"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "tsp",
          "notes": "to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "to taste"
        },
        {
          "name": "Fresh parsley",
          "amount": "1/4",
          "unit": "cup",
          "notes": "chopped, for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat the olive oil over medium heat. Once hot, add the diced onion, carrots, and celery. Sauté for about 5-7 minutes, or until the vegetables are softened."
        },
        {
          "step": 2,
          "text": "Add the minced garlic to the pot and sauté for an additional 1-2 minutes, until fragrant."
        },
        {
          "step": 3,
          "text": "Pour in the canned diced tomatoes with their juices and the vegetable broth. Stir to combine."
        },
        {
          "step": 4,
          "text": "Add the kidney beans, black beans, and chickpeas to the pot. Stir well."
        },
        {
          "step": 5,
          "text": "Add the bay leaves, ground cumin, smoked paprika, salt, and black pepper. Stir to combine."
        },
        {
          "step": 6,
          "text": "Bring the stew to a gentle boil, then reduce the heat to low. Cover and let it simmer for about 30 minutes, stirring occasionally."
        },
        {
          "step": 7,
          "text": "After 30 minutes, taste the stew and adjust the seasoning if necessary. Remove and discard the bay leaves."
        },
        {
          "step": 8,
          "text": "Serve hot, garnished with fresh chopped parsley."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "12g",
        "carbs": "36g",
        "fat": "5g",
        "fiber": "10g",
        "sugar": "4g"
      },
    tags: ["vegan","stew","whole-food","plant-based","savory","savory","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to use any combination of beans you have on hand. You can substitute fresh vegetables for frozen if desired, and add any other vegetables like bell peppers or zucchini for added nutrition.',
    faqs: [
        {
          "question": "Can I make this bean stew in a slow cooker?",
          "answer": "Yes, you can sauté the vegetables in a skillet first, then transfer everything to a slow cooker and cook on low for 6-8 hours."
        },
        {
          "question": "Can I freeze leftovers?",
          "answer": "Absolutely! This stew freezes well. Just let it cool completely before transferring it to an airtight container. It can be frozen for up to 3 months."
        }
      ],
    tips: ["Use low-sodium vegetable broth to control the saltiness of the stew.","For added flavor, consider adding a splash of lemon juice just before serving."],
    variations: ["Add quinoa or brown rice for a heartier meal.","Incorporate different spices like chili powder for a spicier kick."],
    storage: 'Store any leftovers in an airtight container in the fridge for up to 5 days. Reheat on the stove over medium heat or in the microwave until warmed through.',
  },
  {
    id: '1766980410933.059',
    title: 'Vegan Ratatouille',
    slug: 'vegan-ratatouille',
    description: 'A vibrant and hearty dish featuring a medley of fresh vegetables, perfectly seasoned and baked to perfection. This classic French dish is not only delicious but also packed with nutrients.',
    prologue: 'Discover the rich flavors of traditional French cuisine with this Vegan Ratatouille recipe from vegancooking.recipes. This colorful vegetable medley combines eggplant, zucchini, bell peppers, and tomatoes, all simmered together in a fragrant herb-infused sauce. Perfect as a main dish or a side, this ratatouille is a wholesome addition to your plant-based repertoire, showcasing the beauty of seasonal vegetables.',
    image: '/recipe-images/vegan-ratatouille-1766980412085.webp',
    prepTime: 20,
    cookTime: 45,
    totalTime: 65,
    servings: 4,
    difficulty: 'medium',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Eggplant",
          "amount": "1",
          "unit": "medium",
          "notes": "Cut into 1/2-inch cubes"
        },
        {
          "name": "Zucchini",
          "amount": "2",
          "unit": "medium",
          "notes": "Sliced into thin rounds"
        },
        {
          "name": "Yellow squash",
          "amount": "1",
          "unit": "medium",
          "notes": "Sliced into thin rounds"
        },
        {
          "name": "Bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Diced (any color)"
        },
        {
          "name": "Onion",
          "amount": "1",
          "unit": "medium",
          "notes": "Chopped"
        },
        {
          "name": "Garlic",
          "amount": "4",
          "unit": "cloves",
          "notes": "Minced"
        },
        {
          "name": "Tomatoes",
          "amount": "4",
          "unit": "medium",
          "notes": "Chopped (or 1 can of diced tomatoes)"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "For sautéing"
        },
        {
          "name": "Fresh basil",
          "amount": "1",
          "unit": "cup",
          "notes": "Chopped (or 2 tsp dried)"
        },
        {
          "name": "Fresh thyme",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Chopped (or 1 tsp dried)"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Adjust to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Freshly ground"
        },
        {
          "name": "Balsamic vinegar",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Optional for extra flavor"
        },
        {
          "name": "Vegetable broth",
          "amount": "1",
          "unit": "cup",
          "notes": "Low-sodium preferred"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 375°F (190°C)."
        },
        {
          "step": 2,
          "text": "In a large skillet, heat the olive oil over medium heat. Add the chopped onion and sauté for about 5 minutes, or until translucent."
        },
        {
          "step": 3,
          "text": "Add the minced garlic and diced bell pepper to the skillet. Sauté for an additional 3-4 minutes until the bell pepper softens."
        },
        {
          "step": 4,
          "text": "Stir in the chopped tomatoes and cook for another 5 minutes, allowing the mixture to thicken slightly."
        },
        {
          "step": 5,
          "text": "Add the cubed eggplant, zucchini, and yellow squash to the skillet. Mix well to combine."
        },
        {
          "step": 6,
          "text": "Season with salt, black pepper, fresh basil, fresh thyme, and optional balsamic vinegar. Pour in the vegetable broth and stir everything together."
        },
        {
          "step": 7,
          "text": "Transfer the vegetable mixture to a large baking dish, spreading it out evenly."
        },
        {
          "step": 8,
          "text": "Cover the dish with aluminum foil and bake in the preheated oven for 25 minutes."
        },
        {
          "step": 9,
          "text": "After 25 minutes, remove the foil and continue baking for another 15-20 minutes, or until the vegetables are tender and slightly caramelized."
        },
        {
          "step": 10,
          "text": "Remove from the oven and let it cool for a few minutes before serving. Garnish with additional fresh basil if desired."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "4g",
        "carbs": "20g",
        "fat": "7g",
        "fiber": "6g",
        "sugar": "5g"
      },
    tags: ["vegan","whole-food-plant-based","savory","French cuisine","vegetable dish"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Eggplant can be bitter; salting it before cooking can help reduce bitterness. Use fresh herbs when possible for the best flavor, but dried herbs can be a great substitute. You can also add more vegetables like mushrooms or carrots for variation.',
    faqs: [
        {
          "question": "Can I make this dish ahead of time?",
          "answer": "Yes, ratatouille can be made ahead of time and stored in the refrigerator for up to 3 days. Reheat before serving."
        },
        {
          "question": "Is ratatouille gluten-free?",
          "answer": "Yes, this recipe is naturally gluten-free. Always check your vegetable broth to ensure it's gluten-free."
        }
      ],
    tips: ["For a deeper flavor, try roasting the vegetables instead of baking them.","Serve ratatouille over quinoa or whole grain pasta for a more filling meal."],
    variations: ["Add chickpeas for extra protein and texture.","Top with nutritional yeast for a cheesy flavor without dairy."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. You can also freeze ratatouille for up to 2 months. Thaw in the refrigerator overnight before reheating.',
  },
];

