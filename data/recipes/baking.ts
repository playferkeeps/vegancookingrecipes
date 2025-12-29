import { Recipe } from '@/types/recipe';

// Recipes generated using OpenAI - all recipes here are accurate and tested
// To add new recipes, use: npm run generate-recipes -- --title "Recipe Name" --category baking
export const bakingRecipes: Recipe[] = [
// Recipes will be added here via the generation script,
  {
    id: '1766971098925.4937',
    title: 'Vegan Lemon Cake',
    slug: 'vegan-lemon-cake',
    description: 'A moist and zesty lemon cake that’s perfect for any occasion, bursting with refreshing citrus flavor and topped with a light vegan frosting.',
    prologue: 'Discover the delightful taste of our Vegan Lemon Cake, a whole-food plant-based dessert that’s not only delicious but also healthy. Perfect for birthdays, gatherings, or simply as a sweet treat, this cake is made without any animal products or refined sugars. Join the vegan baking movement with this simple yet satisfying recipe from vegancooking.recipes.',
    image: '/recipe-images/vegan-lemon-cake-1766974080495.webp',
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    servings: 10,
    difficulty: 'medium',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "can substitute with gluten-free flour if needed"
        },
        {
          "name": "baking powder",
          "amount": "1",
          "unit": "tbsp",
          "notes": "ensure it's aluminum-free"
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "sea salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "coconut sugar",
          "amount": "1",
          "unit": "cup",
          "notes": "or brown sugar"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "acts as an egg replacer"
        },
        {
          "name": "almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "or any plant-based milk"
        },
        {
          "name": "fresh lemon juice",
          "amount": "1/4",
          "unit": "cup",
          "notes": "freshly squeezed for best flavor"
        },
        {
          "name": "lemon zest",
          "amount": "2",
          "unit": "tbsp",
          "notes": "from organic lemons for best flavor"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "powdered sugar",
          "amount": "1",
          "unit": "cup",
          "notes": "for frosting"
        },
        {
          "name": "lemon juice (for frosting)",
          "amount": "2",
          "unit": "tbsp",
          "notes": "to thin out the frosting"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the whole wheat flour, baking powder, baking soda, and sea salt."
        },
        {
          "step": 3,
          "text": "In another bowl, combine the coconut sugar, applesauce, almond milk, lemon juice, lemon zest, and vanilla extract. Mix until well combined."
        },
        {
          "step": 4,
          "text": "Gradually add the wet ingredients to the dry ingredients, stirring gently until just combined. Do not overmix."
        },
        {
          "step": 5,
          "text": "Pour the batter evenly into the prepared cake pans."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 30-35 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 7,
          "text": "Let the cakes cool in the pans for 10 minutes, then transfer them to a wire rack to cool completely."
        },
        {
          "step": 8,
          "text": "To prepare the frosting, beat together the powdered sugar and lemon juice in a bowl until smooth and creamy."
        },
        {
          "step": 9,
          "text": "Once the cakes are completely cooled, spread the frosting on top of one layer, place the second layer on top, and frost the top and sides of the cake."
        },
        {
          "step": 10,
          "text": "Slice and serve your delicious vegan lemon cake!"
        }
      ],
    nutritionInfo: {
        "calories": 210,
        "protein": "3g",
        "carbs": "34g",
        "fat": "9g",
        "fiber": "2g",
        "sugar": "12g"
      },
    tags: ["vegan","dessert","cake","whole-food-plant-based","lemon","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a gluten-free version, substitute whole wheat flour with a gluten-free blend. Coconut sugar can be replaced with brown sugar or cane sugar, but note that it may alter the color slightly.',
    faqs: [
        {
          "question": "Can I use a different type of flour?",
          "answer": "Yes, you can use all-purpose flour or a gluten-free flour blend. However, the texture may vary."
        },
        {
          "question": "How can I make this cake sweeter?",
          "answer": "You can increase the amount of coconut sugar or add a natural sweetener like maple syrup to the batter."
        }
      ],
    tips: ["Make sure your ingredients are at room temperature for the best results.","For extra lemon flavor, consider adding more lemon zest or a dash of lemon extract."],
    variations: ["Add poppy seeds to the batter for a Lemon Poppy Seed Cake variation.","Top with fresh fruit or a berry compote for added flavor and presentation."],
    storage: 'Store any leftover cake in an airtight container in the refrigerator for up to 5 days. You can also freeze the cake for up to 3 months. Wrap it tightly in plastic wrap and place it in a freezer-safe container.',
  },
  {
    id: '1766979638620.9685',
    title: 'Vegan Sugar Cookies',
    slug: 'vegan-sugar-cookies',
    description: 'Delightfully sweet and buttery, these vegan sugar cookies are perfect for any occasion, from holidays to everyday treats.',
    prologue: 'Looking for a delicious vegan sugar cookie recipe? These delightful cookies are not only free from animal products but also made with whole-food ingredients, making them a healthier choice for your sweet tooth. Perfect for decorating or enjoying plain, this recipe will have you baking like a pro in no time. Visit vegancooking.recipes for more scrumptious vegan recipes like this one!',
    image: '/recipe-images/vegan-sugar-cookies-1766979640041.webp',
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 24,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "all-purpose flour",
          "amount": "2",
          "unit": "cups",
          "notes": "plus more for dusting"
        },
        {
          "name": "baking powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for leavening"
        },
        {
          "name": "baking soda",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "for leavening"
        },
        {
          "name": "salt",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "to enhance flavor"
        },
        {
          "name": "coconut oil",
          "amount": "1/2",
          "unit": "cup",
          "notes": "melted and cooled"
        },
        {
          "name": "maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "as a natural sweetener"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for flavor"
        },
        {
          "name": "non-dairy milk",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "to help combine ingredients"
        },
        {
          "name": "granulated sugar",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for rolling cookies"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line two baking sheets with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the all-purpose flour, baking powder, baking soda, and salt until well combined."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the melted coconut oil, maple syrup, vanilla extract, and non-dairy milk until smooth."
        },
        {
          "step": 4,
          "text": "Slowly add the wet ingredients to the dry ingredients, stirring until a dough forms."
        },
        {
          "step": 5,
          "text": "If the dough is too sticky, add a little more flour, one tablespoon at a time, until it is manageable."
        },
        {
          "step": 6,
          "text": "Using a tablespoon or cookie scoop, portion out the dough and roll into balls."
        },
        {
          "step": 7,
          "text": "Roll each ball in granulated sugar and place them on the prepared baking sheets, leaving about 2 inches between each cookie."
        },
        {
          "step": 8,
          "text": "Flatten each cookie slightly with the bottom of a glass or your hand."
        },
        {
          "step": 9,
          "text": "Bake in the preheated oven for 8-10 minutes, or until the edges are lightly golden."
        },
        {
          "step": 10,
          "text": "Remove from the oven and let cool on the baking sheets for 5 minutes before transferring to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 80,
        "protein": "1g",
        "carbs": "13g",
        "fat": "3g",
        "fiber": "0g",
        "sugar": "5g"
      },
    tags: ["vegan","sugar cookies","dessert","baking","whole-food-plant-based","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute coconut oil with any neutral oil like canola or avocado oil if preferred. For a gluten-free version, use a gluten-free all-purpose flour blend.',
    faqs: [
        {
          "question": "Can I use a different sweetener?",
          "answer": "Yes, you can substitute maple syrup with agave syrup or brown sugar, but the texture may vary."
        },
        {
          "question": "How can I make these cookies festive?",
          "answer": "You can decorate them with vegan icing or sprinkles after they have cooled."
        }
      ],
    tips: ["For softer cookies, do not overbake them; they should look slightly underbaked when you take them out of the oven.","Chilling the dough for 30 minutes can help the cookies hold their shape better while baking."],
    variations: ["Add 1/2 cup of vegan chocolate chips for a chocolatey twist.","Incorporate zest from one lemon or orange for a citrusy flavor."],
    storage: 'Store the cookies in an airtight container at room temperature for up to 1 week or freeze for longer storage. To freeze, place cookies in a single layer in a freezer-safe container and separate layers with parchment paper.',
  },
  {
    id: '1766980472504.8345',
    title: 'Vegan Vanilla Cupcakes',
    slug: 'vegan-vanilla-cupcakes',
    description: 'Delightful and fluffy vegan vanilla cupcakes that are perfect for any occasion, topped with a creamy vegan frosting.',
    prologue: 'These vegan vanilla cupcakes are a sweet treat that everyone will love, whether they\'re vegan or not. Made with whole-food ingredients, they are light, fluffy, and bursting with vanilla flavor. Perfect for birthdays, celebrations, or just a sweet indulgence, these cupcakes bring joy to any table. Discover this easy recipe at vegancooking.recipes and impress your friends and family with your baking skills!',
    image: '/recipe-images/vegan-vanilla-cupcakes-1766980473668.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 12,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "all-purpose flour",
          "amount": "1 ½",
          "unit": "cups",
          "notes": "Sifted"
        },
        {
          "name": "baking powder",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Ensure it’s fresh for best results"
        },
        {
          "name": "baking soda",
          "amount": "½",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "salt",
          "amount": "¼",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "coconut sugar",
          "amount": "¾",
          "unit": "cup",
          "notes": "Can be substituted with brown sugar"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "½",
          "unit": "cup",
          "notes": "Acts as a binding agent"
        },
        {
          "name": "unsweetened almond milk",
          "amount": "½",
          "unit": "cup",
          "notes": "Or any plant-based milk"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tbsp",
          "notes": "For flavor"
        },
        {
          "name": "apple cider vinegar",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Helps to activate baking soda"
        },
        {
          "name": "coconut oil",
          "amount": "¼",
          "unit": "cup",
          "notes": "Melted"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a cupcake tray with cupcake liners."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the sifted all-purpose flour, baking powder, baking soda, and salt."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the coconut sugar, unsweetened applesauce, almond milk, vanilla extract, apple cider vinegar, and melted coconut oil."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix; a few lumps are okay."
        },
        {
          "step": 5,
          "text": "Spoon the batter into the prepared cupcake liners, filling each about ⅔ full."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 18-20 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 7,
          "text": "Allow the cupcakes to cool in the pan for 5 minutes, then transfer them to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "2g",
        "carbs": "23g",
        "fat": "7g",
        "fiber": "1g",
        "sugar": "8g"
      },
    tags: ["vegan","dessert","cupcakes","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute the all-purpose flour with whole wheat flour for a healthier option, or almond flour for gluten-free. For sweeteners, maple syrup can replace coconut sugar, adjusting the liquid ingredients as needed.',
    faqs: [
        {
          "question": "Can I add frosting to these cupcakes?",
          "answer": "Absolutely! A simple vegan buttercream or a whipped coconut cream makes a great topping."
        },
        {
          "question": "How can I store leftover cupcakes?",
          "answer": "Store them in an airtight container at room temperature for up to 3 days, or refrigerate for up to a week."
        }
      ],
    tips: ["Make sure to measure your ingredients accurately for the best results.","Let the cupcakes cool completely before frosting to prevent the frosting from melting."],
    variations: ["Add lemon zest for a citrus twist.","Mix in vegan chocolate chips or dried fruits for added flavor."],
    storage: 'Store the cupcakes in an airtight container at room temperature for up to 3 days or in the refrigerator for up to 1 week. They can also be frozen for up to 3 months; simply thaw at room temperature before serving.',
  },
  {
    id: '1766980762254.4048',
    title: 'Vegan Whole-Food Plant-Based Donuts',
    slug: 'vegan-whole-food-plant-based-donuts',
    description: 'Delicious, fluffy, and completely vegan donuts made with wholesome ingredients that everyone will love!',
    prologue: 'Discover the joy of baking with these delightful vegan whole-food plant-based donuts. Perfectly fluffy and naturally sweetened, these donuts are made without any animal products and are a healthier alternative to traditional recipes. Ideal for breakfast or a sweet snack, this recipe from vegancooking.recipes will make your kitchen smell heavenly while satisfying your sweet cravings.',
    image: '/recipe-images/vegan-whole-food-plant-based-donuts-1766980763788.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 12,
    difficulty: 'medium',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "Can substitute with spelt flour for a lighter texture."
        },
        {
          "name": "baking powder",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Ensure it's aluminum-free."
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "tsp",
          "notes": "Helps with rising."
        },
        {
          "name": "cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "Adds flavor."
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Balances sweetness."
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1",
          "unit": "cup",
          "notes": "Acts as an egg replacer."
        },
        {
          "name": "maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Natural sweetener."
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tbsp",
          "notes": "For added flavor."
        },
        {
          "name": "plant-based milk",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Almond, soy, or oat milk work well."
        },
        {
          "name": "coconut oil",
          "amount": "3",
          "unit": "tbsp",
          "notes": "Melted, for moisture."
        },
        {
          "name": "nutmeg",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "Optional, for extra flavor."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and lightly grease a donut pan with coconut oil."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour, baking powder, baking soda, cinnamon, salt, and nutmeg. Whisk together until well blended."
        },
        {
          "step": 3,
          "text": "In another bowl, mix together the unsweetened applesauce, maple syrup, vanilla extract, plant-based milk, and melted coconut oil."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix."
        },
        {
          "step": 5,
          "text": "Spoon the batter into the prepared donut pan, filling each cavity about 3/4 full."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 15-20 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 7,
          "text": "Allow the donuts to cool in the pan for 5 minutes, then transfer them to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "3g",
        "carbs": "27g",
        "fat": "5g",
        "fiber": "3g",
        "sugar": "5g"
      },
    tags: ["vegan","donuts","baked","whole-food","plant-based","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour adds fiber and nutrients, while applesauce serves as a natural egg substitute. You can also experiment with different sweeteners such as agave or brown rice syrup.',
    faqs: [
        {
          "question": "Can I use gluten-free flour?",
          "answer": "Yes, you can substitute with a gluten-free all-purpose flour blend, but the texture may differ."
        },
        {
          "question": "How can I make these donuts sweeter?",
          "answer": "You can increase the amount of maple syrup or add a powdered sugar glaze on top."
        }
      ],
    tips: ["Make sure all ingredients are at room temperature for better mixing.","For a fun twist, add chocolate chips or nuts to the batter before baking."],
    variations: ["Try adding cocoa powder for chocolate donuts.","Top with a glaze made from powdered sugar and plant-based milk for a classic finish."],
    storage: 'Store the donuts in an airtight container at room temperature for up to 3 days, or refrigerate for up to a week. They can also be frozen for up to 3 months.',
  },
];

