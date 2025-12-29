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
  {
    id: '1766979720017.234',
    title: 'Vegan Caesar Salad',
    slug: 'vegan-caesar-salad',
    description: 'A creamy, tangy, and crunchy vegan twist on the classic Caesar salad, perfect for a satisfying lunch.',
    prologue: 'Discover a delicious and healthy Vegan Caesar Salad that maintains all the flavor and texture of the traditional dish, but without any animal products. This whole-food plant-based version features a creamy cashew dressing and crisp romaine lettuce, making it a perfect lunch option. For more innovative vegan recipes, visit vegancooking.recipes.',
    image: '/recipe-images/vegan-caesar-salad-1766979721180.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 2,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Romaine lettuce",
          "amount": "1",
          "unit": "head",
          "notes": "Chopped into bite-sized pieces"
        },
        {
          "name": "Cherry tomatoes",
          "amount": "1",
          "unit": "cup",
          "notes": "Halved"
        },
        {
          "name": "Cucumber",
          "amount": "1",
          "unit": "medium",
          "notes": "Sliced"
        },
        {
          "name": "Raw cashews",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Soaked in water for at least 2 hours"
        },
        {
          "name": "Nutritional yeast",
          "amount": "3",
          "unit": "tablespoons",
          "notes": "Adds a cheesy flavor"
        },
        {
          "name": "Lemon juice",
          "amount": "3",
          "unit": "tablespoons",
          "notes": "Freshly squeezed"
        },
        {
          "name": "Garlic",
          "amount": "1",
          "unit": "clove",
          "notes": "Minced"
        },
        {
          "name": "Dijon mustard",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For added tang"
        },
        {
          "name": "Capers",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Drained and chopped"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Extra virgin, for dressing"
        },
        {
          "name": "Salt",
          "amount": "to taste",
          "unit": "",
          "notes": "For seasoning"
        },
        {
          "name": "Black pepper",
          "amount": "to taste",
          "unit": "",
          "notes": "For seasoning"
        },
        {
          "name": "Whole grain croutons",
          "amount": "1",
          "unit": "cup",
          "notes": "Optional, for crunch"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Start by preparing the cashew dressing. Drain and rinse the soaked cashews, then place them in a blender."
        },
        {
          "step": 2,
          "text": "Add nutritional yeast, lemon juice, minced garlic, Dijon mustard, capers, olive oil, and a pinch of salt and pepper to the blender."
        },
        {
          "step": 3,
          "text": "Blend the mixture on high until smooth and creamy. If the dressing is too thick, add a tablespoon of water at a time until you reach your desired consistency."
        },
        {
          "step": 4,
          "text": "In a large bowl, combine the chopped romaine lettuce, halved cherry tomatoes, and sliced cucumber."
        },
        {
          "step": 5,
          "text": "Pour the cashew dressing over the salad and toss gently to combine, ensuring all the ingredients are well coated."
        },
        {
          "step": 6,
          "text": "Taste and adjust seasoning with more salt, pepper, or lemon juice if needed."
        },
        {
          "step": 7,
          "text": "If using, sprinkle whole grain croutons on top just before serving."
        },
        {
          "step": 8,
          "text": "Serve immediately and enjoy your fresh Vegan Caesar Salad!"
        }
      ],
    nutritionInfo: {
        "calories": 350,
        "protein": "12g",
        "carbs": "28g",
        "fat": "24g",
        "fiber": "6g",
        "sugar": "4g"
      },
    tags: ["vegan","salad","lunch","whole-food-plant-based","healthy","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Raw cashews can be substituted with silken tofu for a lower-fat dressing option. Nutritional yeast is key for achieving the cheesy flavor, while capers add a nice briny touch to the dressing.',
    faqs: [
        {
          "question": "Can I make this salad ahead of time?",
          "answer": "Yes, you can prepare the dressing and chop the vegetables ahead of time. Store them separately in airtight containers in the refrigerator for up to 2 days."
        }
      ],
    tips: ["For a spicier kick, add a pinch of cayenne pepper to the dressing.","Experiment with adding roasted chickpeas for extra protein and crunch."],
    variations: ["Add avocado slices for creaminess.","Substitute romaine with kale for a different texture."],
    storage: 'Store leftover salad in an airtight container in the refrigerator for up to 1 day. The dressing can be kept for up to 5 days in the fridge.',
  },
  {
    id: '1766980015228.6262',
    title: 'Vegan Potato Salad',
    slug: 'vegan-potato-salad',
    description: 'This creamy and flavorful vegan potato salad is perfect for lunch or as a picnic side dish. Bursting with fresh herbs and a tangy dressing, it\'s a satisfying and wholesome option.',
    prologue: 'Discover the joys of plant-based cooking with this delicious vegan potato salad recipe from vegancooking.recipes. Packed with wholesome ingredients and vibrant flavors, this salad is not just a side dish; it’s a hearty meal that everyone will enjoy. Perfect for lunch, picnics, or barbecues, this whole-food-plant-based recipe is easy to make and full of nutrients.',
    image: '/recipe-images/vegan-potato-salad-1766980016350.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Yukon Gold potatoes",
          "amount": "2",
          "unit": "lbs",
          "notes": "peeled and diced into 1-inch cubes"
        },
        {
          "name": "Celery",
          "amount": "1",
          "unit": "cup",
          "notes": "finely chopped"
        },
        {
          "name": "Red onion",
          "amount": "1/2",
          "unit": "cup",
          "notes": "finely chopped"
        },
        {
          "name": "Dill pickle",
          "amount": "1/2",
          "unit": "cup",
          "notes": "finely chopped"
        },
        {
          "name": "Fresh dill",
          "amount": "1/4",
          "unit": "cup",
          "notes": "finely chopped"
        },
        {
          "name": "Vegan mayonnaise",
          "amount": "1/3",
          "unit": "cup",
          "notes": "use a whole-food option if preferred"
        },
        {
          "name": "Apple cider vinegar",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for tanginess"
        },
        {
          "name": "Mustard",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Dijon or yellow"
        },
        {
          "name": "Garlic powder",
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
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Bring a large pot of salted water to a boil. Add the diced Yukon Gold potatoes."
        },
        {
          "step": 2,
          "text": "Cook the potatoes for about 10-15 minutes or until they are fork-tender but not mushy."
        },
        {
          "step": 3,
          "text": "Drain the potatoes and let them cool for a few minutes while you prepare the other ingredients."
        },
        {
          "step": 4,
          "text": "In a large mixing bowl, combine the chopped celery, red onion, dill pickle, and fresh dill."
        },
        {
          "step": 5,
          "text": "In a separate small bowl, whisk together the vegan mayonnaise, apple cider vinegar, mustard, garlic powder, salt, and black pepper."
        },
        {
          "step": 6,
          "text": "Add the cooled potatoes to the mixing bowl with the chopped vegetables."
        },
        {
          "step": 7,
          "text": "Pour the dressing over the potato mixture and gently fold everything together until well combined."
        },
        {
          "step": 8,
          "text": "Taste and adjust seasoning as necessary. Chill in the refrigerator for at least 30 minutes to allow the flavors to meld."
        },
        {
          "step": 9,
          "text": "Serve chilled and enjoy your delicious vegan potato salad!"
        }
      ],
    nutritionInfo: {
        "calories": 230,
        "protein": "5g",
        "carbs": "36g",
        "fat": "9g",
        "fiber": "4g",
        "sugar": "2g"
      },
    tags: ["vegan","potato salad","whole-food","lunch","salad","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Yukon Gold potatoes are creamy and flavorful, making them perfect for potato salad. If you prefer a lower-fat option, you can substitute the vegan mayonnaise with a mashed avocado or a cashew cream dressing.',
    faqs: [
        {
          "question": "Can I make this potato salad ahead of time?",
          "answer": "Yes! This potato salad can be made up to a day in advance. Just store it in an airtight container in the refrigerator."
        },
        {
          "question": "What can I add to make it more interesting?",
          "answer": "You can add diced bell peppers, chopped green onions, or even a handful of peas for extra color and flavor."
        }
      ],
    tips: ["Ensure not to overcook the potatoes to avoid a mushy salad.","For more flavor, let the salad sit in the fridge for a few hours or overnight."],
    variations: ["Try adding a teaspoon of smoked paprika for a smoky flavor.","Substitute the dill with fresh parsley or chives for a different herbaceous note."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Stir well before serving.',
  },
  {
    id: '1766980669665.7886',
    title: 'Vegan Whole-Food Plant-Based Sandwich',
    slug: 'vegan-whole-food-plant-based-sandwich',
    description: 'This hearty vegan sandwich is packed with nutritious vegetables, creamy avocado, and flavorful hummus, making it a perfect choice for a satisfying lunch.',
    prologue: 'Looking for a delicious and nutritious lunch option? This Vegan Whole-Food Plant-Based Sandwich is not only easy to prepare but also bursting with flavor and health benefits. Packed with fresh vegetables, creamy avocado, and protein-rich hummus, this sandwich will keep you fueled throughout the day. Explore more vibrant and healthy recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-whole-food-plant-based-sandwich-1766980674430.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 2,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Whole grain bread",
          "amount": "4",
          "unit": "slices",
          "notes": "Choose a bread that is 100% whole grain without added sugars."
        },
        {
          "name": "Hummus",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Store-bought or homemade."
        },
        {
          "name": "Avocado",
          "amount": "1",
          "unit": "medium",
          "notes": "Ripe but firm."
        },
        {
          "name": "Tomato",
          "amount": "1",
          "unit": "large",
          "notes": "Sliced."
        },
        {
          "name": "Cucumber",
          "amount": "1/2",
          "unit": "medium",
          "notes": "Sliced thinly."
        },
        {
          "name": "Spinach leaves",
          "amount": "1",
          "unit": "cup",
          "notes": "Fresh."
        },
        {
          "name": "Red onion",
          "amount": "1/4",
          "unit": "medium",
          "notes": "Thinly sliced."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "To taste."
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "To taste."
        },
        {
          "name": "Lemon juice",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Freshly squeezed."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Start by preparing all your ingredients. Slice the tomato, cucumber, and red onion, and wash the spinach leaves."
        },
        {
          "step": 2,
          "text": "In a small bowl, mash the avocado with the lemon juice, salt, and black pepper until creamy."
        },
        {
          "step": 3,
          "text": "Spread 1/4 cup of hummus on each slice of whole grain bread."
        },
        {
          "step": 4,
          "text": "On two slices of bread, layer the mashed avocado, followed by spinach leaves, tomato slices, cucumber slices, and red onion."
        },
        {
          "step": 5,
          "text": "Top with the remaining slices of bread, hummus side down, to form sandwiches."
        },
        {
          "step": 6,
          "text": "Cut the sandwiches in half and serve immediately."
        }
      ],
    nutritionInfo: {
        "calories": 410,
        "protein": "12g",
        "carbs": "60g",
        "fat": "18g",
        "fiber": "12g",
        "sugar": "3g"
      },
    tags: ["vegan","sandwich","lunch","whole-food","plant-based","healthy","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole grain bread is an excellent source of fiber and nutrients. Hummus can be made from any type of beans, and you can add spices or herbs to customize it. For gluten-free options, use gluten-free bread.',
    faqs: [
        {
          "question": "Can I use a different type of spread instead of hummus?",
          "answer": "Yes, you can substitute hummus with any other plant-based spread like avocado spread or a nut butter."
        }
      ],
    tips: ["For extra protein, add chickpeas or sprouts to the sandwich.","Wrap the sandwich in parchment paper for easy transport if taking it to work or school."],
    variations: ["Add roasted red peppers for a smoky flavor.","Incorporate sliced bell peppers for added crunch and sweetness."],
    storage: 'Store any leftover sandwiches in an airtight container in the refrigerator for up to 1 day. To maintain freshness, it\'s best to assemble the sandwiches just before eating.',
  },
  {
    id: '1766980967262.7268',
    title: 'Vegan Chickpea Salad',
    slug: 'vegan-chickpea-salad',
    description: 'A refreshing and nutritious chickpea salad that bursts with flavor, perfect for a wholesome lunch.',
    prologue: 'Discover the delightful world of vegan cooking with this vibrant Chickpea Salad, a perfect blend of protein-packed chickpeas and fresh vegetables. This whole-food, plant-based recipe is not only easy to prepare but also incredibly satisfying, making it an ideal option for lunch. Explore more delicious vegan recipes at vegancooking.recipes and elevate your plant-based meals!',
    image: '/recipe-images/vegan-chickpea-salad-1766980968727.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "canned chickpeas",
          "amount": "15",
          "unit": "oz",
          "notes": "drained and rinsed"
        },
        {
          "name": "cucumber",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "cherry tomatoes",
          "amount": "1",
          "unit": "cup",
          "notes": "halved"
        },
        {
          "name": "red onion",
          "amount": "1/4",
          "unit": "medium",
          "notes": "finely chopped"
        },
        {
          "name": "bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced (any color)"
        },
        {
          "name": "fresh parsley",
          "amount": "1/4",
          "unit": "cup",
          "notes": "chopped"
        },
        {
          "name": "lemon juice",
          "amount": "3",
          "unit": "tbsp",
          "notes": "freshly squeezed"
        },
        {
          "name": "extra virgin olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "optional but recommended"
        },
        {
          "name": "garlic powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "to taste"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "or to taste"
        },
        {
          "name": "black pepper",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "or to taste"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large mixing bowl, combine the drained and rinsed chickpeas with the diced cucumber, halved cherry tomatoes, finely chopped red onion, and diced bell pepper."
        },
        {
          "step": 2,
          "text": "Add the chopped fresh parsley to the bowl."
        },
        {
          "step": 3,
          "text": "In a small bowl, whisk together the lemon juice, extra virgin olive oil (if using), garlic powder, salt, and black pepper."
        },
        {
          "step": 4,
          "text": "Pour the dressing over the chickpea mixture and toss gently until all ingredients are well combined."
        },
        {
          "step": 5,
          "text": "Taste and adjust seasoning if necessary, adding more salt or pepper to your liking."
        },
        {
          "step": 6,
          "text": "Serve immediately or refrigerate for 30 minutes to allow the flavors to meld."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "10g",
        "carbs": "30g",
        "fat": "8g",
        "fiber": "8g",
        "sugar": "3g"
      },
    tags: ["salad","vegan","healthy","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Canned chickpeas are convenient and quick, but you can also use cooked dried chickpeas for a fresher taste. Feel free to substitute the vegetables based on your preferences, such as adding avocados or carrots.',
    faqs: [
        {
          "question": "Can I make this salad in advance?",
          "answer": "Yes, this salad can be made a day ahead. Just keep it in an airtight container in the refrigerator. However, it's best to add the dressing just before serving to keep the vegetables crisp."
        }
      ],
    tips: ["For added crunch, consider adding chopped nuts or seeds.","Experiment with different herbs like cilantro or basil for a flavor twist."],
    variations: ["Add diced avocado for creaminess.","Include roasted corn for a sweet touch."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. The salad may become slightly softer over time but will still be tasty.',
  },
];
