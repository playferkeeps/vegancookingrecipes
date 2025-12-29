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
  {
    id: '1766990225029.9785',
    title: 'Vegan Whole-Food-Plant-Based English Muffins',
    slug: 'vegan-whole-food-plant-based-english-muffins',
    description: 'These fluffy, perfectly toasted vegan English muffins are a delicious and healthy way to start your day. Enjoy them with your favorite spread or as a base for avocado toast!',
    prologue: 'Discover the joy of making your own English muffins with this simple vegan recipe. Perfect for a wholesome breakfast, these muffins are made entirely from whole plant foods, ensuring you enjoy every delicious bite without any animal products. At vegancooking.recipes, we believe in creating nutritious meals that are easy to prepare. Let\'s get started on this delightful breakfast treat!',
    image: '/recipe-images/vegan-whole-food-plant-based-english-muffins-1766990226866.webp',
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 8,
    difficulty: 'medium',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "3",
          "unit": "cups",
          "notes": "plus extra for dusting"
        },
        {
          "name": "warm water",
          "amount": "1",
          "unit": "cup",
          "notes": "about 110°F (43°C)"
        },
        {
          "name": "active dry yeast",
          "amount": "2",
          "unit": "tsp",
          "notes": "instant yeast can also be used"
        },
        {
          "name": "maple syrup",
          "amount": "1",
          "unit": "tbsp",
          "notes": "to feed the yeast"
        },
        {
          "name": "sea salt",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "ground flaxseed",
          "amount": "2",
          "unit": "tbsp",
          "notes": "mixed with 6 tbsp water for flax egg"
        },
        {
          "name": "olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "optional for added richness"
        },
        {
          "name": "cornmeal",
          "amount": "1",
          "unit": "cup",
          "notes": "for dusting the baking surface"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a small bowl, combine the warm water and maple syrup. Sprinkle the active dry yeast over the top and let it sit for about 5-10 minutes until frothy."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour, sea salt, and ground flaxseed (mixed with water). Stir until combined."
        },
        {
          "step": 3,
          "text": "Once the yeast mixture is frothy, add it to the dry ingredients along with the olive oil. Mix until a dough begins to form."
        },
        {
          "step": 4,
          "text": "Turn the dough onto a lightly floured surface and knead for about 5-7 minutes until smooth and elastic."
        },
        {
          "step": 5,
          "text": "Shape the dough into a ball and place it in a lightly greased bowl. Cover with a damp kitchen towel and let it rise in a warm place for about 1 hour or until doubled in size."
        },
        {
          "step": 6,
          "text": "After the dough has risen, punch it down and turn it out onto a floured surface. Roll it out to about 1-inch thickness."
        },
        {
          "step": 7,
          "text": "Using a round cutter (about 3 inches in diameter), cut out muffins from the dough. Place each muffin onto a baking sheet dusted with cornmeal."
        },
        {
          "step": 8,
          "text": "Cover the muffins with a damp towel and let them rise for another 30 minutes."
        },
        {
          "step": 9,
          "text": "Preheat a griddle or skillet over medium heat. Carefully transfer the muffins to the hot skillet, cooking them for about 6-7 minutes on each side until golden brown."
        },
        {
          "step": 10,
          "text": "Once cooked, transfer the muffins to a wire rack to cool before slicing."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "5g",
        "carbs": "30g",
        "fat": "2g",
        "fiber": "4g",
        "sugar": "1g"
      },
    tags: ["breakfast","vegan","whole food plant-based","baking","muffins","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute whole wheat flour with spelt flour or a gluten-free blend if desired. For a sweeter muffin, add a tablespoon of sugar or a mashed banana to the dough.',
    faqs: [
        {
          "question": "Can I use all-purpose flour instead of whole wheat flour?",
          "answer": "Yes, you can use all-purpose flour, but the muffins will be less nutritious and may lack some flavor."
        },
        {
          "question": "How can I store leftover muffins?",
          "answer": "Store your English muffins in an airtight container at room temperature for up to 3 days, or freeze them for longer storage."
        }
      ],
    tips: ["Make sure your water is warm but not too hot, as it can kill the yeast.","For extra flavor, consider adding herbs or spices to the dough."],
    variations: ["Add dried fruits like cranberries or blueberries for a fruity twist.","Incorporate seeds like sunflower or pumpkin for added texture and nutrition."],
    storage: 'Store in an airtight container at room temperature for 3 days. For longer storage, freeze the muffins individually and store in a freezer-safe bag for up to 3 months.',
  },
  {
    id: '1766990298993.2178',
    title: 'Vegan Energy Bars',
    slug: 'vegan-energy-bars',
    description: 'These wholesome energy bars are packed with nutrients, perfect for a quick breakfast or a post-workout snack.',
    prologue: 'Discover the ultimate vegan energy bars that are not only easy to make but also incredibly satisfying and nutritious. Made with whole-food plant-based ingredients, these bars provide a perfect balance of protein, healthy fats, and fiber to fuel your day. Perfect for breakfast or a quick snack, this recipe from vegancooking.recipes is a must-try for anyone looking to eat healthier without sacrificing flavor.',
    image: '/recipe-images/vegan-energy-bars-1766990301155.webp',
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
          "name": "Almond butter",
          "amount": "1",
          "unit": "cup",
          "notes": "Natural almond butter is best."
        },
        {
          "name": "Maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Adjust for sweetness preference."
        },
        {
          "name": "Chia seeds",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Soak in water for 15 minutes to form a gel."
        },
        {
          "name": "Dried cranberries",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Or use any dried fruit of your choice."
        },
        {
          "name": "Pumpkin seeds",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Raw or roasted, unsalted."
        },
        {
          "name": "Cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "For added flavor."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "Enhances sweetness."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large mixing bowl, combine the rolled oats, almond butter, and maple syrup."
        },
        {
          "step": 2,
          "text": "In a separate bowl, mix the soaked chia seeds with the dried cranberries, pumpkin seeds, cinnamon, and salt."
        },
        {
          "step": 3,
          "text": "Add the chia seed mixture to the oat mixture and stir until everything is well combined."
        },
        {
          "step": 4,
          "text": "Line an 8x8 inch baking dish with parchment paper, allowing some overhang for easy removal."
        },
        {
          "step": 5,
          "text": "Transfer the mixture into the lined baking dish, pressing it down firmly and evenly."
        },
        {
          "step": 6,
          "text": "Refrigerate for at least 1 hour to set."
        },
        {
          "step": 7,
          "text": "Once set, lift the bars out using the parchment paper and cut into 12 equal squares."
        },
        {
          "step": 8,
          "text": "Store in an airtight container in the fridge for up to 1 week."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "5g",
        "carbs": "27g",
        "fat": "8g",
        "fiber": "4g",
        "sugar": "6g"
      },
    tags: ["breakfast","snack","energy bars","whole-food-plant-based","vegan"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute almond butter with peanut butter or sunflower seed butter for different flavors. You can also swap dried cranberries for raisins or chopped dates based on your preference.',
    faqs: [
        {
          "question": "Can I bake these energy bars?",
          "answer": "No, this recipe is designed to be no-bake for a chewy texture and to retain the nutrients in the ingredients."
        },
        {
          "question": "How can I make these bars more protein-rich?",
          "answer": "You can add a scoop of your favorite plant-based protein powder to the mixture."
        }
      ],
    tips: ["For easier mixing, warm the almond butter slightly in the microwave before adding to the dry ingredients.","Make sure to press the mixture firmly into the baking dish for denser bars."],
    variations: ["Add shredded coconut for a tropical twist.","Incorporate dark chocolate chips for a sweeter treat."],
    storage: 'Store the energy bars in an airtight container in the refrigerator for up to 1 week. You can also freeze them for up to 3 months; just wrap each bar individually in plastic wrap and place them in a freezer-safe container.',
  },
  {
    id: '1766990471322.8403',
    title: 'Vegan Smoothie Bowl',
    slug: 'vegan-smoothie-bowl',
    description: 'Start your day with a vibrant and nutritious vegan smoothie bowl, packed with fruits and topped with crunchy granola and seeds.',
    prologue: 'This vegan smoothie bowl is not only delicious but also a powerhouse of nutrients, perfect for a wholesome breakfast. Featuring a blend of frozen fruits and plant-based milk, it\'s customizable to suit your taste. Discover more exciting vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-smoothie-bowl-1766990472660.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Frozen banana",
          "amount": "2",
          "unit": "medium",
          "notes": "peeled and sliced"
        },
        {
          "name": "Frozen mixed berries",
          "amount": "1",
          "unit": "cup",
          "notes": "such as strawberries, blueberries, and raspberries"
        },
        {
          "name": "Unsweetened almond milk",
          "amount": "1/2",
          "unit": "cup",
          "notes": "or any preferred plant-based milk"
        },
        {
          "name": "Chia seeds",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for thickening"
        },
        {
          "name": "Maple syrup",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "optional, for sweetness"
        },
        {
          "name": "Granola",
          "amount": "1/2",
          "unit": "cup",
          "notes": "for topping"
        },
        {
          "name": "Sliced fresh fruit",
          "amount": "1",
          "unit": "cup",
          "notes": "such as kiwi, banana, or mango"
        },
        {
          "name": "Pumpkin seeds",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for topping"
        },
        {
          "name": "Coconut flakes",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a blender, combine the frozen banana, frozen mixed berries, almond milk, chia seeds, and maple syrup (if using)."
        },
        {
          "step": 2,
          "text": "Blend on high until smooth and creamy, stopping to scrape down the sides if necessary."
        },
        {
          "step": 3,
          "text": "Pour the smoothie mixture into two bowls."
        },
        {
          "step": 4,
          "text": "Top each bowl with granola, sliced fresh fruit, pumpkin seeds, and coconut flakes."
        },
        {
          "step": 5,
          "text": "Serve immediately with a spoon and enjoy your nutritious breakfast!"
        }
      ],
    nutritionInfo: {
        "calories": 320,
        "protein": "6g",
        "carbs": "60g",
        "fat": "10g",
        "fiber": "12g",
        "sugar": "22g"
      },
    tags: ["breakfast","smoothie","vegan","whole-food-plant-based","healthy"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute the almond milk with oat milk or soy milk. For added protein, consider adding a scoop of vegan protein powder.',
    faqs: [
        {
          "question": "Can I make this smoothie bowl ahead of time?",
          "answer": "Yes, you can prepare the smoothie base in advance and store it in the fridge for up to 24 hours. However, it's best to add the toppings just before serving for freshness."
        },
        {
          "question": "What can I use as a topping?",
          "answer": "Feel free to get creative! Other toppings can include nut butters, hemp seeds, or even cacao nibs."
        }
      ],
    tips: ["For a thicker smoothie bowl, use less almond milk or add more frozen fruit.","Make sure to use ripe bananas for a naturally sweet flavor."],
    variations: ["Add spinach or kale for an extra nutrient boost without changing the flavor significantly.","Swap out the frozen berries for mango or pineapple for a tropical twist."],
    storage: 'Store any leftover smoothie in an airtight container in the refrigerator for up to 24 hours. Stir well before serving, as it may separate.',
  },
  {
    id: '1766991011901.832',
    title: 'Vegan Whole Food Plant-Based Muffins',
    slug: 'vegan-whole-food-plant-based-muffins',
    description: 'Deliciously moist and fluffy muffins packed with wholesome ingredients, perfect for a nutritious breakfast!',
    prologue: 'Start your day with these delightful Vegan Whole Food Plant-Based Muffins that are not only easy to make but also guilt-free. Made with whole grains and natural sweeteners, these muffins are a great way to fuel your morning while sticking to a healthy lifestyle. Explore the world of vegan cooking with vegancooking.recipes and enjoy every bite of these wholesome treats.',
    image: '/recipe-images/vegan-whole-food-plant-based-muffins-1766991013614.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 12,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "can substitute with spelt flour"
        },
        {
          "name": "baking powder",
          "amount": "2",
          "unit": "tbsp",
          "notes": "ensure it's aluminum-free"
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "tsp",
          "notes": "for better rise"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "to enhance flavors"
        },
        {
          "name": "maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "can substitute with agave syrup"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1",
          "unit": "cup",
          "notes": "acts as a binder and moisture"
        },
        {
          "name": "almond milk",
          "amount": "1/2",
          "unit": "cup",
          "notes": "or any plant-based milk"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for flavor"
        },
        {
          "name": "fresh blueberries",
          "amount": "1",
          "unit": "cup",
          "notes": "can use frozen if fresh is not available"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a muffin tin with paper liners or lightly grease it."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour, baking powder, baking soda, and salt. Whisk until well combined."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the maple syrup, applesauce, almond milk, and vanilla extract until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir gently until just combined. Do not overmix."
        },
        {
          "step": 5,
          "text": "Fold in the fresh blueberries carefully."
        },
        {
          "step": 6,
          "text": "Scoop the batter into the prepared muffin tin, filling each cup about 3/4 full."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 20-25 minutes, or until a toothpick inserted in the center comes out clean."
        },
        {
          "step": 8,
          "text": "Allow the muffins to cool in the tin for 5 minutes before transferring them to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 130,
        "protein": "3g",
        "carbs": "24g",
        "fat": "2g",
        "fiber": "3g",
        "sugar": "5g"
      },
    tags: ["breakfast","muffins","vegan","whole food plant-based","easy recipes","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour is a great source of fiber. You can substitute the blueberries with other fruits like raspberries or chopped bananas. If you prefer a sweeter muffin, increase the maple syrup to 3/4 cup.',
    faqs: [
        {
          "question": "Can I use gluten-free flour?",
          "answer": "Yes, you can substitute the whole wheat flour with a gluten-free all-purpose flour blend, but the texture may vary."
        },
        {
          "question": "How can I make these muffins sweeter?",
          "answer": "You can add more maple syrup or include a mashed banana for natural sweetness."
        }
      ],
    tips: ["Make sure not to overmix the batter to keep the muffins light and fluffy.","You can add nuts or seeds for extra texture and nutrition."],
    variations: ["Try adding a teaspoon of cinnamon for a warm flavor.","Substitute blueberries with chopped apples and a sprinkle of cinnamon for apple muffins."],
    storage: 'Store muffins in an airtight container at room temperature for up to 3 days, or refrigerate them for up to a week. You can also freeze the muffins for up to 3 months; just thaw them at room temperature before enjoying.',
  },
  {
    id: '1766991102115.8777',
    title: 'Vegan French Toast',
    slug: 'vegan-french-toast',
    description: 'Delight in this fluffy, golden-brown vegan French toast, perfect for a cozy breakfast or brunch. Serve it with your favorite maple syrup and fresh fruit for a deliciously satisfying start to your day.',
    prologue: 'Discover the joy of vegan cooking with this whole-food-plant-based approach to French toast, a breakfast classic that is both indulgent and nutritious. Using simple, wholesome ingredients, you can create a delightful dish that everyone will love. For more vegan recipes and inspiration, visit vegancooking.recipes.',
    image: '/recipe-images/vegan-french-toast-1766991103390.webp',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 2,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole grain bread",
          "amount": "4",
          "unit": "slices",
          "notes": "Use thick slices for better texture"
        },
        {
          "name": "banana",
          "amount": "1",
          "unit": "medium",
          "notes": "Ripe banana for sweetness"
        },
        {
          "name": "almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Unsweetened or lightly sweetened"
        },
        {
          "name": "ground flaxseed",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Acts as a binding agent"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For flavor"
        },
        {
          "name": "cinnamon",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Optional, for extra spice"
        },
        {
          "name": "nutmeg",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "Optional, for flavor"
        },
        {
          "name": "coconut oil",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "For frying"
        },
        {
          "name": "maple syrup",
          "amount": "to taste",
          "unit": "none",
          "notes": "For serving"
        },
        {
          "name": "fresh fruit",
          "amount": "to taste",
          "unit": "none",
          "notes": "Such as berries or banana slices for topping"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a mixing bowl, mash the ripe banana until smooth."
        },
        {
          "step": 2,
          "text": "Add the almond milk, ground flaxseed, vanilla extract, cinnamon, and nutmeg to the bowl. Whisk until well combined."
        },
        {
          "step": 3,
          "text": "Heat a non-stick skillet over medium heat and add the coconut oil."
        },
        {
          "step": 4,
          "text": "Dip each slice of whole grain bread into the batter, ensuring both sides are well coated."
        },
        {
          "step": 5,
          "text": "Place the coated bread slices onto the skillet and cook for about 3-4 minutes on each side, or until golden brown."
        },
        {
          "step": 6,
          "text": "Repeat until all slices are cooked, adding more coconut oil to the skillet as needed."
        },
        {
          "step": 7,
          "text": "Serve warm with maple syrup and fresh fruit on top."
        }
      ],
    nutritionInfo: {
        "calories": 300,
        "protein": "8g",
        "carbs": "52g",
        "fat": "10g",
        "fiber": "6g",
        "sugar": "8g"
      },
    tags: ["breakfast","vegan","whole food","plant-based","easy","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Use gluten-free bread for a gluten-free version. You can substitute almond milk with any other plant-based milk like oat or soy. Adjust the sweetness of the batter by adding a little maple syrup or agave nectar if desired.',
    faqs: [
        {
          "question": "Can I use other types of bread?",
          "answer": "Yes, feel free to use any type of bread you prefer, such as sourdough, whole wheat, or gluten-free."
        },
        {
          "question": "What can I use instead of banana?",
          "answer": "You can replace the banana with 1/4 cup of applesauce or silken tofu for a different flavor and texture."
        }
      ],
    tips: ["For extra flavor, add a pinch of salt to the batter.","Let the bread soak in the batter for a few seconds longer for a richer texture."],
    variations: ["Add a tablespoon of cocoa powder to the batter for chocolate-flavored French toast.","Incorporate a tablespoon of almond butter or peanut butter into the batter for a nutty twist."],
    storage: 'Store any leftover French toast in an airtight container in the refrigerator for up to 3 days. Reheat in a skillet or toaster oven before serving.',
  },
  {
    id: '1766991419457.073',
    title: 'Vegan Breakfast Casserole',
    slug: 'vegan-breakfast-casserole',
    description: 'This hearty vegan breakfast casserole is packed with nutritious whole-food ingredients, making it the perfect way to start your day!',
    prologue: 'Kickstart your morning with a delicious vegan breakfast casserole that’s not only wholesome but also satisfying. Loaded with colorful vegetables, protein-rich tofu, and a touch of savory spices, this dish is perfect for brunch gatherings or meal prep for the week ahead. Discover how to create this delightful recipe on vegancooking.recipes, your go-to source for plant-based culinary inspiration.',
    image: '/recipe-images/vegan-breakfast-casserole-1766991421204.webp',
    prepTime: 20,
    cookTime: 45,
    totalTime: 65,
    servings: 6,
    difficulty: 'medium',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Firm tofu",
          "amount": "14",
          "unit": "oz",
          "notes": "drained and crumbled"
        },
        {
          "name": "Unsweetened almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "or any other plant-based milk"
        },
        {
          "name": "Nutritional yeast",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for a cheesy flavor"
        },
        {
          "name": "Turmeric powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "for color and flavor"
        },
        {
          "name": "Black salt (kala namak)",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "for an eggy taste"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for sautéing"
        },
        {
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "cup",
          "notes": "diced"
        },
        {
          "name": "Green bell pepper",
          "amount": "1",
          "unit": "cup",
          "notes": "diced"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "fresh, chopped"
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
          "name": "Whole grain bread",
          "amount": "4",
          "unit": "slices",
          "notes": "cubed"
        },
        {
          "name": "Black pepper",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "to taste"
        },
        {
          "name": "Paprika",
          "amount": "1",
          "unit": "tsp",
          "notes": "for added flavor"
        },
        {
          "name": "Fresh parsley",
          "amount": "2",
          "unit": "tbsp",
          "notes": "chopped, for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a large skillet, heat the olive oil over medium heat. Add the diced onion and sauté for about 3-4 minutes until translucent."
        },
        {
          "step": 3,
          "text": "Add the minced garlic and continue to sauté for another minute until fragrant."
        },
        {
          "step": 4,
          "text": "Stir in the diced red and green bell peppers, and cook for an additional 5 minutes until they soften."
        },
        {
          "step": 5,
          "text": "Add the chopped spinach and cook until wilted, about 2 minutes. Remove from heat."
        },
        {
          "step": 6,
          "text": "In a large mixing bowl, combine the crumbled tofu, almond milk, nutritional yeast, turmeric, black salt, black pepper, and paprika. Mix well to combine."
        },
        {
          "step": 7,
          "text": "Add the sautéed vegetable mixture to the tofu mixture and stir until well combined."
        },
        {
          "step": 8,
          "text": "Gently fold in the cubed whole grain bread until evenly distributed."
        },
        {
          "step": 9,
          "text": "Transfer the mixture into a greased 9x13 inch baking dish, spreading it out evenly."
        },
        {
          "step": 10,
          "text": "Bake in the preheated oven for 30-35 minutes, or until the top is golden and set."
        },
        {
          "step": 11,
          "text": "Remove from the oven and let it cool for a few minutes before slicing. Garnish with fresh parsley before serving."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "10g",
        "carbs": "30g",
        "fat": "8g",
        "fiber": "5g",
        "sugar": "2g"
      },
    tags: ["breakfast","casserole","vegan","whole-food plant-based","meal prep","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute the vegetables based on what you have on hand. Broccoli, mushrooms, or zucchini can also be great additions. For a gluten-free option, use gluten-free bread.',
    faqs: [
        {
          "question": "Can I make this casserole ahead of time?",
          "answer": "Yes, you can prepare the casserole the night before, cover it, and store it in the refrigerator. Just bake it in the morning."
        },
        {
          "question": "How do I store leftovers?",
          "answer": "Store leftovers in an airtight container in the refrigerator for up to 4 days. You can also freeze portions for up to 3 months."
        }
      ],
    tips: ["For added flavor, try adding your favorite herbs like thyme or oregano.","Serve with avocado slices or a side of fresh fruit for a complete breakfast."],
    variations: ["Add vegan cheese on top before baking for a melty texture.","Mix in some cooked quinoa for an extra protein boost."],
    storage: 'Store the casserole in an airtight container in the refrigerator for up to 4 days. To freeze, cut into portions, wrap tightly in plastic wrap, and place in a freezer-safe container for up to 3 months. Reheat in the oven or microwave before serving.',
  },
  {
    id: '1766991847958.7412',
    title: 'Vegan Breakfast Smoothie',
    slug: 'vegan-breakfast-smoothie',
    description: 'Start your day with a refreshing and nutritious vegan breakfast smoothie packed with fruits, greens, and healthy fats.',
    prologue: 'This Vegan Breakfast Smoothie is a quick and delicious way to fuel your morning with whole-food plant-based ingredients. Perfect for busy mornings, this smoothie combines the goodness of bananas, spinach, and almond milk, creating a creamy and satisfying drink. At vegancooking.recipes, we believe that healthy breakfasts can be both easy and delightful, so let’s dive into this energizing recipe!',
    image: '/recipe-images/vegan-breakfast-smoothie-1766991850634.webp',
    prepTime: 5,
    cookTime: 20,
    totalTime: 25,
    servings: 2,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Banana",
          "amount": "2",
          "unit": "medium",
          "notes": "ripe, frozen if desired for a creamier texture"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "fresh, packed"
        },
        {
          "name": "Almond Milk",
          "amount": "1",
          "unit": "cup",
          "notes": "unsweetened"
        },
        {
          "name": "Chia Seeds",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for added fiber and omega-3s"
        },
        {
          "name": "Peanut Butter",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "natural, unsweetened"
        },
        {
          "name": "Maple Syrup",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "optional, for sweetness"
        },
        {
          "name": "Ice Cubes",
          "amount": "1",
          "unit": "cup",
          "notes": "optional, for a chilled smoothie"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Peel the bananas and break them into smaller pieces. If using frozen bananas, remove them from the freezer and allow them to sit at room temperature for a few minutes."
        },
        {
          "step": 2,
          "text": "In a blender, combine the banana pieces, fresh spinach, almond milk, chia seeds, and peanut butter."
        },
        {
          "step": 3,
          "text": "If you prefer a sweeter smoothie, add the maple syrup to the blender."
        },
        {
          "step": 4,
          "text": "Add the ice cubes if you want a chilled smoothie."
        },
        {
          "step": 5,
          "text": "Blend on high speed until smooth and creamy, about 30-60 seconds. If the smoothie is too thick, add a little more almond milk to reach your desired consistency."
        },
        {
          "step": 6,
          "text": "Taste the smoothie and adjust sweetness or thickness as needed. Pour into two glasses and enjoy!"
        }
      ],
    nutritionInfo: {
        "calories": 300,
        "protein": "10g",
        "carbs": "45g",
        "fat": "12g",
        "fiber": "8g",
        "sugar": "15g"
      },
    tags: ["vegan","breakfast","smoothie","healthy","whole-food","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Spinach can be substituted with kale or another leafy green. For nut allergies, use sunflower seed butter instead of peanut butter.',
    faqs: [
        {
          "question": "Can I make this smoothie ahead of time?",
          "answer": "Yes, you can prepare the smoothie in advance and store it in the refrigerator for up to 24 hours. Just give it a good shake or stir before drinking."
        }
      ],
    tips: ["Use ripe bananas for the best sweetness and creaminess.","Blend the spinach with the liquid first for a smoother texture."],
    variations: ["Add a scoop of your favorite plant-based protein powder for extra protein.","Substitute almond milk with coconut water for a tropical twist."],
    storage: 'Store any leftover smoothie in an airtight container in the refrigerator for up to 24 hours. Stir well before consuming.',
  },
  {
    id: '1766992583341.9846',
    title: 'Vegan Whole-Food Plant-Based Granola',
    slug: 'vegan-whole-food-plant-based-granola',
    description: 'This wholesome granola is packed with nutritious ingredients, making it the perfect breakfast option to fuel your day.',
    prologue: 'Discover the joy of homemade granola with this easy vegan recipe that focuses on whole-food, plant-based ingredients. Perfect for breakfast or a healthy snack, this granola is not only delicious but also customizable to suit your taste. Visit vegancooking.recipes for more wholesome vegan recipes that nourish your body and soul.',
    image: '/recipe-images/vegan-whole-food-plant-based-granola-1766992585534.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 8,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Rolled oats",
          "amount": "3",
          "unit": "cups",
          "notes": "Use gluten-free oats if necessary."
        },
        {
          "name": "Chopped nuts (almonds, walnuts, or pecans)",
          "amount": "1",
          "unit": "cup",
          "notes": "Choose your favorite nuts."
        },
        {
          "name": "Pumpkin seeds",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Raw or roasted, unsalted."
        },
        {
          "name": "Sunflower seeds",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Raw or roasted, unsalted."
        },
        {
          "name": "Chia seeds",
          "amount": "1/4",
          "unit": "cup",
          "notes": "For added nutrition."
        },
        {
          "name": "Maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Can be substituted with agave syrup."
        },
        {
          "name": "Natural almond butter",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Peanut butter can be used as an alternative."
        },
        {
          "name": "Cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "Enhances flavor."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "For additional flavor."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "Balances sweetness."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a large baking sheet with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the rolled oats, chopped nuts, pumpkin seeds, sunflower seeds, chia seeds, and cinnamon."
        },
        {
          "step": 3,
          "text": "In a separate bowl, whisk together the maple syrup, almond butter, vanilla extract, and salt until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet mixture over the dry ingredients and stir well until all ingredients are evenly coated."
        },
        {
          "step": 5,
          "text": "Spread the granola mixture evenly onto the prepared baking sheet."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 20-25 minutes, stirring every 10 minutes to ensure even toasting."
        },
        {
          "step": 7,
          "text": "Once golden and fragrant, remove from the oven and let it cool completely on the baking sheet."
        },
        {
          "step": 8,
          "text": "Once cooled, break into clusters and store in an airtight container."
        }
      ],
    nutritionInfo: {
        "calories": 200,
        "protein": "6g",
        "carbs": "30g",
        "fat": "8g",
        "fiber": "5g",
        "sugar": "5g"
      },
    tags: ["breakfast","snack","granola","vegan","whole-food","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to customize the nuts and seeds according to your preference or what you have on hand. You can also add dried fruit after baking for extra sweetness and texture.',
    faqs: [
        {
          "question": "Can I make this granola gluten-free?",
          "answer": "Yes, simply use certified gluten-free rolled oats to ensure the granola is gluten-free."
        },
        {
          "question": "How long will this granola last?",
          "answer": "When stored in an airtight container, this granola can last up to 2 weeks at room temperature."
        }
      ],
    tips: ["For a sweeter granola, feel free to add more maple syrup or a sprinkle of coconut sugar.","Experiment with spices like nutmeg or ginger for different flavor profiles."],
    variations: ["Add dried fruits like cranberries or raisins after baking for sweetness.","Include coconut flakes for added texture and flavor."],
    storage: 'Store granola in an airtight container at room temperature for up to 2 weeks. For longer storage, keep it in the refrigerator for up to 1 month.',
  },
  {
    id: '1766992986463.3958',
    title: 'Vegan Overnight Oats',
    slug: 'vegan-overnight-oats',
    description: 'Start your day right with these creamy and nutritious vegan overnight oats, packed with flavor and goodness.',
    prologue: 'Overnight oats are a fantastic, quick breakfast option that can be prepared in advance. This whole-food, plant-based recipe is not only easy to make but also customizable to suit your taste. With ingredients that are wholesome and nutritious, you\'ll find yourself looking forward to breakfast every morning. Explore more delicious vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-overnight-oats-1766992987898.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Rolled oats",
          "amount": "1",
          "unit": "cup",
          "notes": "Use gluten-free oats if needed."
        },
        {
          "name": "Almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Or any unsweetened plant-based milk."
        },
        {
          "name": "Chia seeds",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Helps thicken the mixture."
        },
        {
          "name": "Maple syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Optional for sweetness."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For flavor."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "To enhance flavors."
        },
        {
          "name": "Fresh fruit",
          "amount": "1",
          "unit": "cup",
          "notes": "Berries, banana, or your choice of toppings."
        },
        {
          "name": "Nuts or seeds",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Optional for crunch."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium bowl, combine the rolled oats, chia seeds, and salt."
        },
        {
          "step": 2,
          "text": "Pour in the almond milk, maple syrup, and vanilla extract. Stir well until all ingredients are combined."
        },
        {
          "step": 3,
          "text": "Cover the bowl with a lid or plastic wrap and refrigerate for at least 4 hours, or overnight."
        },
        {
          "step": 4,
          "text": "In the morning, give the oats a good stir. If the mixture is too thick, add a splash more almond milk to reach your desired consistency."
        },
        {
          "step": 5,
          "text": "Serve the oats in bowls or jars, topped with fresh fruit and nuts or seeds as desired."
        },
        {
          "step": 6,
          "text": "Enjoy your nutritious and delicious breakfast!"
        }
      ],
    nutritionInfo: {
        "calories": 350,
        "protein": "10g",
        "carbs": "55g",
        "fat": "12g",
        "fiber": "10g",
        "sugar": "8g"
      },
    tags: ["vegan","breakfast","overnight oats","whole food","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Rolled oats are the best choice for overnight oats, as they absorb liquid well and create a creamy texture. Chia seeds not only thicken the oats but also add healthy omega-3 fatty acids. You can substitute almond milk with coconut milk, soy milk, or oat milk depending on your preference.',
    faqs: [
        {
          "question": "Can I use quick oats instead of rolled oats?",
          "answer": "Yes, but the texture will be different. Quick oats may become mushy."
        },
        {
          "question": "How long can I store overnight oats?",
          "answer": "You can store overnight oats in the refrigerator for up to 5 days in an airtight container."
        }
      ],
    tips: ["Experiment with different plant-based milks for varied flavors.","Add spices like cinnamon or nutmeg for an extra flavor boost."],
    variations: ["Try adding cocoa powder and banana for chocolate banana oats.","Use pumpkin puree and pumpkin spice for a fall-inspired flavor."],
    storage: 'Store overnight oats in an airtight container in the refrigerator. They can be kept for up to 5 days, making them perfect for meal prep.',
  },
];
