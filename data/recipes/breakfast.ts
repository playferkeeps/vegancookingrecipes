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
  {
    id: '1766979810062.4932',
    title: 'Vegan Breakfast Hash',
    slug: 'vegan-breakfast-hash',
    description: 'Start your day with a hearty Vegan Breakfast Hash loaded with nutritious vegetables and spices that will energize you for the day ahead.',
    prologue: 'Looking for a delicious and nutritious way to kickstart your morning? This Vegan Breakfast Hash is not only packed with flavor but also made entirely from whole-food, plant-based ingredients. Perfect for meal prep or a cozy breakfast at home, you\'ll love how easy and satisfying this dish is. Explore more vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-breakfast-hash-1766979811276.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Russet potatoes",
          "amount": "2",
          "unit": "large",
          "notes": "peeled and diced into 1/2-inch cubes"
        },
        {
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "",
          "notes": "diced"
        },
        {
          "name": "Yellow onion",
          "amount": "1",
          "unit": "",
          "notes": "diced"
        },
        {
          "name": "Zucchini",
          "amount": "1",
          "unit": "",
          "notes": "diced"
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
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "fresh or frozen"
        },
        {
          "name": "Smoked paprika",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "Ground cumin",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "or to taste"
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "or to taste"
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
          "text": "Heat the olive oil in a large skillet over medium heat."
        },
        {
          "step": 2,
          "text": "Add the diced potatoes to the skillet and sauté for about 10 minutes, stirring occasionally, until they start to soften."
        },
        {
          "step": 3,
          "text": "Add the diced onion and bell pepper to the skillet and cook for an additional 5 minutes, until the vegetables are softened."
        },
        {
          "step": 4,
          "text": "Stir in the minced garlic, zucchini, smoked paprika, ground cumin, salt, and black pepper. Cook for another 5 minutes, stirring occasionally."
        },
        {
          "step": 5,
          "text": "Add the spinach to the skillet and cook until wilted, about 2-3 minutes."
        },
        {
          "step": 6,
          "text": "Taste and adjust seasoning if needed."
        },
        {
          "step": 7,
          "text": "Serve hot, garnished with fresh parsley."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "5g",
        "carbs": "36g",
        "fat": "8g",
        "fiber": "6g",
        "sugar": "2g"
      },
    tags: ["vegan","breakfast","hash","whole-food","plant-based","breakfast","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a spicier kick, consider adding diced jalapeño or a sprinkle of red pepper flakes. You can substitute sweet potatoes for a different flavor profile.',
    faqs: [
        {
          "question": "Can I make this hash ahead of time?",
          "answer": "Yes, this breakfast hash can be made ahead of time and stored in the refrigerator for up to 3 days. Reheat in a skillet or microwave before serving."
        },
        {
          "question": "Can I use frozen vegetables?",
          "answer": "Absolutely! Frozen vegetables can be used; just ensure they are thawed and drained before adding them to the skillet."
        }
      ],
    tips: ["For extra protein, consider adding cooked black beans or chickpeas to the hash.","Pair with avocado slices or a side of fruit for a complete breakfast."],
    variations: ["Add cooked quinoa or brown rice for a heartier meal.","Substitute different seasonal vegetables like asparagus or mushrooms."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Reheat in a skillet over low heat or in the microwave.',
  },
  {
    id: '1766980605315.941',
    title: 'Vegan Whole-Food Plant-Based Waffles',
    slug: 'vegan-whole-food-plant-based-waffles',
    description: 'Deliciously fluffy and wholesome, these vegan waffles are perfect for a hearty breakfast that will keep you energized all morning.',
    prologue: 'Welcome to vegancooking.recipes! These whole-food plant-based waffles are not only easy to make but also nutritious and satisfying. Made with simple ingredients, they are free from animal products and refined sugars, making them a perfect choice for a healthy breakfast. Enjoy them topped with fresh fruits, maple syrup, or your favorite nut butter for an extra treat.',
    image: '/recipe-images/vegan-whole-food-plant-based-waffles-1766980606505.webp',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "1",
          "unit": "cup",
          "notes": "can be substituted with spelt flour"
        },
        {
          "name": "oats",
          "amount": "1/2",
          "unit": "cup",
          "notes": "use quick oats for best results"
        },
        {
          "name": "baking powder",
          "amount": "2",
          "unit": "tsp",
          "notes": "ensure it's fresh for proper rising"
        },
        {
          "name": "baking soda",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "helps with fluffiness"
        },
        {
          "name": "cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "optional for flavor"
        },
        {
          "name": "salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "balances flavor"
        },
        {
          "name": "plant-based milk",
          "amount": "1",
          "unit": "cup",
          "notes": "almond or oat milk works well"
        },
        {
          "name": "mashed banana",
          "amount": "1",
          "unit": "medium",
          "notes": "acts as a natural sweetener and binder"
        },
        {
          "name": "maple syrup",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for sweetness"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "adds flavor"
        },
        {
          "name": "coconut oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "melted for better mixing"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large mixing bowl, combine the whole wheat flour, oats, baking powder, baking soda, cinnamon, and salt. Whisk these dry ingredients together until well combined."
        },
        {
          "step": 2,
          "text": "In a separate bowl, mix the plant-based milk, mashed banana, maple syrup, vanilla extract, and melted coconut oil. Stir until smooth and well blended."
        },
        {
          "step": 3,
          "text": "Pour the wet mixture into the dry ingredients. Stir gently until just combined; do not overmix. The batter should be slightly lumpy."
        },
        {
          "step": 4,
          "text": "Preheat your waffle iron according to the manufacturer's instructions and lightly grease it with a little coconut oil or cooking spray."
        },
        {
          "step": 5,
          "text": "Once the waffle iron is ready, pour about 1/2 cup of batter onto the hot surface (adjust based on the size of your waffle iron). Close the lid and cook until the waffles are golden brown and crisp, usually about 5 minutes."
        },
        {
          "step": 6,
          "text": "Carefully remove the waffle and repeat with the remaining batter, greasing the waffle iron as needed."
        },
        {
          "step": 7,
          "text": "Serve warm with your favorite toppings such as fresh fruits, nuts, or maple syrup."
        }
      ],
    nutritionInfo: {
        "calories": 200,
        "protein": "6g",
        "carbs": "36g",
        "fat": "6g",
        "fiber": "5g",
        "sugar": "4g"
      },
    tags: ["breakfast","vegan","waffles","whole-food plant-based","healthy","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour is a great source of fiber and nutrients. You can substitute it with gluten-free flour or spelt flour if needed. The mashed banana not only sweetens the waffles but also adds moisture and helps bind the ingredients together. If you\'re allergic to bananas, you can use unsweetened applesauce instead.',
    faqs: [
        {
          "question": "Can I make the batter ahead of time?",
          "answer": "Yes, you can prepare the batter the night before and store it in the refrigerator. Just give it a good stir before using, as it may thicken."
        },
        {
          "question": "What can I use instead of coconut oil?",
          "answer": "You can use any neutral oil like canola or avocado oil, or even unsweetened applesauce for a lower-fat option."
        }
      ],
    tips: ["Make sure not to overmix the batter to keep the waffles light and fluffy.","Experiment with add-ins like blueberries, chocolate chips, or nuts for extra flavor and texture."],
    variations: ["Add a tablespoon of cocoa powder for chocolate waffles.","Use different spices like nutmeg or cardamom for a unique flavor twist."],
    storage: 'Store leftover waffles in an airtight container in the refrigerator for up to 3 days. You can also freeze them for up to 3 months; just reheat in a toaster or oven before serving.',
  },
  {
    id: '1766980834624.6309',
    title: 'Vegan Breakfast Cookies',
    slug: 'vegan-breakfast-cookies',
    description: 'These delightful vegan breakfast cookies are packed with wholesome ingredients, making them the perfect grab-and-go breakfast option.',
    prologue: 'Start your day off right with these delicious Vegan Breakfast Cookies! Made with whole-food, plant-based ingredients, these cookies are not only nutritious but also incredibly satisfying. Perfect for a busy morning, they provide a balanced mix of energy, fiber, and protein. Discover more vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-breakfast-cookies-1766980835764.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 12,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Rolled oats",
          "amount": "2",
          "unit": "cups",
          "notes": "Use gluten-free oats if needed."
        },
        {
          "name": "Mashed ripe bananas",
          "amount": "2",
          "unit": "medium",
          "notes": "Ensure they are very ripe for sweetness."
        },
        {
          "name": "Natural almond butter",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Can substitute with peanut butter."
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Adjust for sweetness preference."
        },
        {
          "name": "Chia seeds",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Mixed with 6 tablespoons of water for egg replacement."
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Ensure it's aluminum-free."
        },
        {
          "name": "Cinnamon",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Freshly ground for best flavor."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "Optional, adjust to taste."
        },
        {
          "name": "Dark chocolate chips",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Use dairy-free chips."
        },
        {
          "name": "Chopped nuts (walnuts or pecans)",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Optional for added crunch."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a baking sheet with parchment paper."
        },
        {
          "step": 2,
          "text": "In a small bowl, mix the chia seeds with 6 tablespoons of water and let it sit for about 5 minutes to thicken."
        },
        {
          "step": 3,
          "text": "In a large mixing bowl, combine the rolled oats, baking powder, cinnamon, and salt."
        },
        {
          "step": 4,
          "text": "In another bowl, mash the ripe bananas until smooth. Add the almond butter, maple syrup, and the chia seed mixture. Stir until well combined."
        },
        {
          "step": 5,
          "text": "Pour the wet ingredients into the dry ingredients and mix until just combined. Fold in the dark chocolate chips and nuts if using."
        },
        {
          "step": 6,
          "text": "Using a tablespoon, scoop the cookie dough onto the prepared baking sheet, spacing them about 2 inches apart."
        },
        {
          "step": 7,
          "text": "Bake for 15-20 minutes or until the edges are golden brown. Keep an eye on them to avoid over-baking."
        },
        {
          "step": 8,
          "text": "Once done, remove from the oven and let them cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "3g",
        "carbs": "18g",
        "fat": "5g",
        "fiber": "2g",
        "sugar": "4g"
      },
    tags: ["vegan","breakfast","cookies","whole-food","healthy","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Using ripe bananas enhances sweetness and moisture. Feel free to replace almond butter with any nut or seed butter of your choice. If you want a nut-free version, use sunflower seed butter.',
    faqs: [
        {
          "question": "Can I freeze these cookies?",
          "answer": "Yes, these cookies freeze well. Store them in an airtight container or a zip-lock bag for up to 3 months."
        },
        {
          "question": "How do I store leftover cookies?",
          "answer": "Store leftover cookies in an airtight container at room temperature for up to a week or in the refrigerator for up to two weeks."
        }
      ],
    tips: ["For added flavor, consider adding a pinch of nutmeg or vanilla extract to the wet ingredients.","Experiment with different mix-ins like dried fruits or seeds to customize your cookies."],
    variations: ["Add shredded coconut for a tropical twist.","Replace chocolate chips with dried cranberries or raisins for a fruity version."],
    storage: 'Store in an airtight container at room temperature for up to a week or refrigerate for longer freshness. For extended storage, freeze in a single layer, then transfer to a freezer-safe bag.',
  },
];
