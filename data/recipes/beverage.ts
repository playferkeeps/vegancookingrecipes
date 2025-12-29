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
];
