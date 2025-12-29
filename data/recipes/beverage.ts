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
  {
    id: '1766979752053.7476',
    title: 'Vegan Turmeric Latte',
    slug: 'vegan-turmeric-latte',
    description: 'Warm, golden, and soothing, this Vegan Turmeric Latte is the perfect beverage to start your day or unwind in the evening.',
    prologue: 'Looking for a comforting and healthful drink? This Vegan Turmeric Latte is packed with anti-inflammatory properties and rich flavors, making it a delightful addition to your morning routine or afternoon break. Made with simple, whole-food ingredients, it’s a delicious way to enjoy the benefits of turmeric. Discover more vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-turmeric-latte-1766979753270.webp',
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    servings: 2,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Almond milk",
          "amount": "2",
          "unit": "cups",
          "notes": "or any preferred plant-based milk"
        },
        {
          "name": "Ground turmeric",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "freshly ground if possible"
        },
        {
          "name": "Ground ginger",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "can use fresh ginger, grated"
        },
        {
          "name": "Cinnamon",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "for added warmth and flavor"
        },
        {
          "name": "Maple syrup",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "adjust for sweetness preference"
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "enhances turmeric absorption"
        },
        {
          "name": "Vanilla extract",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "optional for flavor"
        },
        {
          "name": "Coconut oil",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "optional for creaminess"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a small saucepan, combine the almond milk and coconut oil (if using). Heat over medium heat until warm but not boiling."
        },
        {
          "step": 2,
          "text": "Add the ground turmeric, ground ginger, cinnamon, black pepper, maple syrup, and vanilla extract (if using) to the warm almond milk."
        },
        {
          "step": 3,
          "text": "Whisk the mixture vigorously to ensure all the spices are well combined and no lumps remain."
        },
        {
          "step": 4,
          "text": "Continue to heat the mixture for an additional 3-5 minutes, stirring occasionally, until it reaches your desired temperature."
        },
        {
          "step": 5,
          "text": "Remove from heat and pour into cups. Optionally, sprinkle a little extra cinnamon or turmeric on top before serving."
        },
        {
          "step": 6,
          "text": "Enjoy your warm Vegan Turmeric Latte!"
        }
      ],
    nutritionInfo: {
        "calories": 80,
        "protein": "2g",
        "carbs": "10g",
        "fat": "4g",
        "fiber": "1g",
        "sugar": "3g"
      },
    tags: ["vegan","beverage","turmeric","latte","healthy","beverage","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Turmeric is known for its anti-inflammatory properties. Black pepper increases the bioavailability of curcumin, the active compound in turmeric. If you don\'t have almond milk, feel free to substitute with oat milk, soy milk, or any other plant-based milk you prefer.',
    faqs: [
        {
          "question": "Can I use fresh turmeric instead of ground?",
          "answer": "Yes, you can use fresh turmeric. About 1 inch of fresh turmeric root is equivalent to 1 teaspoon of ground turmeric. Grate it finely before adding."
        },
        {
          "question": "Is this latte caffeine-free?",
          "answer": "Yes, this Vegan Turmeric Latte is naturally caffeine-free, making it a great alternative to coffee."
        }
      ],
    tips: ["For an extra creamy texture, blend the latte in a blender after heating.","Experiment with different sweeteners like agave syrup or dates to find your perfect sweetness."],
    variations: ["Add a pinch of nutmeg for a warm spice twist.","Substitute coconut milk for almond milk for a richer flavor."],
    storage: 'This latte is best enjoyed fresh, but you can store leftovers in the refrigerator for up to 2 days. Reheat gently on the stove or in the microwave before serving.',
  },
  {
    id: '1766980503543.8264',
    title: 'Vegan Fresh Fruit Juice',
    slug: 'vegan-fresh-fruit-juice',
    description: 'A refreshing and vibrant blend of fresh fruits that invigorates your senses and quenches your thirst.',
    prologue: 'Discover the joy of making your own fruit juice with this simple and healthy recipe on vegancooking.recipes. Packed with vitamins and nutrients, this drink brings a burst of freshness to your day without any animal products. Perfect for breakfast or as a midday refreshment, this juice is a delicious way to stay hydrated and energized.',
    image: '/recipe-images/vegan-fresh-fruit-juice-1766980504804.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Oranges",
          "amount": "4",
          "unit": "large",
          "notes": "peeled and halved"
        },
        {
          "name": "Apples",
          "amount": "2",
          "unit": "medium",
          "notes": "cored and quartered"
        },
        {
          "name": "Carrots",
          "amount": "2",
          "unit": "medium",
          "notes": "peeled and chopped"
        },
        {
          "name": "Lemon",
          "amount": "1",
          "unit": "large",
          "notes": "juiced"
        },
        {
          "name": "Ginger",
          "amount": "1",
          "unit": "inch",
          "notes": "peeled and chopped"
        },
        {
          "name": "Water",
          "amount": "1",
          "unit": "cup",
          "notes": "optional, for thinning the juice"
        },
        {
          "name": "Mint leaves",
          "amount": "handful",
          "unit": "none",
          "notes": "for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Begin by washing all the fruits and vegetables under running water."
        },
        {
          "step": 2,
          "text": "Peel the oranges and lemon, then halve them. Core and quarter the apples."
        },
        {
          "step": 3,
          "text": "Peel and chop the carrots and ginger."
        },
        {
          "step": 4,
          "text": "Using a juicer, add the oranges, apples, carrots, and ginger in batches. If you don't have a juicer, you can use a blender."
        },
        {
          "step": 5,
          "text": "If using a blender, add the chopped ingredients along with the water. Blend until smooth."
        },
        {
          "step": 6,
          "text": "Strain the mixture through a fine mesh sieve or cheesecloth to separate the juice from the pulp."
        },
        {
          "step": 7,
          "text": "Stir in the freshly squeezed lemon juice."
        },
        {
          "step": 8,
          "text": "Serve the juice over ice, garnished with fresh mint leaves."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "2g",
        "carbs": "30g",
        "fat": "0g",
        "fiber": "3g",
        "sugar": "20g"
      },
    tags: ["beverage","juice","vegan","whole-food","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute any fruits based on your preference or availability. For a sweeter juice, add more apples or a splash of agave syrup. If you dislike ginger, it can be omitted.',
    faqs: [
        {
          "question": "Can I use frozen fruits?",
          "answer": "Yes, frozen fruits can be used, but they may alter the texture of the juice. Thaw them slightly before juicing."
        },
        {
          "question": "How can I make this juice less sweet?",
          "answer": "Add more carrots or lemon to balance the sweetness."
        }
      ],
    tips: ["For the freshest taste, consume the juice immediately after making it.","Experiment with different fruits and vegetables to discover your favorite combinations."],
    variations: ["Add a handful of spinach for a green juice variant.","Substitute pineapple for a tropical twist."],
    storage: 'Store any leftover juice in an airtight container in the refrigerator for up to 24 hours. Shake well before serving, as separation may occur.',
  },
  {
    id: '1766981005113.8853',
    title: 'Vegan Chai Tea',
    slug: 'vegan-chai-tea',
    description: 'Warm, spiced, and comforting, this vegan chai tea blends aromatic spices with rich plant-based milk for a delightful beverage experience.',
    prologue: 'Experience the comforting warmth of homemade vegan chai tea, infused with a blend of aromatic spices and creamy coconut milk. Perfect for chilly afternoons or cozy evenings, this recipe is completely plant-based, ensuring a delicious experience without any animal products. Discover more delightful vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-chai-tea-1766981006289.webp',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Water",
          "amount": "4",
          "unit": "cups",
          "notes": "Filtered water for best flavor"
        },
        {
          "name": "Black tea leaves",
          "amount": "4",
          "unit": "teaspoons",
          "notes": "Or 4 tea bags of your choice"
        },
        {
          "name": "Cinnamon sticks",
          "amount": "2",
          "unit": "sticks",
          "notes": "For a warm, spicy flavor"
        },
        {
          "name": "Cardamom pods",
          "amount": "6",
          "unit": "pods",
          "notes": "Crush lightly for better infusion"
        },
        {
          "name": "Whole cloves",
          "amount": "4",
          "unit": "cloves",
          "notes": "Adds depth to the flavor"
        },
        {
          "name": "Ginger",
          "amount": "1",
          "unit": "inch",
          "notes": "Fresh ginger, sliced"
        },
        {
          "name": "Black peppercorns",
          "amount": "6",
          "unit": "peppercorns",
          "notes": "For a subtle heat"
        },
        {
          "name": "Coconut milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Or any preferred plant-based milk"
        },
        {
          "name": "Maple syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "For sweetness, adjust to taste"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Optional, for added flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium saucepan, combine 4 cups of filtered water with the cinnamon sticks, crushed cardamom pods, whole cloves, sliced ginger, and black peppercorns."
        },
        {
          "step": 2,
          "text": "Bring the mixture to a boil over medium-high heat."
        },
        {
          "step": 3,
          "text": "Once boiling, reduce the heat to low and let it simmer for about 10 minutes, allowing the spices to infuse the water."
        },
        {
          "step": 4,
          "text": "After 10 minutes, add the black tea leaves (or tea bags) to the saucepan and simmer for an additional 3-5 minutes, depending on how strong you like your tea."
        },
        {
          "step": 5,
          "text": "Remove the saucepan from heat and strain the tea into a large pot or pitcher to remove the spices and tea leaves."
        },
        {
          "step": 6,
          "text": "Stir in 1 cup of coconut milk, 2 tablespoons of maple syrup, and 1 teaspoon of vanilla extract (if using)."
        },
        {
          "step": 7,
          "text": "Heat the chai tea gently on low heat until warm, but do not bring it back to a boil."
        },
        {
          "step": 8,
          "text": "Serve warm in cups, optionally garnished with a sprinkle of cinnamon or a cinnamon stick."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "1g",
        "carbs": "18g",
        "fat": "5g",
        "fiber": "1g",
        "sugar": "6g"
      },
    tags: ["beverage","chai","tea","vegan","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute coconut milk with almond, oat, or soy milk based on your preference. Adjust the sweetener to your taste, or replace maple syrup with agave syrup or stevia.',
    faqs: [
        {
          "question": "Can I use loose tea instead of tea bags?",
          "answer": "Yes, you can use loose black tea leaves. Just ensure you have a tea infuser or strain the tea after brewing."
        },
        {
          "question": "Is chai tea gluten-free?",
          "answer": "Yes, all the ingredients in this chai tea recipe are gluten-free. Always check brands for any potential cross-contamination."
        }
      ],
    tips: ["Use fresh spices for a more potent flavor.","Adjust the level of sweetness based on your personal preference."],
    variations: ["Add a splash of almond extract for a nutty flavor.","Incorporate a few drops of essential oils like peppermint for a refreshing twist."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Reheat gently on the stove before serving.',
  },
  {
    id: '1766990091116.8208',
    title: 'Vegan Green Smoothie',
    slug: 'vegan-green-smoothie',
    description: 'This refreshing vegan green smoothie is packed with nutrients and flavor, making it the perfect way to start your day or refuel after a workout.',
    prologue: 'Discover the vibrancy of plant-based nutrition with this delicious vegan green smoothie recipe from vegancooking.recipes. Made with wholesome ingredients like spinach, banana, and almond milk, this smoothie is not only nutrient-dense but also incredibly easy to prepare. Perfect for breakfast or a quick snack, this recipe will keep you energized and satisfied while adhering to a whole-food, plant-based lifestyle.',
    image: '/recipe-images/vegan-green-smoothie-1766990093124.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Fresh spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "Packed tightly, stems removed"
        },
        {
          "name": "Banana",
          "amount": "1",
          "unit": "large",
          "notes": "Frozen for a creamier texture"
        },
        {
          "name": "Almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Unsweetened preferred"
        },
        {
          "name": "Chia seeds",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Optional for added omega-3s"
        },
        {
          "name": "Avocado",
          "amount": "1/2",
          "unit": "medium",
          "notes": "Ripe, for creaminess"
        },
        {
          "name": "Fresh lemon juice",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "To brighten flavors"
        },
        {
          "name": "Maple syrup",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Optional for sweetness"
        },
        {
          "name": "Ice cubes",
          "amount": "1",
          "unit": "cup",
          "notes": "To chill the smoothie"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a blender, add 2 cups of fresh spinach. Make sure the stems are removed for a smoother texture."
        },
        {
          "step": 2,
          "text": "Peel the large banana and break it into chunks, adding it to the blender."
        },
        {
          "step": 3,
          "text": "Pour in 1 cup of unsweetened almond milk to help blend the ingredients smoothly."
        },
        {
          "step": 4,
          "text": "Add 1 tablespoon of chia seeds for a nutrient boost and optional 1/2 avocado for creaminess."
        },
        {
          "step": 5,
          "text": "Squeeze in 1 tablespoon of fresh lemon juice to enhance the flavor."
        },
        {
          "step": 6,
          "text": "If desired, add 1 tablespoon of maple syrup for sweetness. Adjust to your taste."
        },
        {
          "step": 7,
          "text": "Finally, add 1 cup of ice cubes to chill the smoothie."
        },
        {
          "step": 8,
          "text": "Blend on high until smooth and creamy, about 30-60 seconds."
        },
        {
          "step": 9,
          "text": "Taste and adjust sweetness or thickness as needed, then blend again if necessary."
        },
        {
          "step": 10,
          "text": "Pour the smoothie into glasses and serve immediately for the best flavor and texture."
        }
      ],
    nutritionInfo: {
        "calories": 250,
        "protein": "6g",
        "carbs": "42g",
        "fat": "9g",
        "fiber": "10g",
        "sugar": "18g"
      },
    tags: ["smoothie","vegan","healthy","breakfast","snack","beverage","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Fresh spinach is high in vitamins and minerals. For a sweeter smoothie, ensure your banana is very ripe. You can substitute almond milk with any plant-based milk of your choice. If you’re allergic to nuts, consider using oat milk or soy milk.',
    faqs: [
        {
          "question": "Can I use other greens instead of spinach?",
          "answer": "Yes, you can substitute kale or Swiss chard, but keep in mind that this may slightly alter the flavor."
        },
        {
          "question": "How can I make it sweeter?",
          "answer": "You can add more maple syrup, a pitted medjool date, or another ripe banana if you prefer a sweeter taste."
        }
      ],
    tips: ["For added protein, consider adding a scoop of plant-based protein powder.","Blend the greens and liquid first before adding fruits for a smoother consistency."],
    variations: ["Add a tablespoon of nut butter for extra creaminess and protein.","Substitute half the spinach with kale for a different nutrient profile."],
    storage: 'This smoothie is best enjoyed fresh, but if you have leftovers, store it in an airtight container in the refrigerator for up to 24 hours. Shake well before consuming as separation may occur.',
  },
  {
    id: '1766990698161.687',
    title: 'Vegan Vegetable Juice',
    slug: 'vegan-vegetable-juice',
    description: 'Revitalize your day with this refreshing and nutrient-packed vegetable juice, bursting with the vibrant flavors of fresh produce.',
    prologue: 'This homemade vegan vegetable juice is a fantastic way to incorporate more vitamins and minerals into your diet while enjoying a delicious drink. Made with whole food plant-based ingredients, it\'s perfect for a quick breakfast or a mid-day pick-me-up. At vegancooking.recipes, we encourage you to explore the richness of plant-based living through simple and satisfying recipes like this one.',
    image: '/recipe-images/vegan-vegetable-juice-1766990699487.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Carrots",
          "amount": "4",
          "unit": "medium",
          "notes": "peeled and chopped"
        },
        {
          "name": "Celery",
          "amount": "3",
          "unit": "stalks",
          "notes": "chopped"
        },
        {
          "name": "Cucumber",
          "amount": "1",
          "unit": "medium",
          "notes": "washed and chopped"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "fresh, packed"
        },
        {
          "name": "Tomatoes",
          "amount": "2",
          "unit": "medium",
          "notes": "cored and chopped"
        },
        {
          "name": "Lemon",
          "amount": "1",
          "unit": "medium",
          "notes": "juiced"
        },
        {
          "name": "Ginger",
          "amount": "1",
          "unit": "inch",
          "notes": "peeled and chopped"
        },
        {
          "name": "Water",
          "amount": "2",
          "unit": "cups",
          "notes": "filtered or spring"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "pinch",
          "notes": "optional, to taste"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Start by preparing all your vegetables. Peel and chop the carrots, wash and chop the cucumber, and core and chop the tomatoes."
        },
        {
          "step": 2,
          "text": "In a blender, combine the chopped carrots, celery, cucumber, spinach, tomatoes, and ginger."
        },
        {
          "step": 3,
          "text": "Add the lemon juice and water to the blender."
        },
        {
          "step": 4,
          "text": "Blend on high speed until smooth. If the mixture is too thick, add more water as needed."
        },
        {
          "step": 5,
          "text": "Once blended, strain the juice through a fine mesh sieve or nut milk bag into a large bowl or pitcher to remove the pulp."
        },
        {
          "step": 6,
          "text": "Taste the juice and add a pinch of salt if desired."
        },
        {
          "step": 7,
          "text": "Pour the juice into glasses and serve immediately, or refrigerate for up to 24 hours."
        }
      ],
    nutritionInfo: {
        "calories": 75,
        "protein": "3g",
        "carbs": "17g",
        "fat": "0g",
        "fiber": "4g",
        "sugar": "6g"
      },
    tags: ["beverage","juice","vegan","whole food plant based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Fresh vegetables are key to a vibrant juice. Feel free to substitute any vegetables based on your preference, such as adding beets for sweetness or kale for extra nutrients.',
    faqs: [
        {
          "question": "Can I use frozen vegetables?",
          "answer": "Yes, you can use frozen vegetables, but fresh produce will yield a better flavor and texture."
        },
        {
          "question": "How long can I store the juice?",
          "answer": "It is best consumed fresh, but you can store it in an airtight container in the refrigerator for up to 24 hours."
        }
      ],
    tips: ["For a more refreshing taste, chill your vegetables in the refrigerator before juicing.","Experiment with different herbs like parsley or cilantro for additional flavor."],
    variations: ["Add a green apple for a touch of sweetness.","Include a handful of parsley or mint for a refreshing twist."],
    storage: 'Store the juice in an airtight container in the refrigerator for up to 24 hours. Shake well before drinking, as separation may occur.',
  },
  {
    id: '1766991787345.2024',
    title: 'Vegan Tropical Fruit Punch',
    slug: 'vegan-tropical-fruit-punch',
    description: 'This refreshing tropical fruit punch is packed with vibrant flavors and perfect for any gathering, celebration, or simply enjoying on a hot day.',
    prologue: 'Looking for a delightful and refreshing beverage that will impress your guests? This Vegan Tropical Fruit Punch combines the sweetness of fresh fruits with the zing of citrus, creating a thirst-quenching drink that\'s perfect for any occasion. Check out vegancooking.recipes for more amazing vegan recipes and elevate your beverage game with this easy-to-make punch.',
    image: '/recipe-images/vegan-tropical-fruit-punch-1766991788618.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 8,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Fresh pineapple",
          "amount": "2",
          "unit": "cups",
          "notes": "chopped into small pieces"
        },
        {
          "name": "Fresh strawberries",
          "amount": "1",
          "unit": "cup",
          "notes": "sliced"
        },
        {
          "name": "Fresh mango",
          "amount": "1",
          "unit": "cup",
          "notes": "chopped into small pieces"
        },
        {
          "name": "Fresh orange juice",
          "amount": "1",
          "unit": "cup",
          "notes": "freshly squeezed for best flavor"
        },
        {
          "name": "Fresh lime juice",
          "amount": "1/4",
          "unit": "cup",
          "notes": "freshly squeezed"
        },
        {
          "name": "Coconut water",
          "amount": "2",
          "unit": "cups",
          "notes": "unsweetened"
        },
        {
          "name": "Sparkling water",
          "amount": "2",
          "unit": "cups",
          "notes": "to add fizz"
        },
        {
          "name": "Agave syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "optional, adjust to taste"
        },
        {
          "name": "Fresh mint leaves",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large pitcher, combine the chopped fresh pineapple, sliced strawberries, and chopped mango."
        },
        {
          "step": 2,
          "text": "Add the freshly squeezed orange juice and lime juice to the fruit mixture."
        },
        {
          "step": 3,
          "text": "Pour in the coconut water and gently stir to combine all ingredients."
        },
        {
          "step": 4,
          "text": "If desired, add agave syrup for sweetness and stir well."
        },
        {
          "step": 5,
          "text": "Just before serving, add the sparkling water to the mixture to give it a refreshing fizz."
        },
        {
          "step": 6,
          "text": "Serve the punch over ice in individual glasses and garnish with fresh mint leaves."
        }
      ],
    nutritionInfo: {
        "calories": 90,
        "protein": "1g",
        "carbs": "23g",
        "fat": "0g",
        "fiber": "2g",
        "sugar": "15g"
      },
    tags: ["beverage","punch","vegan","refreshing","summer","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute any of the fruits with seasonal options or your favorites. For a less sweet punch, reduce or omit the agave syrup. Ensure to use fresh juices for the best flavor.',
    faqs: [
        {
          "question": "Can I make this punch ahead of time?",
          "answer": "Yes, you can prepare the fruit mixture and juices a few hours ahead. Add the sparkling water just before serving to maintain the fizz."
        },
        {
          "question": "Is this punch suitable for children?",
          "answer": "Absolutely! This punch is made with wholesome ingredients and is perfect for kids and adults alike."
        }
      ],
    tips: ["Use chilled ingredients to keep the punch cold without needing too much ice.","Experiment with different fruits like kiwi or berries for variety."],
    variations: ["Add a splash of rum for an adult version.","Include herbal tea, like hibiscus, for a unique flavor."],
    storage: 'Store any leftover punch in the refrigerator for up to 24 hours, but be aware that the sparkling water will lose its fizz over time.',
  },
  {
    id: '1766992851704.201',
    title: 'Vegan Herbal Tea',
    slug: 'vegan-herbal-tea',
    description: 'A soothing blend of fresh herbs that invigorate the senses and promote relaxation, perfect for any time of the day.',
    prologue: 'Discover the art of crafting your own herbal tea with this simple and delightful recipe. With a perfect balance of flavors from fresh herbs and spices, this vegan herbal tea is not only refreshing but also packed with wellness benefits. At vegancooking.recipes, we believe in using whole-food, plant-based ingredients to create beverages that nourish both body and soul.',
    image: '/recipe-images/vegan-herbal-tea-1766992852951.webp',
    prepTime: 10,
    cookTime: 5,
    totalTime: 15,
    servings: 2,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Fresh mint leaves",
          "amount": "1",
          "unit": "cup",
          "notes": "Lightly packed"
        },
        {
          "name": "Fresh chamomile flowers",
          "amount": "1",
          "unit": "cup",
          "notes": "Or 2 tbsp of dried chamomile"
        },
        {
          "name": "Fresh lemon balm leaves",
          "amount": "1",
          "unit": "cup",
          "notes": "Lightly packed"
        },
        {
          "name": "Fresh ginger root",
          "amount": "1",
          "unit": "inch",
          "notes": "Peeled and sliced"
        },
        {
          "name": "Water",
          "amount": "4",
          "unit": "cups",
          "notes": "Filtered or spring water preferred"
        },
        {
          "name": "Lemon juice",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Freshly squeezed, optional for added flavor"
        },
        {
          "name": "Honey or agave syrup",
          "amount": "to taste",
          "unit": "optional",
          "notes": "For sweetness, optional"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Start by gathering all your fresh herbs and ingredients. Rinse the mint, chamomile, and lemon balm leaves thoroughly under cold water."
        },
        {
          "step": 2,
          "text": "In a medium-sized saucepan, bring 4 cups of filtered water to a boil over medium-high heat."
        },
        {
          "step": 3,
          "text": "Once the water is boiling, reduce the heat to low and add the sliced ginger, fresh mint, chamomile flowers, and lemon balm leaves."
        },
        {
          "step": 4,
          "text": "Cover the saucepan and let the herbal mixture steep for about 5 minutes. If you prefer a stronger flavor, you can steep for an additional 2-3 minutes."
        },
        {
          "step": 5,
          "text": "After steeping, remove the saucepan from heat and strain the tea through a fine mesh strainer into a teapot or heatproof pitcher."
        },
        {
          "step": 6,
          "text": "If desired, add freshly squeezed lemon juice and sweeten with honey or agave syrup to taste. Stir well."
        },
        {
          "step": 7,
          "text": "Serve the herbal tea hot or let it cool and serve over ice for a refreshing cold beverage."
        }
      ],
    nutritionInfo: {
        "calories": 20,
        "protein": "0g",
        "carbs": "5g",
        "fat": "0g",
        "fiber": "0g",
        "sugar": "0g"
      },
    tags: ["herbal tea","vegan","beverage","whole-food-plant-based","refreshing"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute the herbs with your favorites, such as lavender or rosemary, based on your preference. Fresh herbs provide the best flavor, but dried herbs can also be used in smaller quantities.',
    faqs: [
        {
          "question": "Can I use dried herbs instead of fresh?",
          "answer": "Yes, you can use dried herbs, but use about 1/3 of the amount as dried herbs are more concentrated in flavor."
        },
        {
          "question": "How long can I store leftover herbal tea?",
          "answer": "You can store leftover tea in the refrigerator for up to 3 days. Reheat it on the stove or enjoy it cold."
        }
      ],
    tips: ["Experiment with different herb combinations to find your perfect blend.","For a caffeine-free option, always stick to herbal ingredients."],
    variations: ["Add a splash of your favorite fruit juice for a fruity twist.","Incorporate spices like cinnamon or turmeric for added health benefits."],
    storage: 'Store any leftover tea in a sealed container in the refrigerator for up to 3 days. Reheat gently on the stove before serving or enjoy chilled.',
  },
  {
    id: '1767010695001.1008',
    title: 'Vegan Fruit Smoothie',
    slug: 'vegan-fruit-smoothie',
    description: 'A refreshing and nutrient-packed vegan fruit smoothie, perfect for breakfast or a snack!',
    prologue: 'This Vegan Fruit Smoothie is a delightful way to start your day or refuel after a workout. Packed with whole fruits and nutrient-dense ingredients, this smoothie is not only delicious but also supports your health goals. At vegancooking.recipes, we believe in celebrating the vibrant flavors of plant-based foods! Enjoy this easy recipe that’s both satisfying and energizing.',
    image: '/recipe-images/vegan-fruit-smoothie-1767010697557.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Banana",
          "amount": "1",
          "unit": "medium",
          "notes": "peeled and sliced"
        },
        {
          "name": "Frozen mixed berries",
          "amount": "1",
          "unit": "cup",
          "notes": "strawberries, blueberries, raspberries, etc."
        },
        {
          "name": "Spinach",
          "amount": "1",
          "unit": "cup",
          "notes": "fresh or frozen"
        },
        {
          "name": "Almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "unsweetened"
        },
        {
          "name": "Chia seeds",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "optional for added fiber and omega-3"
        },
        {
          "name": "Maple syrup",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "optional for sweetness"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Gather all the ingredients and ensure your banana is ripe for optimal sweetness."
        },
        {
          "step": 2,
          "text": "In a blender, add the sliced banana, frozen mixed berries, and spinach."
        },
        {
          "step": 3,
          "text": "Pour in the almond milk to help the blending process."
        },
        {
          "step": 4,
          "text": "Add the chia seeds and maple syrup if using."
        },
        {
          "step": 5,
          "text": "Blend on high speed until the mixture is smooth and creamy, about 30-60 seconds."
        },
        {
          "step": 6,
          "text": "If the smoothie is too thick, add a bit more almond milk until you reach your desired consistency."
        },
        {
          "step": 7,
          "text": "Taste and adjust sweetness if necessary by adding more maple syrup."
        },
        {
          "step": 8,
          "text": "Pour the smoothie into glasses and serve immediately."
        }
      ],
    nutritionInfo: {
        "calories": 200,
        "protein": "5g",
        "carbs": "40g",
        "fat": "6g",
        "fiber": "8g",
        "sugar": "15g"
      },
    tags: ["smoothie","vegan","healthy","breakfast","snack","beverage","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute almond milk with any plant-based milk like soy or oat milk. Fresh fruits can be used instead of frozen, but you may want to add ice to achieve a chilled consistency.',
    faqs: [
        {
          "question": "Can I use fresh fruit instead of frozen?",
          "answer": "Yes, you can use fresh fruit, but you may want to add ice to achieve a frosty texture."
        },
        {
          "question": "What can I add for protein?",
          "answer": "You can add a scoop of vegan protein powder or a tablespoon of nut butter for extra protein."
        }
      ],
    tips: ["Use overripe bananas for a naturally sweeter smoothie.","Experiment with different fruits or add-ins like nut butter or protein powder."],
    variations: ["Tropical Smoothie: Add 1/2 cup of frozen mango and 1/2 cup of coconut water.","Green Smoothie: Substitute kale for spinach and add 1/2 avocado."],
    storage: 'This smoothie is best enjoyed fresh. However, if you need to store it, keep it in an airtight container in the refrigerator for up to 24 hours. Stir or shake well before drinking.',
  },
  {
    id: '1767011270832.6675',
    title: 'Vegan Iced Tea',
    slug: 'vegan-iced-tea',
    description: 'Refreshingly cool and naturally brewed, this vegan iced tea is a perfect thirst-quencher for any occasion.',
    prologue: 'This Vegan Iced Tea recipe is simple and delightful, making it a must-try for tea lovers and health enthusiasts alike. With its whole-food-plant-based approach, this iced tea is not only refreshing but also completely free from animal products. Perfect for hot summer days or any time you need a cooling beverage, vegancooking.recipes brings you this easy-to-follow recipe that elevates your hydration game.',
    image: '/recipe-images/vegan-iced-tea-1767011272106.webp',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Water",
          "amount": "4",
          "unit": "cups",
          "notes": "Filtered water for better taste"
        },
        {
          "name": "Loose black tea or green tea",
          "amount": "4",
          "unit": "teaspoons",
          "notes": "Choose your favorite variety"
        },
        {
          "name": "Maple syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Adjust sweetness to taste"
        },
        {
          "name": "Fresh lemon juice",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Optional for added flavor"
        },
        {
          "name": "Ice cubes",
          "amount": "2",
          "unit": "cups",
          "notes": "For serving"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium saucepan, bring 4 cups of filtered water to a boil over medium-high heat."
        },
        {
          "step": 2,
          "text": "Once boiling, remove the saucepan from heat and add 4 teaspoons of loose tea."
        },
        {
          "step": 3,
          "text": "Cover the saucepan and let the tea steep for 10-15 minutes, depending on how strong you like it."
        },
        {
          "step": 4,
          "text": "After steeping, strain the tea into a pitcher to remove the tea leaves."
        },
        {
          "step": 5,
          "text": "Stir in 2 tablespoons of maple syrup and 2 tablespoons of fresh lemon juice, adjusting sweetness and acidity to your preference."
        },
        {
          "step": 6,
          "text": "Let the tea cool to room temperature, then refrigerate for at least 1 hour."
        },
        {
          "step": 7,
          "text": "To serve, fill glasses with ice cubes and pour the chilled tea over the ice."
        },
        {
          "step": 8,
          "text": "Garnish with lemon slices or fresh mint if desired, and enjoy!"
        }
      ],
    nutritionInfo: {
        "calories": 40,
        "protein": "0g",
        "carbs": "10g",
        "fat": "0g",
        "fiber": "0g",
        "sugar": "8g"
      },
    tags: ["beverage","iced tea","vegan","refreshing","summer drink","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Using high-quality loose leaf tea enhances the flavor of your iced tea. If you prefer, you can substitute maple syrup with agave nectar or stevia for a lower-calorie option.',
    faqs: [
        {
          "question": "Can I use tea bags instead of loose tea?",
          "answer": "Yes, you can use 2 tea bags in place of loose tea. Steeping time may vary based on the tea type."
        },
        {
          "question": "How can I make flavored iced tea?",
          "answer": "You can add fresh fruits, herbs, or spices during the steeping process for additional flavors."
        }
      ],
    tips: ["For a more pronounced flavor, try cold brewing your tea by steeping it in cold water for several hours in the refrigerator.","Adjust the sweetness by adding more or less maple syrup according to your taste preference."],
    variations: ["Try adding fresh mint leaves during the steeping process for a minty iced tea.","Infuse your iced tea with fruits like peach slices or berries for a fruity twist."],
    storage: 'Store any leftover iced tea in an airtight container in the refrigerator for up to 3 days. If it becomes too strong, you can dilute it with additional water or ice.',
  },
  {
    id: '1767011509076.8086',
    title: 'Vegan Limeade',
    slug: 'vegan-limeade',
    description: 'Refreshingly tangy and naturally sweetened, this Vegan Limeade is the perfect thirst-quencher for warm days.',
    prologue: 'Discover the vibrant flavors of summer with this easy Vegan Limeade recipe, perfect for poolside sipping or backyard gatherings. Made with whole food ingredients, this refreshing drink is not only delicious but also free from animal products, making it ideal for anyone seeking a plant-based lifestyle. For more delightful vegan recipes, visit vegancooking.recipes.',
    image: '/recipe-images/vegan-limeade-1767011510242.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Fresh limes",
          "amount": "6",
          "unit": "count",
          "notes": "juiced"
        },
        {
          "name": "Water",
          "amount": "4",
          "unit": "cups",
          "notes": "filtered or spring water"
        },
        {
          "name": "Maple syrup",
          "amount": "1/3",
          "unit": "cup",
          "notes": "or adjust to taste"
        },
        {
          "name": "Ice cubes",
          "amount": "2",
          "unit": "cups",
          "notes": "for serving"
        },
        {
          "name": "Fresh mint leaves",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for garnish, optional"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Wash the limes thoroughly under running water to remove any dirt or residues."
        },
        {
          "step": 2,
          "text": "Cut the limes in half and juice them using a citrus juicer or a manual juicer. You should have about 1 cup of lime juice."
        },
        {
          "step": 3,
          "text": "In a large pitcher, combine the freshly squeezed lime juice with 4 cups of water."
        },
        {
          "step": 4,
          "text": "Add 1/3 cup of maple syrup to the pitcher. Stir well until the syrup is fully dissolved."
        },
        {
          "step": 5,
          "text": "Taste the limeade and adjust the sweetness by adding more maple syrup if desired."
        },
        {
          "step": 6,
          "text": "Refrigerate the limeade for at least 30 minutes to chill."
        },
        {
          "step": 7,
          "text": "To serve, fill glasses with ice cubes, pour the chilled limeade over the ice, and garnish with fresh mint leaves if using."
        }
      ],
    nutritionInfo: {
        "calories": 70,
        "protein": "0g",
        "carbs": "17g",
        "fat": "0g",
        "fiber": "0g",
        "sugar": "14g"
      },
    tags: ["beverage","refreshing","limeade","vegan","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Fresh limes are key to achieving the best flavor. You can substitute maple syrup with agave syrup or another natural sweetener, but keep in mind that it may slightly alter the taste.',
    faqs: [
        {
          "question": "Can I use bottled lime juice?",
          "answer": "While bottled lime juice can be used in a pinch, fresh lime juice provides a much brighter and more authentic flavor."
        },
        {
          "question": "How can I make this limeade less sweet?",
          "answer": "Simply reduce the amount of maple syrup or increase the water content for a more tart flavor."
        }
      ],
    tips: ["For an extra refreshing twist, add slices of cucumber or strawberries to the limeade.","If you prefer a sparkling version, substitute half of the water with sparkling water."],
    variations: ["Add a splash of coconut water for a tropical vibe.","Mix in some muddled berries for a berry-infused limeade."],
    storage: 'Store any leftover limeade in an airtight container in the refrigerator for up to 3 days. Stir well before serving again as the ingredients may settle.',
  },
  {
    id: '1767011599793.1821',
    title: 'Vegan Chocolate Banana Milkshake',
    slug: 'vegan-chocolate-banana-milkshake',
    description: 'Indulge in this creamy and rich vegan chocolate banana milkshake, perfect for a refreshing treat or dessert.',
    prologue: 'This Vegan Chocolate Banana Milkshake is a delightful blend of flavors that will satisfy your sweet tooth while keeping it healthy. Made with whole-food plant-based ingredients, this milkshake is not only delicious but also packed with nutrients. Whether you\'re looking for a quick snack or a decadent dessert, this recipe from vegancooking.recipes will surely become a favorite.',
    image: '/recipe-images/vegan-chocolate-banana-milkshake-1767011601179.webp',
    prepTime: 5,
    cookTime: 20,
    totalTime: 25,
    servings: 2,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "ripe bananas",
          "amount": "2",
          "unit": "medium",
          "notes": "peeled and sliced"
        },
        {
          "name": "unsweetened almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "or any other plant-based milk"
        },
        {
          "name": "raw cacao powder",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "or cocoa powder for a sweeter taste"
        },
        {
          "name": "maple syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "adjust for sweetness preference"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "optional for added flavor"
        },
        {
          "name": "ice cubes",
          "amount": "1",
          "unit": "cup",
          "notes": "for a chilled milkshake"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a blender, add the sliced ripe bananas."
        },
        {
          "step": 2,
          "text": "Pour in the unsweetened almond milk."
        },
        {
          "step": 3,
          "text": "Add the raw cacao powder, maple syrup, and vanilla extract."
        },
        {
          "step": 4,
          "text": "Finally, add the ice cubes."
        },
        {
          "step": 5,
          "text": "Blend on high until smooth and creamy, stopping to scrape down the sides if necessary."
        },
        {
          "step": 6,
          "text": "Taste the milkshake and adjust sweetness if needed by adding more maple syrup."
        },
        {
          "step": 7,
          "text": "Pour the milkshake into two tall glasses and serve immediately."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "3g",
        "carbs": "42g",
        "fat": "4g",
        "fiber": "5g",
        "sugar": "18g"
      },
    tags: ["vegan","milkshake","dessert","chocolate","banana","beverage","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute almond milk with oat milk or soy milk based on your preference. For a creamier texture, try adding a tablespoon of nut butter or a handful of soaked cashews.',
    faqs: [
        {
          "question": "Can I use frozen bananas?",
          "answer": "Absolutely! Frozen bananas will give your milkshake a thicker texture and make it even more refreshing."
        },
        {
          "question": "Is this milkshake gluten-free?",
          "answer": "Yes, all the ingredients in this recipe are gluten-free, making it suitable for those with gluten sensitivities."
        }
      ],
    tips: ["For an extra chocolatey flavor, consider adding a tablespoon of chocolate syrup on top before serving.","If you prefer a thicker consistency, reduce the amount of almond milk or add more ice."],
    variations: ["Try adding a scoop of your favorite plant-based protein powder for an extra protein boost.","Substitute the raw cacao powder with carob powder for a different flavor profile."],
    storage: 'This milkshake is best enjoyed fresh. However, if you have leftovers, you can store them in an airtight container in the refrigerator for up to 24 hours. Stir well before consuming as separation may occur.',
  },
  {
    id: '1767012240906.6963',
    title: 'Vegan Protein Smoothie',
    slug: 'vegan-protein-smoothie',
    description: 'This delicious vegan protein smoothie is packed with nutrients and is perfect for a quick breakfast or post-workout snack.',
    prologue: 'Looking for a nutritious and energizing vegan protein smoothie? This whole-food, plant-based recipe combines the goodness of leafy greens, fruits, and plant-based protein to create a satisfying beverage that fuels your day. Perfect for those on a vegan journey, this smoothie is not only delicious but also easy to make. Check out vegancooking.recipes for more healthy vegan recipes.',
    image: '/recipe-images/vegan-protein-smoothie-1767012242258.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Banana",
          "amount": "1",
          "unit": "medium",
          "notes": "peeled and chopped"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "fresh, packed"
        },
        {
          "name": "Almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "unsweetened"
        },
        {
          "name": "Pea protein powder",
          "amount": "2",
          "unit": "scoops",
          "notes": "or any other plant-based protein powder"
        },
        {
          "name": "Chia seeds",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "optional for added fiber"
        },
        {
          "name": "Frozen mixed berries",
          "amount": "1",
          "unit": "cup",
          "notes": "or any berries of your choice"
        },
        {
          "name": "Maple syrup",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "optional for sweetness"
        },
        {
          "name": "Ice cubes",
          "amount": "1",
          "unit": "cup",
          "notes": "for a chilled smoothie"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a high-speed blender, add the chopped banana, fresh spinach, and almond milk. Blend on high until smooth."
        },
        {
          "step": 2,
          "text": "Next, add the pea protein powder, chia seeds, frozen mixed berries, and maple syrup (if using) to the blender."
        },
        {
          "step": 3,
          "text": "Add the ice cubes to the blender and blend again until all ingredients are well combined and smooth."
        },
        {
          "step": 4,
          "text": "Taste the smoothie and adjust sweetness with more maple syrup if desired."
        },
        {
          "step": 5,
          "text": "Pour the smoothie into two glasses and enjoy immediately for the best flavor and texture."
        }
      ],
    nutritionInfo: {
        "calories": 240,
        "protein": "20g",
        "carbs": "40g",
        "fat": "6g",
        "fiber": "10g",
        "sugar": "12g"
      },
    tags: ["smoothie","vegan","breakfast","healthy","protein","beverage","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Bananas add natural sweetness and creaminess, while spinach provides essential nutrients without altering the flavor. You can substitute almond milk with any other plant-based milk like oat, soy, or coconut milk. Chia seeds are optional but they boost the fiber content and provide omega-3 fatty acids.',
    faqs: [
        {
          "question": "Can I use fresh berries instead of frozen?",
          "answer": "Yes, you can use fresh berries, but you may want to add more ice to achieve a chilled smoothie."
        },
        {
          "question": "How can I make this smoothie sweeter?",
          "answer": "You can add more maple syrup, a date, or a splash of agave syrup to enhance the sweetness."
        }
      ],
    tips: ["Use ripe bananas for the best sweetness and creaminess.","If you're not a fan of spinach, you can substitute it with kale or another leafy green."],
    variations: ["Add a tablespoon of almond butter or peanut butter for extra creaminess and flavor.","Replace frozen mixed berries with frozen mango or pineapple for a tropical twist."],
    storage: 'This smoothie is best enjoyed fresh, but if you have leftovers, store them in an airtight container in the refrigerator for up to 24 hours. Shake or stir before drinking as separation may occur.',
  },
  {
    id: '1767012464523.5146',
    title: 'Vegan Lemonade',
    slug: 'vegan-lemonade',
    description: 'Refreshingly tangy and perfectly sweetened, this homemade lemonade is a must-have for any warm day.',
    prologue: 'Nothing beats the classic taste of lemonade, especially when it\'s made fresh at home! This vegan lemonade recipe is entirely plant-based, using whole food ingredients to create a deliciously refreshing beverage. Perfect for parties, picnics, or just a relaxing afternoon, it\'s sure to quench your thirst. Visit vegancooking.recipes for more delightful vegan recipes!',
    image: '/recipe-images/vegan-lemonade-1767012466049.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Fresh lemons",
          "amount": "1",
          "unit": "cup",
          "notes": "About 4-6 lemons, juiced"
        },
        {
          "name": "Water",
          "amount": "4",
          "unit": "cups",
          "notes": "Filtered or spring water"
        },
        {
          "name": "Maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Or adjust to taste"
        },
        {
          "name": "Ice cubes",
          "amount": "2",
          "unit": "cups",
          "notes": "For serving"
        },
        {
          "name": "Mint leaves",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Optional, for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Start by washing the lemons thoroughly under running water."
        },
        {
          "step": 2,
          "text": "Cut the lemons in half and use a juicer or reamer to extract the juice. You should have about 1 cup of fresh lemon juice."
        },
        {
          "step": 3,
          "text": "In a large pitcher, combine the freshly squeezed lemon juice and maple syrup. Stir well until the syrup is fully dissolved."
        },
        {
          "step": 4,
          "text": "Add 4 cups of cold water to the pitcher and stir until well combined. Adjust the sweetness by adding more maple syrup if desired."
        },
        {
          "step": 5,
          "text": "To serve, fill glasses with ice cubes and pour the lemonade over the ice. Garnish with fresh mint leaves if using."
        },
        {
          "step": 6,
          "text": "Enjoy your refreshing vegan lemonade!"
        }
      ],
    nutritionInfo: {
        "calories": 60,
        "protein": "0g",
        "carbs": "15g",
        "fat": "0g",
        "fiber": "0g",
        "sugar": "12g"
      },
    tags: ["beverage","summer drink","refreshing","easy","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Fresh lemons are key to achieving the right tartness in your lemonade. Maple syrup is a great natural sweetener, but you can substitute with agave syrup or another liquid sweetener if preferred.',
    faqs: [
        {
          "question": "Can I use bottled lemon juice?",
          "answer": "While you can use bottled lemon juice, fresh lemon juice provides a much brighter and more vibrant flavor."
        },
        {
          "question": "How can I make this lemonade less sweet?",
          "answer": "Simply reduce the amount of maple syrup or add more water to dilute the sweetness."
        }
      ],
    tips: ["For a sparkling version, use sparkling water instead of still water.","Add a few slices of lemon to the pitcher for a decorative touch."],
    variations: ["Add fresh fruit slices, such as strawberries or raspberries, for a fruity twist.","Infuse with herbs like basil or rosemary for a unique flavor profile."],
    storage: 'Store any leftover lemonade in the refrigerator in an airtight container for up to 3 days. Stir well before serving again as ingredients may separate.',
  },
  {
    id: '1767012860346.0022',
    title: 'Vegan Tropical Punch',
    slug: 'vegan-tropical-punch',
    description: 'A refreshing and vibrant tropical punch that combines the flavors of pineapple, mango, and coconut for a delightful drink perfect for any occasion.',
    prologue: 'Looking for a refreshing and delicious beverage to quench your thirst? This Vegan Tropical Punch is a perfect choice for parties, picnics, or just a sunny afternoon at home. Packed with wholesome, natural ingredients, it\'s a delightful blend of tropical fruits that everyone will love. Explore more amazing vegan recipes at vegancooking.recipes to elevate your plant-based cooking game.',
    image: '/recipe-images/vegan-tropical-punch-1767012861530.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 6,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Fresh pineapple",
          "amount": "3",
          "unit": "cups",
          "notes": "cut into chunks"
        },
        {
          "name": "Fresh mango",
          "amount": "2",
          "unit": "cups",
          "notes": "peeled and diced"
        },
        {
          "name": "Coconut water",
          "amount": "4",
          "unit": "cups",
          "notes": "unsweetened"
        },
        {
          "name": "Fresh lime juice",
          "amount": "1/2",
          "unit": "cup",
          "notes": "freshly squeezed"
        },
        {
          "name": "Agave syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "optional, adjust to taste"
        },
        {
          "name": "Sparkling water",
          "amount": "2",
          "unit": "cups",
          "notes": "for fizziness"
        },
        {
          "name": "Fresh mint leaves",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for garnish"
        },
        {
          "name": "Ice cubes",
          "amount": "as needed",
          "unit": "none",
          "notes": "for serving"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Begin by preparing the fresh pineapple and mango. Cut the pineapple into chunks and peel and dice the mango."
        },
        {
          "step": 2,
          "text": "In a large blender, combine the pineapple chunks and diced mango."
        },
        {
          "step": 3,
          "text": "Add the coconut water, freshly squeezed lime juice, and agave syrup (if using) to the blender."
        },
        {
          "step": 4,
          "text": "Blend the mixture on high speed until smooth and well combined."
        },
        {
          "step": 5,
          "text": "Strain the blended mixture through a fine mesh sieve into a large pitcher to remove any pulp, pressing down with a spatula to extract as much juice as possible."
        },
        {
          "step": 6,
          "text": "Once strained, add the sparkling water to the pitcher and gently stir to combine."
        },
        {
          "step": 7,
          "text": "Serve the punch over ice cubes in glasses and garnish with fresh mint leaves."
        },
        {
          "step": 8,
          "text": "Enjoy your refreshing Vegan Tropical Punch!"
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "1g",
        "carbs": "30g",
        "fat": "0g",
        "fiber": "3g",
        "sugar": "20g"
      },
    tags: ["beverage","punch","tropical","vegan","refreshing","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a sweeter punch, adjust the amount of agave syrup to your desired taste. You can also use other tropical fruits like papaya or passion fruit for a unique twist.',
    faqs: [
        {
          "question": "Can I make this punch ahead of time?",
          "answer": "Yes, you can prepare the punch and store it in the refrigerator for up to 24 hours. Just add the sparkling water right before serving to keep it fizzy."
        }
      ],
    tips: ["Use frozen fruits for a chilled punch without adding ice.","Experiment with different fruit juices like orange or guava for variations."],
    variations: ["Add a splash of rum or vodka for an adult version.","Make it a green punch by adding spinach or kale to the blend."],
    storage: 'Store any leftover punch in an airtight container in the refrigerator for up to 2 days. If the punch starts to lose its fizz, consider adding more sparkling water before serving.',
  },
  {
    id: '1767013043308.566',
    title: 'Vegan Cappuccino',
    slug: 'vegan-cappuccino',
    description: 'Indulge in this rich and creamy vegan cappuccino that offers the perfect balance of espresso and frothy plant-based milk, making it a delightful treat for coffee lovers.',
    prologue: 'Looking for a delicious vegan alternative to the classic cappuccino? This whole-food-plant-based recipe from vegancooking.recipes will satisfy your coffee cravings without any animal products. With simple ingredients and easy steps, you can whip up a creamy, frothy cappuccino that’s perfect for any time of day. Enjoy the rich flavors while knowing you’re sticking to your plant-based lifestyle!',
    image: '/recipe-images/vegan-cappuccino-1767013045575.webp',
    prepTime: 5,
    cookTime: 5,
    totalTime: 10,
    servings: 2,
    difficulty: 'easy',
    category: ["beverage"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Espresso coffee",
          "amount": "2",
          "unit": "shots",
          "notes": "Use your favorite espresso blend"
        },
        {
          "name": "Unsweetened almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Or any unsweetened plant-based milk of your choice"
        },
        {
          "name": "Cinnamon",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "For a warm flavor; optional"
        },
        {
          "name": "Cocoa powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "Optional, for a mocha twist"
        },
        {
          "name": "Maple syrup",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Optional, adjust sweetness to taste"
        },
        {
          "name": "Vanilla extract",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "Optional, for added flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Brew two shots of espresso using your espresso machine or a stovetop espresso maker."
        },
        {
          "step": 2,
          "text": "In a small saucepan, heat the almond milk over medium heat until it begins to steam, but do not let it boil."
        },
        {
          "step": 3,
          "text": "Once the milk is heated, use a milk frother or a whisk to froth the milk until it becomes creamy and foamy."
        },
        {
          "step": 4,
          "text": "If using, add cinnamon, cocoa powder, maple syrup, and vanilla extract to the frothed milk; stir until well combined."
        },
        {
          "step": 5,
          "text": "Pour the brewed espresso into two cups, and gently spoon the frothed milk over the espresso."
        },
        {
          "step": 6,
          "text": "Dust with additional cinnamon or cocoa powder on top if desired, and serve immediately."
        }
      ],
    nutritionInfo: {
        "calories": 70,
        "protein": "2g",
        "carbs": "12g",
        "fat": "2g",
        "fiber": "1g",
        "sugar": "3g"
      },
    tags: ["vegan","coffee","beverage","plant-based","caffeine","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Choose unsweetened plant milk to maintain the whole-food-plant-based integrity of the recipe. Almond milk is recommended for its creaminess, but oat or soy milk can also be great alternatives. Always opt for high-quality espresso for the best flavor.',
    faqs: [
        {
          "question": "Can I use instant coffee instead of espresso?",
          "answer": "Yes, you can use instant coffee mixed with hot water, but the flavor will differ from traditional espresso."
        },
        {
          "question": "How can I make this cappuccino stronger?",
          "answer": "You can either add an extra shot of espresso or reduce the amount of almond milk used."
        }
      ],
    tips: ["For a thicker foam, use a barista blend of plant milk, which is designed for frothing.","Experiment with different flavorings like hazelnut or caramel syrup for variety."],
    variations: ["Add a splash of peppermint extract for a seasonal twist.","Top with whipped coconut cream for an indulgent treat."],
    storage: 'Cappuccinos are best enjoyed fresh. However, brewed espresso can be stored in the fridge for up to 3 days. Reheat gently before serving.',
  },
];
