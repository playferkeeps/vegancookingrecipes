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
  {
    id: '1766991656610.241',
    title: 'Vegan Whole-Food Plant-Based Vegetable Soup',
    slug: 'vegan-whole-food-plant-based-vegetable-soup',
    description: 'A hearty and nourishing vegetable soup packed with wholesome ingredients, perfect for a fulfilling lunch.',
    prologue: 'This Vegan Whole-Food Plant-Based Vegetable Soup is a delightful way to enjoy a variety of vegetables in a single bowl. With a rich blend of flavors and textures, this soup is not only comforting but also incredibly healthy and satisfying. Perfect for meal prep or a quick lunch at home, you can easily whip it up in under an hour. Discover more amazing vegan recipes at vegancooking.recipes!',
    image: '/recipe-images/vegan-whole-food-plant-based-vegetable-soup-1766991658628.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
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
          "notes": "sliced"
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
          "name": "Bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced (any color)"
        },
        {
          "name": "Diced tomatoes",
          "amount": "1",
          "unit": "can",
          "notes": "14.5 oz, no added salt"
        },
        {
          "name": "Vegetable broth",
          "amount": "4",
          "unit": "cups",
          "notes": "low-sodium preferred"
        },
        {
          "name": "Kale",
          "amount": "2",
          "unit": "cups",
          "notes": "chopped, stems removed"
        },
        {
          "name": "Bay leaves",
          "amount": "2",
          "unit": "leaves",
          "notes": "for flavor"
        },
        {
          "name": "Dried thyme",
          "amount": "1",
          "unit": "tsp",
          "notes": "or 1 tbsp fresh thyme"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "to taste"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "to taste"
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "optional for sautéing"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot, heat the olive oil over medium heat. If you're following a whole-food, plant-based diet, you can skip the oil and use a splash of vegetable broth instead."
        },
        {
          "step": 2,
          "text": "Add the diced onion, carrots, and celery to the pot. Sauté for about 5 minutes, until the vegetables are softened."
        },
        {
          "step": 3,
          "text": "Stir in the minced garlic and cook for another 1-2 minutes until fragrant."
        },
        {
          "step": 4,
          "text": "Add the diced zucchini and bell pepper to the pot. Stir well and cook for an additional 5 minutes."
        },
        {
          "step": 5,
          "text": "Pour in the diced tomatoes (with their juice) and the vegetable broth. Stir to combine."
        },
        {
          "step": 6,
          "text": "Add the chopped kale, bay leaves, dried thyme, black pepper, and salt. Stir everything together."
        },
        {
          "step": 7,
          "text": "Bring the soup to a boil, then reduce the heat to low and let it simmer for about 20 minutes, or until all vegetables are tender."
        },
        {
          "step": 8,
          "text": "Remove the bay leaves before serving. Taste and adjust seasoning if necessary."
        },
        {
          "step": 9,
          "text": "Serve hot, optionally garnished with fresh herbs or a squeeze of lemon juice."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "5g",
        "carbs": "30g",
        "fat": "2g",
        "fiber": "8g",
        "sugar": "6g"
      },
    tags: ["vegan","soup","whole-food","plant-based","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute any vegetables based on your preference or seasonal availability. For a spicier kick, add some red pepper flakes or a dash of hot sauce.',
    faqs: [
        {
          "question": "Can I freeze this soup?",
          "answer": "Yes, this soup freezes well. Allow it to cool completely before transferring to an airtight container and store in the freezer for up to 3 months."
        },
        {
          "question": "What can I serve with this soup?",
          "answer": "This soup pairs beautifully with whole grain bread, a side salad, or over a bed of cooked quinoa for a more filling meal."
        }
      ],
    tips: ["Make it a day in advance for the flavors to meld together even more.","Add a splash of lemon juice just before serving for a bright flavor boost."],
    variations: ["Add lentils or chickpeas for extra protein.","Substitute sweet potatoes for the regular potatoes for a sweeter flavor."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 4 days. Reheat on the stovetop or in the microwave before serving.',
  },
  {
    id: '1766992101297.3276',
    title: 'Vegan Cobb Salad',
    slug: 'vegan-cobb-salad',
    description: 'A hearty and colorful vegan Cobb salad loaded with fresh vegetables, protein-rich chickpeas, and a zesty dressing.',
    prologue: 'Discover a delicious twist on a classic Cobb salad with this vegan version that is both satisfying and nutritious. Packed with whole foods and vibrant flavors, this salad is perfect for lunch or a light dinner. At vegancooking.recipes, we believe in using wholesome ingredients to create meals that nourish the body and delight the palate.',
    image: '/recipe-images/vegan-cobb-salad-1766992102499.webp',
    prepTime: 20,
    cookTime: 20,
    totalTime: 40,
    servings: 4,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Romaine lettuce",
          "amount": "4",
          "unit": "cups",
          "notes": "chopped into bite-sized pieces"
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
          "name": "Avocado",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Cooked chickpeas",
          "amount": "1",
          "unit": "cup",
          "notes": "can be canned or boiled from dry"
        },
        {
          "name": "Red onion",
          "amount": "1/4",
          "unit": "cup",
          "notes": "finely chopped"
        },
        {
          "name": "Fresh parsley",
          "amount": "1/4",
          "unit": "cup",
          "notes": "chopped"
        },
        {
          "name": "Nutritional yeast",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for a cheesy flavor"
        },
        {
          "name": "Olive oil",
          "amount": "3",
          "unit": "tablespoons",
          "notes": "extra virgin"
        },
        {
          "name": "Apple cider vinegar",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for tanginess"
        },
        {
          "name": "Dijon mustard",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "adds depth to the dressing"
        },
        {
          "name": "Garlic powder",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "for flavor enhancement"
        },
        {
          "name": "Salt",
          "amount": "to taste",
          "unit": "",
          "notes": "optional, adjust as needed"
        },
        {
          "name": "Pepper",
          "amount": "to taste",
          "unit": "",
          "notes": "optional, adjust as needed"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large salad bowl, combine the chopped romaine lettuce, halved cherry tomatoes, diced cucumber, diced avocado, cooked chickpeas, finely chopped red onion, and chopped parsley."
        },
        {
          "step": 2,
          "text": "In a separate small bowl, whisk together the olive oil, apple cider vinegar, Dijon mustard, garlic powder, salt, and pepper until well combined."
        },
        {
          "step": 3,
          "text": "Pour the dressing over the salad mixture and toss gently to combine, ensuring all ingredients are coated in the dressing."
        },
        {
          "step": 4,
          "text": "Sprinkle the nutritional yeast over the salad for an added cheesy flavor and toss lightly again."
        },
        {
          "step": 5,
          "text": "Serve immediately for the freshest taste, or refrigerate for up to an hour to allow flavors to meld."
        }
      ],
    nutritionInfo: {
        "calories": 280,
        "protein": "10g",
        "carbs": "35g",
        "fat": "15g",
        "fiber": "10g",
        "sugar": "3g"
      },
    tags: ["salad","vegan","healthy","whole-food","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Romaine lettuce serves as a crisp base, while chickpeas provide protein and fiber. Feel free to substitute any vegetables according to your taste or seasonal availability. For a gluten-free option, ensure your mustard is gluten-free.',
    faqs: [
        {
          "question": "Can I add more protein?",
          "answer": "Absolutely! You can include more chickpeas, kidney beans, or even some grilled tofu or tempeh for extra protein."
        }
      ],
    tips: ["Use ripe avocados for the best flavor and texture.","Add a sprinkle of sunflower seeds or pumpkin seeds for extra crunch and nutrition."],
    variations: ["Substitute quinoa for chickpeas for a grain-based protein.","Add roasted sweet potatoes for a sweeter flavor profile."],
    storage: 'This salad is best enjoyed fresh, but you can store leftovers in an airtight container in the refrigerator for up to 2 days. Keep the dressing separate until ready to serve to prevent the salad from becoming soggy.',
  },
  {
    id: '1766992272389.018',
    title: 'Vegan Fried Rice',
    slug: 'vegan-fried-rice',
    description: 'This vibrant vegan fried rice is a wholesome and satisfying meal packed with colorful vegetables and fragrant spices. Perfect for a quick lunch, it’s not only delicious but also easy to prepare.',
    prologue: 'Discover the simplicity and joy of making Vegan Fried Rice, a delightful dish that showcases the goodness of whole-food-plant-based ingredients. This recipe, brought to you by vegancooking.recipes, is perfect for a nourishing lunch that can be made in just under 30 minutes. With its rich flavors and textures, this fried rice will satisfy your cravings while keeping you energized throughout the day.',
    image: '/recipe-images/vegan-fried-rice-1766992273853.webp',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Brown rice",
          "amount": "2",
          "unit": "cups",
          "notes": "cooked and cooled (preferably day-old for best texture)"
        },
        {
          "name": "Carrot",
          "amount": "1",
          "unit": "cup",
          "notes": "diced"
        },
        {
          "name": "Green peas",
          "amount": "1",
          "unit": "cup",
          "notes": "fresh or frozen"
        },
        {
          "name": "Bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced (any color)"
        },
        {
          "name": "Green onion",
          "amount": "1/4",
          "unit": "cup",
          "notes": "sliced"
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
          "notes": "fresh, minced"
        },
        {
          "name": "Soy sauce",
          "amount": "3",
          "unit": "tablespoons",
          "notes": "low-sodium preferred"
        },
        {
          "name": "Sesame oil",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "for flavor"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for cooking"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "to taste"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "to taste"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Heat 2 tablespoons of olive oil in a large skillet or wok over medium-high heat."
        },
        {
          "step": 2,
          "text": "Add minced garlic and ginger to the skillet, sautéing for about 1 minute until fragrant."
        },
        {
          "step": 3,
          "text": "Add the diced carrot and bell pepper to the skillet, cooking for about 3-4 minutes until they start to soften."
        },
        {
          "step": 4,
          "text": "Stir in the green peas and cook for another 2 minutes."
        },
        {
          "step": 5,
          "text": "Add the cooked brown rice to the skillet, breaking up any clumps with a spatula."
        },
        {
          "step": 6,
          "text": "Pour in the soy sauce, sesame oil, black pepper, and salt. Stir well to combine all ingredients."
        },
        {
          "step": 7,
          "text": "Cook for an additional 5-7 minutes, stirring occasionally, until the rice is heated through and slightly crispy."
        },
        {
          "step": 8,
          "text": "Remove from heat and stir in the sliced green onions before serving."
        }
      ],
    nutritionInfo: {
        "calories": 320,
        "protein": "10g",
        "carbs": "54g",
        "fat": "9g",
        "fiber": "6g",
        "sugar": "3g"
      },
    tags: ["vegan","fried rice","whole food plant-based","lunch","quick meal","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Using day-old rice is key for the perfect texture in fried rice, as it helps the grains remain separate and not mushy. Feel free to substitute other vegetables based on your preference or what you have on hand.',
    faqs: [
        {
          "question": "Can I use white rice instead of brown rice?",
          "answer": "Yes, you can use white rice, but it may not have the same nutritional benefits as brown rice."
        },
        {
          "question": "Is there a gluten-free option for soy sauce?",
          "answer": "Yes, you can use tamari, which is often gluten-free."
        }
      ],
    tips: ["For extra flavor, add a splash of rice vinegar or a sprinkle of nutritional yeast.","Customize your fried rice with additional vegetables like broccoli, zucchini, or mushrooms."],
    variations: ["Add tofu or tempeh for a protein boost.","Incorporate different spices like curry powder for a unique flavor twist."],
    storage: 'Store any leftover fried rice in an airtight container in the refrigerator for up to 4 days. Reheat in a skillet over medium heat or in the microwave.',
  },
  {
    id: '1766992384449.071',
    title: 'Vegan Pasta Salad',
    slug: 'vegan-pasta-salad',
    description: 'A refreshing and vibrant vegan pasta salad packed with colorful vegetables and a tangy dressing, perfect for a quick lunch or picnic.',
    prologue: 'This Vegan Pasta Salad is a delightful blend of whole-food ingredients, making it not only delicious but also nourishing. With a medley of fresh vegetables mixed with whole grain pasta and a zesty dressing, this dish is ideal for meal prep or a light lunch. Discover this and more on vegancooking.recipes!',
    image: '/recipe-images/vegan-pasta-salad-1766992385685.webp',
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 4,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Whole grain fusilli pasta",
          "amount": "8",
          "unit": "oz",
          "notes": "or any whole grain pasta of choice"
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
          "name": "Red onion",
          "amount": "1/4",
          "unit": "medium",
          "notes": "finely chopped"
        },
        {
          "name": "Fresh parsley",
          "amount": "1/4",
          "unit": "cup",
          "notes": "chopped"
        },
        {
          "name": "Olive oil",
          "amount": "3",
          "unit": "tbsp",
          "notes": "extra virgin"
        },
        {
          "name": "Red wine vinegar",
          "amount": "2",
          "unit": "tbsp",
          "notes": "or apple cider vinegar"
        },
        {
          "name": "Garlic powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "or 1 clove fresh garlic, minced"
        },
        {
          "name": "Dijon mustard",
          "amount": "1",
          "unit": "tbsp",
          "notes": "optional for extra flavor"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "to taste"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Bring a large pot of salted water to a boil. Add the whole grain fusilli pasta and cook according to package instructions until al dente, usually about 8-10 minutes."
        },
        {
          "step": 2,
          "text": "While the pasta is cooking, prepare the vegetables: halve the cherry tomatoes, dice the cucumber and red bell pepper, and finely chop the red onion and parsley."
        },
        {
          "step": 3,
          "text": "In a large mixing bowl, whisk together the olive oil, red wine vinegar, garlic powder, Dijon mustard (if using), salt, and black pepper to create the dressing."
        },
        {
          "step": 4,
          "text": "Once the pasta is cooked, drain it and rinse under cold water to stop the cooking process. Allow it to cool for a few minutes."
        },
        {
          "step": 5,
          "text": "Add the cooled pasta to the bowl with the dressing, then add the cherry tomatoes, cucumber, red bell pepper, red onion, and parsley. Toss everything together until well combined."
        },
        {
          "step": 6,
          "text": "Taste and adjust seasoning if necessary. You can add more salt, pepper, or vinegar according to your preference."
        },
        {
          "step": 7,
          "text": "Serve immediately or refrigerate for at least 30 minutes to allow the flavors to meld. Enjoy your delicious vegan pasta salad!"
        }
      ],
    nutritionInfo: {
        "calories": 250,
        "protein": "8g",
        "carbs": "40g",
        "fat": "8g",
        "fiber": "6g",
        "sugar": "3g"
      },
    tags: ["vegan","pasta salad","whole food","meal prep","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole grain pasta is a great source of fiber and nutrients. Feel free to substitute the vegetables with your favorites, like spinach or olives. For a protein boost, consider adding chickpeas or edamame.',
    faqs: [
        {
          "question": "Can I make this pasta salad ahead of time?",
          "answer": "Yes, this pasta salad can be made a day in advance. Just store it in an airtight container in the refrigerator."
        },
        {
          "question": "Is this recipe gluten-free?",
          "answer": "You can make this recipe gluten-free by using gluten-free pasta instead."
        }
      ],
    tips: ["Add a squeeze of fresh lemon juice for an extra zing.","For a creamier dressing, blend soaked cashews with water and use as a base for the dressing."],
    variations: ["Add roasted vegetables like zucchini or bell peppers for a different flavor profile.","Incorporate nuts or seeds, such as pine nuts or sunflower seeds, for added texture."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. The salad may become softer over time, but the flavor will still be delicious.',
  },
  {
    id: '1766992781069.8',
    title: 'Vegan Chickpea Coconut Curry',
    slug: 'vegan-chickpea-coconut-curry',
    description: 'A hearty and flavorful chickpea coconut curry packed with spices and nutrients, perfect for a satisfying lunch.',
    prologue: 'Discover the delightful flavors of this Vegan Chickpea Coconut Curry, a wholesome dish that brings together protein-rich chickpeas and creamy coconut milk. This recipe is not only easy to prepare but also rich in flavors and textures, making it an ideal choice for your lunch menu. Whether you\'re a seasoned vegan or just exploring plant-based meals, this dish will surely impress! Find more delicious recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-chickpea-coconut-curry-1766992782530.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Coconut oil",
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
          "amount": "3",
          "unit": "cloves",
          "notes": "minced"
        },
        {
          "name": "Ginger",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "freshly grated"
        },
        {
          "name": "Curry powder",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "adjust to taste"
        },
        {
          "name": "Turmeric powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for color and flavor"
        },
        {
          "name": "Canned diced tomatoes",
          "amount": "1",
          "unit": "15 oz can",
          "notes": "with juices"
        },
        {
          "name": "Canned chickpeas",
          "amount": "2",
          "unit": "15 oz cans",
          "notes": "rinsed and drained"
        },
        {
          "name": "Coconut milk",
          "amount": "1",
          "unit": "13.5 oz can",
          "notes": "full fat for creaminess"
        },
        {
          "name": "Spinach",
          "amount": "4",
          "unit": "cups",
          "notes": "fresh or frozen, chopped"
        },
        {
          "name": "Salt",
          "amount": "to taste",
          "unit": "none",
          "notes": "for seasoning"
        },
        {
          "name": "Black pepper",
          "amount": "to taste",
          "unit": "none",
          "notes": "for seasoning"
        },
        {
          "name": "Fresh cilantro",
          "amount": "1/4",
          "unit": "cup",
          "notes": "chopped, for garnish"
        },
        {
          "name": "Lemon juice",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "freshly squeezed for brightness"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pot or skillet, heat the coconut oil over medium heat."
        },
        {
          "step": 2,
          "text": "Add the diced onion and sauté for about 5 minutes, until softened."
        },
        {
          "step": 3,
          "text": "Stir in the minced garlic and grated ginger, cooking for another 1-2 minutes until fragrant."
        },
        {
          "step": 4,
          "text": "Add the curry powder and turmeric powder, stirring well to coat the onions."
        },
        {
          "step": 5,
          "text": "Pour in the canned diced tomatoes with their juices and bring to a simmer."
        },
        {
          "step": 6,
          "text": "Add the rinsed chickpeas, coconut milk, and stir to combine."
        },
        {
          "step": 7,
          "text": "Let the mixture simmer for about 10 minutes, stirring occasionally."
        },
        {
          "step": 8,
          "text": "Add the chopped spinach, cooking until wilted (about 3-5 minutes)."
        },
        {
          "step": 9,
          "text": "Season with salt and black pepper to taste."
        },
        {
          "step": 10,
          "text": "Stir in the lemon juice before serving."
        },
        {
          "step": 11,
          "text": "Serve hot, garnished with fresh cilantro."
        }
      ],
    nutritionInfo: {
        "calories": 350,
        "protein": "14g",
        "carbs": "40g",
        "fat": "18g",
        "fiber": "10g",
        "sugar": "5g"
      },
    tags: ["vegan","curry","lunch","whole-food-plant-based","chickpeas"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Coconut milk adds creaminess to the curry. You can use light coconut milk for a lower fat option. Feel free to substitute chickpeas with lentils or any other beans. Adjust spices according to your taste preference.',
    faqs: [
        {
          "question": "Can I make this curry ahead of time?",
          "answer": "Yes, this curry can be made ahead of time and stored in the refrigerator for up to 3 days or frozen for up to a month."
        },
        {
          "question": "What can I serve with this curry?",
          "answer": "This chickpea coconut curry pairs well with brown rice, quinoa, or whole-grain bread."
        }
      ],
    tips: ["For extra flavor, try adding a splash of soy sauce or tamari.","If you like heat, add some red chili flakes or diced jalapeños."],
    variations: ["Substitute chickpeas with black beans or kidney beans for a different flavor profile.","Add vegetables like bell peppers, carrots, or sweet potatoes for added nutrition."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Reheat on the stovetop or in the microwave before serving.',
  },
  {
    id: '1766993124112.3315',
    title: 'Vegan Lentil Salad',
    slug: 'vegan-lentil-salad',
    description: 'A colorful and nutritious lentil salad packed with fresh vegetables and a zesty dressing, perfect for a wholesome lunch.',
    prologue: 'Discover the vibrant flavors of our Vegan Lentil Salad, a delightful dish that combines protein-rich lentils with crisp vegetables and a tangy dressing. This salad not only satisfies your hunger but also nourishes your body with whole-food ingredients. Perfect for meal prep or a quick lunch, this recipe is a must-try for anyone looking to incorporate more plant-based meals into their diet. Explore more delicious vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-lentil-salad-1766993125381.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Green or brown lentils",
          "amount": "1",
          "unit": "cup",
          "notes": "Rinsed and drained"
        },
        {
          "name": "Water",
          "amount": "3",
          "unit": "cups",
          "notes": "For cooking lentils"
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
          "notes": "Diced"
        },
        {
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Diced"
        },
        {
          "name": "Red onion",
          "amount": "1/4",
          "unit": "medium",
          "notes": "Finely chopped"
        },
        {
          "name": "Fresh parsley",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Chopped"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Extra virgin"
        },
        {
          "name": "Apple cider vinegar",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "For dressing"
        },
        {
          "name": "Dijon mustard",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For dressing"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "To taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "Freshly ground, to taste"
        },
        {
          "name": "Garlic powder",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Optional, for extra flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium saucepan, combine the rinsed lentils and water. Bring to a boil over medium-high heat."
        },
        {
          "step": 2,
          "text": "Once boiling, reduce the heat to low, cover, and simmer for about 20-25 minutes, or until lentils are tender but not mushy. Drain any excess water if necessary."
        },
        {
          "step": 3,
          "text": "While the lentils are cooking, prepare the vegetables: halve the cherry tomatoes, dice the cucumber and red bell pepper, and finely chop the red onion and parsley."
        },
        {
          "step": 4,
          "text": "In a small bowl, whisk together the olive oil, apple cider vinegar, Dijon mustard, salt, black pepper, and garlic powder."
        },
        {
          "step": 5,
          "text": "In a large bowl, combine the cooked lentils and prepared vegetables. Pour the dressing over the mixture and toss gently to combine."
        },
        {
          "step": 6,
          "text": "Taste and adjust seasoning if necessary. Serve immediately or refrigerate for at least 30 minutes to allow flavors to meld."
        }
      ],
    nutritionInfo: {
        "calories": 280,
        "protein": "15g",
        "carbs": "40g",
        "fat": "9g",
        "fiber": "16g",
        "sugar": "3g"
      },
    tags: ["vegan","salad","lunch","whole-food","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Lentils are a great source of plant protein and fiber. You can substitute with canned lentils for a quicker option, just rinse and drain them before using. Fresh herbs can be swapped according to your preference or availability.',
    faqs: [
        {
          "question": "Can I make this salad ahead of time?",
          "answer": "Yes, this lentil salad can be made ahead of time and stored in the refrigerator for up to 3 days. The flavors will continue to develop as it sits."
        },
        {
          "question": "What can I add to this salad for extra protein?",
          "answer": "You can add chickpeas, edamame, or even some roasted nuts or seeds for an additional protein boost."
        }
      ],
    tips: ["Make sure to rinse lentils thoroughly before cooking to remove any debris.","Feel free to add other vegetables like carrots, spinach, or avocado for more variety."],
    variations: ["Add avocado for creaminess and healthy fats.","Incorporate roasted vegetables like sweet potatoes or zucchini for added flavor."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Stir well before serving again to redistribute the dressing.',
  },
  {
    id: '1767011889800.4592',
    title: 'Vegan Whole-Food Plant-Based Flatbread',
    slug: 'vegan-whole-food-plant-based-flatbread',
    description: 'This delightful vegan flatbread is made with whole grain flour and minimal ingredients, perfect for wraps or as a side to your favorite dip.',
    prologue: 'Discover the joy of making your own flatbread with this simple vegan recipe from vegancooking.recipes. Packed with whole grains and free from animal products, this flatbread is not only delicious but also a healthy addition to your lunch routine. Perfect for wraps, dips, or just on its own, this recipe is easy to follow and requires minimal ingredients.',
    image: '/recipe-images/vegan-whole-food-plant-based-flatbread-1767011891172.webp',
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 6,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "You can substitute with spelt flour for a different flavor."
        },
        {
          "name": "Water",
          "amount": "3/4",
          "unit": "cup",
          "notes": "Adjust as needed for consistency."
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Optional, for added flavor."
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "tsp",
          "notes": "Adjust to taste."
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Helps the flatbread puff up."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large mixing bowl, combine the whole wheat flour, baking powder, and salt."
        },
        {
          "step": 2,
          "text": "Create a well in the center of the dry ingredients and add the water and olive oil."
        },
        {
          "step": 3,
          "text": "Mix with a wooden spoon or your hands until the dough starts to come together."
        },
        {
          "step": 4,
          "text": "Knead the dough on a lightly floured surface for about 5 minutes until smooth and elastic."
        },
        {
          "step": 5,
          "text": "Divide the dough into 6 equal portions and shape each into a ball."
        },
        {
          "step": 6,
          "text": "Roll out each ball into a flat, round shape about 1/4 inch thick."
        },
        {
          "step": 7,
          "text": "Heat a non-stick skillet over medium-high heat."
        },
        {
          "step": 8,
          "text": "Cook each flatbread for about 2-3 minutes on each side, or until golden brown and slightly puffed."
        },
        {
          "step": 9,
          "text": "Remove from the skillet and keep warm in a clean kitchen towel while you cook the remaining flatbreads."
        },
        {
          "step": 10,
          "text": "Serve warm with your favorite dips or use as a wrap for lunch!"
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "4g",
        "carbs": "24g",
        "fat": "2g",
        "fiber": "4g",
        "sugar": "0g"
      },
    tags: ["vegan","flatbread","whole-food","plant-based","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour not only adds flavor but also provides more nutrients compared to white flour. For gluten-free options, substitute with a gluten-free flour blend, though results may vary.',
    faqs: [
        {
          "question": "Can I make this flatbread gluten-free?",
          "answer": "Yes, you can use a gluten-free flour blend, but the texture may differ."
        },
        {
          "question": "How can I store leftover flatbread?",
          "answer": "Store in an airtight container in the fridge for up to 3 days or freeze for up to a month."
        }
      ],
    tips: ["Make sure your skillet is hot enough to achieve a nice golden color.","Experiment with adding herbs or spices to the dough for added flavor."],
    variations: ["Add chopped herbs like rosemary or thyme to the dough.","Incorporate seeds like sesame or flaxseed for extra nutrition."],
    storage: 'Store any leftovers in an airtight container at room temperature for 1-2 days. For longer storage, wrap in plastic wrap and freeze. Reheat in a skillet or microwave before serving.',
  },
  {
    id: '1767012124588.5193',
    title: 'Vegan Quinoa Salad',
    slug: 'vegan-quinoa-salad',
    description: 'This vibrant quinoa salad is packed with nutrients and flavor, making it the perfect lunch option for anyone seeking a wholesome, plant-based meal.',
    prologue: 'Discover the ultimate vegan quinoa salad, a deliciously nutritious dish that combines protein-rich quinoa with fresh vegetables and a zesty dressing. Ideal for meal prep, this salad is not only easy to make but also bursting with flavor. Perfect for a healthy lunch, it showcases the best of whole-food plant-based cooking, ensuring you get your daily dose of vitamins and minerals. Explore more delicious vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-quinoa-salad-1767012126018.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Quinoa",
          "amount": "1",
          "unit": "cup",
          "notes": "Rinsed thoroughly to remove bitterness"
        },
        {
          "name": "Water",
          "amount": "2",
          "unit": "cups",
          "notes": "For cooking quinoa"
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
          "notes": "Diced"
        },
        {
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Diced"
        },
        {
          "name": "Red onion",
          "amount": "1/4",
          "unit": "medium",
          "notes": "Finely chopped"
        },
        {
          "name": "Fresh parsley",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Chopped"
        },
        {
          "name": "Lemon juice",
          "amount": "3",
          "unit": "tbsp",
          "notes": "Freshly squeezed for dressing"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Extra virgin for best flavor"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Adjust to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "Freshly ground"
        },
        {
          "name": "Cumin",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "For added flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium saucepan, combine 1 cup of rinsed quinoa and 2 cups of water. Bring to a boil over high heat."
        },
        {
          "step": 2,
          "text": "Once boiling, reduce the heat to low, cover, and let simmer for about 15 minutes, or until the quinoa is fluffy and water is absorbed."
        },
        {
          "step": 3,
          "text": "Remove the saucepan from heat and let it sit covered for an additional 5 minutes. Then, fluff the quinoa with a fork."
        },
        {
          "step": 4,
          "text": "While the quinoa cooks, prepare the vegetables: chop the cherry tomatoes, cucumber, red bell pepper, and red onion, and finely chop the parsley."
        },
        {
          "step": 5,
          "text": "In a large bowl, combine the cooked quinoa, cherry tomatoes, cucumber, red bell pepper, red onion, and parsley."
        },
        {
          "step": 6,
          "text": "In a small bowl, whisk together the lemon juice, olive oil, salt, black pepper, and cumin."
        },
        {
          "step": 7,
          "text": "Pour the dressing over the salad and toss gently to combine all ingredients evenly."
        },
        {
          "step": 8,
          "text": "Taste and adjust seasoning if needed. Serve immediately or chill in the refrigerator for 30 minutes to enhance flavors."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "8g",
        "carbs": "38g",
        "fat": "7g",
        "fiber": "6g",
        "sugar": "2g"
      },
    tags: ["vegan","salad","quinoa","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Quinoa is a great source of complete protein and can be substituted with other grains like farro or bulgur. For a gluten-free option, ensure that the grains are certified gluten-free. Fresh herbs can be swapped according to your preference, and you can add nuts or seeds for extra crunch.',
    faqs: [
        {
          "question": "Can I make this salad ahead of time?",
          "answer": "Yes, this quinoa salad can be made ahead and stored in the refrigerator for up to 3 days. Just keep the dressing separate and add it right before serving."
        }
      ],
    tips: ["For added flavor, toast the quinoa in a dry skillet before cooking.","Feel free to add other vegetables like avocado, corn, or spinach for more variety."],
    variations: ["Add black beans and corn for a southwestern twist.","Incorporate roasted sweet potatoes for a heartier salad."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. To refresh the salad, add a splash of lemon juice or olive oil before serving.',
  },
  {
    id: '1767012272483.0442',
    title: 'Vegan Buddha Bowl',
    slug: 'vegan-buddha-bowl',
    description: 'A vibrant and nutritious Buddha bowl packed with whole grains, fresh vegetables, and a creamy tahini dressing.',
    prologue: 'Discover the joy of plant-based eating with this wholesome Vegan Buddha Bowl, a perfect blend of flavors and textures that will keep you satisfied. Ideal for lunch, this bowl is filled with nutrient-dense ingredients that nourish your body and delight your taste buds. Explore more delicious vegan recipes at vegancooking.recipes and elevate your plant-based cooking skills!',
    image: '/recipe-images/vegan-buddha-bowl-1767012273661.webp',
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    servings: 2,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Quinoa",
          "amount": "1",
          "unit": "cup",
          "notes": "Rinsed and drained"
        },
        {
          "name": "Vegetable broth",
          "amount": "2",
          "unit": "cups",
          "notes": "For cooking quinoa"
        },
        {
          "name": "Chickpeas",
          "amount": "1",
          "unit": "can",
          "notes": "Drained and rinsed"
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
          "notes": "Diced"
        },
        {
          "name": "Avocado",
          "amount": "1",
          "unit": "large",
          "notes": "Sliced"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "Fresh, packed"
        },
        {
          "name": "Tahini",
          "amount": "3",
          "unit": "tablespoons",
          "notes": "For dressing"
        },
        {
          "name": "Lemon juice",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Freshly squeezed"
        },
        {
          "name": "Garlic powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For dressing"
        },
        {
          "name": "Salt",
          "amount": "to taste",
          "unit": "",
          "notes": ""
        },
        {
          "name": "Black pepper",
          "amount": "to taste",
          "unit": "",
          "notes": ""
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "For sautéing spinach"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium saucepan, combine the rinsed quinoa and vegetable broth. Bring to a boil over medium-high heat."
        },
        {
          "step": 2,
          "text": "Once boiling, reduce the heat to low, cover, and let simmer for about 15 minutes or until the quinoa is fluffy and the liquid is absorbed. Remove from heat and let it sit covered for 5 minutes."
        },
        {
          "step": 3,
          "text": "While the quinoa is cooking, heat olive oil in a skillet over medium heat. Add the spinach and sauté for 2-3 minutes until wilted. Remove from heat."
        },
        {
          "step": 4,
          "text": "In a small bowl, whisk together tahini, lemon juice, garlic powder, salt, and black pepper until smooth. If it's too thick, add a small amount of water to reach desired consistency."
        },
        {
          "step": 5,
          "text": "In serving bowls, layer the cooked quinoa, sautéed spinach, chickpeas, cherry tomatoes, cucumber, and avocado."
        },
        {
          "step": 6,
          "text": "Drizzle the tahini dressing over the top of each bowl. Serve immediately and enjoy!"
        }
      ],
    nutritionInfo: {
        "calories": 550,
        "protein": "18g",
        "carbs": "75g",
        "fat": "25g",
        "fiber": "15g",
        "sugar": "3g"
      },
    tags: ["vegan","bowl","whole food","plant-based","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Quinoa can be replaced with brown rice or farro for a different flavor. Use any fresh vegetables you have on hand to customize your bowl.',
    faqs: [
        {
          "question": "Can I meal prep this bowl?",
          "answer": "Yes! You can prepare the quinoa, chickpeas, and dressing in advance. Store each component separately in airtight containers in the refrigerator for up to 4 days."
        },
        {
          "question": "Is this recipe gluten-free?",
          "answer": "Yes, this recipe is gluten-free as quinoa and chickpeas are naturally gluten-free."
        }
      ],
    tips: ["Make sure to rinse the quinoa well to remove its natural coating, which can make it taste bitter.","Feel free to add other toppings like nuts, seeds, or your favorite vegan cheese for extra flavor and texture."],
    variations: ["Add roasted sweet potatoes or beets for an extra layer of flavor.","Substitute tahini dressing with a peanut sauce for a different taste."],
    storage: 'Store leftovers in airtight containers in the refrigerator for up to 4 days. Reheat the quinoa and chickpeas before serving, and add fresh vegetables just before eating.',
  },
  {
    id: '1767013234669.2546',
    title: 'Vegan Whole-Food Plant-Based Burrito',
    slug: 'vegan-whole-food-plant-based-burrito',
    description: 'A hearty and flavorful vegan burrito packed with wholesome ingredients, perfect for a nutritious lunch on the go!',
    prologue: 'This vegan whole-food plant-based burrito is a delightful blend of brown rice, black beans, and an array of fresh vegetables, wrapped in a soft tortilla. It\'s easy to make and is bursting with flavor, making it a perfect choice for lunch or a quick meal. At vegancooking.recipes, we believe in creating meals that are not only delicious but also nourishing, and this burrito embodies that philosophy.',
    image: '/recipe-images/vegan-whole-food-plant-based-burritos-1766981046913.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    difficulty: 'easy',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Brown rice",
          "amount": "1",
          "unit": "cup",
          "notes": "Rinsed and drained"
        },
        {
          "name": "Water",
          "amount": "2",
          "unit": "cups",
          "notes": "For cooking the rice"
        },
        {
          "name": "Canned black beans",
          "amount": "1",
          "unit": "15 oz can",
          "notes": "Rinsed and drained"
        },
        {
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Diced"
        },
        {
          "name": "Zucchini",
          "amount": "1",
          "unit": "medium",
          "notes": "Diced"
        },
        {
          "name": "Corn kernels",
          "amount": "1",
          "unit": "cup",
          "notes": "Fresh or frozen"
        },
        {
          "name": "Red onion",
          "amount": "1/2",
          "unit": "medium",
          "notes": "Diced"
        },
        {
          "name": "Garlic",
          "amount": "2",
          "unit": "cloves",
          "notes": "Minced"
        },
        {
          "name": "Ground cumin",
          "amount": "1",
          "unit": "tsp",
          "notes": "For flavor"
        },
        {
          "name": "Chili powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "For spice"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "To taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "To taste"
        },
        {
          "name": "Whole wheat tortillas",
          "amount": "4",
          "unit": "large",
          "notes": "For wrapping"
        },
        {
          "name": "Fresh cilantro",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Chopped, for garnish"
        },
        {
          "name": "Lime",
          "amount": "1",
          "unit": "medium",
          "notes": "Cut into wedges for serving"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium saucepan, combine the rinsed brown rice and 2 cups of water. Bring to a boil, then reduce heat to low, cover, and let simmer for about 20-25 minutes or until the rice is tender and water is absorbed."
        },
        {
          "step": 2,
          "text": "While the rice is cooking, heat a large skillet over medium heat. Add the diced red onion and minced garlic, sautéing for about 3-4 minutes until the onion is translucent."
        },
        {
          "step": 3,
          "text": "Add the diced red bell pepper, zucchini, and corn to the skillet. Stir well and cook for an additional 5-7 minutes until the vegetables are tender."
        },
        {
          "step": 4,
          "text": "Stir in the rinsed black beans, ground cumin, chili powder, salt, and black pepper. Cook for another 3-4 minutes until everything is heated through."
        },
        {
          "step": 5,
          "text": "Once the rice is cooked, fluff it with a fork and add it to the skillet with the vegetable mixture. Stir to combine all ingredients thoroughly."
        },
        {
          "step": 6,
          "text": "Warm the whole wheat tortillas in a dry skillet for about 30 seconds on each side, or until pliable."
        },
        {
          "step": 7,
          "text": "To assemble the burritos, place a generous portion of the rice and bean mixture in the center of each tortilla. Fold in the sides and then roll from the bottom to the top, creating a tightly wrapped burrito."
        },
        {
          "step": 8,
          "text": "Serve the burritos warm, garnished with fresh cilantro and lime wedges on the side."
        }
      ],
    nutritionInfo: {
        "calories": 410,
        "protein": "15g",
        "carbs": "68g",
        "fat": "7g",
        "fiber": "15g",
        "sugar": "3g"
      },
    tags: ["vegan","burrito","whole-food","lunch","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a spicier burrito, consider adding jalapeños or a dash of hot sauce. You can also substitute quinoa for brown rice for a different texture and flavor.',
    faqs: [
        {
          "question": "Can I make these burritos ahead of time?",
          "answer": "Yes! You can prepare the filling and store it in the fridge for up to 3 days. Just warm it up before assembling the burritos."
        },
        {
          "question": "How can I store leftover burritos?",
          "answer": "Wrap them tightly in foil or plastic wrap and store in the refrigerator for up to 4 days. You can also freeze them for up to 3 months."
        }
      ],
    tips: ["For a creamier texture, add 1/4 avocado to each burrito before rolling.","To make the burrito spicier, add diced jalapeños or a sprinkle of cayenne pepper to the filling."],
    variations: ["Swap black beans for pinto beans or chickpeas for a different flavor profile.","Add sautéed spinach or kale for a nutrient boost."],
    storage: 'Store assembled burritos in an airtight container in the refrigerator for up to 4 days. For longer storage, wrap burritos tightly in aluminum foil and freeze for up to 3 months. Reheat in the oven or microwave before serving.',
  },
  {
    id: '1767013423407.4036',
    title: 'Vegan Whole-Food Plant-Based Noodles',
    slug: 'vegan-whole-food-plant-based-noodles',
    description: 'Savor the rich flavors of these wholesome vegan noodles, packed with fresh vegetables and a delicious homemade sauce.',
    prologue: 'Experience a delightful fusion of textures and tastes with our Vegan Whole-Food Plant-Based Noodles. Made with simple, clean ingredients, this dish is not only nourishing but also bursting with flavor. Perfect for a fulfilling lunch, these noodles are an easy way to incorporate more veggies into your diet. Visit vegancooking.recipes for more delicious and healthy vegan recipes.',
    image: '/recipe-images/vegan-whole-food-plant-based-noodles-1767013424983.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'medium',
    category: ["lunch"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Whole wheat spaghetti",
          "amount": "8",
          "unit": "oz",
          "notes": "Can substitute with gluten-free pasta if desired"
        },
        {
          "name": "Broccoli florets",
          "amount": "2",
          "unit": "cups",
          "notes": "Fresh or frozen"
        },
        {
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Thinly sliced"
        },
        {
          "name": "Carrot",
          "amount": "1",
          "unit": "large",
          "notes": "Julienned or grated"
        },
        {
          "name": "Green onion",
          "amount": "3",
          "unit": "stalks",
          "notes": "Chopped"
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
          "notes": "Fresh, grated"
        },
        {
          "name": "Soy sauce",
          "amount": "3",
          "unit": "tbsp",
          "notes": "Low-sodium preferred"
        },
        {
          "name": "Sesame oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Can substitute with olive oil"
        },
        {
          "name": "Rice vinegar",
          "amount": "1",
          "unit": "tbsp",
          "notes": "For added tanginess"
        },
        {
          "name": "Sesame seeds",
          "amount": "2",
          "unit": "tbsp",
          "notes": "For garnish"
        },
        {
          "name": "Red pepper flakes",
          "amount": "1",
          "unit": "tsp",
          "notes": "Optional for heat"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Bring a large pot of salted water to a boil. Add the whole wheat spaghetti and cook according to package instructions until al dente, usually about 8-10 minutes."
        },
        {
          "step": 2,
          "text": "While the pasta cooks, heat a large skillet over medium heat. Add the sesame oil."
        },
        {
          "step": 3,
          "text": "Add the minced garlic and grated ginger to the skillet and sauté for about 1 minute until fragrant."
        },
        {
          "step": 4,
          "text": "Add the broccoli florets, sliced red bell pepper, and julienned carrot to the skillet. Sauté for 5-6 minutes until the vegetables are tender but still crisp."
        },
        {
          "step": 5,
          "text": "Once the pasta is cooked, drain it and add it directly to the skillet with the sautéed vegetables."
        },
        {
          "step": 6,
          "text": "In a small bowl, whisk together the soy sauce and rice vinegar. Pour this mixture over the pasta and vegetables in the skillet."
        },
        {
          "step": 7,
          "text": "Toss everything together gently to ensure the noodles and veggies are well coated in the sauce."
        },
        {
          "step": 8,
          "text": "Remove from heat and stir in the chopped green onions and red pepper flakes, if using."
        },
        {
          "step": 9,
          "text": "Serve hot, garnished with sesame seeds on top."
        }
      ],
    nutritionInfo: {
        "calories": 350,
        "protein": "12g",
        "carbs": "60g",
        "fat": "8g",
        "fiber": "8g",
        "sugar": "4g"
      },
    tags: ["vegan","whole-food","plant-based","noodles","lunch","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat spaghetti is a great source of fiber and complex carbohydrates. You can replace it with gluten-free noodles if you have dietary restrictions. Feel free to use any seasonal vegetables you have on hand for added variety.',
    faqs: [
        {
          "question": "Can I make this recipe gluten-free?",
          "answer": "Yes, simply substitute the whole wheat spaghetti with a gluten-free pasta of your choice."
        },
        {
          "question": "How can I make this dish spicier?",
          "answer": "You can add more red pepper flakes or a splash of sriracha sauce to increase the heat."
        }
      ],
    tips: ["Prep all your vegetables before starting to cook to make the process smoother.","For added protein, consider adding tofu or chickpeas to the dish."],
    variations: ["Add more vegetables like snap peas, zucchini, or mushrooms for extra nutrition.","Swap out the soy sauce for tamari for a gluten-free option."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 4 days. Reheat on the stovetop with a splash of water or vegetable broth to keep the noodles moist.',
  },
];
