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
  {
    id: '1766990578963.2224',
    title: 'Vegan Vegetable Stir Fry',
    slug: 'vegan-vegetable-stir-fry',
    description: 'A colorful and nutritious vegetable stir fry tossed in a savory sauce, perfect for a quick meal.',
    prologue: 'Discover the vibrant world of plant-based cooking with this delicious Vegan Vegetable Stir Fry. Packed with fresh vegetables and a flavorful sauce, this dish showcases how easy and satisfying vegan meals can be. Perfect for busy weeknights or meal prep, you can whip this up in just a matter of minutes. Visit vegancooking.recipes for more delightful recipes!',
    image: '/recipe-images/vegan-vegetable-stir-fry-1766990580268.webp',
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 4,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Broccoli florets",
          "amount": "2",
          "unit": "cups",
          "notes": "Cut into bite-sized pieces"
        },
        {
          "name": "Bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Sliced (any color)"
        },
        {
          "name": "Carrot",
          "amount": "1",
          "unit": "large",
          "notes": "Julienned or sliced thinly"
        },
        {
          "name": "Snap peas",
          "amount": "1",
          "unit": "cup",
          "notes": "Trimmed"
        },
        {
          "name": "Mushrooms",
          "amount": "8",
          "unit": "oz",
          "notes": "Sliced (preferably shiitake or button)"
        },
        {
          "name": "Garlic",
          "amount": "3",
          "unit": "cloves",
          "notes": "Minced"
        },
        {
          "name": "Ginger",
          "amount": "1",
          "unit": "inch",
          "notes": "Fresh, minced"
        },
        {
          "name": "Soy sauce",
          "amount": "4",
          "unit": "tbsp",
          "notes": "Low-sodium recommended"
        },
        {
          "name": "Sesame oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "For flavor"
        },
        {
          "name": "Cornstarch",
          "amount": "1",
          "unit": "tbsp",
          "notes": "To thicken sauce"
        },
        {
          "name": "Water",
          "amount": "1/4",
          "unit": "cup",
          "notes": "For sauce"
        },
        {
          "name": "Green onions",
          "amount": "2",
          "unit": "stalks",
          "notes": "Chopped, for garnish"
        },
        {
          "name": "Sesame seeds",
          "amount": "1",
          "unit": "tbsp",
          "notes": "For garnish, optional"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Prepare all your vegetables by washing and cutting them as specified."
        },
        {
          "step": 2,
          "text": "In a small bowl, mix together soy sauce, sesame oil, cornstarch, and water to create the sauce. Stir well until the cornstarch is dissolved."
        },
        {
          "step": 3,
          "text": "Heat a large non-stick skillet or wok over medium-high heat."
        },
        {
          "step": 4,
          "text": "Add the minced garlic and ginger to the hot skillet, sautéing for about 30 seconds until fragrant."
        },
        {
          "step": 5,
          "text": "Add the broccoli florets, bell pepper, carrot, snap peas, and mushrooms. Stir-fry for 5-7 minutes, stirring frequently, until the vegetables are tender-crisp."
        },
        {
          "step": 6,
          "text": "Pour the sauce over the stir-fried vegetables. Stir well to coat everything evenly and cook for an additional 2-3 minutes until the sauce thickens."
        },
        {
          "step": 7,
          "text": "Remove from heat and garnish with chopped green onions and sesame seeds if using."
        },
        {
          "step": 8,
          "text": "Serve hot over cooked brown rice or quinoa, if desired."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "5g",
        "carbs": "20g",
        "fat": "6g",
        "fiber": "5g",
        "sugar": "4g"
      },
    tags: ["vegan","stir fry","whole food plant-based","quick meal","healthy","savory","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute any seasonal vegetables you have on hand. For a gluten-free version, use tamari instead of soy sauce.',
    faqs: [
        {
          "question": "Can I use frozen vegetables?",
          "answer": "Yes, frozen vegetables can be used; just add a few extra minutes to the cooking time."
        },
        {
          "question": "What can I serve with stir fry?",
          "answer": "This stir fry pairs well with brown rice, quinoa, or whole grain noodles."
        }
      ],
    tips: ["For an extra kick, add a teaspoon of chili flakes to the sauce.","Make sure to cut your vegetables into similar sizes for even cooking."],
    variations: ["Add tofu or tempeh for added protein.","Use different sauces such as teriyaki or sweet and sour for a different flavor profile."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 3 days. Reheat in a skillet over medium heat until warmed through.',
  },
  {
    id: '1766990954550.6536',
    title: 'Vegan Minestrone',
    slug: 'vegan-minestrone',
    description: 'A hearty, flavorful minestrone soup packed with nutritious vegetables and beans, perfect for a wholesome meal.',
    prologue: 'Discover the joy of cooking with this delicious vegan minestrone recipe, a classic Italian soup that is entirely plant-based. Loaded with seasonal vegetables, hearty beans, and whole grains, this dish is both nutritious and satisfying. Perfect for cozy dinners or meal prep, this recipe from vegancooking.recipes is a must-try for anyone looking to enjoy a wholesome, savory meal.',
    image: '/recipe-images/vegan-minestrone-1766990956260.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 6,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tablespoons",
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
          "notes": "diced"
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
          "name": "Zucchini",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Green beans",
          "amount": "1",
          "unit": "cup",
          "notes": "trimmed and cut into 1-inch pieces"
        },
        {
          "name": "Canned diced tomatoes",
          "amount": "28",
          "unit": "ounces",
          "notes": "with juices"
        },
        {
          "name": "Vegetable broth",
          "amount": "6",
          "unit": "cups",
          "notes": "low-sodium"
        },
        {
          "name": "Canned kidney beans",
          "amount": "15",
          "unit": "ounces",
          "notes": "drained and rinsed"
        },
        {
          "name": "Canned cannellini beans",
          "amount": "15",
          "unit": "ounces",
          "notes": "drained and rinsed"
        },
        {
          "name": "Pasta (small shape)",
          "amount": "1",
          "unit": "cup",
          "notes": "such as ditalini or elbow"
        },
        {
          "name": "Italian seasoning",
          "amount": "2",
          "unit": "teaspoons",
          "notes": "or to taste"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "or to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "or to taste"
        },
        {
          "name": "Fresh basil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "chopped for garnish"
        },
        {
          "name": "Lemon juice",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "optional, for brightness"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat the olive oil over medium heat. Add the diced onion, carrots, and celery. Sauté for about 5 minutes, until the vegetables begin to soften."
        },
        {
          "step": 2,
          "text": "Add the minced garlic to the pot and sauté for an additional 1-2 minutes until fragrant."
        },
        {
          "step": 3,
          "text": "Stir in the diced zucchini and green beans, cooking for another 3 minutes."
        },
        {
          "step": 4,
          "text": "Add the canned diced tomatoes (with their juices), vegetable broth, kidney beans, cannellini beans, and pasta to the pot."
        },
        {
          "step": 5,
          "text": "Season the mixture with Italian seasoning, salt, and pepper. Bring the soup to a boil."
        },
        {
          "step": 6,
          "text": "Once boiling, reduce the heat to low and simmer for about 15-20 minutes, or until the pasta is cooked and the vegetables are tender."
        },
        {
          "step": 7,
          "text": "Taste and adjust seasoning as necessary. If desired, stir in lemon juice for added brightness."
        },
        {
          "step": 8,
          "text": "Ladle the minestrone into bowls and garnish with fresh basil before serving."
        }
      ],
    nutritionInfo: {
        "calories": 250,
        "protein": "12g",
        "carbs": "40g",
        "fat": "7g",
        "fiber": "10g",
        "sugar": "5g"
      },
    tags: ["vegan","soup","Italian","healthy","whole-food-plant-based","savory"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to add or substitute any seasonal vegetables you have on hand. For a gluten-free option, use gluten-free pasta.',
    faqs: [
        {
          "question": "Can I freeze minestrone soup?",
          "answer": "Yes, minestrone soup freezes well. Allow it to cool completely, then store in airtight containers for up to 3 months."
        }
      ],
    tips: ["For extra flavor, add a bay leaf while simmering and remove it before serving.","If the soup thickens too much, simply add more vegetable broth or water to reach your desired consistency."],
    variations: ["Add leafy greens like spinach or kale in the last few minutes of cooking for added nutrients.","Substitute the pasta with quinoa or brown rice for a different texture and flavor."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 5 days. Reheat on the stove or microwave before serving.',
  },
  {
    id: '1766991624781.3635',
    title: 'Vegan Vegetable Stew',
    slug: 'vegan-vegetable-stew',
    description: 'This hearty vegan vegetable stew is packed with flavorful ingredients and is perfect for a cozy meal. It\'s a nourishing, whole-food, plant-based dish that will warm you up from the inside out.',
    prologue: 'If you\'re looking for a comforting and nourishing meal, this vegan vegetable stew is the perfect solution. Made with fresh, whole ingredients, it embodies the essence of plant-based cooking. At vegancooking.recipes, we believe in the power of vegetables to create satisfying and delicious meals that everyone will enjoy. This recipe is not only easy to prepare but also customizable to suit your taste preferences.',
    image: '/recipe-images/vegan-vegetable-stew-1766991626107.webp',
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
          "unit": "tablespoons",
          "notes": "for sautéing"
        },
        {
          "name": "Yellow onion",
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
          "name": "Carrots",
          "amount": "3",
          "unit": "medium",
          "notes": "sliced"
        },
        {
          "name": "Celery",
          "amount": "2",
          "unit": "stalks",
          "notes": "chopped"
        },
        {
          "name": "Potato",
          "amount": "2",
          "unit": "medium",
          "notes": "peeled and diced"
        },
        {
          "name": "Green beans",
          "amount": "1",
          "unit": "cup",
          "notes": "trimmed and cut into 1-inch pieces"
        },
        {
          "name": "Zucchini",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Bell pepper",
          "amount": "1",
          "unit": "large",
          "notes": "diced (any color)"
        },
        {
          "name": "Diced tomatoes",
          "amount": "1",
          "unit": "can",
          "notes": "14.5 oz, with juices"
        },
        {
          "name": "Vegetable broth",
          "amount": "4",
          "unit": "cups",
          "notes": "low-sodium preferred"
        },
        {
          "name": "Bay leaves",
          "amount": "2",
          "unit": "leaves",
          "notes": ""
        },
        {
          "name": "Dried thyme",
          "amount": "1",
          "unit": "teaspoon",
          "notes": ""
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
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
          "text": "In a large pot, heat the olive oil over medium heat."
        },
        {
          "step": 2,
          "text": "Add the diced onion and sauté for about 5 minutes until translucent."
        },
        {
          "step": 3,
          "text": "Stir in the minced garlic and cook for an additional minute until fragrant."
        },
        {
          "step": 4,
          "text": "Add the sliced carrots and chopped celery to the pot, stirring occasionally for about 5 minutes."
        },
        {
          "step": 5,
          "text": "Add the diced potatoes, green beans, zucchini, and bell pepper to the pot."
        },
        {
          "step": 6,
          "text": "Pour in the diced tomatoes along with their juices and the vegetable broth."
        },
        {
          "step": 7,
          "text": "Add the bay leaves, dried thyme, salt, and black pepper to the mixture."
        },
        {
          "step": 8,
          "text": "Bring the stew to a boil, then reduce the heat to low and let it simmer uncovered for about 30 minutes."
        },
        {
          "step": 9,
          "text": "Check the vegetables for tenderness; they should be soft but not mushy."
        },
        {
          "step": 10,
          "text": "Remove the bay leaves before serving. Garnish with fresh parsley and enjoy!"
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "5g",
        "carbs": "34g",
        "fat": "5g",
        "fiber": "7g",
        "sugar": "4g"
      },
    tags: ["vegan","stew","whole-food-plant-based","savory","comfort food"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute any of the vegetables based on seasonal availability or personal preference. For a heartier stew, consider adding lentils or chickpeas.',
    faqs: [
        {
          "question": "Can I freeze vegetable stew?",
          "answer": "Yes, this stew freezes well. Allow it to cool completely before transferring to an airtight container and freezing for up to 3 months."
        },
        {
          "question": "Can I add more spices?",
          "answer": "Absolutely! Feel free to add spices like cumin, paprika, or chili flakes for an extra kick of flavor."
        }
      ],
    tips: ["For even more depth of flavor, try adding a splash of balsamic vinegar before serving.","This stew tastes even better the next day, so consider making it in advance!"],
    variations: ["Add quinoa or barley for added protein and texture.","Incorporate different seasonal vegetables such as squash or kale."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 5 days. Reheat on the stove or in the microwave until warmed through.',
  },
  {
    id: '1766991729075.264',
    title: 'Vegan Lentil Soup',
    slug: 'vegan-lentil-soup',
    description: 'This hearty vegan lentil soup is packed with protein and flavor, making it a perfect meal for any day of the week.',
    prologue: 'Looking for a warm and comforting dish that\'s both nutritious and satisfying? This Vegan Lentil Soup is a whole-food, plant-based recipe that highlights the incredible flavors of lentils and vegetables. Perfect for meal prep or a cozy dinner, this soup is easy to make and deliciously filling. Discover more plant-based recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-lentil-soup-1766991731819.webp',
    prepTime: 15,
    cookTime: 45,
    totalTime: 60,
    servings: 6,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Green or brown lentils",
          "amount": "1",
          "unit": "cup",
          "notes": "Rinsed and drained"
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Optional for sautéing; can use vegetable broth instead for WFPB"
        },
        {
          "name": "Onion",
          "amount": "1",
          "unit": "medium",
          "notes": "Chopped"
        },
        {
          "name": "Carrots",
          "amount": "2",
          "unit": "medium",
          "notes": "Diced"
        },
        {
          "name": "Celery",
          "amount": "2",
          "unit": "stalks",
          "notes": "Diced"
        },
        {
          "name": "Garlic",
          "amount": "4",
          "unit": "cloves",
          "notes": "Minced"
        },
        {
          "name": "Canned diced tomatoes",
          "amount": "14.5",
          "unit": "oz",
          "notes": "With juices"
        },
        {
          "name": "Vegetable broth",
          "amount": "6",
          "unit": "cups",
          "notes": "Low-sodium if preferred"
        },
        {
          "name": "Bay leaves",
          "amount": "2",
          "unit": "leaves",
          "notes": "Dried"
        },
        {
          "name": "Ground cumin",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For flavor"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Adjust to taste"
        },
        {
          "name": "Black pepper",
          "amount": "½",
          "unit": "teaspoon",
          "notes": "Adjust to taste"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "Fresh, roughly chopped"
        },
        {
          "name": "Lemon juice",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Freshly squeezed, to brighten the flavors"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat the olive oil over medium heat. If you prefer a whole-food, plant-based version, skip the oil and use a splash of vegetable broth."
        },
        {
          "step": 2,
          "text": "Add the chopped onion, carrots, and celery to the pot. Sauté for about 5-7 minutes until the vegetables begin to soften."
        },
        {
          "step": 3,
          "text": "Stir in the minced garlic and cook for an additional minute until fragrant."
        },
        {
          "step": 4,
          "text": "Add the rinsed lentils, diced tomatoes (with juices), vegetable broth, bay leaves, cumin, salt, and black pepper to the pot. Stir well to combine."
        },
        {
          "step": 5,
          "text": "Bring the mixture to a boil, then reduce the heat to low. Cover and let it simmer for 30-35 minutes, or until the lentils are tender."
        },
        {
          "step": 6,
          "text": "Remove the bay leaves from the soup. Stir in the chopped spinach and lemon juice, cooking for an additional 5 minutes until the spinach has wilted."
        },
        {
          "step": 7,
          "text": "Taste and adjust seasoning if necessary. Serve warm, garnished with additional lemon juice if desired."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "12g",
        "carbs": "36g",
        "fat": "3g",
        "fiber": "14g",
        "sugar": "4g"
      },
    tags: ["vegan","soup","whole-food plant-based","lentils","healthy","savory","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Lentils are a great source of protein and fiber. You can substitute with red lentils, but they cook faster and will break down more in the soup. Feel free to add other vegetables like bell peppers or zucchini for more variety.',
    faqs: [
        {
          "question": "Can I freeze lentil soup?",
          "answer": "Yes, this lentil soup freezes well. Just let it cool completely before transferring to an airtight container. It can be frozen for up to 3 months."
        },
        {
          "question": "How can I make this soup spicier?",
          "answer": "Add red pepper flakes or diced jalapeños when sautéing the vegetables for an extra kick."
        }
      ],
    tips: ["For added flavor, consider adding fresh herbs like thyme or parsley at the end of cooking.","This soup tastes even better the next day, so consider making it ahead of time for meal prep."],
    variations: ["Add coconut milk for a creamier texture and a hint of sweetness.","Incorporate other legumes like chickpeas for a mixed bean soup."],
    storage: 'Store leftover soup in an airtight container in the refrigerator for up to 5 days. Reheat on the stove or in the microwave.',
  },
  {
    id: '1766991920574.4158',
    title: 'Vegan Potato Casserole',
    slug: 'vegan-potato-casserole',
    description: 'This creamy vegan potato casserole is a comforting delight, packed with flavor and perfect for gatherings.',
    prologue: 'Discover the ultimate comfort food with this Vegan Potato Casserole recipe, perfect for any occasion. Made with wholesome, plant-based ingredients, this dish brings together tender potatoes, savory vegetables, and a rich, creamy sauce. At vegancooking.recipes, we believe that delicious meals can be both satisfying and healthy, so enjoy this savory casserole that\'s easy to prepare and sure to impress your family and friends.',
    image: '/recipe-images/vegan-potato-casserole-1766991921943.webp',
    prepTime: 20,
    cookTime: 45,
    totalTime: 65,
    servings: 6,
    difficulty: 'medium',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Russet potatoes",
          "amount": "4",
          "unit": "large",
          "notes": "peeled and sliced"
        },
        {
          "name": "Onion",
          "amount": "1",
          "unit": "medium",
          "notes": "finely chopped"
        },
        {
          "name": "Garlic",
          "amount": "4",
          "unit": "cloves",
          "notes": "minced"
        },
        {
          "name": "Carrot",
          "amount": "2",
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
          "name": "Nutritional yeast",
          "amount": "1/4",
          "unit": "cup",
          "notes": "adds a cheesy flavor"
        },
        {
          "name": "Unsweetened almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "or any other plant-based milk"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for sautéing"
        },
        {
          "name": "Dried thyme",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
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
          "name": "Vegan cheese",
          "amount": "1",
          "unit": "cup",
          "notes": "optional, for topping"
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
          "text": "Preheat your oven to 375°F (190°C)."
        },
        {
          "step": 2,
          "text": "In a large pot, bring water to a boil. Add the sliced potatoes and cook for about 10 minutes until just tender. Drain and set aside."
        },
        {
          "step": 3,
          "text": "In a large skillet, heat the olive oil over medium heat. Add the chopped onion, diced carrot, and diced celery. Sauté for about 5-7 minutes until the vegetables are softened."
        },
        {
          "step": 4,
          "text": "Add the minced garlic, dried thyme, salt, and pepper to the skillet. Cook for an additional 2 minutes until fragrant."
        },
        {
          "step": 5,
          "text": "In a blender, combine the cooked vegetable mixture, nutritional yeast, and almond milk. Blend until smooth. Adjust seasoning if necessary."
        },
        {
          "step": 6,
          "text": "In a large mixing bowl, combine the cooked potatoes with the creamy vegetable sauce. Stir gently to coat the potatoes evenly."
        },
        {
          "step": 7,
          "text": "Transfer the potato mixture into a greased 9x13 inch baking dish. Spread it out evenly."
        },
        {
          "step": 8,
          "text": "If using, sprinkle the vegan cheese on top of the casserole."
        },
        {
          "step": 9,
          "text": "Cover the baking dish with foil and bake in the preheated oven for 30 minutes."
        },
        {
          "step": 10,
          "text": "Remove the foil and bake for another 15 minutes until the top is golden and bubbly."
        },
        {
          "step": 11,
          "text": "Remove from the oven and let it cool for a few minutes before garnishing with fresh parsley. Serve warm."
        }
      ],
    nutritionInfo: {
        "calories": 250,
        "protein": "6g",
        "carbs": "45g",
        "fat": "7g",
        "fiber": "5g",
        "sugar": "2g"
      },
    tags: ["vegan","casserole","comfort food","whole-food-plant-based","savory"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Russet potatoes are ideal for their creamy texture. You can substitute almond milk with any other plant-based milk. Nutritional yeast provides a cheesy flavor but can be omitted if desired.',
    faqs: [
        {
          "question": "Can I make this casserole ahead of time?",
          "answer": "Yes! You can prepare the casserole a day in advance, cover it, and store it in the refrigerator. Bake it just before serving."
        },
        {
          "question": "Can I freeze the casserole?",
          "answer": "Yes, this casserole freezes well. Just ensure it is cooled completely before freezing. Thaw in the refrigerator overnight before reheating."
        }
      ],
    tips: ["For added flavor, consider adding chopped spinach or kale to the vegetable mixture.","Experiment with different seasonings like smoked paprika or Italian herbs for a unique twist."],
    variations: ["Add cooked lentils or chickpeas for extra protein.","Use sweet potatoes instead of russet potatoes for a sweeter flavor."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 4 days. Reheat in the oven or microwave before serving.',
  },
  {
    id: '1766991972648.9104',
    title: 'Vegan Stuffed Zucchini',
    slug: 'vegan-stuffed-zucchini',
    description: 'Deliciously seasoned quinoa and vegetable filling stuffed into fresh zucchini, baked to perfection for a wholesome, satisfying meal.',
    prologue: 'Stuffed zucchini is a delightful and nutritious dish that combines the freshness of zucchini with a savory filling of quinoa, vegetables, and spices. Perfect for a light lunch or dinner, this whole-food, plant-based recipe is not only easy to prepare but also bursting with flavor. Explore more amazing vegan recipes at vegancooking.recipes and elevate your plant-based cooking today!',
    image: '/recipe-images/vegan-stuffed-zucchini-1766991974042.webp',
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 4,
    difficulty: 'medium',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "medium zucchini",
          "amount": "4",
          "unit": "",
          "notes": "Choose firm zucchinis for best results."
        },
        {
          "name": "quinoa",
          "amount": "1",
          "unit": "cup",
          "notes": "Rinse before cooking."
        },
        {
          "name": "vegetable broth",
          "amount": "2",
          "unit": "cups",
          "notes": "Low-sodium preferred."
        },
        {
          "name": "red bell pepper",
          "amount": "1",
          "unit": "",
          "notes": "Diced."
        },
        {
          "name": "yellow onion",
          "amount": "1",
          "unit": "",
          "notes": "Diced."
        },
        {
          "name": "garlic cloves",
          "amount": "3",
          "unit": "",
          "notes": "Minced."
        },
        {
          "name": "spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "Fresh or frozen, chopped if frozen."
        },
        {
          "name": "ground cumin",
          "amount": "1",
          "unit": "tsp",
          "notes": "For added flavor."
        },
        {
          "name": "smoked paprika",
          "amount": "1",
          "unit": "tsp",
          "notes": "Optional, for smokiness."
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Adjust to taste."
        },
        {
          "name": "black pepper",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "Adjust to taste."
        },
        {
          "name": "nutritional yeast",
          "amount": "2",
          "unit": "tbsp",
          "notes": "For a cheesy flavor."
        },
        {
          "name": "olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "For sautéing."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 375°F (190°C)."
        },
        {
          "step": 2,
          "text": "Rinse the quinoa under cold water and then combine it with the vegetable broth in a medium saucepan."
        },
        {
          "step": 3,
          "text": "Bring the quinoa to a boil over medium-high heat. Once boiling, reduce the heat to low, cover, and simmer for about 15 minutes until the quinoa is cooked and the liquid is absorbed."
        },
        {
          "step": 4,
          "text": "While the quinoa cooks, wash the zucchini and slice them in half lengthwise. Scoop out the insides using a spoon, leaving about 1/4 inch of flesh to create a boat for the filling."
        },
        {
          "step": 5,
          "text": "In a skillet, heat the olive oil over medium heat. Add the diced onion and garlic, sautéing for 3-4 minutes until the onion is translucent."
        },
        {
          "step": 6,
          "text": "Add the diced red bell pepper to the skillet and cook for another 3 minutes. Then add the spinach, cooking until wilted."
        },
        {
          "step": 7,
          "text": "Once the quinoa is ready, fluff it with a fork and add it to the skillet along with ground cumin, smoked paprika, salt, black pepper, and nutritional yeast. Mix well to combine all ingredients."
        },
        {
          "step": 8,
          "text": "Fill each zucchini half with the quinoa mixture, pressing down gently to pack it in."
        },
        {
          "step": 9,
          "text": "Place the stuffed zucchinis on a baking sheet lined with parchment paper and cover them with aluminum foil."
        },
        {
          "step": 10,
          "text": "Bake in the preheated oven for 20 minutes. Remove the foil for the last 10 minutes of baking to allow the tops to brown slightly."
        },
        {
          "step": 11,
          "text": "Remove from the oven and let cool for a few minutes before serving. Enjoy your healthy stuffed zucchinis!"
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "8g",
        "carbs": "38g",
        "fat": "7g",
        "fiber": "6g",
        "sugar": "3g"
      },
    tags: ["vegan","stuffed vegetables","zucchini","whole food plant-based","healthy","savory","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute quinoa with brown rice or couscous for different textures. Feel free to add other veggies like mushrooms or corn based on your preference.',
    faqs: [
        {
          "question": "Can I prepare these stuffed zucchinis in advance?",
          "answer": "Yes! You can prepare the filling and stuff the zucchinis a day ahead. Just cover and refrigerate them until you are ready to bake."
        },
        {
          "question": "What can I serve with stuffed zucchini?",
          "answer": "Stuffed zucchinis pair well with a simple green salad or a side of roasted vegetables."
        }
      ],
    tips: ["Use a melon baller or small spoon to easily scoop out the zucchini flesh without damaging the skin.","Experiment with different spices and herbs to customize the flavor of the filling."],
    variations: ["Add black beans or chickpeas for extra protein and texture.","Top with a sprinkle of vegan cheese before baking for a cheesy finish."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Reheat in the oven or microwave before serving.',
  },
  {
    id: '1766992005759.548',
    title: 'Vegan Tomato Soup',
    slug: 'vegan-tomato-soup',
    description: 'Warm up with this rich and flavorful whole-food plant-based tomato soup, perfect for any season.',
    prologue: 'This Vegan Tomato Soup is a comforting dish that balances the sweetness of ripe tomatoes with the aromatic flavors of fresh herbs and spices. Made entirely from whole food plant-based ingredients, this soup is not only delicious but also nutritious. Perfect for lunch or dinner, this recipe is simple to prepare and a great way to incorporate more veggies into your diet. Discover more amazing vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-tomato-soup-1766992007517.webp',
    prepTime: 10,
    cookTime: 30,
    totalTime: 40,
    servings: 4,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Fresh tomatoes",
          "amount": "2",
          "unit": "pounds",
          "notes": "roughly chopped"
        },
        {
          "name": "Carrot",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
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
          "name": "Vegetable broth",
          "amount": "4",
          "unit": "cups",
          "notes": "low-sodium preferred"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for sautéing"
        },
        {
          "name": "Dried basil",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "or use fresh basil if available"
        },
        {
          "name": "Dried oregano",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "or use fresh oregano if available"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "freshly cracked, to taste"
        },
        {
          "name": "Fresh basil leaves",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat the olive oil over medium heat. Add the diced onion and carrot, and sauté for about 5 minutes until the onion becomes translucent."
        },
        {
          "step": 2,
          "text": "Add the minced garlic to the pot and sauté for another 1-2 minutes until fragrant."
        },
        {
          "step": 3,
          "text": "Stir in the chopped fresh tomatoes, dried basil, oregano, salt, and black pepper. Cook for about 5 minutes, stirring occasionally, until the tomatoes begin to break down."
        },
        {
          "step": 4,
          "text": "Pour in the vegetable broth and bring the mixture to a boil. Once boiling, reduce the heat to low and let it simmer for about 20 minutes."
        },
        {
          "step": 5,
          "text": "After 20 minutes, use an immersion blender to puree the soup until smooth. If you don't have an immersion blender, carefully transfer the soup in batches to a regular blender and blend until smooth."
        },
        {
          "step": 6,
          "text": "Taste and adjust seasoning if necessary. If the soup is too thick, you can add a little more vegetable broth to reach your desired consistency."
        },
        {
          "step": 7,
          "text": "Serve hot, garnished with fresh basil leaves."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "3g",
        "carbs": "22g",
        "fat": "3g",
        "fiber": "5g",
        "sugar": "5g"
      },
    tags: ["soup","vegan","whole-food-plant-based","gluten-free","healthy","savory"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Fresh tomatoes are key for the best flavor. If they\'re out of season, canned tomatoes can be used instead. Opt for low-sodium vegetable broth for a healthier option.',
    faqs: [
        {
          "question": "Can I freeze this tomato soup?",
          "answer": "Yes, you can freeze the soup in airtight containers for up to 3 months. Just thaw and reheat when ready to serve."
        },
        {
          "question": "What can I serve with tomato soup?",
          "answer": "This soup pairs well with a variety of sides, including whole grain bread, a fresh salad, or grilled vegan cheese sandwiches."
        }
      ],
    tips: ["For a creamier texture, you can add a splash of unsweetened plant-based milk after blending.","Add a pinch of red pepper flakes for a spicy kick."],
    variations: ["Add roasted red peppers for a smoky flavor.","Incorporate other vegetables like zucchini or bell peppers for added nutrition."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 5 days. Reheat on the stove or in the microwave before serving.',
  },
  {
    id: '1766992199904.1333',
    title: 'Vegan Potato Curry',
    slug: 'vegan-potato-curry',
    description: 'This hearty vegan potato curry is bursting with flavor and packed with wholesome ingredients, making it a perfect comfort dish for any meal.',
    prologue: 'Discover the rich and aromatic world of vegan cooking with this delicious potato curry recipe. Featuring wholesome ingredients, this dish is not only easy to prepare but also incredibly satisfying. Whether you\'re a seasoned vegan or just exploring plant-based options, this curry will delight your taste buds. Visit vegancooking.recipes for more mouthwatering vegan recipes.',
    image: '/recipe-images/vegan-potato-curry-1766992201165.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: 'medium',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Potatoes",
          "amount": "4",
          "unit": "medium",
          "notes": "peeled and diced"
        },
        {
          "name": "Coconut milk",
          "amount": "1",
          "unit": "can",
          "notes": "full-fat for creaminess"
        },
        {
          "name": "Onion",
          "amount": "1",
          "unit": "large",
          "notes": "finely chopped"
        },
        {
          "name": "Garlic",
          "amount": "3",
          "unit": "cloves",
          "notes": "minced"
        },
        {
          "name": "Ginger",
          "amount": "1",
          "unit": "inch",
          "notes": "fresh, grated"
        },
        {
          "name": "Tomato",
          "amount": "2",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "fresh or frozen"
        },
        {
          "name": "Curry powder",
          "amount": "2",
          "unit": "tbsp",
          "notes": "or to taste"
        },
        {
          "name": "Cumin seeds",
          "amount": "1",
          "unit": "tsp",
          "notes": "for added flavor"
        },
        {
          "name": "Vegetable broth",
          "amount": "1",
          "unit": "cup",
          "notes": "low-sodium preferred"
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for sautéing"
        },
        {
          "name": "Salt",
          "amount": "to taste",
          "unit": "",
          "notes": "adjust based on preference"
        },
        {
          "name": "Black pepper",
          "amount": "to taste",
          "unit": "",
          "notes": "freshly ground"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Heat the olive oil in a large pot over medium heat."
        },
        {
          "step": 2,
          "text": "Add the chopped onion and sauté for about 5 minutes, or until translucent."
        },
        {
          "step": 3,
          "text": "Stir in the minced garlic and grated ginger, cooking for an additional 1-2 minutes until fragrant."
        },
        {
          "step": 4,
          "text": "Add the cumin seeds and curry powder, stirring to coat the onions, garlic, and ginger."
        },
        {
          "step": 5,
          "text": "Incorporate the diced tomatoes and cook for about 3-4 minutes, allowing them to soften."
        },
        {
          "step": 6,
          "text": "Add the diced potatoes and vegetable broth, bringing the mixture to a boil."
        },
        {
          "step": 7,
          "text": "Once boiling, reduce the heat to low, cover the pot, and let it simmer for 15 minutes, or until the potatoes are tender."
        },
        {
          "step": 8,
          "text": "Stir in the coconut milk and spinach, cooking for an additional 5 minutes until the spinach wilts."
        },
        {
          "step": 9,
          "text": "Season with salt and black pepper to taste. Serve hot with rice or bread."
        }
      ],
    nutritionInfo: {
        "calories": 320,
        "protein": "6g",
        "carbs": "45g",
        "fat": "15g",
        "fiber": "7g",
        "sugar": "4g"
      },
    tags: ["vegan","curry","whole-food-plant-based","comfort food","savory"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to swap the potatoes for sweet potatoes for a different twist. You can also add other vegetables such as carrots or peas for added nutrition.',
    faqs: [
        {
          "question": "Can I make this curry spicier?",
          "answer": "Absolutely! You can add more curry powder or include red chili flakes to increase the heat level."
        },
        {
          "question": "Can I store leftovers?",
          "answer": "Yes, store any leftovers in an airtight container in the refrigerator for up to 4 days."
        }
      ],
    tips: ["For added richness, you can use light coconut milk if you prefer a lighter version.","Serve with a side of naan or brown rice for a complete meal."],
    variations: ["Add chickpeas for extra protein and texture.","Substitute the spinach with kale or collard greens."],
    storage: 'Store in an airtight container in the refrigerator for up to 4 days. Reheat on the stovetop or in the microwave until warmed through.',
  },
  {
    id: '1766992670702.7056',
    title: 'Vegan Lentil Curry',
    slug: 'vegan-lentil-curry',
    description: 'A hearty and flavorful lentil curry that\'s packed with protein and spices, perfect for a comforting meal.',
    prologue: 'Discover the delightful flavors of this Vegan Lentil Curry, an excellent option for anyone seeking a nutritious and satisfying meal. This dish features wholesome ingredients that are not only delicious but also completely plant-based, making it perfect for those following a whole-food-plant-based diet. Explore more vegan recipes like this at vegancooking.recipes and elevate your culinary skills today!',
    image: '/recipe-images/vegan-lentil-curry-1766992672632.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: 'medium',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Brown lentils",
          "amount": "1",
          "unit": "cup",
          "notes": "Rinsed and drained"
        },
        {
          "name": "Coconut oil",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "For sautéing"
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
          "name": "Ginger",
          "amount": "1",
          "unit": "inch",
          "notes": "Fresh, grated"
        },
        {
          "name": "Carrot",
          "amount": "1",
          "unit": "large",
          "notes": "Diced"
        },
        {
          "name": "Bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Chopped, any color"
        },
        {
          "name": "Canned diced tomatoes",
          "amount": "1",
          "unit": "14.5 oz can",
          "notes": "No added salt"
        },
        {
          "name": "Coconut milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Full-fat for creaminess"
        },
        {
          "name": "Vegetable broth",
          "amount": "2",
          "unit": "cups",
          "notes": "Low sodium preferred"
        },
        {
          "name": "Curry powder",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Adjust to taste"
        },
        {
          "name": "Turmeric powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For color and health benefits"
        },
        {
          "name": "Cumin powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For depth of flavor"
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
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "Fresh or frozen, chopped"
        },
        {
          "name": "Cilantro",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Chopped, for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat the coconut oil over medium heat. Add the chopped onion and sauté for about 5 minutes until translucent."
        },
        {
          "step": 2,
          "text": "Add the minced garlic and grated ginger to the pot, and continue to sauté for another 1-2 minutes until fragrant."
        },
        {
          "step": 3,
          "text": "Stir in the diced carrot and chopped bell pepper, cooking for an additional 3-4 minutes."
        },
        {
          "step": 4,
          "text": "Add the curry powder, turmeric, and cumin, stirring to coat the vegetables evenly."
        },
        {
          "step": 5,
          "text": "Pour in the canned diced tomatoes, coconut milk, and vegetable broth. Stir well to combine."
        },
        {
          "step": 6,
          "text": "Add the rinsed lentils, salt, and black pepper. Bring the mixture to a boil."
        },
        {
          "step": 7,
          "text": "Once boiling, reduce the heat to low and cover the pot. Let it simmer for 25-30 minutes, or until the lentils are tender."
        },
        {
          "step": 8,
          "text": "In the last few minutes of cooking, stir in the chopped spinach and allow it to wilt."
        },
        {
          "step": 9,
          "text": "Taste and adjust seasoning if necessary. Serve hot, garnished with fresh cilantro."
        }
      ],
    nutritionInfo: {
        "calories": 320,
        "protein": "15g",
        "carbs": "45g",
        "fat": "12g",
        "fiber": "15g",
        "sugar": "5g"
      },
    tags: ["vegan","curry","lentils","whole-food-plant-based","savory"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Brown lentils are preferred for their texture, but green lentils can also be used. If you like it spicier, consider adding red pepper flakes or a chopped chili pepper. You can substitute coconut milk with unsweetened almond milk for a lighter version, but the creaminess will be reduced.',
    faqs: [
        {
          "question": "Can I use other types of lentils?",
          "answer": "Yes, you can use green or red lentils, but cooking times may vary. Red lentils cook faster and will break down more, creating a thicker curry."
        },
        {
          "question": "How can I make this curry spicier?",
          "answer": "You can add more curry powder, include chili powder, or fresh chopped chilies to increase the heat level."
        }
      ],
    tips: ["Serve with brown rice or quinoa for a complete meal.","Make a double batch and freeze leftovers for a quick meal option later."],
    variations: ["Add diced sweet potatoes or butternut squash for extra sweetness and nutrition.","Incorporate chickpeas for added protein and texture."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 5 days. This curry also freezes well; portion into freezer-safe containers and store for up to 3 months.',
  },
  {
    id: '1766993032637.074',
    title: 'Vegan Green Bean Casserole',
    slug: 'vegan-green-bean-casserole',
    description: 'This creamy and savory vegan green bean casserole is a delightful twist on a classic dish, perfect for family gatherings and holiday dinners.',
    prologue: 'Discover the joy of plant-based cooking with this Vegan Green Bean Casserole, featuring tender green beans enveloped in a rich, creamy mushroom sauce, topped with crispy onion rings. This dish is not only hearty but also showcases the vibrant flavors of whole food ingredients. Enjoy a comforting and nutritious meal that everyone will love, as you explore more vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-green-bean-casserole-1766993033901.webp',
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 6,
    difficulty: 'medium',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Fresh green beans",
          "amount": "1",
          "unit": "pound",
          "notes": "trimmed and cut into 1-inch pieces"
        },
        {
          "name": "Mushrooms",
          "amount": "8",
          "unit": "ounces",
          "notes": "sliced"
        },
        {
          "name": "Yellow onion",
          "amount": "1",
          "unit": "medium",
          "notes": "finely chopped"
        },
        {
          "name": "Garlic",
          "amount": "3",
          "unit": "cloves",
          "notes": "minced"
        },
        {
          "name": "Vegetable broth",
          "amount": "1",
          "unit": "cup",
          "notes": "low-sodium preferred"
        },
        {
          "name": "Coconut milk",
          "amount": "1",
          "unit": "cup",
          "notes": "full-fat for creaminess"
        },
        {
          "name": "Nutritional yeast",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for cheesy flavor"
        },
        {
          "name": "Soy sauce",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "or tamari for gluten-free"
        },
        {
          "name": "Cornstarch",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "mixed with 2 tablespoons of water to create a slurry"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "freshly ground"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "adjust to taste"
        },
        {
          "name": "French fried onions",
          "amount": "1",
          "unit": "cup",
          "notes": "store-bought or homemade for topping"
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "for sautéing"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a large pot of boiling water, blanch the green beans for about 5 minutes until bright green and tender-crisp. Drain and rinse under cold water to stop the cooking process. Set aside."
        },
        {
          "step": 3,
          "text": "In a large skillet, heat the olive oil over medium heat. Add the chopped onion and sauté for about 3-4 minutes until translucent."
        },
        {
          "step": 4,
          "text": "Add the sliced mushrooms to the skillet and cook for another 5-7 minutes, stirring occasionally, until the mushrooms are browned and have released their moisture."
        },
        {
          "step": 5,
          "text": "Stir in the minced garlic and cook for 1 more minute until fragrant."
        },
        {
          "step": 6,
          "text": "Pour in the vegetable broth, coconut milk, soy sauce, and nutritional yeast. Stir to combine."
        },
        {
          "step": 7,
          "text": "Add the cornstarch slurry (2 tablespoons of cornstarch mixed with 2 tablespoons of water) to the skillet and stir continuously until the mixture thickens, about 2-3 minutes."
        },
        {
          "step": 8,
          "text": "Season with black pepper and salt. Add the blanched green beans to the skillet and mix until they are evenly coated with the sauce."
        },
        {
          "step": 9,
          "text": "Transfer the green bean mixture to a 9x13-inch baking dish and spread it out evenly."
        },
        {
          "step": 10,
          "text": "Top with the French fried onions, spreading them out evenly over the top."
        },
        {
          "step": 11,
          "text": "Bake in the preheated oven for about 20-25 minutes, or until the onions are golden and the casserole is bubbling."
        },
        {
          "step": 12,
          "text": "Remove from the oven, let it cool for a few minutes, and serve warm."
        }
      ],
    nutritionInfo: {
        "calories": 250,
        "protein": "6g",
        "carbs": "30g",
        "fat": "12g",
        "fiber": "5g",
        "sugar": "3g"
      },
    tags: ["vegan","casserole","green beans","holiday dish","comfort food","savory","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Fresh green beans can be replaced with frozen green beans if necessary, but the texture may differ slightly. For a lower-fat option, you can reduce the coconut milk or substitute with unsweetened almond milk, although the creaminess will be affected.',
    faqs: [
        {
          "question": "Can I make this casserole ahead of time?",
          "answer": "Yes, you can prepare the casserole a day in advance and store it in the refrigerator. Just bake it right before serving."
        },
        {
          "question": "What can I substitute for mushrooms?",
          "answer": "If you're not a fan of mushrooms, you can use diced zucchini or cooked lentils for added texture."
        }
      ],
    tips: ["To make this casserole gluten-free, ensure the soy sauce is gluten-free or use tamari.","For added flavor, consider adding herbs like thyme or rosemary to the sauce."],
    variations: ["Add cooked quinoa for extra protein and texture.","Incorporate other vegetables like carrots or corn for added color and nutrition."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Reheat in the oven or microwave before serving.',
  },
  {
    id: '1767011755597.84',
    title: 'Vegan Chickpea Stew',
    slug: 'vegan-chickpea-stew',
    description: 'A hearty and flavorful chickpea stew packed with vegetables and spices, perfect for a comforting meal.',
    prologue: 'Discover the delightful world of vegan cooking with this wholesome Chickpea Stew recipe from vegancooking.recipes. This nourishing dish combines protein-rich chickpeas with a medley of vegetables and aromatic spices, creating a satisfying meal that’s both filling and nutritious. Ideal for weeknight dinners or meal prep, this stew is a must-try for anyone looking to embrace a whole food plant-based lifestyle.',
    image: '/recipe-images/vegan-chickpea-stew-1767011756885.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for sautéing (optional, can skip for oil-free)"
        },
        {
          "name": "Onion",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Garlic",
          "amount": "3",
          "unit": "cloves",
          "notes": "minced"
        },
        {
          "name": "Carrot",
          "amount": "2",
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
          "name": "Bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced (any color)"
        },
        {
          "name": "Diced tomatoes",
          "amount": "14",
          "unit": "oz",
          "notes": "canned, no salt added"
        },
        {
          "name": "Vegetable broth",
          "amount": "4",
          "unit": "cups",
          "notes": "low-sodium preferred"
        },
        {
          "name": "Canned chickpeas",
          "amount": "15",
          "unit": "oz",
          "notes": "drained and rinsed"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "fresh, chopped"
        },
        {
          "name": "Ground cumin",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "Paprika",
          "amount": "1",
          "unit": "tsp",
          "notes": "smoked or sweet"
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
          "name": "Lemon juice",
          "amount": "2",
          "unit": "tbsp",
          "notes": "freshly squeezed"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat the olive oil over medium heat. If you are making this oil-free, simply skip this step and add the vegetables directly."
        },
        {
          "step": 2,
          "text": "Add the diced onion and sauté for about 3-4 minutes, or until translucent."
        },
        {
          "step": 3,
          "text": "Stir in the minced garlic and cook for another minute, until fragrant."
        },
        {
          "step": 4,
          "text": "Add the diced carrots, celery, and bell pepper to the pot. Cook for about 5-7 minutes, stirring occasionally, until the vegetables start to soften."
        },
        {
          "step": 5,
          "text": "Pour in the diced tomatoes (with their juice) and vegetable broth. Stir to combine."
        },
        {
          "step": 6,
          "text": "Add the drained chickpeas, cumin, paprika, salt, and black pepper. Bring the mixture to a boil."
        },
        {
          "step": 7,
          "text": "Reduce the heat to low and let the stew simmer for about 15-20 minutes, allowing the flavors to meld together."
        },
        {
          "step": 8,
          "text": "Stir in the chopped spinach and let it wilt for about 2-3 minutes."
        },
        {
          "step": 9,
          "text": "Remove from heat and stir in the lemon juice. Taste and adjust seasoning if necessary."
        },
        {
          "step": 10,
          "text": "Serve hot, garnished with fresh herbs if desired."
        }
      ],
    nutritionInfo: {
        "calories": 250,
        "protein": "12g",
        "carbs": "40g",
        "fat": "6g",
        "fiber": "10g",
        "sugar": "6g"
      },
    tags: ["vegan","stew","chickpeas","comfort food","whole food plant-based","savory","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Chickpeas are a great source of protein and fiber. You can substitute canned chickpeas with cooked dried chickpeas if preferred. For a spicier stew, consider adding a pinch of cayenne pepper.',
    faqs: [
        {
          "question": "Can I freeze chickpea stew?",
          "answer": "Yes, this stew freezes well. Allow it to cool completely before transferring to an airtight container. It can be frozen for up to three months."
        },
        {
          "question": "What can I serve with this stew?",
          "answer": "This chickpea stew pairs well with brown rice, quinoa, or a slice of crusty whole grain bread."
        }
      ],
    tips: ["For extra flavor, consider adding a bay leaf while the stew simmers and remove it before serving.","Feel free to customize the vegetables based on what you have on hand, such as zucchini or sweet potatoes."],
    variations: ["Add coconut milk for a creamier texture and a hint of sweetness.","Incorporate different legumes like lentils or black beans for added protein."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 4 days. Reheat on the stove or in the microwave until warmed through.',
  },
  {
    id: '1767012066927.0293',
    title: 'Vegan Minestrone Soup',
    slug: 'vegan-minestrone-soup',
    description: 'A hearty and nutritious vegan minestrone soup packed with vegetables, beans, and whole grains, perfect for any meal.',
    prologue: 'Discover the deliciousness of Vegan Minestrone Soup, a wholesome dish that brings together an array of colorful vegetables, hearty beans, and savory herbs. This recipe is not only completely plant-based but also bursting with flavor, making it a perfect choice for those seeking a healthy and fulfilling meal. Explore more at vegancooking.recipes for additional plant-based dishes that nourish your body and soul.',
    image: '/recipe-images/vegan-minestrone-soup-1767012068193.webp',
    prepTime: 15,
    cookTime: 40,
    totalTime: 55,
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
          "notes": "diced"
        },
        {
          "name": "Celery stalks",
          "amount": "2",
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
          "name": "Zucchini",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Green beans",
          "amount": "1",
          "unit": "cup",
          "notes": "trimmed and cut into 1-inch pieces"
        },
        {
          "name": "Diced tomatoes",
          "amount": "1",
          "unit": "can",
          "notes": "14.5 oz, with juices"
        },
        {
          "name": "Vegetable broth",
          "amount": "4",
          "unit": "cups",
          "notes": "low-sodium"
        },
        {
          "name": "Cannellini beans",
          "amount": "1",
          "unit": "can",
          "notes": "15 oz, drained and rinsed"
        },
        {
          "name": "Pasta (small shape)",
          "amount": "1",
          "unit": "cup",
          "notes": "such as ditalini or elbow"
        },
        {
          "name": "Bay leaf",
          "amount": "1",
          "unit": "leaf",
          "notes": "for flavor"
        },
        {
          "name": "Dried oregano",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
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
          "name": "Fresh basil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "chopped, for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat the olive oil over medium heat. Add the diced onion, carrots, and celery. Sauté for about 5 minutes or until the vegetables are softened."
        },
        {
          "step": 2,
          "text": "Add the minced garlic and sauté for an additional 1-2 minutes until fragrant."
        },
        {
          "step": 3,
          "text": "Stir in the diced zucchini and green beans, cooking for another 3-4 minutes."
        },
        {
          "step": 4,
          "text": "Add the can of diced tomatoes (with juices) and vegetable broth to the pot. Stir to combine."
        },
        {
          "step": 5,
          "text": "Add the cannellini beans, pasta, bay leaf, dried oregano, salt, and black pepper. Bring the mixture to a boil."
        },
        {
          "step": 6,
          "text": "Once boiling, reduce the heat to low and simmer the soup for about 20 minutes, or until the pasta is tender."
        },
        {
          "step": 7,
          "text": "Remove the bay leaf and stir in fresh basil just before serving."
        },
        {
          "step": 8,
          "text": "Serve hot, garnished with additional basil if desired."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "10g",
        "carbs": "35g",
        "fat": "6g",
        "fiber": "10g",
        "sugar": "4g"
      },
    tags: ["vegan","soup","healthy","whole-food","plant-based","savory","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute any vegetables based on what\'s in season or your personal preference. You can use other types of beans such as kidney beans or black beans. For gluten-free options, use gluten-free pasta.',
    faqs: [
        {
          "question": "Can I freeze minestrone soup?",
          "answer": "Yes, minestrone soup freezes well. Allow it to cool completely, then transfer to an airtight container and freeze for up to 3 months."
        },
        {
          "question": "How long does minestrone soup last in the fridge?",
          "answer": "It can last in the fridge for up to 5 days when stored in an airtight container."
        }
      ],
    tips: ["For added flavor, consider adding a splash of balsamic vinegar just before serving.","Serve with a slice of crusty whole-grain bread for a complete meal."],
    variations: ["Add kale or spinach for extra greens.","For a spicier version, add crushed red pepper flakes."],
    storage: 'Store any leftover soup in an airtight container in the refrigerator for up to 5 days. Reheat on the stove or in the microwave until warmed through. For freezing, ensure the soup is completely cooled before transferring to freezer-safe containers.',
  },
  {
    id: '1767013465207.3733',
    title: 'Vegan Broccoli Soup',
    slug: 'vegan-broccoli-soup',
    description: 'This creamy vegan broccoli soup is packed with flavor and nutrition, making it a perfect comforting dish for any season.',
    prologue: 'Looking for a delicious and wholesome vegan soup? This whole-food-plant-based broccoli soup is not only easy to make but also loaded with essential nutrients. Perfect for a quick lunch or dinner, it will satisfy your cravings while keeping it healthy. Discover more vegan recipes at vegancooking.recipes!',
    image: '/recipe-images/vegan-broccoli-soup-1767013466579.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Broccoli florets",
          "amount": "4",
          "unit": "cups",
          "notes": "Fresh or frozen, roughly chopped"
        },
        {
          "name": "Yellow onion",
          "amount": "1",
          "unit": "medium",
          "notes": "Chopped"
        },
        {
          "name": "Garlic cloves",
          "amount": "3",
          "unit": "cloves",
          "notes": "Minced"
        },
        {
          "name": "Vegetable broth",
          "amount": "4",
          "unit": "cups",
          "notes": "Low-sodium recommended"
        },
        {
          "name": "Potato",
          "amount": "1",
          "unit": "large",
          "notes": "Peeled and diced"
        },
        {
          "name": "Nutritional yeast",
          "amount": "1/4",
          "unit": "cup",
          "notes": "For a cheesy flavor"
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Optional, for sautéing"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "To taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Freshly cracked, to taste"
        },
        {
          "name": "Lemon juice",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Freshly squeezed"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat the olive oil over medium heat (optional). If not using oil, you can sauté the onion in a little water."
        },
        {
          "step": 2,
          "text": "Add the chopped onion and cook for about 5 minutes until it becomes translucent."
        },
        {
          "step": 3,
          "text": "Stir in the minced garlic and cook for an additional 1-2 minutes until fragrant."
        },
        {
          "step": 4,
          "text": "Add the diced potato and broccoli florets to the pot, followed by the vegetable broth."
        },
        {
          "step": 5,
          "text": "Bring the mixture to a boil, then reduce the heat and let it simmer for 15-20 minutes until the vegetables are tender."
        },
        {
          "step": 6,
          "text": "Once the vegetables are soft, remove the pot from heat and use an immersion blender to puree the soup until smooth. Alternatively, you can transfer it in batches to a blender."
        },
        {
          "step": 7,
          "text": "Stir in the nutritional yeast, salt, black pepper, and lemon juice. Adjust seasonings to taste."
        },
        {
          "step": 8,
          "text": "Serve hot, garnished with a sprinkle of nutritional yeast or some fresh herbs if desired."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "6g",
        "carbs": "32g",
        "fat": "3g",
        "fiber": "7g",
        "sugar": "2g"
      },
    tags: ["vegan","soup","whole-food-plant-based","broccoli","healthy","savory"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Broccoli is rich in vitamins C and K and can be substituted with cauliflower for a different flavor. Nutritional yeast gives the soup a cheesy flavor without dairy, but can be omitted if you prefer. Feel free to add other vegetables like carrots or spinach for extra nutrition.',
    faqs: [
        {
          "question": "Can I freeze this soup?",
          "answer": "Yes, this soup can be frozen in an airtight container for up to 3 months. Thaw in the refrigerator overnight before reheating."
        },
        {
          "question": "How can I make this soup creamier?",
          "answer": "You can add a cup of unsweetened plant-based milk or blended cashews for a creamier texture."
        }
      ],
    tips: ["Use fresh broccoli for the best flavor and texture.","Adjust the seasoning to your preference, especially the lemon juice for brightness."],
    variations: ["Add cooked quinoa or lentils for added protein.","Top with roasted chickpeas for a crunchy texture."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 4 days. Reheat on the stove or in the microwave before serving.',
  },
  {
    id: '1767018648057.8186',
    title: 'Eggplant Parmesan',
    slug: 'eggplant-parmesan',
    description: 'This Eggplant Parmesan is a deliciously satisfying vegan twist on a classic Italian dish, layered with rich marinara sauce, creamy cashew cheese, and crispy baked eggplant slices.',
    prologue: 'Discover the ultimate comfort food with this vegan Eggplant Parmesan recipe that’s both wholesome and indulgent. Made with fresh ingredients and no animal products, this dish is perfect for anyone looking to enjoy a hearty meal without compromising their dietary choices. At vegancooking.recipes, we believe in creating delicious plant-based dishes that everyone can enjoy, so gather your ingredients and get ready for a culinary adventure!',
    image: '/recipe-images/eggplant-parmesan-1767018649227.webp',
    prepTime: 30,
    cookTime: 45,
    totalTime: 75,
    servings: 4,
    difficulty: 'medium',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Eggplant",
          "amount": "2",
          "unit": "medium",
          "notes": "sliced into 1/4-inch rounds"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "for drawing moisture out of the eggplant"
        },
        {
          "name": "Whole wheat flour",
          "amount": "1",
          "unit": "cup",
          "notes": "for dredging"
        },
        {
          "name": "Unsweetened almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "for batter"
        },
        {
          "name": "Panko breadcrumbs",
          "amount": "1.5",
          "unit": "cups",
          "notes": "for coating"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for drizzling"
        },
        {
          "name": "Marinara sauce",
          "amount": "3",
          "unit": "cups",
          "notes": "store-bought or homemade"
        },
        {
          "name": "Cashews",
          "amount": "1",
          "unit": "cup",
          "notes": "soaked in water for at least 2 hours"
        },
        {
          "name": "Nutritional yeast",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for cheesy flavor"
        },
        {
          "name": "Garlic powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for seasoning"
        },
        {
          "name": "Basil",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "fresh or dried for flavor"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "to taste"
        },
        {
          "name": "Fresh basil leaves",
          "amount": "for garnish",
          "unit": "",
          "notes": "optional"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 400°F (200°C)."
        },
        {
          "step": 2,
          "text": "Slice the eggplants into 1/4-inch rounds and sprinkle with salt. Let them sit for about 20 minutes to draw out moisture."
        },
        {
          "step": 3,
          "text": "Rinse the eggplant slices under cold water and pat them dry with a paper towel."
        },
        {
          "step": 4,
          "text": "Set up a dredging station: place the whole wheat flour in one bowl, almond milk in another, and panko breadcrumbs mixed with garlic powder and black pepper in a third."
        },
        {
          "step": 5,
          "text": "Dip each eggplant slice first into the flour, then the almond milk, and finally coat with panko breadcrumbs."
        },
        {
          "step": 6,
          "text": "Arrange the breaded eggplant slices on a baking sheet lined with parchment paper. Drizzle with olive oil."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 25 minutes, flipping halfway through, until golden brown and crispy."
        },
        {
          "step": 8,
          "text": "While the eggplant is baking, prepare the cashew cheese by blending soaked cashews, nutritional yeast, basil, and a pinch of salt in a high-speed blender until smooth."
        },
        {
          "step": 9,
          "text": "In a baking dish, spread a layer of marinara sauce on the bottom, followed by a layer of baked eggplant, a layer of cashew cheese, and repeat until all ingredients are used, finishing with marinara on top."
        },
        {
          "step": 10,
          "text": "Bake the assembled Eggplant Parmesan in the oven for an additional 15 minutes."
        },
        {
          "step": 11,
          "text": "Let it cool for a few minutes, then garnish with fresh basil leaves before serving."
        }
      ],
    nutritionInfo: {
        "calories": 350,
        "protein": "12g",
        "carbs": "50g",
        "fat": "15g",
        "fiber": "10g",
        "sugar": "8g"
      },
    tags: ["vegan","Italian","comfort food","plant-based","savory","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Eggplants can be bitter, so salting them helps to remove excess moisture and bitterness. You can substitute cashews with sunflower seeds for a nut-free option.',
    faqs: [
        {
          "question": "Can I make this recipe gluten-free?",
          "answer": "Yes, you can use gluten-free flour and gluten-free breadcrumbs to make this Eggplant Parmesan gluten-free."
        },
        {
          "question": "How can I make this dish ahead of time?",
          "answer": "You can assemble the Eggplant Parmesan in advance and store it in the refrigerator for up to 2 days before baking."
        }
      ],
    tips: ["For extra flavor, add Italian seasoning to the panko breadcrumbs.","Serve with a side salad or garlic bread for a complete meal."],
    variations: ["Add layers of sautéed spinach or mushrooms for added nutrition.","Use zucchini or other vegetables in place of eggplant."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 4 days. To reheat, place in the oven at 350°F (175°C) until warmed through.',
  },
  {
    id: '1767018907327.811',
    title: 'Baked Beans',
    slug: 'baked-beans',
    description: 'Deliciously savory and hearty, these baked beans are perfect for a comforting meal or a summer barbecue. Naturally sweetened with maple syrup and packed with protein-rich beans, they are a wholesome addition to any table.',
    prologue: 'Discover the delightful world of vegan cooking with this easy whole-food plant-based Baked Beans recipe from vegancooking.recipes. Made with nutritious ingredients, this dish is not only flavorful but also incredibly satisfying. Whether you\'re serving it as a side dish or a main course, these baked beans will impress everyone at your table.',
    image: '/recipe-images/baked-beans-1767018908878.webp',
    prepTime: 15,
    cookTime: 90,
    totalTime: 105,
    servings: 6,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Dried navy beans",
          "amount": "2",
          "unit": "cups",
          "notes": "Soaked overnight and rinsed"
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
          "name": "Vegetable broth",
          "amount": "4",
          "unit": "cups",
          "notes": "Low-sodium preferred"
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "For natural sweetness"
        },
        {
          "name": "Tomato paste",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Adds depth of flavor"
        },
        {
          "name": "Apple cider vinegar",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "For a tangy kick"
        },
        {
          "name": "Smoked paprika",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For a smoky flavor"
        },
        {
          "name": "Mustard powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Adds a tangy note"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Freshly cracked"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "To taste"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a large pot, cover the soaked navy beans with fresh water and bring to a boil. Cook for about 30 minutes until tender but not mushy. Drain and set aside."
        },
        {
          "step": 3,
          "text": "In the same pot, sauté the chopped onion in a splash of vegetable broth over medium heat until translucent, about 5-7 minutes."
        },
        {
          "step": 4,
          "text": "Add the minced garlic and sauté for another 2 minutes until fragrant."
        },
        {
          "step": 5,
          "text": "Stir in the tomato paste, maple syrup, apple cider vinegar, smoked paprika, mustard powder, black pepper, and salt. Mix well."
        },
        {
          "step": 6,
          "text": "Add the cooked navy beans back into the pot along with the vegetable broth. Stir to combine all ingredients."
        },
        {
          "step": 7,
          "text": "Transfer the mixture to a baking dish and cover with aluminum foil."
        },
        {
          "step": 8,
          "text": "Bake in the preheated oven for 60 minutes, removing the foil for the last 15 minutes to allow for a slight caramelization."
        },
        {
          "step": 9,
          "text": "Remove from the oven and let cool slightly before serving. Enjoy your delicious baked beans!"
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "12g",
        "carbs": "36g",
        "fat": "2g",
        "fiber": "10g",
        "sugar": "6g"
      },
    tags: ["savory","beans","vegan","whole-food-plant-based","comfort food"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Navy beans are ideal for this recipe, but you can substitute with pinto or kidney beans if desired. Ensure that beans are soaked overnight for optimal cooking.',
    faqs: [
        {
          "question": "Can I use canned beans instead?",
          "answer": "Yes, you can use canned beans for a quicker option. Use about 4 cups of canned navy beans, rinsed and drained, and adjust the cooking time accordingly."
        }
      ],
    tips: ["For a spicier flavor, add a pinch of cayenne pepper.","Try adding in some chopped bell peppers for extra veggies."],
    variations: ["Add chopped bell peppers for added sweetness and crunch.","Mix in cooked quinoa for added texture and protein."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 5 days. You can also freeze baked beans for up to 3 months. Reheat on the stovetop or in the microwave before serving.',
  },
  {
    id: '1767019020288.824',
    title: 'Green Bean Casserole',
    slug: 'green-bean-casserole',
    description: 'This delightful Vegan Green Bean Casserole is a creamy, savory dish packed with fresh green beans and topped with crispy onions, making it a perfect side for any occasion.',
    prologue: 'Elevate your holiday table with this Vegan Green Bean Casserole that is not only delicious but also plant-based and wholesome. Packed with whole-food ingredients, this casserole is creamy, savory, and topped with crispy onions for that perfect crunch. Join the movement of delicious vegan cooking with vegancooking.recipes and discover how easy it is to create beautiful plant-based dishes.',
    image: '/recipe-images/green-bean-casserole-1767015269029.webp',
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 6,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Fresh green beans",
          "amount": "1",
          "unit": "pound",
          "notes": "Trimmed and cut into 1-inch pieces"
        },
        {
          "name": "Mushrooms",
          "amount": "8",
          "unit": "ounces",
          "notes": "Sliced (preferably cremini or button)"
        },
        {
          "name": "Onion",
          "amount": "1",
          "unit": "medium",
          "notes": "Diced"
        },
        {
          "name": "Garlic",
          "amount": "3",
          "unit": "cloves",
          "notes": "Minced"
        },
        {
          "name": "Vegetable broth",
          "amount": "1",
          "unit": "cup",
          "notes": "Low sodium preferred"
        },
        {
          "name": "Coconut milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Full-fat for creaminess"
        },
        {
          "name": "Nutritional yeast",
          "amount": "1/4",
          "unit": "cup",
          "notes": "For a cheesy flavor"
        },
        {
          "name": "Soy sauce",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Low sodium preferred"
        },
        {
          "name": "Cornstarch",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "For thickening"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Freshly ground"
        },
        {
          "name": "Salt",
          "amount": "to taste",
          "unit": "none",
          "notes": "Adjust according to preference"
        },
        {
          "name": "Crispy fried onions",
          "amount": "1",
          "unit": "cup",
          "notes": "Store-bought or homemade for topping"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a large pot, bring water to a boil and blanch the green beans for about 3-4 minutes until bright green and tender-crisp. Drain and set aside."
        },
        {
          "step": 3,
          "text": "In a large skillet, sauté the diced onion and sliced mushrooms over medium heat for about 5-7 minutes until the mushrooms are browned and the onions are translucent."
        },
        {
          "step": 4,
          "text": "Add the minced garlic and sauté for an additional 1-2 minutes until fragrant."
        },
        {
          "step": 5,
          "text": "In a bowl, whisk together the vegetable broth, coconut milk, nutritional yeast, soy sauce, cornstarch, black pepper, and salt until smooth."
        },
        {
          "step": 6,
          "text": "Pour the coconut milk mixture over the sautéed mushrooms and onions in the skillet, stirring continuously until the sauce thickens (about 3-5 minutes)."
        },
        {
          "step": 7,
          "text": "Add the blanched green beans to the skillet and mix well, ensuring the beans are coated in the sauce."
        },
        {
          "step": 8,
          "text": "Transfer the mixture to a 9x13-inch baking dish, spreading it evenly."
        },
        {
          "step": 9,
          "text": "Top the casserole with crispy fried onions."
        },
        {
          "step": 10,
          "text": "Bake in the preheated oven for 20 minutes until bubbly and golden on top."
        },
        {
          "step": 11,
          "text": "Let cool for a few minutes before serving."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "5g",
        "carbs": "25g",
        "fat": "7g",
        "fiber": "5g",
        "sugar": "3g"
      },
    tags: ["vegan","whole-food-plant-based","casserole","holiday","sides","savory"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a lower-fat version, you can use unsweetened almond milk instead of coconut milk. Make sure to check the ingredients of the crispy fried onions to ensure they are vegan.',
    faqs: [
        {
          "question": "Can I use frozen green beans?",
          "answer": "Yes, you can use frozen green beans. Just thaw them and drain any excess moisture before adding them to the casserole."
        },
        {
          "question": "How can I make this gluten-free?",
          "answer": "Use tamari instead of soy sauce and ensure the crispy onions are gluten-free."
        }
      ],
    tips: ["For extra flavor, add some fresh thyme or rosemary to the sauce.","You can make the sauce a day in advance and store it in the fridge."],
    variations: ["Add cooked quinoa or brown rice for a heartier dish.","Incorporate other vegetables like carrots or peas for added nutrition."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 3 days. Reheat in the oven at 350°F (175°C) until warm.',
  },
  {
    id: '1767020192901.7498',
    title: 'Vegetable Lasagna',
    slug: 'vegetable-lasagna',
    description: 'This hearty Vegetable Lasagna is packed with a mix of flavorful vegetables and layers of rich tomato sauce, making it a perfect comfort food for any occasion.',
    prologue: 'Explore the wonderful world of plant-based cooking with this delicious Vegetable Lasagna recipe from vegancooking.recipes. This dish is not only satisfying but also nourishing, featuring wholesome ingredients that everyone will love. Whether you\'re a seasoned vegan or just looking to incorporate more plant-based meals into your diet, this lasagna will impress your family and friends alike.',
    image: '/recipe-images/vegetable-lasagna-1767020194301.webp',
    prepTime: 30,
    cookTime: 60,
    totalTime: 90,
    servings: 6,
    difficulty: 'medium',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Lasagna noodles",
          "amount": "9",
          "unit": "sheets",
          "notes": "Use whole grain or gluten-free if desired"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "For sautéing vegetables"
        },
        {
          "name": "Onion",
          "amount": "1",
          "unit": "medium",
          "notes": "Diced"
        },
        {
          "name": "Garlic",
          "amount": "4",
          "unit": "cloves",
          "notes": "Minced"
        },
        {
          "name": "Zucchini",
          "amount": "1",
          "unit": "medium",
          "notes": "Sliced"
        },
        {
          "name": "Bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Diced (any color)"
        },
        {
          "name": "Mushrooms",
          "amount": "8",
          "unit": "oz",
          "notes": "Sliced"
        },
        {
          "name": "Spinach",
          "amount": "3",
          "unit": "cups",
          "notes": "Fresh or frozen (thawed and drained)"
        },
        {
          "name": "Crushed tomatoes",
          "amount": "28",
          "unit": "oz",
          "notes": "Canned"
        },
        {
          "name": "Dried oregano",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "Dried basil",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "tsp",
          "notes": "To taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "To taste"
        },
        {
          "name": "Nutritional yeast",
          "amount": "1/2",
          "unit": "cup",
          "notes": "For a cheesy flavor"
        },
        {
          "name": "Almond milk",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Unsweetened, for creaminess"
        },
        {
          "name": "Fresh basil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Chopped, for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 375°F (190°C)."
        },
        {
          "step": 2,
          "text": "In a large skillet, heat olive oil over medium heat. Add diced onion and minced garlic, sauté until the onion becomes translucent, about 5 minutes."
        },
        {
          "step": 3,
          "text": "Add sliced zucchini, diced bell pepper, and sliced mushrooms to the skillet. Cook for another 5-7 minutes until the vegetables are tender."
        },
        {
          "step": 4,
          "text": "Stir in the spinach, crushed tomatoes, oregano, basil, salt, and black pepper. Let the mixture simmer for about 10 minutes, allowing the flavors to meld."
        },
        {
          "step": 5,
          "text": "In a separate bowl, combine nutritional yeast and almond milk to create a cheesy mixture. Mix well until smooth."
        },
        {
          "step": 6,
          "text": "Spread a thin layer of the vegetable mixture in the bottom of a 9x13 inch baking dish. Place 3 lasagna noodles on top."
        },
        {
          "step": 7,
          "text": "Spread half of the remaining vegetable mixture over the noodles, followed by half of the cheesy mixture. Repeat the layers, finishing with a layer of noodles topped with the remaining vegetable mixture."
        },
        {
          "step": 8,
          "text": "Cover the baking dish with foil and bake for 30 minutes. Remove the foil and bake for an additional 15-20 minutes until the top is bubbly and golden."
        },
        {
          "step": 9,
          "text": "Allow the lasagna to cool for about 10 minutes before slicing. Garnish with fresh basil before serving."
        }
      ],
    nutritionInfo: {
        "calories": 320,
        "protein": "12g",
        "carbs": "45g",
        "fat": "10g",
        "fiber": "8g",
        "sugar": "6g"
      },
    tags: ["vegan","lasagna","savory","whole-food-plant-based","comfort food"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to swap out the vegetables based on your preference or seasonal availability. For a richer flavor, consider adding some sun-dried tomatoes or olives.',
    faqs: [
        {
          "question": "Can I use store-bought pasta sauce instead of crushed tomatoes?",
          "answer": "Yes, you can use store-bought pasta sauce, but check the ingredients to ensure it's vegan and low in added sugars."
        }
      ],
    tips: ["Let the lasagna rest before serving to make slicing easier.","For an extra creamy layer, you can add a layer of vegan ricotta made from blended tofu, lemon juice, and nutritional yeast."],
    variations: ["Add layers of roasted eggplant or butternut squash for more depth of flavor.","Substitute the spinach with kale or arugula for a different green option."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 4 days. You can also freeze portions for up to 3 months; thaw in the refrigerator before reheating.',
  },
  {
    id: '1767020485646.235',
    title: 'Chickpea Stew',
    slug: 'chickpea-stew',
    description: 'This hearty Chickpea Stew is packed with protein, flavorful spices, and wholesome vegetables, making it a comforting dish perfect for any time of year.',
    prologue: 'Chickpea Stew is a delightful and nutritious meal that brings together the goodness of legumes and fresh vegetables in a rich, savory broth. This whole-food plant-based recipe is not only easy to make but also satisfies your taste buds while keeping your health in check. Whether you\'re a seasoned vegan or just starting to explore plant-based cooking, this Chickpea Stew from vegancooking.recipes is sure to become a staple in your kitchen.',
    image: '/recipe-images/chickpea-stew-1767015632853.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tablespoon",
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
          "name": "Carrot",
          "amount": "2",
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
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Canned chickpeas",
          "amount": "2",
          "unit": "cans",
          "notes": "drained and rinsed"
        },
        {
          "name": "Diced tomatoes",
          "amount": "1",
          "unit": "can",
          "notes": "with juices"
        },
        {
          "name": "Vegetable broth",
          "amount": "4",
          "unit": "cups",
          "notes": "low-sodium"
        },
        {
          "name": "Ground cumin",
          "amount": "1",
          "unit": "teaspoon",
          "notes": ""
        },
        {
          "name": "Paprika",
          "amount": "1",
          "unit": "teaspoon",
          "notes": ""
        },
        {
          "name": "Turmeric",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": ""
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "to taste"
        },
        {
          "name": "Fresh spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "chopped"
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
          "text": "In a large pot, heat the olive oil over medium heat. Add the diced onion and sauté for about 5 minutes until translucent."
        },
        {
          "step": 2,
          "text": "Add the minced garlic, diced carrot, celery, and red bell pepper. Sauté for another 5-7 minutes until the vegetables are softened."
        },
        {
          "step": 3,
          "text": "Stir in the ground cumin, paprika, turmeric, salt, and black pepper. Cook for an additional minute to toast the spices."
        },
        {
          "step": 4,
          "text": "Add the drained chickpeas and diced tomatoes (with their juices) to the pot. Stir well to combine."
        },
        {
          "step": 5,
          "text": "Pour in the vegetable broth and bring the mixture to a boil. Reduce the heat and let it simmer for about 15-20 minutes."
        },
        {
          "step": 6,
          "text": "Add the chopped spinach to the stew and cook for another 5 minutes until the spinach is wilted."
        },
        {
          "step": 7,
          "text": "Taste and adjust seasoning with more salt and pepper if needed. Serve hot, garnished with fresh parsley."
        }
      ],
    nutritionInfo: {
        "calories": 320,
        "protein": "16g",
        "carbs": "50g",
        "fat": "8g",
        "fiber": "12g",
        "sugar": "6g"
      },
    tags: ["vegan","stew","chickpeas","whole-food","plant-based","savory","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Chickpeas are a great source of protein and fiber. You can substitute canned chickpeas with cooked dry chickpeas if preferred, just make sure to adjust the cooking time accordingly. Feel free to add any other vegetables you have on hand, such as zucchini or sweet potatoes.',
    faqs: [
        {
          "question": "Can I make this Chickpea Stew in advance?",
          "answer": "Yes, this stew can be made ahead of time and stored in the refrigerator for up to 3 days. The flavors will deepen as it sits."
        },
        {
          "question": "How can I freeze leftovers?",
          "answer": "You can freeze the stew in airtight containers for up to 3 months. Thaw in the refrigerator overnight before reheating."
        }
      ],
    tips: ["Serve with crusty whole-grain bread for a complete meal.","Add a squeeze of lemon juice before serving for a fresh flavor boost."],
    variations: ["Add diced sweet potatoes for extra sweetness and nutrients.","For a spicier kick, include diced jalapeños or red pepper flakes."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days or freeze for up to 3 months.',
  },
  {
    id: '1767020521781.5898',
    title: 'Stuffed Peppers',
    slug: 'stuffed-peppers',
    description: 'These vibrant stuffed peppers are filled with a savory quinoa and black bean mixture, making them a wholesome and satisfying meal. Perfect for a cozy dinner or meal prep!',
    prologue: 'Discover the delightful world of plant-based cooking with this hearty recipe for Stuffed Peppers, featured on vegancooking.recipes. These colorful peppers are not only visually stunning but also packed with nutrition and flavor. Ideal for anyone looking to enjoy a wholesome, vegan meal, this recipe showcases how simple ingredients can come together to create a deliciously satisfying dish.',
    image: '/recipe-images/stuffed-peppers-1767020523060.webp',
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 4,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "bell peppers",
          "amount": "4",
          "unit": "whole",
          "notes": "Choose a variety of colors for a vibrant dish."
        },
        {
          "name": "quinoa",
          "amount": "1",
          "unit": "cup",
          "notes": "Rinse before cooking."
        },
        {
          "name": "black beans",
          "amount": "1",
          "unit": "can",
          "notes": "Drain and rinse."
        },
        {
          "name": "corn",
          "amount": "1",
          "unit": "cup",
          "notes": "Fresh, frozen, or canned."
        },
        {
          "name": "diced tomatoes",
          "amount": "1",
          "unit": "can",
          "notes": "Use fire-roasted for extra flavor."
        },
        {
          "name": "onion",
          "amount": "1",
          "unit": "medium",
          "notes": "Chopped."
        },
        {
          "name": "garlic",
          "amount": "3",
          "unit": "cloves",
          "notes": "Minced."
        },
        {
          "name": "cumin",
          "amount": "1",
          "unit": "tsp",
          "notes": "Ground."
        },
        {
          "name": "chili powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "Optional for heat."
        },
        {
          "name": "salt",
          "amount": "1",
          "unit": "tsp",
          "notes": "Adjust to taste."
        },
        {
          "name": "pepper",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Freshly cracked."
        },
        {
          "name": "fresh cilantro",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Chopped, for garnish."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 375°F (190°C)."
        },
        {
          "step": 2,
          "text": "Rinse the quinoa under cold water. In a medium saucepan, combine 1 cup of rinsed quinoa with 2 cups of water. Bring to a boil, then reduce to a simmer, cover, and cook for 15 minutes or until the water is absorbed. Fluff with a fork."
        },
        {
          "step": 3,
          "text": "While the quinoa is cooking, heat a large skillet over medium heat. Add 1 chopped onion and sauté for about 5 minutes until translucent."
        },
        {
          "step": 4,
          "text": "Add the minced garlic to the skillet and sauté for an additional minute until fragrant."
        },
        {
          "step": 5,
          "text": "Stir in the drained black beans, corn, diced tomatoes (with their juice), cooked quinoa, cumin, chili powder, salt, and pepper. Mix well and let it simmer for 5 minutes."
        },
        {
          "step": 6,
          "text": "While the filling is simmering, prepare the bell peppers. Cut the tops off and remove the seeds and membranes."
        },
        {
          "step": 7,
          "text": "Stuff each bell pepper with the quinoa mixture, packing it tightly. Place the stuffed peppers upright in a baking dish."
        },
        {
          "step": 8,
          "text": "Cover the baking dish with aluminum foil and bake in the preheated oven for 25 minutes."
        },
        {
          "step": 9,
          "text": "Remove the foil and bake for an additional 5-10 minutes, until the peppers are tender."
        },
        {
          "step": 10,
          "text": "Garnish with chopped fresh cilantro before serving. Enjoy!"
        }
      ],
    nutritionInfo: {
        "calories": 320,
        "protein": "12g",
        "carbs": "55g",
        "fat": "5g",
        "fiber": "12g",
        "sugar": "5g"
      },
    tags: ["vegan","gluten-free","healthy","savory","meal prep","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Quinoa can be substituted with brown rice or farro. Black beans can be replaced with lentils or chickpeas if preferred. For extra protein, consider adding diced tofu or tempeh to the mixture.',
    faqs: [
        {
          "question": "Can I make these stuffed peppers ahead of time?",
          "answer": "Yes! You can prepare the filling a day in advance and store it in the refrigerator. Just stuff the peppers and bake them when you're ready to eat."
        },
        {
          "question": "What can I serve with stuffed peppers?",
          "answer": "Stuffed peppers pair well with a side salad, guacamole, or a simple salsa for added flavor."
        }
      ],
    tips: ["For added flavor, roast the bell peppers for 10 minutes before stuffing them.","Feel free to experiment with different vegetables in the filling, such as zucchini or spinach."],
    variations: ["Try adding nutritional yeast for a cheesy flavor.","Use different grains like millet or bulgur for a unique twist."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 4 days. Reheat in the oven or microwave before serving.',
  },
  {
    id: '1767020852390.2932',
    title: 'Stuffed Zucchini',
    slug: 'stuffed-zucchini',
    description: 'Deliciously savory stuffed zucchini filled with a wholesome mixture of quinoa, vegetables, and spices.',
    prologue: 'Stuffed zucchini is a delightful and nutritious dish that showcases the versatility of vegetables in vegan cooking. This recipe features tender zucchini filled with a flavorful quinoa and vegetable mix, making it a perfect main course or side dish for any meal. For more delicious and healthy vegan recipes, visit vegancooking.recipes.',
    image: '/recipe-images/stuffed-zucchini-1767020853642.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Zucchini",
          "amount": "4",
          "unit": "medium",
          "notes": "Choose firm zucchinis for best results."
        },
        {
          "name": "Quinoa",
          "amount": "1",
          "unit": "cup",
          "notes": "Rinse before cooking."
        },
        {
          "name": "Vegetable broth",
          "amount": "2",
          "unit": "cups",
          "notes": "For cooking the quinoa."
        },
        {
          "name": "Bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Finely chopped."
        },
        {
          "name": "Red onion",
          "amount": "1/2",
          "unit": "medium",
          "notes": "Finely chopped."
        },
        {
          "name": "Garlic",
          "amount": "3",
          "unit": "cloves",
          "notes": "Minced."
        },
        {
          "name": "Cherry tomatoes",
          "amount": "1",
          "unit": "cup",
          "notes": "Halved."
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "For sautéing."
        },
        {
          "name": "Italian seasoning",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Or to taste."
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Or to taste."
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "Or to taste."
        },
        {
          "name": "Nutritional yeast",
          "amount": "1/4",
          "unit": "cup",
          "notes": "For cheesy flavor."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 375°F (190°C)."
        },
        {
          "step": 2,
          "text": "Rinse the quinoa under cold water, then combine it with vegetable broth in a medium saucepan. Bring to a boil, then reduce heat to low, cover, and simmer for about 15 minutes or until the quinoa is cooked."
        },
        {
          "step": 3,
          "text": "While the quinoa is cooking, prepare the zucchini. Cut each zucchini in half lengthwise and scoop out the seeds with a spoon, creating a hollow shell for the filling."
        },
        {
          "step": 4,
          "text": "In a large skillet, heat olive oil over medium heat. Add the chopped red onion and bell pepper, sautéing for about 5 minutes until softened."
        },
        {
          "step": 5,
          "text": "Add the minced garlic and halved cherry tomatoes to the skillet. Cook for an additional 3-4 minutes, stirring occasionally."
        },
        {
          "step": 6,
          "text": "Once the quinoa is cooked, fluff it with a fork and add it to the skillet with the sautéed vegetables. Stir in Italian seasoning, salt, black pepper, and nutritional yeast. Mix until well combined."
        },
        {
          "step": 7,
          "text": "Spoon the quinoa and vegetable mixture into the hollowed zucchini halves, packing the filling gently."
        },
        {
          "step": 8,
          "text": "Place the stuffed zucchini halves in a baking dish and cover with aluminum foil. Bake in the preheated oven for 25 minutes."
        },
        {
          "step": 9,
          "text": "Remove the foil and bake for an additional 5-10 minutes, until the zucchini is tender and slightly golden."
        },
        {
          "step": 10,
          "text": "Remove from the oven and let cool for a few minutes before serving. Enjoy your delicious stuffed zucchini!"
        }
      ],
    nutritionInfo: {
        "calories": 280,
        "protein": "10g",
        "carbs": "46g",
        "fat": "8g",
        "fiber": "8g",
        "sugar": "4g"
      },
    tags: ["vegan","whole-food-plant-based","savory","healthy","zucchini"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Zucchini can be substituted with eggplant or bell peppers for different flavors. Quinoa can be replaced with brown rice or farro if preferred.',
    faqs: [
        {
          "question": "Can I make the stuffing ahead of time?",
          "answer": "Yes, you can prepare the quinoa and vegetable mixture a day in advance and store it in the refrigerator. Just stuff the zucchini and bake when ready."
        }
      ],
    tips: ["For added flavor, try adding fresh herbs like basil or parsley to the stuffing.","If you prefer a bit of spice, add crushed red pepper flakes to the vegetable mixture."],
    variations: ["Add black beans or chickpeas to the stuffing for extra protein.","Top the stuffed zucchini with a drizzle of tahini or a vegan cheese sauce before baking."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Reheat in the oven or microwave before serving.',
  },
  {
    id: '1767020957877.5583',
    title: 'White Bean Soup',
    slug: 'white-bean-soup',
    description: 'This creamy and comforting white bean soup is a nourishing meal packed with flavor and nutrients, perfect for any time of the year.',
    prologue: 'Discover the delightful taste of our White Bean Soup, a wholesome and hearty dish that embodies the essence of plant-based cooking. This recipe, available on vegancooking.recipes, showcases the rich flavors of white beans paired with aromatic vegetables and herbs, delivering a satisfying experience in every spoonful. Ideal for both meal prep and cozy dinners, this soup is not only easy to make but also incredibly nutritious.',
    image: '/recipe-images/white-bean-soup-1767020959370.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Dried white beans",
          "amount": "1",
          "unit": "cup",
          "notes": "soaked in water overnight or at least 6 hours"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tablespoons",
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
          "name": "Carrot",
          "amount": "1",
          "unit": "large",
          "notes": "diced"
        },
        {
          "name": "Celery",
          "amount": "2",
          "unit": "stalks",
          "notes": "diced"
        },
        {
          "name": "Vegetable broth",
          "amount": "4",
          "unit": "cups",
          "notes": "low-sodium if preferred"
        },
        {
          "name": "Bay leaves",
          "amount": "2",
          "unit": "leaves",
          "notes": "for flavor"
        },
        {
          "name": "Thyme",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "dried or fresh"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "freshly ground"
        },
        {
          "name": "Lemon juice",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "freshly squeezed"
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
          "text": "Drain and rinse the soaked white beans. Place them in a large pot and cover with fresh water. Bring to a boil, then reduce heat and simmer until the beans are tender, about 30 minutes. Drain and set aside."
        },
        {
          "step": 2,
          "text": "In the same pot, heat the olive oil over medium heat. Add the diced onion, carrot, and celery. Sauté for about 5-7 minutes, or until the vegetables are softened and the onion is translucent."
        },
        {
          "step": 3,
          "text": "Stir in the minced garlic and cook for an additional 1-2 minutes until fragrant."
        },
        {
          "step": 4,
          "text": "Add the cooked white beans, vegetable broth, bay leaves, thyme, salt, and pepper to the pot. Bring the mixture to a boil, then reduce the heat and let it simmer for about 15-20 minutes."
        },
        {
          "step": 5,
          "text": "Remove the bay leaves. For a creamier texture, use an immersion blender to blend some of the soup directly in the pot, or transfer a portion to a blender and blend until smooth. Return to the pot."
        },
        {
          "step": 6,
          "text": "Stir in the lemon juice and adjust seasoning if necessary. Serve hot, garnished with chopped parsley."
        }
      ],
    nutritionInfo: {
        "calories": 200,
        "protein": "10g",
        "carbs": "35g",
        "fat": "5g",
        "fiber": "10g",
        "sugar": "2g"
      },
    tags: ["savory","soup","vegan","whole-food-plant-based","healthy"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Dried white beans can be substituted with canned white beans (2 cans, drained and rinsed) for a quicker version. Adjust the cooking time accordingly if using canned beans.',
    faqs: [
        {
          "question": "Can I freeze this soup?",
          "answer": "Yes, this white bean soup freezes well. Allow it to cool completely, then store in airtight containers for up to 3 months."
        },
        {
          "question": "What can I serve with this soup?",
          "answer": "Serve with crusty whole-grain bread or a fresh salad for a complete meal."
        }
      ],
    tips: ["For added flavor, consider adding smoked paprika or a dash of cayenne pepper.","You can enhance the soup's creaminess by blending in a cup of cooked potatoes or a splash of coconut milk."],
    variations: ["Add chopped kale or spinach for extra nutrients and color.","Incorporate other vegetables like zucchini or bell peppers for variation."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 5 days. Reheat on the stove or in the microwave before serving.',
  },
  {
    id: '1767020994781.7834',
    title: 'Split Pea Soup',
    slug: 'split-pea-soup',
    description: 'This hearty Split Pea Soup is a nourishing and flavorful dish packed with protein and fiber. Perfect for chilly days, it\'s made with simple ingredients and is entirely plant-based.',
    prologue: 'Split Pea Soup is a wholesome and satisfying meal that showcases the incredible versatility of plant-based ingredients. This recipe, featured on vegancooking.recipes, is not only easy to prepare but also rich in nutrients. With its vibrant green color and comforting flavors, this soup is a wonderful addition to any vegan menu. Enjoy a bowl of this delicious soup that warms the soul and delights the taste buds.',
    image: '/recipe-images/split-pea-soup-1767020996071.webp',
    prepTime: 15,
    cookTime: 60,
    totalTime: 75,
    servings: 6,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "green split peas",
          "amount": "1",
          "unit": "cup",
          "notes": "rinsed and drained"
        },
        {
          "name": "carrots",
          "amount": "2",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "celery",
          "amount": "2",
          "unit": "stalks",
          "notes": "diced"
        },
        {
          "name": "onion",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "garlic",
          "amount": "4",
          "unit": "cloves",
          "notes": "minced"
        },
        {
          "name": "vegetable broth",
          "amount": "6",
          "unit": "cups",
          "notes": "low-sodium if preferred"
        },
        {
          "name": "bay leaf",
          "amount": "1",
          "unit": "leaf",
          "notes": "whole"
        },
        {
          "name": "thyme",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "dried"
        },
        {
          "name": "black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "freshly ground"
        },
        {
          "name": "salt",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "adjust to taste"
        },
        {
          "name": "olive oil",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "optional for sautéing"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat olive oil over medium heat (optional). Add diced onion, carrots, and celery, and sauté for about 5-7 minutes until the vegetables soften."
        },
        {
          "step": 2,
          "text": "Add minced garlic and sauté for an additional 1-2 minutes until fragrant."
        },
        {
          "step": 3,
          "text": "Stir in the rinsed split peas, vegetable broth, bay leaf, thyme, black pepper, and salt."
        },
        {
          "step": 4,
          "text": "Bring the mixture to a boil, then reduce the heat to low. Cover the pot and simmer for about 45-50 minutes, or until the split peas are tender."
        },
        {
          "step": 5,
          "text": "Remove the bay leaf and use an immersion blender to puree the soup to your desired consistency. If you prefer a chunkier soup, blend only half."
        },
        {
          "step": 6,
          "text": "Taste and adjust seasoning if necessary. Serve hot, garnished with fresh herbs or a drizzle of olive oil if desired."
        }
      ],
    nutritionInfo: {
        "calories": 210,
        "protein": "12g",
        "carbs": "38g",
        "fat": "1g",
        "fiber": "15g",
        "sugar": "3g"
      },
    tags: ["vegan","soup","healthy","whole-food-plant-based","comfort food","savory"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Green split peas are the star of this recipe, providing a creamy texture when cooked. If unavailable, yellow split peas can be used as a substitute. For a richer flavor, consider adding smoked paprika or liquid smoke.',
    faqs: [
        {
          "question": "Can I freeze Split Pea Soup?",
          "answer": "Yes, Split Pea Soup freezes well. Store it in airtight containers for up to 3 months. Thaw in the refrigerator before reheating."
        },
        {
          "question": "How can I make this soup thicker?",
          "answer": "To thicken the soup, simply blend a portion of it or add more split peas and cook until tender."
        }
      ],
    tips: ["For added depth of flavor, sauté the vegetables longer until they caramelize slightly.","This soup pairs well with crusty whole grain bread."],
    variations: ["Add diced potatoes for a heartier version.","Incorporate kale or spinach for added greens."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 5 days. Reheat on the stovetop or in the microwave before serving.',
  },
  {
    id: '1767021070009.527',
    title: 'Onion Gravy',
    slug: 'onion-gravy',
    description: 'This rich and savory onion gravy is the perfect complement to your favorite vegan dishes, from mashed potatoes to veggie burgers. Made with caramelized onions, it\'s a mouthwatering addition that enhances any meal.',
    prologue: 'If you\'re looking for a versatile and flavorful sauce to elevate your vegan meals, look no further than this onion gravy recipe. Perfect for drizzling over mashed potatoes, lentils, or even veggie burgers, this easy-to-make gravy is entirely plant-based and packed with flavor. At vegancooking.recipes, we believe that every meal should be satisfying, and this gravy is a great way to achieve that deliciousness without any animal products.',
    image: '/recipe-images/onion-gravy-1767021071323.webp',
    prepTime: 10,
    cookTime: 30,
    totalTime: 40,
    servings: 4,
    difficulty: 'easy',
    category: ["savory"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Yellow onion",
          "amount": "2",
          "unit": "medium",
          "notes": "sliced thinly"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for sautéing"
        },
        {
          "name": "Garlic",
          "amount": "3",
          "unit": "cloves",
          "notes": "minced"
        },
        {
          "name": "Vegetable broth",
          "amount": "2",
          "unit": "cups",
          "notes": "low-sodium recommended"
        },
        {
          "name": "Soy sauce",
          "amount": "2",
          "unit": "tbsp",
          "notes": "or tamari for gluten-free"
        },
        {
          "name": "All-purpose flour",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for thickening"
        },
        {
          "name": "Dried thyme",
          "amount": "1",
          "unit": "tsp",
          "notes": "or fresh thyme if available"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "freshly ground"
        },
        {
          "name": "Salt",
          "amount": "to taste",
          "unit": "",
          "notes": "adjust as needed"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Heat the olive oil in a large skillet over medium heat."
        },
        {
          "step": 2,
          "text": "Add the sliced yellow onions and sauté for about 10-15 minutes, stirring occasionally, until they are caramelized and golden brown."
        },
        {
          "step": 3,
          "text": "Add the minced garlic to the skillet and sauté for an additional 1-2 minutes until fragrant."
        },
        {
          "step": 4,
          "text": "Sprinkle the all-purpose flour over the onions and garlic, stirring well to combine and cook for 1-2 minutes."
        },
        {
          "step": 5,
          "text": "Gradually pour in the vegetable broth while constantly stirring to prevent lumps from forming."
        },
        {
          "step": 6,
          "text": "Add the soy sauce, dried thyme, black pepper, and salt. Stir well and bring the mixture to a simmer."
        },
        {
          "step": 7,
          "text": "Let the gravy simmer for about 10-15 minutes, stirring occasionally, until it thickens to your desired consistency."
        },
        {
          "step": 8,
          "text": "Taste and adjust the seasoning with more salt or pepper if needed before serving."
        }
      ],
    nutritionInfo: {
        "calories": 80,
        "protein": "2g",
        "carbs": "10g",
        "fat": "4g",
        "fiber": "1g",
        "sugar": "1g"
      },
    tags: ["vegan","gravy","sauce","whole-food-plant-based","savory"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Yellow onions provide the best flavor for this gravy, but you can substitute with sweet onions if desired. For a gluten-free version, use gluten-free all-purpose flour and tamari instead of soy sauce.',
    faqs: [
        {
          "question": "Can I make this gravy ahead of time?",
          "answer": "Yes, you can prepare the gravy ahead of time and store it in the refrigerator for up to 5 days. Reheat gently on the stove before serving."
        },
        {
          "question": "Can I freeze onion gravy?",
          "answer": "Absolutely! Allow the gravy to cool completely, then transfer it to an airtight container or freezer bag. Freeze for up to 3 months."
        }
      ],
    tips: ["For a richer flavor, consider adding a splash of balsamic vinegar or a teaspoon of maple syrup.","If you like a smoother gravy, you can blend it with an immersion blender after cooking."],
    variations: ["Add sautéed mushrooms for a mushroom onion gravy variation.","Incorporate herbs like rosemary or sage for a different flavor profile."],
    storage: 'Store any leftover gravy in an airtight container in the refrigerator for up to 5 days. Reheat on the stove or in the microwave, adding a splash of water or broth if it thickens too much.',
  },
];

