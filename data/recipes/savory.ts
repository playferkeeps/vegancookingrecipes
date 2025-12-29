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
];

