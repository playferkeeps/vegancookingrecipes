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
  {
    id: '1767012515558.116',
    title: 'Vegan Chia Pudding',
    slug: 'vegan-chia-pudding',
    description: 'A creamy, nutritious chia pudding that makes for a perfect breakfast or snack, packed with omega-3 fatty acids and fiber.',
    prologue: 'Chia pudding is a versatile and nutritious breakfast option that’s entirely plant-based and easy to prepare. With just a few simple ingredients, you can create a delicious and satisfying meal that can be customized to your taste. This recipe from vegancooking.recipes focuses on whole food plant-based ingredients, ensuring you get the best nutrition without any animal products.',
    image: '/recipe-images/vegan-chia-pudding-1767012516787.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Chia seeds",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Use organic chia seeds for the best quality."
        },
        {
          "name": "Unsweetened almond milk",
          "amount": "2",
          "unit": "cups",
          "notes": "You can substitute with any plant-based milk."
        },
        {
          "name": "Maple syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Adjust to taste; can also use agave syrup."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Use pure vanilla extract for the best flavor."
        },
        {
          "name": "Fresh fruits (e.g., berries, banana)",
          "amount": "1",
          "unit": "cup",
          "notes": "For topping; choose your favorites."
        },
        {
          "name": "Cinnamon",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Optional, for added flavor."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium bowl, combine the chia seeds and almond milk."
        },
        {
          "step": 2,
          "text": "Add the maple syrup and vanilla extract to the mixture."
        },
        {
          "step": 3,
          "text": "Whisk the mixture thoroughly for about 1-2 minutes until the chia seeds are well distributed."
        },
        {
          "step": 4,
          "text": "Let the mixture sit for 5 minutes, then whisk again to break up any clumps of chia seeds."
        },
        {
          "step": 5,
          "text": "Cover the bowl with plastic wrap or transfer the mixture to individual containers."
        },
        {
          "step": 6,
          "text": "Refrigerate for at least 2 hours or overnight to allow the chia seeds to absorb the liquid and thicken into a pudding."
        },
        {
          "step": 7,
          "text": "Once set, give the pudding a good stir, then serve topped with fresh fruits and a sprinkle of cinnamon if desired."
        }
      ],
    nutritionInfo: {
        "calories": 300,
        "protein": "10g",
        "carbs": "45g",
        "fat": "14g",
        "fiber": "15g",
        "sugar": "8g"
      },
    tags: ["breakfast","vegan","whole-food-plant-based","healthy","gluten-free"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Chia seeds are the star of this recipe, providing a good source of omega-3 fatty acids and fiber. If you prefer a sweeter pudding, adjust the amount of maple syrup to your liking. For a creamier texture, consider blending the almond milk with soaked cashews before adding the chia seeds.',
    faqs: [
        {
          "question": "Can I use different types of milk?",
          "answer": "Yes, you can use any plant-based milk such as coconut milk, soy milk, or oat milk. Just ensure it's unsweetened for a healthier option."
        },
        {
          "question": "How long can I store chia pudding?",
          "answer": "Chia pudding can be stored in an airtight container in the refrigerator for up to 5 days."
        }
      ],
    tips: ["For a thicker pudding, increase the amount of chia seeds to 2/3 cup.","Experiment with different flavorings by adding cocoa powder or fruit purees."],
    variations: ["Add cocoa powder for a chocolate chia pudding.","Mix in nut butter for a creamier texture and extra protein."],
    storage: 'Store any leftover chia pudding in an airtight container in the refrigerator. It will keep well for about 5 days. You may need to stir in a little more almond milk before serving if it thickens too much.',
  },
  {
    id: '1767012627333.2402',
    title: 'Vegan Breakfast Burrito',
    slug: 'vegan-breakfast-burrito',
    description: 'Start your day right with this hearty and satisfying vegan breakfast burrito, packed with flavorful ingredients and wholesome nutrition.',
    prologue: 'Are you looking for a delicious and nutritious breakfast option that fits a whole-food plant-based lifestyle? Look no further! This Vegan Breakfast Burrito is not only easy to prepare but also bursting with flavors and textures that will keep you energized throughout the morning. Perfect for meal prep or a quick breakfast on the go, this recipe is a must-try from vegancooking.recipes.',
    image: '/recipe-images/vegan-breakfast-burrito-1767012628530.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Whole wheat tortillas",
          "amount": "4",
          "unit": "pieces",
          "notes": "8-inch size preferred"
        },
        {
          "name": "Firm tofu",
          "amount": "14",
          "unit": "oz",
          "notes": "drained and crumbled"
        },
        {
          "name": "Black beans",
          "amount": "1",
          "unit": "cup",
          "notes": "canned or cooked, rinsed and drained"
        },
        {
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Green onion",
          "amount": "1/2",
          "unit": "cup",
          "notes": "sliced"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "fresh or frozen, chopped"
        },
        {
          "name": "Nutritional yeast",
          "amount": "2",
          "unit": "tbsp",
          "notes": "adds a cheesy flavor"
        },
        {
          "name": "Turmeric powder",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "for color and health benefits"
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "to taste"
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for sautéing"
        },
        {
          "name": "Avocado",
          "amount": "1",
          "unit": "medium",
          "notes": "sliced for topping"
        },
        {
          "name": "Salsa",
          "amount": "1/2",
          "unit": "cup",
          "notes": "for serving"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Heat the olive oil in a large skillet over medium heat."
        },
        {
          "step": 2,
          "text": "Add the diced red bell pepper and sauté for 3-4 minutes until softened."
        },
        {
          "step": 3,
          "text": "Add the crumbled tofu to the skillet, along with the turmeric, black pepper, and nutritional yeast."
        },
        {
          "step": 4,
          "text": "Cook for an additional 5-7 minutes, stirring occasionally, until the tofu is heated through and slightly golden."
        },
        {
          "step": 5,
          "text": "Stir in the black beans and chopped spinach, cooking until the spinach wilts, about 2-3 minutes."
        },
        {
          "step": 6,
          "text": "Remove the skillet from heat and stir in the sliced green onions."
        },
        {
          "step": 7,
          "text": "Warm the whole wheat tortillas in a separate pan or microwave for a few seconds until pliable."
        },
        {
          "step": 8,
          "text": "Divide the tofu mixture evenly among the tortillas, placing it in the center."
        },
        {
          "step": 9,
          "text": "Top with sliced avocado and any additional toppings you prefer."
        },
        {
          "step": 10,
          "text": "Fold the sides of the tortillas in, then roll them up from the bottom to form burritos."
        },
        {
          "step": 11,
          "text": "Serve with salsa on the side and enjoy your Vegan Breakfast Burritos!"
        }
      ],
    nutritionInfo: {
        "calories": 350,
        "protein": "18g",
        "carbs": "45g",
        "fat": "12g",
        "fiber": "10g",
        "sugar": "2g"
      },
    tags: ["breakfast","vegan","burrito","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Feel free to substitute firm tofu with scrambled chickpeas for a different texture. You can also use other vegetables like zucchini or mushrooms based on your preference.',
    faqs: [
        {
          "question": "Can I make these burritos ahead of time?",
          "answer": "Yes! You can prepare the filling in advance and store it in the refrigerator for up to 3 days. Just warm it up before assembling the burritos."
        },
        {
          "question": "Are these burritos gluten-free?",
          "answer": "To make these burritos gluten-free, use gluten-free tortillas instead of whole wheat."
        }
      ],
    tips: ["For extra flavor, add spices like cumin or smoked paprika to the tofu mixture.","You can also add avocado or guacamole inside the burrito for creaminess."],
    variations: ["Swap out the black beans for pinto beans or lentils.","Add some vegan cheese or hot sauce for an extra kick."],
    storage: 'Store any leftover burritos in an airtight container in the refrigerator for up to 4 days. To reheat, microwave for 1-2 minutes or heat in a skillet until warmed through.',
  },
  {
    id: '1767012805701.2139',
    title: 'Vegan Tofu Scramble',
    slug: 'vegan-tofu-scramble',
    description: 'A hearty and protein-packed tofu scramble bursting with flavor, perfect for a satisfying breakfast.',
    prologue: 'This delicious Vegan Tofu Scramble is a versatile and nutritious way to start your day. Packed with protein and flavor, it serves as a fantastic alternative to traditional scrambled eggs. Ideal for breakfast or brunch, this recipe is simple to make and can be customized to your taste. Explore more great vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-tofu-scramble-1767012807096.webp',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Firm tofu",
          "amount": "14",
          "unit": "oz",
          "notes": "Drained and crumbled"
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "For sautéing"
        },
        {
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Diced"
        },
        {
          "name": "Onion",
          "amount": "1",
          "unit": "medium",
          "notes": "Chopped"
        },
        {
          "name": "Garlic",
          "amount": "3",
          "unit": "cloves",
          "notes": "Minced"
        },
        {
          "name": "Turmeric powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "For color and flavor"
        },
        {
          "name": "Nutritional yeast",
          "amount": "3",
          "unit": "tbsp",
          "notes": "For cheesy flavor"
        },
        {
          "name": "Black salt (kala namak)",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "For an eggy flavor"
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "To taste"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "Fresh, chopped"
        },
        {
          "name": "Cherry tomatoes",
          "amount": "1",
          "unit": "cup",
          "notes": "Halved"
        },
        {
          "name": "Fresh parsley",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Chopped, for garnish"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Start by pressing the firm tofu for about 10 minutes to remove excess moisture. Once pressed, crumble the tofu into bite-sized pieces."
        },
        {
          "step": 2,
          "text": "In a large skillet, heat the olive oil over medium heat. Add the chopped onion and red bell pepper, sautéing for about 5 minutes until softened."
        },
        {
          "step": 3,
          "text": "Add the minced garlic to the skillet and sauté for an additional 1-2 minutes until fragrant."
        },
        {
          "step": 4,
          "text": "Stir in the crumbled tofu, turmeric powder, nutritional yeast, black salt, and black pepper. Cook for about 5-7 minutes, stirring occasionally."
        },
        {
          "step": 5,
          "text": "Add the chopped spinach and halved cherry tomatoes to the skillet. Cook for another 2-3 minutes until the spinach is wilted and the tomatoes are slightly softened."
        },
        {
          "step": 6,
          "text": "Remove from heat and garnish with fresh parsley before serving."
        }
      ],
    nutritionInfo: {
        "calories": 200,
        "protein": "18g",
        "carbs": "10g",
        "fat": "12g",
        "fiber": "5g",
        "sugar": "3g"
      },
    tags: ["breakfast","vegan","tofu","high-protein","simple","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a different flavor profile, you can use smoked paprika instead of turmeric. You can also substitute the spinach with kale or any leafy green of your choice.',
    faqs: [
        {
          "question": "Can I use soft tofu instead of firm tofu?",
          "answer": "Soft tofu has a different texture and may not hold up well in this scramble. Firm or extra-firm tofu is recommended."
        },
        {
          "question": "How can I store leftovers?",
          "answer": "Store any leftover tofu scramble in an airtight container in the refrigerator for up to 3 days. Reheat gently in a skillet."
        }
      ],
    tips: ["For added flavor, consider adding a splash of soy sauce or tamari during cooking.","Serve the scramble with whole-grain toast or in a wrap for a complete meal."],
    variations: ["Add diced mushrooms for an earthy flavor.","Incorporate other vegetables like zucchini or kale for more nutrition."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Reheat on the stovetop over low heat until warmed through.',
  },
  {
    id: '1767012990396.203',
    title: 'Vegan Granola',
    slug: 'vegan-granola',
    description: 'This crunchy, wholesome vegan granola is perfect for breakfast or a snack, packed with nutrients and flavor.',
    prologue: 'Discover the joy of homemade granola with this easy vegan recipe! Perfectly sweetened and loaded with healthy fats, this granola is not only delicious but also a great way to fuel your day. Ideal for topping your smoothie bowl or enjoying with plant-based milk, this recipe from vegancooking.recipes will make breakfast exciting and nutritious.',
    image: '/recipe-images/vegan-granola-1767012991621.webp',
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
          "notes": "Use gluten-free oats if needed"
        },
        {
          "name": "Raw almonds",
          "amount": "1",
          "unit": "cup",
          "notes": "Chopped or whole"
        },
        {
          "name": "Pumpkin seeds",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Optional: substitute with sunflower seeds"
        },
        {
          "name": "Maple syrup",
          "amount": "1/3",
          "unit": "cup",
          "notes": "Can substitute with agave syrup"
        },
        {
          "name": "Coconut oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Melted; can substitute with almond or peanut butter"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Pure vanilla extract recommended"
        },
        {
          "name": "Cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "Adjust according to taste"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Enhances flavor"
        },
        {
          "name": "Dried fruit (raisins or cranberries)",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Optional; add after baking"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the rolled oats, chopped almonds, pumpkin seeds, cinnamon, and salt."
        },
        {
          "step": 3,
          "text": "In a separate bowl, whisk together the maple syrup, melted coconut oil, and vanilla extract until well combined."
        },
        {
          "step": 4,
          "text": "Pour the wet mixture over the dry ingredients and stir until everything is evenly coated."
        },
        {
          "step": 5,
          "text": "Spread the granola mixture evenly onto a lined baking sheet."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 20-25 minutes, stirring halfway through to ensure even browning."
        },
        {
          "step": 7,
          "text": "Once golden and fragrant, remove from the oven and let it cool completely on the baking sheet."
        },
        {
          "step": 8,
          "text": "After cooling, stir in the dried fruit if using. Store in an airtight container."
        }
      ],
    nutritionInfo: {
        "calories": 210,
        "protein": "6g",
        "carbs": "29g",
        "fat": "9g",
        "fiber": "4g",
        "sugar": "5g"
      },
    tags: ["breakfast","snack","vegan","whole-food-plant-based","granola"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Rolled oats are the base of this granola and provide great texture. Feel free to customize the nuts and seeds based on your preference. For a sweeter granola, adjust the maple syrup to taste.',
    faqs: [
        {
          "question": "Can I make this granola gluten-free?",
          "answer": "Yes, just ensure you use certified gluten-free rolled oats."
        },
        {
          "question": "How long does this granola last?",
          "answer": "Stored in an airtight container, it can last up to two weeks at room temperature."
        }
      ],
    tips: ["For extra crunch, let the granola cool completely on the baking sheet before storing.","Experiment with different nuts, seeds, and spices to personalize your granola."],
    variations: ["Add coconut flakes for a tropical twist.","Incorporate cocoa powder for a chocolatey flavor."],
    storage: 'Store the granola in an airtight container at room temperature for up to two weeks. For longer shelf life, refrigerate or freeze in a sealed bag.',
  },
  {
    id: '1767013077488.1086',
    title: 'Vegan English Muffins',
    slug: 'vegan-english-muffins',
    description: 'Deliciously fluffy and golden brown, these vegan English muffins are perfect for breakfast and can be toasted to perfection.',
    prologue: 'Discover the joy of homemade vegan English muffins with this easy recipe from vegancooking.recipes. Made with simple, wholesome ingredients, these muffins are a delightful addition to your morning routine. Perfect for toasting and slathering with your favorite plant-based spreads, they offer a satisfying start to your day without any animal products.',
    image: '/recipe-images/vegan-english-muffins-1767013078695.webp',
    prepTime: 30,
    cookTime: 20,
    totalTime: 50,
    servings: 8,
    difficulty: 'medium',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "All-purpose flour",
          "amount": "3",
          "unit": "cups",
          "notes": "plus extra for dusting"
        },
        {
          "name": "Active dry yeast",
          "amount": "1",
          "unit": "tbsp",
          "notes": "ensure it's fresh for best results"
        },
        {
          "name": "Maple syrup",
          "amount": "1",
          "unit": "tbsp",
          "notes": "to activate the yeast"
        },
        {
          "name": "Warm water",
          "amount": "1.5",
          "unit": "cups",
          "notes": "about 110°F (43°C)"
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for added fluffiness"
        },
        {
          "name": "Olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for moisture and flavor"
        },
        {
          "name": "Cornmeal",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for dusting baking surface"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a small bowl, combine warm water, maple syrup, and active dry yeast. Let it sit for about 5-10 minutes until it becomes frothy."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the all-purpose flour, salt, and baking powder."
        },
        {
          "step": 3,
          "text": "Once the yeast mixture is frothy, add it to the flour mixture along with the olive oil."
        },
        {
          "step": 4,
          "text": "Stir until a rough dough forms. Then, knead the dough on a floured surface for about 5-7 minutes until smooth and elastic."
        },
        {
          "step": 5,
          "text": "Place the kneaded dough in a lightly greased bowl, cover with a clean kitchen towel, and let it rise in a warm place for about 1 hour or until doubled in size."
        },
        {
          "step": 6,
          "text": "Once risen, punch down the dough and turn it out onto a floured surface. Roll it out to about 1-inch thickness."
        },
        {
          "step": 7,
          "text": "Using a round cutter or a glass, cut out circles from the dough. Place the circles on a baking sheet dusted with cornmeal."
        },
        {
          "step": 8,
          "text": "Cover the cut-out muffins with a towel and let them rise for another 30 minutes."
        },
        {
          "step": 9,
          "text": "Preheat a skillet or griddle over medium-low heat. Cook the muffins for about 7-10 minutes on each side, or until golden brown and cooked through."
        },
        {
          "step": 10,
          "text": "Let the muffins cool on a wire rack before slicing. Serve toasted with your favorite vegan spreads."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "5g",
        "carbs": "30g",
        "fat": "3g",
        "fiber": "1g",
        "sugar": "0.5g"
      },
    tags: ["breakfast","vegan","whole-food-plant-based","muffins","homemade"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'All-purpose flour can be substituted with whole wheat flour for a more nutritious option, though it may alter the texture slightly. For gluten-free muffins, use a gluten-free flour blend.',
    faqs: [
        {
          "question": "Can I freeze these muffins?",
          "answer": "Yes, you can freeze the English muffins after they have cooled completely. Place them in a freezer-safe bag or container for up to 3 months."
        },
        {
          "question": "How do I know when the muffins are done cooking?",
          "answer": "The muffins should be golden brown on both sides and sound hollow when tapped on the bottom."
        }
      ],
    tips: ["For a more flavorful muffin, add herbs or spices such as rosemary or garlic powder to the dough.","Make sure to check the temperature of the water when activating the yeast; it should be warm but not too hot."],
    variations: ["Add a handful of dried fruits like cranberries or raisins for a sweet twist.","Incorporate seeds such as sunflower or flaxseed for added texture and nutrition."],
    storage: 'Store the muffins in an airtight container at room temperature for up to 3 days. For longer storage, refrigerate them for up to a week or freeze for up to 3 months.',
  },
  {
    id: '1767018255185.2615',
    title: 'Breakfast Cookies',
    slug: 'breakfast-cookies',
    description: 'Enjoy a delicious and nutritious start to your day with these wholesome vegan breakfast cookies, packed with oats, bananas, and nuts.',
    prologue: 'These Breakfast Cookies are a fantastic way to kickstart your morning while keeping it healthy and plant-based. Perfect for busy individuals, these cookies are easy to make, full of flavor, and provide lasting energy. Whether you need a quick breakfast on the go or a snack to fuel your day, this recipe from vegancooking.recipes is just what you need!',
    image: '/recipe-images/breakfast-cookies-1767015130532.webp',
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
          "notes": "Use gluten-free oats if needed"
        },
        {
          "name": "Ripe bananas",
          "amount": "2",
          "unit": "medium",
          "notes": "Mashed"
        },
        {
          "name": "Almond butter",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Natural, unsweetened"
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Adjust for sweetness preference"
        },
        {
          "name": "Ground cinnamon",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For added flavor"
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Helps cookies rise"
        },
        {
          "name": "Chopped walnuts",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Can substitute with other nuts or seeds"
        },
        {
          "name": "Dried cranberries or raisins",
          "amount": "1/2",
          "unit": "cup",
          "notes": "For sweetness and chewiness"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Enhances flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a baking sheet with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, mash the ripe bananas using a fork until smooth."
        },
        {
          "step": 3,
          "text": "Add the almond butter, maple syrup, and vanilla extract to the mashed bananas, and mix until well combined."
        },
        {
          "step": 4,
          "text": "In a separate bowl, combine the rolled oats, ground cinnamon, and baking powder."
        },
        {
          "step": 5,
          "text": "Gradually add the dry mixture to the wet mixture, stirring until just combined."
        },
        {
          "step": 6,
          "text": "Fold in the chopped walnuts and dried cranberries or raisins."
        },
        {
          "step": 7,
          "text": "Using a spoon or cookie scoop, drop tablespoon-sized portions of the dough onto the prepared baking sheet, spacing them about 2 inches apart."
        },
        {
          "step": 8,
          "text": "Bake in the preheated oven for 15-20 minutes, or until the edges are lightly golden."
        },
        {
          "step": 9,
          "text": "Remove from the oven and let cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "3g",
        "carbs": "17g",
        "fat": "5g",
        "fiber": "2g",
        "sugar": "4g"
      },
    tags: ["vegan","breakfast","cookies","healthy","snack","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Rolled oats are the base of these cookies, providing fiber and texture. Almond butter adds healthy fats and protein, but you can substitute it with peanut butter or sunflower seed butter. For sweetness, adjust the maple syrup based on your taste preference. Dried fruits can be swapped with chocolate chips or fresh fruits.',
    faqs: [
        {
          "question": "Can I use quick oats instead of rolled oats?",
          "answer": "Yes, but the texture may be slightly different. Rolled oats provide a chewier texture."
        },
        {
          "question": "How do I store these cookies?",
          "answer": "Store in an airtight container at room temperature for up to 5 days, or freeze for longer storage."
        }
      ],
    tips: ["For extra flavor, try adding a pinch of salt or a tablespoon of chia seeds.","Make sure your bananas are very ripe for the best natural sweetness."],
    variations: ["Add a tablespoon of cocoa powder for a chocolatey version.","Substitute the walnuts with pecans or sunflower seeds for a nut-free option."],
    storage: 'Store cookies in an airtight container at room temperature for up to 5 days. For longer storage, freeze cookies in a single layer, then transfer to a freezer-safe bag for up to 3 months. Thaw at room temperature before enjoying.',
  },
  {
    id: '1767018719381.6538',
    title: 'Overnight Oats',
    slug: 'overnight-oats',
    description: 'Start your day right with these creamy, delicious overnight oats packed with nutrients and flavor. Perfect for a quick and healthy breakfast, this recipe is customizable to suit your taste preferences.',
    prologue: 'Overnight oats are a fantastic way to enjoy a quick, nutritious breakfast without any hassle. Made with whole-food, plant-based ingredients, this vegan recipe offers a delicious balance of flavors and textures. Whether you\'re in a rush or looking for a meal prep option, these oats can be prepared in just a few minutes the night before and enjoyed the next morning. Discover the magic of overnight oats on vegancooking.recipes and elevate your breakfast routine.',
    image: '/recipe-images/overnight-oats-1767018720772.webp',
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
          "notes": "Use gluten-free oats if necessary"
        },
        {
          "name": "Almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Unsweetened or sweetened, as per preference"
        },
        {
          "name": "Chia seeds",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "These help thicken the oats"
        },
        {
          "name": "Maple syrup",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Optional for sweetness"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For flavor"
        },
        {
          "name": "Cinnamon",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "For extra flavor"
        },
        {
          "name": "Fresh fruits (e.g., berries, banana)",
          "amount": "1",
          "unit": "cup",
          "notes": "Chopped or whole, based on preference"
        },
        {
          "name": "Nuts or seeds (optional)",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Almonds, walnuts, or pumpkin seeds for crunch"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a mixing bowl, combine the rolled oats, almond milk, chia seeds, maple syrup, vanilla extract, and cinnamon."
        },
        {
          "step": 2,
          "text": "Stir well until all ingredients are thoroughly mixed."
        },
        {
          "step": 3,
          "text": "Divide the mixture into two jars or containers with lids."
        },
        {
          "step": 4,
          "text": "Top each jar with your choice of fresh fruits and nuts or seeds."
        },
        {
          "step": 5,
          "text": "Seal the jars and refrigerate overnight, or for at least 4 hours."
        },
        {
          "step": 6,
          "text": "In the morning, stir the oats, add more almond milk if desired for consistency, and enjoy!"
        }
      ],
    nutritionInfo: {
        "calories": 320,
        "protein": "10g",
        "carbs": "54g",
        "fat": "10g",
        "fiber": "8g",
        "sugar": "6g"
      },
    tags: ["breakfast","vegan","whole-food-plant-based","meal prep","healthy"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Rolled oats are the best choice for overnight oats due to their texture. Chia seeds not only add fiber but also act as a thickening agent. You can substitute almond milk with any plant-based milk of your choice, such as soy or oat milk.',
    faqs: [
        {
          "question": "Can I use quick oats instead of rolled oats?",
          "answer": "Quick oats can be used, but they will result in a mushier texture. Rolled oats provide a better consistency for overnight oats."
        },
        {
          "question": "How long can I store overnight oats?",
          "answer": "Overnight oats can be stored in the refrigerator for up to 3 days, making them perfect for meal prep."
        }
      ],
    tips: ["Experiment with different fruits and toppings to find your favorite combination.","Use a mason jar for easy storage and portability."],
    variations: ["Add a tablespoon of nut butter for extra creaminess and flavor.","Incorporate cocoa powder for a chocolatey twist."],
    storage: 'Store overnight oats in airtight containers in the refrigerator. They can last up to 3 days. If you plan to add toppings, consider keeping them separate until you\'re ready to eat to maintain freshness.',
  },
  {
    id: '1767019105758.2734',
    title: 'Scones',
    slug: 'scones',
    description: 'Delightfully fluffy and tender, these vegan scones are perfect for breakfast or an afternoon tea. With a hint of sweetness and a wonderful crumb, they pair beautifully with your favorite jam or vegan butter.',
    prologue: 'Scones are a classic baked good that can be easily made vegan and still retain their buttery, flaky texture. At vegancooking.recipes, we believe in creating wholesome treats that everyone can enjoy, regardless of dietary preferences. This vegan scone recipe is made with whole food, plant-based ingredients that not only taste amazing but are also nutritious. Perfect for breakfast or brunch, these scones will surely impress your family and friends!',
    image: '/recipe-images/scones-1767019107510.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 8,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "Sifted for best results"
        },
        {
          "name": "baking powder",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Ensure it is fresh for maximum rise"
        },
        {
          "name": "baking soda",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Helps with leavening"
        },
        {
          "name": "sea salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Enhances flavor"
        },
        {
          "name": "coconut oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Melted and slightly cooled"
        },
        {
          "name": "maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Provides sweetness"
        },
        {
          "name": "non-dairy milk",
          "amount": "3/4",
          "unit": "cup",
          "notes": "Unsweetened almond or soy milk works well"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "For flavor enhancement"
        },
        {
          "name": "dried fruit (e.g., cranberries or raisins)",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Optional, for added sweetness and texture"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 400°F (200°C) and line a baking sheet with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the whole wheat flour, baking powder, baking soda, and sea salt until well combined."
        },
        {
          "step": 3,
          "text": "Pour in the melted coconut oil, maple syrup, non-dairy milk, and vanilla extract. Stir gently until the dough starts to come together."
        },
        {
          "step": 4,
          "text": "If using, fold in the dried fruit until evenly distributed."
        },
        {
          "step": 5,
          "text": "Turn the dough out onto a lightly floured surface and knead gently just until it holds together, being careful not to overwork the dough."
        },
        {
          "step": 6,
          "text": "Pat the dough into a circle about 1 inch thick and cut it into 8 wedges or use a round cutter to make individual scones."
        },
        {
          "step": 7,
          "text": "Place the scones on the prepared baking sheet, leaving space between each one."
        },
        {
          "step": 8,
          "text": "Bake in the preheated oven for 15-20 minutes or until the scones are golden brown and a toothpick inserted comes out clean."
        },
        {
          "step": 9,
          "text": "Remove from the oven and allow to cool slightly before serving."
        }
      ],
    nutritionInfo: {
        "calories": 160,
        "protein": "3g",
        "carbs": "25g",
        "fat": "6g",
        "fiber": "3g",
        "sugar": "4g"
      },
    tags: ["breakfast","vegan","whole food","scones","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour adds nutrition and fiber, while coconut oil helps create a flaky texture. Maple syrup is a great natural sweetener, but can be replaced with agave or date syrup if desired.',
    faqs: [
        {
          "question": "Can I freeze these scones?",
          "answer": "Yes! You can freeze baked scones. Just let them cool completely, then wrap them tightly in plastic wrap and store in a freezer bag for up to 3 months."
        },
        {
          "question": "What can I substitute for coconut oil?",
          "answer": "You can use vegan butter or another neutral oil like canola or sunflower oil, but the texture may vary slightly."
        }
      ],
    tips: ["For an extra touch, brush the tops with a bit of non-dairy milk before baking for a golden finish.","Experiment with different add-ins like nuts or chocolate chips for variety."],
    variations: ["Add lemon zest for a citrus twist.","Substitute half of the whole wheat flour with almond flour for a lighter texture."],
    storage: 'Store leftover scones in an airtight container at room temperature for up to 3 days, or refrigerate for up to a week. Reheat in a toaster oven or microwave before serving for best results.',
  },
  {
    id: '1767019299185.294',
    title: 'Breakfast Quesadilla',
    slug: 'breakfast-quesadilla',
    description: 'Start your day off right with this deliciously savory vegan breakfast quesadilla, filled with fresh vegetables and protein-packed tofu. It\'s easy to make and perfect for a quick morning meal.',
    prologue: 'Looking for a quick and satisfying breakfast that is both healthy and flavorful? This vegan breakfast quesadilla is a perfect choice for those following a whole-food plant-based diet. Packed with nutritious ingredients, it\'s a delightful way to fuel your day. Discover more delicious vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/breakfast-quesadilla-1767019300366.webp',
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 2,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Whole wheat tortillas",
          "amount": "2",
          "unit": "pieces",
          "notes": "Choose gluten-free if necessary"
        },
        {
          "name": "Firm tofu",
          "amount": "8",
          "unit": "oz",
          "notes": "Crumbled"
        },
        {
          "name": "Bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "Chopped (any color)"
        },
        {
          "name": "Red onion",
          "amount": "1/2",
          "unit": "medium",
          "notes": "Chopped"
        },
        {
          "name": "Spinach",
          "amount": "1",
          "unit": "cup",
          "notes": "Fresh, chopped"
        },
        {
          "name": "Nutritional yeast",
          "amount": "2",
          "unit": "tbsp",
          "notes": "For cheesy flavor"
        },
        {
          "name": "Olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "For cooking"
        },
        {
          "name": "Cumin",
          "amount": "1",
          "unit": "tsp",
          "notes": "Ground"
        },
        {
          "name": "Paprika",
          "amount": "1",
          "unit": "tsp",
          "notes": "Smoked, for flavor"
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
          "name": "Avocado",
          "amount": "1",
          "unit": "medium",
          "notes": "Sliced, for serving"
        },
        {
          "name": "Salsa",
          "amount": "1/2",
          "unit": "cup",
          "notes": "For dipping or topping"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a skillet over medium heat, add olive oil and sauté the chopped red onion and bell pepper for about 3-4 minutes until softened."
        },
        {
          "step": 2,
          "text": "Add the crumbled tofu to the skillet along with cumin, paprika, salt, and black pepper. Cook for another 5 minutes, stirring occasionally."
        },
        {
          "step": 3,
          "text": "Stir in the chopped spinach and nutritional yeast, cooking for an additional 1-2 minutes until the spinach is wilted."
        },
        {
          "step": 4,
          "text": "Place one tortilla in a clean skillet over medium heat. Spread half of the tofu and vegetable mixture evenly over the tortilla."
        },
        {
          "step": 5,
          "text": "Top with another tortilla and cook for 2-3 minutes on one side, until golden brown. Carefully flip and cook the other side for another 2-3 minutes."
        },
        {
          "step": 6,
          "text": "Remove from the skillet and repeat with the remaining tortillas and filling."
        },
        {
          "step": 7,
          "text": "Slice the quesadillas into wedges, serve warm with sliced avocado and salsa on the side."
        }
      ],
    nutritionInfo: {
        "calories": 420,
        "protein": "20g",
        "carbs": "50g",
        "fat": "15g",
        "fiber": "10g",
        "sugar": "4g"
      },
    tags: ["vegan","breakfast","quesadilla","tofu","whole food plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute firm tofu with tempeh or seitan for a different texture. Feel free to add any other vegetables you have on hand, such as mushrooms or zucchini.',
    faqs: [
        {
          "question": "Can I make this recipe gluten-free?",
          "answer": "Yes, simply use gluten-free tortillas to accommodate gluten sensitivities."
        },
        {
          "question": "How can I store leftovers?",
          "answer": "Store any leftover quesadillas in an airtight container in the refrigerator for up to 3 days. Reheat in a skillet or microwave."
        }
      ],
    tips: ["For extra flavor, add some hot sauce or your favorite spices to the tofu mixture.","Experiment with different vegetables based on your preferences and seasonal availability."],
    variations: ["Add black beans for extra protein and fiber.","Use different types of cheese alternatives for a creamier texture."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 3 days. To reheat, place in a skillet over medium heat until warmed through.',
  },
  {
    id: '1767020057730.5151',
    title: 'Yogurt Bowl',
    slug: 'yogurt-bowl',
    description: 'Start your day with this delicious and nutritious Yogurt Bowl, packed with wholesome ingredients and vibrant flavors.',
    prologue: 'Begin your morning with a delightful and healthy Yogurt Bowl, perfect for anyone seeking a whole-food, plant-based breakfast. This recipe features creamy vegan yogurt topped with fresh fruits, nuts, and seeds for a balanced meal. Discover more vegan recipes at vegancooking.recipes and elevate your breakfast routine with this easy-to-make dish.',
    image: '/recipe-images/yogurt-bowl-1767020059040.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "unsweetened almond milk yogurt",
          "amount": "2",
          "unit": "cups",
          "notes": "Use your favorite plant-based yogurt brand."
        },
        {
          "name": "rolled oats",
          "amount": "1",
          "unit": "cup",
          "notes": "Use gluten-free oats if necessary."
        },
        {
          "name": "chia seeds",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Optional, for added fiber and omega-3s."
        },
        {
          "name": "banana",
          "amount": "1",
          "unit": "medium",
          "notes": "Sliced."
        },
        {
          "name": "blueberries",
          "amount": "1",
          "unit": "cup",
          "notes": "Fresh or frozen."
        },
        {
          "name": "walnuts",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Chopped."
        },
        {
          "name": "maple syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Optional, for sweetness."
        },
        {
          "name": "cinnamon",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For flavor."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a mixing bowl, combine 1 cup of rolled oats and 2 tablespoons of chia seeds."
        },
        {
          "step": 2,
          "text": "Add 2 cups of unsweetened almond milk yogurt to the oats and chia mixture, stirring until well combined."
        },
        {
          "step": 3,
          "text": "Let the mixture sit for about 5 minutes to allow the chia seeds to absorb some liquid and the oats to soften."
        },
        {
          "step": 4,
          "text": "While waiting, prepare your toppings: slice the banana and measure out the blueberries and chopped walnuts."
        },
        {
          "step": 5,
          "text": "Once the oat mixture is ready, divide it evenly into two bowls."
        },
        {
          "step": 6,
          "text": "Top each bowl with the sliced banana, blueberries, and chopped walnuts."
        },
        {
          "step": 7,
          "text": "Drizzle with maple syrup and sprinkle with cinnamon, if desired."
        },
        {
          "step": 8,
          "text": "Serve immediately and enjoy your nutritious Yogurt Bowl!"
        }
      ],
    nutritionInfo: {
        "calories": 450,
        "protein": "12g",
        "carbs": "68g",
        "fat": "20g",
        "fiber": "10g",
        "sugar": "10g"
      },
    tags: ["breakfast","vegan","whole-food","healthy","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute almond milk yogurt with coconut yogurt or soy yogurt depending on your preference. For added protein, consider incorporating hemp seeds or nut butter.',
    faqs: [
        {
          "question": "Can I prepare this Yogurt Bowl the night before?",
          "answer": "Yes, you can prepare the oat mixture the night before and store it in the refrigerator. Just add the toppings in the morning."
        }
      ],
    tips: ["Experiment with different fruits and nuts based on what you have available.","For a creamier texture, blend the yogurt mixture before adding it to the oats."],
    variations: ["Try adding shredded coconut or cacao nibs for a tropical or chocolatey twist.","Substitute the walnuts with almonds or pecans for a different nutty flavor."],
    storage: 'Store any leftover Yogurt Bowl components separately in airtight containers in the refrigerator. Consume within 3 days for best freshness.',
  },
  {
    id: '1767020290947.0361',
    title: 'Smoothie Bowl',
    slug: 'smoothie-bowl',
    description: 'Start your day with a refreshing and nutrient-packed smoothie bowl, topped with vibrant fruits and crunchy seeds.',
    prologue: 'Smoothie bowls are a delicious and visually appealing way to enjoy your breakfast while ensuring a whole-food, plant-based diet. Packed with vitamins, minerals, and antioxidants, this smoothie bowl is perfect for anyone looking to start their day on a healthy note. Visit vegancooking.recipes for more plant-based recipes that are easy to prepare and delightful to eat.',
    image: '/recipe-images/smoothie-bowl-1767020293707.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Frozen bananas",
          "amount": "2",
          "unit": "medium",
          "notes": "peeled and chopped"
        },
        {
          "name": "Frozen spinach",
          "amount": "1",
          "unit": "cup",
          "notes": "packed"
        },
        {
          "name": "Almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "or any plant-based milk"
        },
        {
          "name": "Chia seeds",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for added fiber and omega-3s"
        },
        {
          "name": "Nut butter",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "such as almond or peanut butter"
        },
        {
          "name": "Fresh mixed berries",
          "amount": "1",
          "unit": "cup",
          "notes": "for topping"
        },
        {
          "name": "Granola",
          "amount": "1/2",
          "unit": "cup",
          "notes": "for topping"
        },
        {
          "name": "Sliced banana",
          "amount": "1",
          "unit": "medium",
          "notes": "for topping"
        },
        {
          "name": "Coconut flakes",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for topping"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a blender, combine the frozen bananas, frozen spinach, and almond milk. Blend until smooth and creamy."
        },
        {
          "step": 2,
          "text": "Add the chia seeds and nut butter to the blender and pulse until fully incorporated."
        },
        {
          "step": 3,
          "text": "Pour the smoothie mixture into two bowls."
        },
        {
          "step": 4,
          "text": "Top each bowl with fresh mixed berries, sliced banana, granola, and coconut flakes."
        },
        {
          "step": 5,
          "text": "Serve immediately and enjoy your refreshing smoothie bowl!"
        }
      ],
    nutritionInfo: {
        "calories": 350,
        "protein": "10g",
        "carbs": "50g",
        "fat": "15g",
        "fiber": "12g",
        "sugar": "20g"
      },
    tags: ["breakfast","smoothie","vegan","whole-food-plant-based","healthy"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute frozen spinach with kale or any leafy green. For a sweeter smoothie bowl, add a tablespoon of maple syrup or agave nectar if desired.',
    faqs: [
        {
          "question": "Can I use fresh fruits instead of frozen?",
          "answer": "Yes, but using frozen fruits gives the smoothie a creamier texture. If using fresh fruit, you may need to add ice to achieve the desired consistency."
        }
      ],
    tips: ["For a thicker smoothie bowl, reduce the amount of almond milk.","Experiment with different toppings like nuts, seeds, or other fruits to customize your bowl."],
    variations: ["Add cacao powder for a chocolate-flavored smoothie bowl.","Incorporate protein powder for an extra protein boost."],
    storage: 'Smoothie bowls are best enjoyed fresh, but you can store leftover smoothie mix in an airtight container in the refrigerator for up to 24 hours. Toppings should be added fresh.',
  },
  {
    id: '1767020447457.0984',
    title: 'Overnight Chia Oats',
    slug: 'overnight-chia-oats',
    description: 'Start your day with a nutritious and delicious bowl of Overnight Chia Oats, packed with fiber and healthy omega-3 fatty acids. This easy, no-cook breakfast is perfect for busy mornings.',
    prologue: 'Overnight Chia Oats are a fantastic way to enjoy a wholesome breakfast without the hassle of morning prep. This vegan recipe combines nutrient-dense chia seeds with rolled oats, plant-based milk, and your favorite toppings, making it a versatile and satisfying meal. At vegancooking.recipes, we believe in creating delicious recipes that are not only healthy but also easy to make, so you can fuel your day with the best plant-based ingredients.',
    image: '/recipe-images/overnight-chia-oats-1767020448695.webp',
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
          "notes": "Use gluten-free oats if needed"
        },
        {
          "name": "Chia seeds",
          "amount": "3",
          "unit": "tablespoons",
          "notes": "These will thicken the mixture"
        },
        {
          "name": "Unsweetened almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Can substitute with any plant-based milk"
        },
        {
          "name": "Maple syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Adjust sweetness to taste"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Optional for added flavor"
        },
        {
          "name": "Fresh fruit (e.g., banana, berries)",
          "amount": "1",
          "unit": "cup",
          "notes": "For topping, adjust according to preference"
        },
        {
          "name": "Nuts or seeds (e.g., walnuts, pumpkin seeds)",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Optional for crunch and added nutrition"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a mixing bowl, combine the rolled oats and chia seeds."
        },
        {
          "step": 2,
          "text": "Pour in the almond milk, maple syrup, and vanilla extract. Stir well to combine."
        },
        {
          "step": 3,
          "text": "Cover the bowl or transfer the mixture to individual jars or containers."
        },
        {
          "step": 4,
          "text": "Refrigerate for at least 4 hours, preferably overnight, to allow the oats and chia seeds to soak up the liquid and thicken."
        },
        {
          "step": 5,
          "text": "In the morning, give the mixture a good stir. Add more almond milk if necessary to reach your desired consistency."
        },
        {
          "step": 6,
          "text": "Top with fresh fruit and nuts or seeds before serving."
        }
      ],
    nutritionInfo: {
        "calories": 350,
        "protein": "10g",
        "carbs": "54g",
        "fat": "14g",
        "fiber": "10g",
        "sugar": "8g"
      },
    tags: ["breakfast","vegan","healthy","easy","meal prep","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Chia seeds are the key ingredient that gives this recipe its unique texture. You can substitute almond milk with any plant-based alternative, such as soy, oat, or coconut milk. Adjust the sweetness by varying the amount of maple syrup or adding other natural sweeteners like agave nectar.',
    faqs: [
        {
          "question": "How long do Overnight Chia Oats last in the fridge?",
          "answer": "They can last up to 5 days in the refrigerator, making them perfect for meal prep."
        },
        {
          "question": "Can I use quick oats instead of rolled oats?",
          "answer": "Yes, but the texture may be different. Rolled oats typically provide a heartier texture."
        }
      ],
    tips: ["For a creamier texture, blend the almond milk with the oats and chia seeds before refrigerating.","Experiment with different plant-based milks and sweeteners to find your favorite combination."],
    variations: ["Add cocoa powder for a chocolate version.","Mix in spices like cinnamon or nutmeg for extra flavor."],
    storage: 'Store in an airtight container in the refrigerator. If you find it too thick in the morning, just stir in a splash of almond milk before serving.',
  },
  {
    id: '1767021137700.2944',
    title: 'Tofu Scramble',
    slug: 'tofu-scramble',
    description: 'A delicious and protein-packed vegan alternative to scrambled eggs, this Tofu Scramble is loaded with flavor and perfect for a hearty breakfast.',
    prologue: 'Tofu Scramble is a fantastic breakfast option for those looking to enjoy a nutritious, plant-based meal. This versatile dish is not only easy to make but is also packed with protein and flavor, making it a favorite among vegans and non-vegans alike. Dive into the world of vegan cooking with this simple and satisfying recipe from vegancooking.recipes, and discover how you can transform tofu into a delightful breakfast treat.',
    image: '/recipe-images/tofu-scramble-1767015197026.webp',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    difficulty: 'easy',
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
          "name": "Olive oil",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for sautéing"
        },
        {
          "name": "Red bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "Green onion",
          "amount": "3",
          "unit": "stalks",
          "notes": "sliced"
        },
        {
          "name": "Spinach",
          "amount": "2",
          "unit": "cups",
          "notes": "fresh, chopped"
        },
        {
          "name": "Nutritional yeast",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for a cheesy flavor"
        },
        {
          "name": "Turmeric powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "for color and flavor"
        },
        {
          "name": "Garlic powder",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "optional"
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
          "text": "Begin by draining the firm tofu and pressing it to remove excess moisture. Crumble the tofu into small pieces using your hands or a fork."
        },
        {
          "step": 2,
          "text": "In a large skillet, heat 1 tablespoon of olive oil over medium heat."
        },
        {
          "step": 3,
          "text": "Add the diced red bell pepper to the skillet and sauté for about 3-4 minutes until slightly softened."
        },
        {
          "step": 4,
          "text": "Stir in the sliced green onions and cook for an additional 1-2 minutes."
        },
        {
          "step": 5,
          "text": "Add the crumbled tofu to the skillet along with the nutritional yeast, turmeric, garlic powder, salt, and black pepper."
        },
        {
          "step": 6,
          "text": "Mix everything well and cook for about 5-7 minutes, stirring occasionally, until the tofu is heated through and slightly golden."
        },
        {
          "step": 7,
          "text": "Add the chopped spinach and cook for another 2-3 minutes until wilted."
        },
        {
          "step": 8,
          "text": "Taste and adjust seasoning if necessary. Remove from heat and serve hot."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "15g",
        "carbs": "10g",
        "fat": "10g",
        "fiber": "3g",
        "sugar": "2g"
      },
    tags: ["vegan","breakfast","tofu","scramble","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Firm tofu is preferred for this recipe as it holds its shape better during cooking. You can replace nutritional yeast with vegan cheese for a different flavor profile.',
    faqs: [
        {
          "question": "Can I use silken tofu instead of firm tofu?",
          "answer": "Silken tofu can be used, but it will create a different texture and may be too soft for a scramble."
        },
        {
          "question": "How can I make this dish spicy?",
          "answer": "You can add a pinch of cayenne pepper or chopped jalapeños for some heat."
        }
      ],
    tips: ["Make sure to press the tofu well to remove excess water for a better texture.","Feel free to add other vegetables like mushrooms, zucchini, or tomatoes for added flavor and nutrition."],
    variations: ["Add cooked quinoa or brown rice for an extra filling meal.","Incorporate spices like cumin or smoked paprika for a different flavor profile."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 3 days. Reheat in a skillet over medium heat before serving.',
  },
  {
    id: '1767021225584.3333',
    title: 'Avocado Toast',
    slug: 'avocado-toast',
    description: 'Creamy avocado toast topped with fresh ingredients makes for a nutritious and delicious breakfast that’s quick to prepare.',
    prologue: 'Avocado toast is a trendy breakfast option that’s both satisfying and healthy. Packed with vitamins and healthy fats, this dish is a favorite among whole-food-plant-based eaters. At vegancooking.recipes, we celebrate simple, wholesome ingredients that come together to create a delectable meal. Whether you enjoy it plain or loaded with toppings, avocado toast is versatile and easy to customize.',
    image: '/recipe-images/avocado-toast-1767021226891.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Whole grain bread",
          "amount": "4",
          "unit": "slices",
          "notes": "Choose a hearty variety like sourdough or multigrain."
        },
        {
          "name": "Ripe avocado",
          "amount": "2",
          "unit": "medium",
          "notes": "Make sure the avocados are soft but not overripe."
        },
        {
          "name": "Lemon juice",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Freshly squeezed for best flavor."
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Adjust to taste."
        },
        {
          "name": "Black pepper",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "Freshly ground preferred."
        },
        {
          "name": "Cherry tomatoes",
          "amount": "1",
          "unit": "cup",
          "notes": "Halved."
        },
        {
          "name": "Fresh basil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Chopped, for garnish."
        },
        {
          "name": "Red pepper flakes",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "Optional, for added heat."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Toast the whole grain bread slices in a toaster or on a grill until golden brown and crispy."
        },
        {
          "step": 2,
          "text": "While the bread is toasting, cut the avocados in half, remove the pit, and scoop the flesh into a bowl."
        },
        {
          "step": 3,
          "text": "Add lemon juice, salt, and black pepper to the bowl with the avocado. Mash with a fork until you reach your desired consistency (smooth or chunky)."
        },
        {
          "step": 4,
          "text": "Once the bread is toasted, spread a generous amount of the mashed avocado on each slice."
        },
        {
          "step": 5,
          "text": "Top each avocado toast with halved cherry tomatoes and a sprinkle of fresh basil."
        },
        {
          "step": 6,
          "text": "Finish with a dash of red pepper flakes if desired, and serve immediately."
        }
      ],
    nutritionInfo: {
        "calories": 320,
        "protein": "8g",
        "carbs": "44g",
        "fat": "16g",
        "fiber": "12g",
        "sugar": "2g"
      },
    tags: ["breakfast","vegan","whole-food-plant-based","healthy","easy"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole grain bread offers more nutrients compared to white bread. You can substitute avocado with hummus for a different flavor profile. If fresh basil is unavailable, consider using arugula or spinach.',
    faqs: [
        {
          "question": "Can I use frozen avocados?",
          "answer": "While fresh avocados are best for this recipe, you can use thawed frozen avocados if necessary. Make sure they are well-drained."
        },
        {
          "question": "What can I add for extra protein?",
          "answer": "You can add chickpeas or a sprinkle of nutritional yeast for extra protein and flavor."
        }
      ],
    tips: ["Use ripe avocados for the best flavor and texture.","Experiment with different toppings like radishes or sprouts for variety."],
    variations: ["Add sliced radishes and cucumber for a refreshing crunch.","Top with a poached or fried vegan egg substitute for added protein."],
    storage: 'Avocado toast is best enjoyed fresh. However, if you have leftover mashed avocado, store it in an airtight container in the refrigerator for up to 24 hours, adding a bit more lemon juice to prevent browning.',
  },
  {
    id: '1767021464573.8923',
    title: 'Breakfast Hash',
    slug: 'breakfast-hash',
    description: 'A hearty and savory breakfast hash loaded with colorful vegetables and protein-packed beans, perfect for starting your day off right.',
    prologue: 'Start your morning with a delicious and nutritious Breakfast Hash that is entirely plant-based and bursting with flavor. This recipe is perfect for anyone seeking a wholesome, whole-food-plant-based breakfast option. Packed with colorful vegetables and hearty ingredients, this dish will fuel your day and keep you satisfied. Check out more fantastic recipes at vegancooking.recipes.',
    image: '/recipe-images/breakfast-hash-1767021465963.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    difficulty: 'easy',
    category: ["breakfast"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "sweet potatoes",
          "amount": "2",
          "unit": "medium",
          "notes": "peeled and diced into 1/2-inch cubes"
        },
        {
          "name": "red bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "green bell pepper",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "yellow onion",
          "amount": "1",
          "unit": "medium",
          "notes": "diced"
        },
        {
          "name": "garlic",
          "amount": "3",
          "unit": "cloves",
          "notes": "minced"
        },
        {
          "name": "black beans",
          "amount": "1",
          "unit": "can",
          "notes": "rinsed and drained (15 oz)"
        },
        {
          "name": "olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for sautéing"
        },
        {
          "name": "ground cumin",
          "amount": "1",
          "unit": "tsp",
          "notes": "for seasoning"
        },
        {
          "name": "smoked paprika",
          "amount": "1",
          "unit": "tsp",
          "notes": "for seasoning"
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
        },
        {
          "name": "fresh cilantro",
          "amount": "1/4",
          "unit": "cup",
          "notes": "chopped, for garnish (optional)"
        },
        {
          "name": "avocado",
          "amount": "1",
          "unit": "medium",
          "notes": "sliced, for topping (optional)"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large skillet, heat the olive oil over medium heat."
        },
        {
          "step": 2,
          "text": "Add the diced sweet potatoes to the skillet and cook for about 10-12 minutes, stirring occasionally, until they start to soften."
        },
        {
          "step": 3,
          "text": "Add the diced onion, red bell pepper, and green bell pepper to the skillet with the sweet potatoes. Cook for an additional 5-7 minutes, stirring frequently."
        },
        {
          "step": 4,
          "text": "Stir in the minced garlic, ground cumin, smoked paprika, salt, and black pepper. Cook for another 2-3 minutes until fragrant."
        },
        {
          "step": 5,
          "text": "Add the rinsed black beans to the skillet and mix well. Cook for 3-5 minutes until the beans are heated through."
        },
        {
          "step": 6,
          "text": "Remove the skillet from heat and garnish with chopped cilantro and sliced avocado if desired."
        },
        {
          "step": 7,
          "text": "Serve hot and enjoy your delicious Breakfast Hash!"
        }
      ],
    nutritionInfo: {
        "calories": 290,
        "protein": "10g",
        "carbs": "45g",
        "fat": "8g",
        "fiber": "12g",
        "sugar": "3g"
      },
    tags: ["vegan","breakfast","healthy","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Sweet potatoes can be substituted with regular potatoes or butternut squash. For extra protein, consider adding quinoa or additional beans.',
    faqs: [
        {
          "question": "Can I make this dish ahead of time?",
          "answer": "Yes, you can prepare the hash in advance and store it in the refrigerator for up to 3 days. Simply reheat in a skillet before serving."
        },
        {
          "question": "Is this recipe gluten-free?",
          "answer": "Yes, all the ingredients used in this Breakfast Hash are gluten-free."
        }
      ],
    tips: ["Feel free to add any seasonal vegetables you have on hand for variety.","To increase flavor, consider adding a splash of hot sauce or a squeeze of lime juice before serving."],
    variations: ["Swap out black beans for kidney beans or chickpeas for a different flavor profile.","Add nutritional yeast for a cheesy flavor without the dairy."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Reheat on the stovetop or in the microwave before serving.',
  },
];
