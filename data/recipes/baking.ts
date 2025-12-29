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
  {
    id: '1766990267728.1572',
    title: 'Vegan Carrot Cake',
    slug: 'vegan-carrot-cake',
    description: 'This moist and flavorful vegan carrot cake is packed with wholesome ingredients and topped with a delightful cashew cream frosting, making it a perfect treat for any occasion.',
    prologue: 'Discover the joy of baking with this easy vegan carrot cake recipe, perfect for anyone looking to enjoy a delicious dessert without animal products. This cake is not only delicious but also made with whole food plant-based ingredients that are nutritious and satisfying. Whether you\'re celebrating a special occasion or just treating yourself, this recipe from vegancooking.recipes will surely impress your friends and family.',
    image: '/recipe-images/vegan-carrot-cake-1766990269002.webp',
    prepTime: 20,
    cookTime: 40,
    totalTime: 60,
    servings: 12,
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
          "amount": "2",
          "unit": "teaspoons",
          "notes": "ensure it's aluminum-free"
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for leavening"
        },
        {
          "name": "ground cinnamon",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for flavor"
        },
        {
          "name": "nutmeg",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for a warm spice note"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "to enhance flavor"
        },
        {
          "name": "maple syrup",
          "amount": "3/4",
          "unit": "cup",
          "notes": "natural sweetener"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "acts as a binder"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for flavor"
        },
        {
          "name": "grated carrots",
          "amount": "2",
          "unit": "cups",
          "notes": "freshly grated"
        },
        {
          "name": "walnuts",
          "amount": "1/2",
          "unit": "cup",
          "notes": "chopped, optional"
        },
        {
          "name": "raisins",
          "amount": "1/2",
          "unit": "cup",
          "notes": "optional for added sweetness"
        },
        {
          "name": "cashews",
          "amount": "1",
          "unit": "cup",
          "notes": "for frosting, soaked in water for 4 hours"
        },
        {
          "name": "lemon juice",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "for frosting"
        },
        {
          "name": "maple syrup (for frosting)",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for sweetness in frosting"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C). Grease and line two 9-inch round cake pans with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large bowl, whisk together the whole wheat flour, baking powder, baking soda, cinnamon, nutmeg, and salt."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the maple syrup, applesauce, and vanilla extract until well combined."
        },
        {
          "step": 4,
          "text": "Gradually add the wet ingredients to the dry ingredients, stirring until just combined."
        },
        {
          "step": 5,
          "text": "Fold in the grated carrots, chopped walnuts, and raisins if using."
        },
        {
          "step": 6,
          "text": "Divide the batter evenly between the prepared cake pans and smooth the tops."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 30-35 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 8,
          "text": "Once baked, allow the cakes to cool in the pans for 10 minutes, then transfer them to a wire rack to cool completely."
        },
        {
          "step": 9,
          "text": "For the frosting, drain and rinse the soaked cashews, then blend them with lemon juice and maple syrup until smooth and creamy."
        },
        {
          "step": 10,
          "text": "Once the cakes are completely cool, spread a layer of frosting on top of one cake, place the other cake on top, and frost the top and sides of the cake."
        },
        {
          "step": 11,
          "text": "Garnish with additional walnuts or grated carrots if desired. Slice and serve."
        }
      ],
    nutritionInfo: {
        "calories": 280,
        "protein": "4g",
        "carbs": "45g",
        "fat": "10g",
        "fiber": "3g",
        "sugar": "16g"
      },
    tags: ["vegan","dessert","cake","carrot cake","whole food plant-based","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour can be substituted with almond flour for a gluten-free option. Soaking cashews for the frosting is essential for a creamy texture. You can add spices like ginger or allspice for extra flavor.',
    faqs: [
        {
          "question": "Can I make this cake gluten-free?",
          "answer": "Yes, you can substitute the whole wheat flour with a gluten-free flour blend, ensuring it has a binding agent."
        },
        {
          "question": "How do I store leftovers?",
          "answer": "Store any leftover cake in an airtight container in the refrigerator for up to 5 days."
        }
      ],
    tips: ["For a richer flavor, try adding a teaspoon of ground ginger.","Ensure your carrots are finely grated for even baking."],
    variations: ["Add crushed pineapple for added moisture and sweetness.","Replace walnuts with pecans or omit nuts for a nut-free version."],
    storage: 'Store the cake in an airtight container at room temperature for up to 2 days or in the refrigerator for up to 5 days. The frosting can also be stored separately for up to a week.',
  },
  {
    id: '1766990667574.1035',
    title: 'Vegan Cornbread',
    slug: 'vegan-cornbread',
    description: 'This moist and fluffy vegan cornbread is a delightful addition to any meal, perfect for soaking up soups and stews.',
    prologue: 'Discover the joy of baking with this easy vegan cornbread recipe that is not only delicious but also wholesome. Made with simple, whole-food ingredients, this cornbread is free from animal products, making it a great choice for anyone following a plant-based diet. At vegancooking.recipes, we believe that cooking should be both nutritious and enjoyable, and this cornbread fits the bill perfectly.',
    image: '/recipe-images/vegan-cornbread-1766990669983.webp',
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 9,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Cornmeal",
          "amount": "1",
          "unit": "cup",
          "notes": "Use fine or medium grind for best texture"
        },
        {
          "name": "Whole wheat flour",
          "amount": "1",
          "unit": "cup",
          "notes": "You can substitute with gluten-free flour if needed"
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Ensure it's fresh for best rise"
        },
        {
          "name": "Baking soda",
          "amount": "1",
          "unit": "tsp",
          "notes": "Helps the cornbread rise"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Adjust based on taste preference"
        },
        {
          "name": "Unsweetened almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Other plant-based milks can be used"
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "For sweetness; agave syrup can be substituted"
        },
        {
          "name": "Apple cider vinegar",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Creates a buttermilk effect when combined with almond milk"
        },
        {
          "name": "Olive oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Can be replaced with melted coconut oil or vegan butter"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 400°F (200°C). Grease an 8x8 inch baking pan or line it with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the cornmeal, whole wheat flour, baking powder, baking soda, and salt. Whisk well to ensure there are no lumps."
        },
        {
          "step": 3,
          "text": "In a separate bowl, mix together the almond milk and apple cider vinegar. Let it sit for about 5 minutes to curdle."
        },
        {
          "step": 4,
          "text": "After the milk has curdled, add the maple syrup and olive oil to the mixture. Stir well until combined."
        },
        {
          "step": 5,
          "text": "Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix; a few lumps are okay."
        },
        {
          "step": 6,
          "text": "Pour the batter into the prepared baking pan, spreading it evenly."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 20-25 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 8,
          "text": "Once baked, remove from the oven and let it cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
        },
        {
          "step": 9,
          "text": "Slice and serve warm, or store for later use."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "4g",
        "carbs": "30g",
        "fat": "6g",
        "fiber": "3g",
        "sugar": "2g"
      },
    tags: ["vegan","cornbread","baking","whole-food","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Using fresh baking powder and baking soda will ensure your cornbread rises properly. For a gluten-free version, substitute the whole wheat flour with a gluten-free flour blend.',
    faqs: [
        {
          "question": "Can I use a different type of milk?",
          "answer": "Yes, you can use any unsweetened plant-based milk such as soy, oat, or coconut milk."
        },
        {
          "question": "How can I make it sweeter?",
          "answer": "You can increase the amount of maple syrup to 1/3 cup for a sweeter cornbread."
        }
      ],
    tips: ["For an extra flavor boost, add some corn kernels or jalapeños to the batter.","Serve with vegan butter or your favorite spread for added deliciousness."],
    variations: ["Add a cup of fresh corn kernels for a sweet burst of flavor.","Incorporate herbs like rosemary or thyme for a savory twist."],
    storage: 'Store leftover cornbread in an airtight container at room temperature for up to 3 days, or refrigerate for up to a week. For longer storage, freeze slices wrapped in plastic wrap and aluminum foil for up to 3 months.',
  },
  {
    id: '1766990794107.9746',
    title: 'Vegan Whole-Food Plant-Based Scones',
    slug: 'vegan-whole-food-plant-based-scones',
    description: 'Deliciously fluffy and light, these vegan scones are perfect for breakfast or an afternoon tea treat. Made with wholesome ingredients, they are both satisfying and guilt-free!',
    prologue: 'Looking for a delightful vegan treat that doesn’t compromise on taste or health? These whole-food plant-based scones are the perfect addition to your baking repertoire. With simple, wholesome ingredients, you can create a delicious snack or breakfast option that everyone will love. Discover more fantastic vegan recipes at vegancooking.recipes!',
    image: '/recipe-images/vegan-whole-food-plant-based-scones-1766990795369.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 8,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "can substitute with spelt flour for a nuttier flavor"
        },
        {
          "name": "baking powder",
          "amount": "2",
          "unit": "tsp",
          "notes": "ensure it's aluminum-free for a healthier option"
        },
        {
          "name": "sea salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "adjust to taste"
        },
        {
          "name": "maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "substitute with agave syrup if preferred"
        },
        {
          "name": "unsweetened almond milk",
          "amount": "3/4",
          "unit": "cup",
          "notes": "or any other plant-based milk"
        },
        {
          "name": "coconut oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "melted; can substitute with vegan butter"
        },
        {
          "name": "fresh blueberries",
          "amount": "1",
          "unit": "cup",
          "notes": "can use dried fruit or chocolate chips as alternatives"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "for enhanced flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 400°F (200°C) and line a baking sheet with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour, baking powder, and sea salt."
        },
        {
          "step": 3,
          "text": "In a separate bowl, whisk together the maple syrup, almond milk, melted coconut oil, and vanilla extract."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and mix until just combined. Be careful not to overmix."
        },
        {
          "step": 5,
          "text": "Gently fold in the fresh blueberries, ensuring they are evenly distributed."
        },
        {
          "step": 6,
          "text": "Turn the dough out onto a lightly floured surface and shape it into a circle about 1-inch thick."
        },
        {
          "step": 7,
          "text": "Cut the dough into 8 wedges using a sharp knife or pizza cutter."
        },
        {
          "step": 8,
          "text": "Transfer the scones to the prepared baking sheet and bake for 20-25 minutes, or until golden brown."
        },
        {
          "step": 9,
          "text": "Remove from the oven and let cool on a wire rack for a few minutes before serving."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "4g",
        "carbs": "30g",
        "fat": "6g",
        "fiber": "4g",
        "sugar": "5g"
      },
    tags: ["vegan","scones","baking","whole-food","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour provides a hearty texture, while coconut oil adds moisture. You can easily swap out the blueberries for any seasonal fruit. Adjust the sweetness with more or less maple syrup according to preference.',
    faqs: [
        {
          "question": "Can I make these scones gluten-free?",
          "answer": "Yes! Substitute the whole wheat flour with a gluten-free all-purpose flour blend."
        },
        {
          "question": "How can I store leftover scones?",
          "answer": "Store the scones in an airtight container at room temperature for up to 3 days or in the refrigerator for up to a week."
        }
      ],
    tips: ["Make sure all your ingredients are at room temperature for the best results.","For a touch of sweetness, sprinkle some raw sugar on top before baking."],
    variations: ["Add chopped nuts for extra crunch.","Try using lemon zest for a citrusy flavor boost."],
    storage: 'Keep the scones in an airtight container at room temperature for up to 3 days. For longer storage, freeze them in a single layer on a baking sheet, then transfer to a freezer-safe bag or container for up to 3 months.',
  },
  {
    id: '1766990827728.0557',
    title: 'Vegan Whole-Food Plant-Based Bagels',
    slug: 'vegan-whole-food-plant-based-bagels',
    description: 'Deliciously chewy and perfectly baked, these vegan bagels are a wholesome breakfast delight that will satisfy your cravings without any animal products.',
    prologue: 'Discover the joy of homemade bagels with this easy vegan recipe that uses whole-food plant-based ingredients. Perfect for breakfast, these bagels are not only delicious but also healthy and nourishing. At vegancooking.recipes, we provide you with the best vegan recipes that are simple to follow and packed with flavor.',
    image: '/recipe-images/vegan-whole-food-plant-based-bagels-1766990829258.webp',
    prepTime: 30,
    cookTime: 25,
    totalTime: 55,
    servings: 8,
    difficulty: 'medium',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "4",
          "unit": "cups",
          "notes": "plus extra for kneading"
        },
        {
          "name": "active dry yeast",
          "amount": "2",
          "unit": "tsp",
          "notes": "make sure it's fresh"
        },
        {
          "name": "warm water",
          "amount": "1.5",
          "unit": "cups",
          "notes": "about 110°F (43°C)"
        },
        {
          "name": "maple syrup",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for sweetness and yeast activation"
        },
        {
          "name": "sea salt",
          "amount": "2",
          "unit": "tsp",
          "notes": "add flavor"
        },
        {
          "name": "baking soda",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for boiling the bagels"
        },
        {
          "name": "sesame seeds",
          "amount": "1",
          "unit": "tbsp",
          "notes": "optional for topping"
        },
        {
          "name": "poppy seeds",
          "amount": "1",
          "unit": "tbsp",
          "notes": "optional for topping"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a small bowl, combine the warm water, active dry yeast, and maple syrup. Let it sit for about 5-10 minutes until frothy."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour and sea salt, mixing well."
        },
        {
          "step": 3,
          "text": "Once the yeast mixture is frothy, pour it into the flour mixture. Stir until a dough begins to form."
        },
        {
          "step": 4,
          "text": "Transfer the dough to a floured surface and knead for about 8-10 minutes until smooth and elastic."
        },
        {
          "step": 5,
          "text": "Place the kneaded dough in a lightly greased bowl, cover it with a damp cloth, and let it rise in a warm place for about 1 hour or until doubled in size."
        },
        {
          "step": 6,
          "text": "Preheat your oven to 425°F (220°C) and line a baking sheet with parchment paper."
        },
        {
          "step": 7,
          "text": "Once the dough has risen, punch it down and divide it into 8 equal pieces. Shape each piece into a ball, then poke a hole in the center to form a bagel shape."
        },
        {
          "step": 8,
          "text": "In a large pot, bring about 8 cups of water to a boil and add the baking soda."
        },
        {
          "step": 9,
          "text": "Carefully drop each bagel into the boiling water, boiling for about 1 minute on each side. Remove with a slotted spoon and place on the prepared baking sheet."
        },
        {
          "step": 10,
          "text": "If desired, sprinkle sesame seeds or poppy seeds on top of each bagel."
        },
        {
          "step": 11,
          "text": "Bake in the preheated oven for 20-25 minutes or until golden brown."
        },
        {
          "step": 12,
          "text": "Remove from the oven and let cool on a wire rack before slicing and serving."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "7g",
        "carbs": "36g",
        "fat": "1g",
        "fiber": "5g",
        "sugar": "1g"
      },
    tags: ["vegan","bagels","whole food plant based","breakfast","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour provides a hearty texture and adds fiber. You can substitute with all-purpose flour for a lighter bagel, but this will change the nutritional profile. Make sure your yeast is fresh for the best results.',
    faqs: [
        {
          "question": "Can I use gluten-free flour?",
          "answer": "Yes, but you may need to adjust the liquid and add a binding agent like flaxseed meal or xanthan gum for proper texture."
        },
        {
          "question": "How do I store leftover bagels?",
          "answer": "Store them in an airtight container at room temperature for up to 3 days, or freeze them for longer storage."
        }
      ],
    tips: ["For an added flavor, you can mix in herbs or spices into the dough.","Let the bagels cool completely before slicing to avoid them becoming gummy."],
    variations: ["Add dried herbs like oregano or garlic powder to the dough for a savory twist.","Top with everything bagel seasoning for a flavorful crunch."],
    storage: 'Store the bagels in an airtight container at room temperature for up to 3 days. For longer storage, wrap them tightly in plastic and freeze for up to 3 months. To reheat, simply toast or warm in the oven.',
  },
  {
    id: '1766991559953.0215',
    title: 'Vegan Chocolate Muffins',
    slug: 'vegan-chocolate-muffins',
    description: 'Delicious, moist, and chocolaty, these vegan chocolate muffins are perfect for breakfast or a sweet snack.',
    prologue: 'Looking for a delectable vegan treat? These whole-food-plant-based chocolate muffins are not only easy to make but are also packed with wholesome ingredients. Perfect for satisfying your sweet tooth without compromising your dietary choices, this recipe is ideal for anyone looking to enjoy plant-based baking. Explore more vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-chocolate-muffins-1766991562195.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 12,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "sifted"
        },
        {
          "name": "cocoa powder",
          "amount": "1/2",
          "unit": "cup",
          "notes": "unsweetened"
        },
        {
          "name": "baking powder",
          "amount": "2",
          "unit": "teaspoons",
          "notes": "ensure it's fresh"
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "helps muffins rise"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "balances sweetness"
        },
        {
          "name": "maple syrup",
          "amount": "3/4",
          "unit": "cup",
          "notes": "or agave syrup"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "acts as a binder"
        },
        {
          "name": "almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "or any plant-based milk"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for flavor"
        },
        {
          "name": "dark chocolate chips",
          "amount": "1/2",
          "unit": "cup",
          "notes": "vegan chocolate preferred"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a muffin tin with paper liners."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the sifted whole wheat flour, cocoa powder, baking powder, baking soda, and salt. Whisk together until well mixed."
        },
        {
          "step": 3,
          "text": "In another bowl, mix together the maple syrup, unsweetened applesauce, almond milk, and vanilla extract until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir gently until just combined. Do not overmix."
        },
        {
          "step": 5,
          "text": "Fold in the dark chocolate chips, ensuring they are evenly distributed throughout the batter."
        },
        {
          "step": 6,
          "text": "Spoon the batter into the prepared muffin tin, filling each cup about 2/3 full."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 20-25 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 8,
          "text": "Allow the muffins to cool in the tin for 5 minutes before transferring them to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "4g",
        "carbs": "30g",
        "fat": "7g",
        "fiber": "4g",
        "sugar": "10g"
      },
    tags: ["vegan","dessert","snack","muffins","chocolate","whole-food-plant-based","baking"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour can be substituted with spelt flour for a nuttier taste. For a gluten-free option, use a gluten-free flour blend. Dark chocolate chips should be checked for vegan certification.',
    faqs: [
        {
          "question": "Can I substitute the maple syrup?",
          "answer": "Yes, you can use agave syrup or another liquid sweetener of your choice."
        },
        {
          "question": "How can I make these muffins gluten-free?",
          "answer": "Use a certified gluten-free flour blend in place of whole wheat flour."
        }
      ],
    tips: ["For extra chocolate flavor, sprinkle a few chocolate chips on top before baking.","Make sure not to overmix the batter to keep the muffins light and fluffy."],
    variations: ["Add chopped walnuts or pecans for a crunchy texture.","Incorporate banana puree for a fruity twist."],
    storage: 'Store the muffins in an airtight container at room temperature for up to 3 days. For longer storage, freeze them in a freezer-safe bag for up to 3 months.',
  },
  {
    id: '1766991887400.2258',
    title: 'Vegan Cinnamon Rolls',
    slug: 'vegan-cinnamon-rolls',
    description: 'Soft, fluffy, and irresistibly sweet, these vegan cinnamon rolls are the perfect treat for breakfast or dessert. Topped with a creamy vegan frosting, they\'re sure to delight everyone!',
    prologue: 'Discover the joy of baking with this easy vegan cinnamon rolls recipe from vegancooking.recipes. Made with wholesome plant-based ingredients, these delightful rolls are perfect for a cozy weekend brunch or a sweet afternoon snack. Enjoy the warm, comforting flavors of cinnamon and sugar rolled into a fluffy dough that is entirely free of animal products.',
    image: '/recipe-images/vegan-cinnamon-rolls-1766991888732.webp',
    prepTime: 30,
    cookTime: 25,
    totalTime: 55,
    servings: 12,
    difficulty: 'medium',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "all-purpose flour",
          "amount": "4",
          "unit": "cups",
          "notes": "plus extra for dusting"
        },
        {
          "name": "unsweetened almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "warm, around 110°F (43°C)"
        },
        {
          "name": "instant yeast",
          "amount": "2.5",
          "unit": "tbsp",
          "notes": "ensure it's fresh"
        },
        {
          "name": "coconut sugar",
          "amount": "1/4",
          "unit": "cup",
          "notes": "or brown sugar"
        },
        {
          "name": "coconut oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "melted"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tbsp",
          "notes": "pure vanilla extract preferred"
        },
        {
          "name": "ground cinnamon",
          "amount": "2",
          "unit": "tbsp",
          "notes": "for filling"
        },
        {
          "name": "brown sugar",
          "amount": "1/2",
          "unit": "cup",
          "notes": "for filling"
        },
        {
          "name": "vegan cream cheese",
          "amount": "1/2",
          "unit": "cup",
          "notes": "for frosting"
        },
        {
          "name": "powdered sugar",
          "amount": "1",
          "unit": "cup",
          "notes": "for frosting"
        },
        {
          "name": "lemon juice",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for frosting"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "for dough"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a small bowl, combine the warm almond milk and instant yeast. Let it sit for about 5-10 minutes until frothy."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the all-purpose flour, coconut sugar, and salt."
        },
        {
          "step": 3,
          "text": "Add the melted coconut oil and vanilla extract to the yeast mixture, then pour this into the dry ingredients."
        },
        {
          "step": 4,
          "text": "Mix until a dough forms, then knead for about 5-7 minutes on a floured surface until smooth and elastic."
        },
        {
          "step": 5,
          "text": "Place the dough in a lightly greased bowl, cover with a damp cloth, and let it rise in a warm place for about 1 hour, or until doubled in size."
        },
        {
          "step": 6,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 7,
          "text": "Once risen, roll the dough out on a floured surface into a rectangle about 1/4 inch thick."
        },
        {
          "step": 8,
          "text": "Spread the melted coconut oil over the dough, then sprinkle the brown sugar and ground cinnamon evenly over the top."
        },
        {
          "step": 9,
          "text": "Starting from one long edge, roll the dough tightly into a log. Pinch the seams to seal."
        },
        {
          "step": 10,
          "text": "Slice the log into 12 equal pieces and place them in a greased baking dish."
        },
        {
          "step": 11,
          "text": "Cover the rolls with a towel and let them rise for another 30 minutes."
        },
        {
          "step": 12,
          "text": "Bake the rolls in the preheated oven for about 25 minutes, or until golden brown."
        },
        {
          "step": 13,
          "text": "While the rolls are baking, prepare the frosting by mixing the vegan cream cheese, powdered sugar, and lemon juice until smooth."
        },
        {
          "step": 14,
          "text": "Once the rolls are done, allow them to cool slightly before drizzling with the frosting."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "3g",
        "carbs": "34g",
        "fat": "10g",
        "fiber": "1g",
        "sugar": "8g"
      },
    tags: ["vegan","cinnamon rolls","dessert","baking","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For the cream cheese frosting, any brand of vegan cream cheese will work. You can also substitute the coconut sugar with brown sugar if necessary. For a gluten-free option, use a 1-to-1 gluten-free flour blend.',
    faqs: [
        {
          "question": "Can I make these cinnamon rolls ahead of time?",
          "answer": "Yes, you can prepare the rolls, place them in the baking dish, cover, and refrigerate overnight. In the morning, let them come to room temperature and rise before baking."
        },
        {
          "question": "How do I store leftover cinnamon rolls?",
          "answer": "Store leftover cinnamon rolls in an airtight container at room temperature for up to 3 days or in the refrigerator for up to a week. You can also freeze them for longer storage."
        }
      ],
    tips: ["For the best rise, make sure your yeast is fresh and your almond milk is warm, not hot.","If your dough is too sticky, add a little more flour during kneading to achieve the right consistency."],
    variations: ["Add chopped nuts or raisins to the filling for added texture.","Try using different spices like nutmeg or cardamom for a unique flavor."],
    storage: 'Store in an airtight container at room temperature for up to 3 days. For longer storage, freeze the rolls after they have cooled completely, and thaw at room temperature before serving.',
  },
  {
    id: '1766992136012.8408',
    title: 'Vegan Zucchini Bread',
    slug: 'vegan-zucchini-bread',
    description: 'This moist and flavorful vegan zucchini bread is perfect for breakfast or a snack, packed with wholesome ingredients and subtle spices.',
    prologue: 'If you\'re looking for a delicious and healthy way to use up your garden zucchini, this Vegan Zucchini Bread recipe is just what you need. Made with whole food ingredients and naturally sweetened, it\'s a delightful treat that everyone will love. Perfect for a family breakfast or as a midday snack, this recipe is easy to prepare and packed with nutrients. Explore more delicious vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-zucchini-bread-1766992137325.webp',
    prepTime: 15,
    cookTime: 60,
    totalTime: 75,
    servings: 8,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Zucchini",
          "amount": "2",
          "unit": "medium",
          "notes": "Grated, about 2 cups packed"
        },
        {
          "name": "Whole wheat flour",
          "amount": "1.5",
          "unit": "cups",
          "notes": "Or use gluten-free flour for a gluten-free version"
        },
        {
          "name": "Rolled oats",
          "amount": "0.5",
          "unit": "cups",
          "notes": "Finely ground into oat flour if desired"
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "For leavening"
        },
        {
          "name": "Baking soda",
          "amount": "0.5",
          "unit": "tsp",
          "notes": "For leavening"
        },
        {
          "name": "Cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "For flavor"
        },
        {
          "name": "Salt",
          "amount": "0.5",
          "unit": "tsp",
          "notes": "Enhances flavor"
        },
        {
          "name": "Maple syrup",
          "amount": "0.5",
          "unit": "cups",
          "notes": "Natural sweetener"
        },
        {
          "name": "Unsweetened applesauce",
          "amount": "0.5",
          "unit": "cups",
          "notes": "Acts as an egg replacement"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "For flavor"
        },
        {
          "name": "Chopped walnuts",
          "amount": "0.5",
          "unit": "cups",
          "notes": "Optional, for added crunch"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and grease a 9x5-inch loaf pan or line it with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the grated zucchini with maple syrup, applesauce, and vanilla extract. Mix well until combined."
        },
        {
          "step": 3,
          "text": "In another bowl, whisk together the whole wheat flour, rolled oats, baking powder, baking soda, cinnamon, and salt."
        },
        {
          "step": 4,
          "text": "Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Avoid overmixing."
        },
        {
          "step": 5,
          "text": "If using, fold in the chopped walnuts gently."
        },
        {
          "step": 6,
          "text": "Pour the batter into the prepared loaf pan and smooth the top."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 50-60 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 8,
          "text": "Remove from the oven and let the bread cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "4g",
        "carbs": "32g",
        "fat": "6g",
        "fiber": "3g",
        "sugar": "5g"
      },
    tags: ["vegan","baking","bread","snack","zucchini","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Zucchini can be grated ahead of time and stored in the refrigerator. For a gluten-free version, substitute whole wheat flour with a gluten-free flour blend. You can also replace walnuts with pecans or omit them entirely for a nut-free version.',
    faqs: [
        {
          "question": "Can I freeze zucchini bread?",
          "answer": "Yes, you can freeze zucchini bread. Wrap it tightly in plastic wrap and then in aluminum foil or a freezer bag. It can be stored in the freezer for up to 3 months."
        },
        {
          "question": "What can I use instead of maple syrup?",
          "answer": "You can substitute maple syrup with agave nectar or brown rice syrup, though the flavor may vary slightly."
        }
      ],
    tips: ["For extra moisture, you can add a few tablespoons of non-dairy yogurt to the batter.","Make sure to squeeze out excess moisture from the grated zucchini using a clean kitchen towel to prevent the bread from becoming too wet."],
    variations: ["Add chocolate chips for a sweeter twist.","Incorporate dried fruits like raisins or cranberries for added flavor."],
    storage: 'Store the zucchini bread in an airtight container at room temperature for up to 3 days or in the refrigerator for up to a week. If freezing, ensure it\'s tightly wrapped to prevent freezer burn.',
  },
  {
    id: '1766992550235.1824',
    title: 'Vegan Oatmeal Cookies',
    slug: 'vegan-oatmeal-cookies',
    description: 'Deliciously chewy and perfectly spiced, these vegan oatmeal cookies are a wholesome treat that will satisfy your sweet tooth without any animal products.',
    prologue: 'Discover the joy of baking with this easy vegan oatmeal cookie recipe, perfect for any occasion. Made with whole-food, plant-based ingredients, these cookies are not only delicious but also nutritious. Whether you\'re a vegan or simply looking to try something new, vegancooking.recipes has you covered with this delightful recipe that everyone will love.',
    image: '/recipe-images/vegan-oatmeal-cookies-1766992551461.webp',
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 24,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Rolled oats",
          "amount": "2",
          "unit": "cups",
          "notes": "Use gluten-free oats if necessary"
        },
        {
          "name": "Whole wheat flour",
          "amount": "1",
          "unit": "cup",
          "notes": "Can substitute with oat flour for a gluten-free version"
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "Baking soda",
          "amount": "1/2",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "Cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "Add more for extra flavor"
        },
        {
          "name": "Maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Can substitute with agave nectar"
        },
        {
          "name": "Unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Acts as a binder and adds moisture"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "Dark chocolate chips",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Use vegan chocolate chips"
        },
        {
          "name": "Chopped nuts (optional)",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Walnuts or pecans work well"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a baking sheet with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the rolled oats, whole wheat flour, baking powder, baking soda, salt, and cinnamon. Stir until well mixed."
        },
        {
          "step": 3,
          "text": "In another bowl, whisk together the maple syrup, applesauce, and vanilla extract until combined."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and mix until just combined. The dough should be slightly sticky."
        },
        {
          "step": 5,
          "text": "Fold in the dark chocolate chips and chopped nuts, if using."
        },
        {
          "step": 6,
          "text": "Using a tablespoon or cookie scoop, drop spoonfuls of dough onto the prepared baking sheet, spacing them about 2 inches apart."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 10-12 minutes, or until the edges are lightly golden. The cookies will firm up as they cool."
        },
        {
          "step": 8,
          "text": "Remove from the oven and let the cookies cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "2g",
        "carbs": "20g",
        "fat": "4g",
        "fiber": "2g",
        "sugar": "6g"
      },
    tags: ["vegan","baking","cookies","dessert","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Rolled oats are the star ingredient that gives these cookies their chewy texture. You can use gluten-free rolled oats if needed. The applesauce acts as a great egg substitute, keeping the cookies moist and binding the ingredients together.',
    faqs: [
        {
          "question": "Can I use quick oats instead of rolled oats?",
          "answer": "While you can use quick oats, they will result in a different texture. Rolled oats provide a chewier consistency."
        },
        {
          "question": "How can I store these cookies?",
          "answer": "Store the cookies in an airtight container at room temperature for up to one week, or freeze for longer storage."
        }
      ],
    tips: ["For an extra touch, sprinkle some sea salt on top of the cookies before baking.","Experiment with different add-ins like dried fruits or seeds for added flavor and nutrition."],
    variations: ["Substitute the chocolate chips with raisins or dried cranberries for a fruity twist.","Add a tablespoon of nut butter into the wet mixture for richer flavor and texture."],
    storage: 'Store cookies in an airtight container at room temperature for up to one week, or freeze for up to three months. To freeze, place cookies in a single layer in a freezer-safe bag or container.',
  },
  {
    id: '1766992885658.4014',
    title: 'Vegan Blueberry Muffins',
    slug: 'vegan-blueberry-muffins',
    description: 'Deliciously moist and fluffy blueberry muffins made without any animal products, perfect for breakfast or a snack!',
    prologue: 'These Vegan Blueberry Muffins are not only easy to make but also packed with wholesome ingredients that align with a whole-food-plant-based lifestyle. Enjoy the burst of fresh blueberries in every bite while indulging in a guilt-free treat. At vegancooking.recipes, we believe that vegan baking can be both delightful and nutritious, and this recipe is a testament to that philosophy.',
    image: '/recipe-images/vegan-blueberry-muffins-1766992887015.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 12,
    difficulty: 'easy',
    category: ["baking"],
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
          "unit": "teaspoons",
          "notes": "ensure it's aluminum-free"
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for better rise"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "to enhance flavor"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "acts as an egg replacement"
        },
        {
          "name": "maple syrup",
          "amount": "1/3",
          "unit": "cup",
          "notes": "can substitute with agave syrup"
        },
        {
          "name": "non-dairy milk",
          "amount": "1",
          "unit": "cup",
          "notes": "almond or soy milk works well"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "adds flavor"
        },
        {
          "name": "fresh blueberries",
          "amount": "1",
          "unit": "cup",
          "notes": "can use frozen if fresh is unavailable"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a muffin tin with paper liners or lightly grease it."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour, baking powder, baking soda, and salt. Mix well to ensure even distribution of the leavening agents."
        },
        {
          "step": 3,
          "text": "In another bowl, whisk together the applesauce, maple syrup, non-dairy milk, and vanilla extract until well combined."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir gently until just combined. Be careful not to overmix."
        },
        {
          "step": 5,
          "text": "Fold in the fresh blueberries, ensuring they are evenly distributed throughout the batter."
        },
        {
          "step": 6,
          "text": "Spoon the batter into the prepared muffin tin, filling each cup about 2/3 full."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 20-25 minutes, or until a toothpick inserted into the center of a muffin comes out clean."
        },
        {
          "step": 8,
          "text": "Once baked, remove the muffins from the oven and let them cool in the pan for 5 minutes before transferring them to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "3g",
        "carbs": "28g",
        "fat": "3g",
        "fiber": "3g",
        "sugar": "6g"
      },
    tags: ["vegan","baking","muffins","blueberries","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a fluffier texture, you can use all-purpose flour instead of whole wheat flour, but this will alter the whole-food aspect. Feel free to swap blueberries with other fruits like raspberries or chopped strawberries for variety.',
    faqs: [
        {
          "question": "Can I use frozen blueberries?",
          "answer": "Yes, you can use frozen blueberries. Just fold them into the batter while still frozen to prevent them from bleeding into the batter."
        },
        {
          "question": "How do I store leftover muffins?",
          "answer": "Store leftover muffins in an airtight container at room temperature for up to 3 days or in the refrigerator for up to a week."
        }
      ],
    tips: ["For a sweeter muffin, increase the maple syrup to 1/2 cup.","Experiment with adding spices like cinnamon or nutmeg for extra flavor."],
    variations: ["Add a handful of chopped nuts for added texture.","Replace half of the blueberries with shredded coconut for a tropical twist."],
    storage: 'Store in an airtight container at room temperature for up to 3 days. For longer storage, freeze muffins in a freezer-safe bag for up to 3 months. Reheat in the oven or microwave before serving.',
  },
  {
    id: '1767011046077.3083',
    title: 'Vegan Chocolate Cupcakes',
    slug: 'vegan-chocolate-cupcakes',
    description: 'Indulge in these moist and decadent vegan chocolate cupcakes that are easy to make and incredibly delicious.',
    prologue: 'These vegan chocolate cupcakes are a delightful treat for anyone craving something sweet and satisfying without any animal products. Made with wholesome, plant-based ingredients, each bite offers rich chocolate flavor and a light, fluffy texture. Perfect for birthdays, celebrations, or just a sweet snack, this recipe from vegancooking.recipes guarantees a crowd-pleasing dessert that everyone will love.',
    image: '/recipe-images/vegan-chocolate-cupcakes-1767011047665.webp',
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
          "notes": "sifted"
        },
        {
          "name": "granulated sugar",
          "amount": "1",
          "unit": "cup",
          "notes": "can substitute with coconut sugar for a lower glycemic index"
        },
        {
          "name": "unsweetened cocoa powder",
          "amount": "½",
          "unit": "cup",
          "notes": "sifted"
        },
        {
          "name": "baking powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "ensure it's vegan"
        },
        {
          "name": "baking soda",
          "amount": "½",
          "unit": "tsp",
          "notes": "ensure it's fresh"
        },
        {
          "name": "salt",
          "amount": "¼",
          "unit": "tsp",
          "notes": "enhances flavor"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "½",
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
          "name": "vegetable oil",
          "amount": "⅓",
          "unit": "cup",
          "notes": "can use melted coconut oil"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "adds flavor"
        },
        {
          "name": "vegan chocolate chips",
          "amount": "½",
          "unit": "cup",
          "notes": "optional for extra chocolate flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a 12-cup muffin tin with paper liners."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the sifted all-purpose flour, granulated sugar, cocoa powder, baking powder, baking soda, and salt until well combined."
        },
        {
          "step": 3,
          "text": "In a separate bowl, mix the unsweetened applesauce, almond milk, vegetable oil, and vanilla extract until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir gently until just combined. Be careful not to overmix."
        },
        {
          "step": 5,
          "text": "If using, fold in the vegan chocolate chips into the batter."
        },
        {
          "step": 6,
          "text": "Divide the batter evenly among the 12 muffin cups, filling each about 2/3 full."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 18-20 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 8,
          "text": "Remove from the oven and let cool in the pan for about 5 minutes before transferring to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "2g",
        "carbs": "28g",
        "fat": "7g",
        "fiber": "2g",
        "sugar": "10g"
      },
    tags: ["vegan","dessert","baking","chocolate","cupcakes","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'All-purpose flour can be substituted with whole wheat flour for a healthier option. If you want to make these cupcakes gluten-free, use a 1:1 gluten-free flour blend. The unsweetened applesauce can be replaced with mashed bananas or another fruit puree if desired.',
    faqs: [
        {
          "question": "Can I make these cupcakes gluten-free?",
          "answer": "Yes, you can substitute the all-purpose flour with a gluten-free flour blend."
        },
        {
          "question": "How can I store leftover cupcakes?",
          "answer": "Store in an airtight container at room temperature for up to 3 days, or refrigerate for up to a week."
        }
      ],
    tips: ["Make sure your ingredients are at room temperature for the best results.","Don't overmix the batter; it should be just combined for light and fluffy cupcakes."],
    variations: ["Add a pinch of espresso powder to enhance the chocolate flavor.","Top with vegan frosting or a dusting of powdered sugar for a special touch."],
    storage: 'Store the cupcakes in an airtight container at room temperature for up to 3 days or refrigerate for up to a week. For longer storage, freeze the cupcakes by wrapping them individually in plastic wrap and placing them in a freezer-safe container for up to 3 months.',
  },
  {
    id: '1767013114778.4333',
    title: 'Vegan Pumpkin Bread',
    slug: 'vegan-pumpkin-bread',
    description: 'Delightfully moist and fragrant, this vegan pumpkin bread is perfect for fall or any time you crave a slice of comfort. Made with wholesome ingredients, it\'s a delicious treat for everyone!',
    prologue: 'Looking for a delicious and healthy vegan pumpkin bread recipe? This delightful loaf combines the rich flavors of pumpkin and warm spices, making it perfect for breakfast, snacks, or dessert. With simple whole-food ingredients, you can create a moist and flavorful bread that everyone will love. Check out vegancooking.recipes for more amazing vegan recipes!',
    image: '/recipe-images/vegan-pumpkin-bread-1767013116159.webp',
    prepTime: 15,
    cookTime: 60,
    totalTime: 75,
    servings: 10,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "1.5",
          "unit": "cups",
          "notes": "can substitute with spelt flour for a different flavor"
        },
        {
          "name": "baking powder",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "ground cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "ground nutmeg",
          "amount": "0.5",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "salt",
          "amount": "0.5",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "coconut sugar",
          "amount": "0.75",
          "unit": "cups",
          "notes": "can substitute with brown sugar or maple sugar"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "0.5",
          "unit": "cups",
          "notes": "acts as a binder and adds moisture"
        },
        {
          "name": "canned pumpkin puree",
          "amount": "1",
          "unit": "cups",
          "notes": "ensure it's pure pumpkin, not pumpkin pie filling"
        },
        {
          "name": "non-dairy milk",
          "amount": "0.5",
          "unit": "cups",
          "notes": "use almond, soy, or oat milk"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan or line it with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour, baking powder, baking soda, ground cinnamon, ground nutmeg, and salt. Whisk together until well mixed."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the coconut sugar, unsweetened applesauce, canned pumpkin puree, non-dairy milk, and vanilla extract until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and gently stir with a spatula until just combined. Do not overmix."
        },
        {
          "step": 5,
          "text": "Pour the batter into the prepared loaf pan, smoothing the top with a spatula."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 55-60 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 7,
          "text": "Once baked, remove from the oven and let it cool in the pan for about 10 minutes, then transfer to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "3g",
        "carbs": "30g",
        "fat": "2g",
        "fiber": "3g",
        "sugar": "8g"
      },
    tags: ["vegan","pumpkin","baking","bread","whole food plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour adds fiber and nutrients. You can substitute with gluten-free flour if needed, but the texture may vary. Canned pumpkin puree is recommended for consistency, but you can also use fresh pumpkin if cooked and pureed well.',
    faqs: [
        {
          "question": "Can I use fresh pumpkin instead of canned?",
          "answer": "Yes, make sure the fresh pumpkin is cooked and pureed until smooth for the best results."
        },
        {
          "question": "How do I store leftovers?",
          "answer": "Store the bread in an airtight container at room temperature for up to 3 days or refrigerate for up to a week."
        }
      ],
    tips: ["For added flavor, consider folding in chopped walnuts or pecans into the batter.","Serve with a spread of almond butter for a delicious breakfast or snack!"],
    variations: ["Add chocolate chips for a sweet twist.","Incorporate dried cranberries or raisins for added texture and sweetness."],
    storage: 'Store the cooled pumpkin bread in an airtight container at room temperature for up to 3 days. For longer storage, slice and freeze it in a freezer-safe bag for up to 3 months.',
  },
  {
    id: '1767018289399.6968',
    title: 'Pecan Pie',
    slug: 'pecan-pie',
    description: 'Indulge in this rich and nutty vegan pecan pie that delivers the perfect balance of sweetness and crunch, making it an irresistible dessert for any occasion.',
    prologue: 'Discover the joy of baking with this vegan pecan pie recipe that showcases the deliciousness of whole-food-plant-based ingredients. Perfectly sweetened with natural sweeteners and packed with wholesome nuts, this pie is a guilt-free treat. Explore more vegan recipes at vegancooking.recipes and elevate your dessert game with this classic favorite.',
    image: '/recipe-images/pecan-pie-1767018292156.webp',
    prepTime: 20,
    cookTime: 60,
    totalTime: 80,
    servings: 8,
    difficulty: 'medium',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Whole wheat flour",
          "amount": "1",
          "unit": "cup",
          "notes": "for the pie crust"
        },
        {
          "name": "Coconut oil",
          "amount": "1/3",
          "unit": "cup",
          "notes": "melted"
        },
        {
          "name": "Maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "for sweetness"
        },
        {
          "name": "Brown sugar",
          "amount": "1/2",
          "unit": "cup",
          "notes": "packed"
        },
        {
          "name": "Ground flaxseed",
          "amount": "2",
          "unit": "tbsp",
          "notes": "mixed with 6 tbsp water for flax egg"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "Almond milk",
          "amount": "1/4",
          "unit": "cup",
          "notes": "or any plant-based milk"
        },
        {
          "name": "Pecans",
          "amount": "2",
          "unit": "cups",
          "notes": "chopped, plus extra for topping"
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "to enhance flavors"
        },
        {
          "name": "Ground cinnamon",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "optional for added warmth"
        },
        {
          "name": "Nutmeg",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "optional for added flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a mixing bowl, combine the whole wheat flour and salt. Stir in the melted coconut oil until crumbly."
        },
        {
          "step": 3,
          "text": "Add 3-4 tablespoons of cold water gradually until the dough comes together. Form into a ball, wrap in plastic wrap, and refrigerate for 10 minutes."
        },
        {
          "step": 4,
          "text": "In a separate bowl, prepare the flax egg by mixing the ground flaxseed with 6 tablespoons of water. Let it sit for about 5 minutes to thicken."
        },
        {
          "step": 5,
          "text": "After the dough has chilled, roll it out on a lightly floured surface and fit it into a 9-inch pie pan. Trim any excess dough."
        },
        {
          "step": 6,
          "text": "To make the filling, in a large bowl, combine the maple syrup, brown sugar, vanilla extract, almond milk, and prepared flax egg. Whisk until smooth."
        },
        {
          "step": 7,
          "text": "Fold in the chopped pecans, ground cinnamon, and nutmeg (if using)."
        },
        {
          "step": 8,
          "text": "Pour the filling into the prepared pie crust and arrange additional pecans on top."
        },
        {
          "step": 9,
          "text": "Bake in the preheated oven for 50-60 minutes, or until the filling is set and the crust is golden brown."
        },
        {
          "step": 10,
          "text": "Remove from the oven and let it cool for at least 2 hours before slicing. Serve at room temperature or chilled."
        }
      ],
    nutritionInfo: {
        "calories": 250,
        "protein": "4g",
        "carbs": "35g",
        "fat": "12g",
        "fiber": "3g",
        "sugar": "8g"
      },
    tags: ["vegan","dessert","pie","whole-food-plant-based","gluten-free option available","baking"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a gluten-free option, substitute the whole wheat flour with a gluten-free flour blend. Ensure that the pecans are fresh for maximum flavor and crunch.',
    faqs: [
        {
          "question": "Can I make this pie ahead of time?",
          "answer": "Yes, this pecan pie can be made a day in advance. Store it in the refrigerator and allow it to come to room temperature before serving."
        },
        {
          "question": "Is there a substitute for coconut oil?",
          "answer": "You can use vegan butter or any neutral-flavored oil in place of coconut oil."
        }
      ],
    tips: ["For a deeper flavor, toast the pecans in a dry skillet for a few minutes before adding them to the filling.","If you like a firmer pie, you can add a tablespoon of cornstarch to the filling mixture."],
    variations: ["Add dark chocolate chips for a chocolate pecan pie twist.","Substitute maple syrup with agave syrup for a different sweetness profile."],
    storage: 'Store leftover pecan pie in an airtight container in the refrigerator for up to 5 days. You can also freeze slices wrapped tightly for up to 2 months.',
  },
  {
    id: '1767018330038.9429',
    title: 'Cinnamon Bread',
    slug: 'cinnamon-bread',
    description: 'This delicious vegan cinnamon bread is moist, fluffy, and bursting with sweet cinnamon flavor. Perfect for breakfast or as a delightful snack!',
    prologue: 'Welcome to vegancooking.recipes, where we bring you delightful plant-based recipes that are both wholesome and satisfying. This vegan cinnamon bread is made with whole-food ingredients, making it a nutritious option for anyone looking to enjoy a sweet treat without compromising their dietary choices. With its warm, comforting flavors and easy preparation, this recipe is sure to become a favorite in your kitchen.',
    image: '/recipe-images/cinnamon-bread-1767018331334.webp',
    prepTime: 20,
    cookTime: 50,
    totalTime: 70,
    servings: 10,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "can substitute with all-purpose flour for a lighter texture"
        },
        {
          "name": "baking powder",
          "amount": "2",
          "unit": "tsp",
          "notes": "ensure it's aluminum-free for health benefits"
        },
        {
          "name": "cinnamon",
          "amount": "2",
          "unit": "tbsp",
          "notes": "use Ceylon cinnamon for a milder flavor"
        },
        {
          "name": "nutmeg",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "freshly grated if possible"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "optional, to enhance flavor"
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
          "notes": "acts as a binder and adds moisture"
        },
        {
          "name": "plant-based milk",
          "amount": "1/2",
          "unit": "cup",
          "notes": "almond or oat milk works well"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "pure vanilla extract is preferred"
        },
        {
          "name": "chopped walnuts",
          "amount": "1/2",
          "unit": "cup",
          "notes": "optional, for added crunch"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C). Grease a 9x5-inch loaf pan or line it with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour, baking powder, cinnamon, nutmeg, and salt. Whisk until well combined."
        },
        {
          "step": 3,
          "text": "In another bowl, mix together the maple syrup, unsweetened applesauce, plant-based milk, and vanilla extract until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix; a few lumps are okay."
        },
        {
          "step": 5,
          "text": "If using, fold in the chopped walnuts gently into the batter."
        },
        {
          "step": 6,
          "text": "Pour the batter into the prepared loaf pan and smooth the top with a spatula."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 45-50 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 8,
          "text": "Once baked, remove the cinnamon bread from the oven and let it cool in the pan for about 10 minutes before transferring it to a wire rack to cool completely."
        },
        {
          "step": 9,
          "text": "Slice and serve plain or with a spread of your choice!"
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "4g",
        "carbs": "30g",
        "fat": "6g",
        "fiber": "4g",
        "sugar": "5g"
      },
    tags: ["vegan","baking","bread","whole food plant based","cinnamon","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour adds fiber and nutrients compared to white flour. Feel free to adjust the sweetness by using less maple syrup or substituting with another sweetener. The applesauce is crucial for moisture and acts as an egg replacer.',
    faqs: [
        {
          "question": "Can I make this gluten-free?",
          "answer": "Yes, you can substitute the whole wheat flour with a gluten-free all-purpose flour blend, but the texture may vary."
        },
        {
          "question": "How do I store leftovers?",
          "answer": "Store the cinnamon bread in an airtight container at room temperature for up to 3 days or in the refrigerator for up to a week."
        }
      ],
    tips: ["For an extra cinnamon flavor, sprinkle a mixture of cinnamon and sugar on top before baking.","If you want a glaze, mix powdered sugar with a little plant-based milk and drizzle over the cooled bread."],
    variations: ["Add dried fruits like raisins or cranberries for added sweetness and texture.","Try using different spices like cardamom or cloves for a unique flavor twist."],
    storage: 'Store leftover cinnamon bread in an airtight container at room temperature for up to 3 days or refrigerate for up to a week. You can also freeze slices for up to 3 months; just thaw before serving.',
  },
  {
    id: '1767018437793.2236',
    title: 'Blueberry Muffins',
    slug: 'blueberry-muffins',
    description: 'Deliciously moist and fluffy blueberry muffins, perfect for breakfast or a sweet snack.',
    prologue: 'Discover the joy of baking with these wholesome Blueberry Muffins, made entirely with plant-based ingredients. Ideal for anyone following a whole-food-plant-based diet, these muffins are not only tasty but also packed with nutrients. Visit vegancooking.recipes for more delicious vegan recipes that will delight your taste buds and nourish your body.',
    image: '/recipe-images/blueberry-muffins-1767015839466.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 12,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "for a healthier option"
        },
        {
          "name": "baking powder",
          "amount": "2",
          "unit": "teaspoons",
          "notes": "ensure it's aluminum-free"
        },
        {
          "name": "baking soda",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "helps muffins rise"
        },
        {
          "name": "salt",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "to enhance flavor"
        },
        {
          "name": "maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "acts as a sweetener and moisture"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "replaces eggs and adds moisture"
        },
        {
          "name": "unsweetened almond milk",
          "amount": "1/2",
          "unit": "cup",
          "notes": "use any plant-based milk"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for flavor"
        },
        {
          "name": "fresh blueberries",
          "amount": "1",
          "unit": "cup",
          "notes": "can substitute with frozen if fresh are unavailable"
        },
        {
          "name": "lemon zest",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "optional, adds brightness"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a muffin tin with paper liners or lightly grease it."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour, baking powder, baking soda, and salt. Whisk together until well combined."
        },
        {
          "step": 3,
          "text": "In a separate bowl, mix together the maple syrup, applesauce, almond milk, and vanilla extract until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir gently until just combined. Be careful not to overmix."
        },
        {
          "step": 5,
          "text": "Fold in the fresh blueberries and lemon zest, if using."
        },
        {
          "step": 6,
          "text": "Divide the batter evenly among the muffin cups, filling each about 2/3 full."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 22-25 minutes, or until a toothpick inserted into the center of a muffin comes out clean."
        },
        {
          "step": 8,
          "text": "Let the muffins cool in the pan for 5 minutes before transferring them to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "3g",
        "carbs": "29g",
        "fat": "2g",
        "fiber": "3g",
        "sugar": "7g"
      },
    tags: ["vegan","baking","breakfast","snack","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can use spelt flour or oat flour as alternatives to whole wheat flour. For sweetening, agave syrup or date syrup can be used in place of maple syrup. Fresh or frozen blueberries can be used interchangeably, but if using frozen, do not thaw to prevent excess moisture.',
    faqs: [
        {
          "question": "Can I make these muffins gluten-free?",
          "answer": "Yes, you can substitute the whole wheat flour with a gluten-free flour blend. Make sure to add a binder like xanthan gum if your blend does not contain one."
        }
      ],
    tips: ["For extra moist muffins, do not overmix the batter.","Store leftover muffins in an airtight container at room temperature for up to 3 days."],
    variations: ["Add chopped nuts such as walnuts or pecans for added crunch.","Substitute blueberries with raspberries or chopped strawberries for a different flavor."],
    storage: 'Store the muffins in an airtight container at room temperature for up to 3 days, or freeze for up to 3 months. To freeze, wrap each muffin tightly in plastic wrap and place in a freezer-safe bag.',
  },
  {
    id: '1767019605908.4944',
    title: 'English Muffins',
    slug: 'english-muffins',
    description: 'Deliciously soft and perfectly toasted, these vegan English muffins are a delightful breakfast option that pairs beautifully with your favorite spreads or toppings.',
    prologue: 'Discover the joy of homemade vegan English muffins with this easy recipe from vegancooking.recipes. Made without any animal products, these whole-food-plant-based muffins are not only nutritious but also incredibly satisfying. Perfect for breakfast or brunch, they can be topped with avocado, nut butter, or your favorite jam for a delightful treat.',
    image: '/recipe-images/english-muffins-1767019607374.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 6,
    difficulty: 'medium',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "all-purpose flour",
          "amount": "2",
          "unit": "cups",
          "notes": "You can also use whole wheat flour for a healthier option."
        },
        {
          "name": "active dry yeast",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Make sure it's fresh for best results."
        },
        {
          "name": "warm water",
          "amount": "3/4",
          "unit": "cup",
          "notes": "Temperature should be around 110°F (43°C)."
        },
        {
          "name": "maple syrup",
          "amount": "1",
          "unit": "tbsp",
          "notes": "To feed the yeast."
        },
        {
          "name": "salt",
          "amount": "1",
          "unit": "tsp",
          "notes": "Enhances flavor."
        },
        {
          "name": "baking powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "For additional leavening."
        },
        {
          "name": "olive oil",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Adds moisture and flavor."
        },
        {
          "name": "cornmeal",
          "amount": "1/4",
          "unit": "cup",
          "notes": "For dusting the baking surface."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a small bowl, combine the warm water, maple syrup, and active dry yeast. Let it sit for about 5-10 minutes until frothy."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the flour, salt, and baking powder."
        },
        {
          "step": 3,
          "text": "Make a well in the center of the dry ingredients, then add the frothy yeast mixture and olive oil."
        },
        {
          "step": 4,
          "text": "Mix until a dough forms. If the dough is too sticky, add a little more flour, a tablespoon at a time."
        },
        {
          "step": 5,
          "text": "Knead the dough on a lightly floured surface for about 5-7 minutes until smooth and elastic."
        },
        {
          "step": 6,
          "text": "Place the dough in a lightly oiled bowl, cover with a clean kitchen towel, and let it rise in a warm place for about 1 hour or until doubled in size."
        },
        {
          "step": 7,
          "text": "Once risen, punch down the dough and turn it out onto a floured surface. Roll it out to about 1-inch thickness."
        },
        {
          "step": 8,
          "text": "Use a biscuit cutter or a glass to cut out muffins from the dough. Place them on a baking sheet dusted with cornmeal."
        },
        {
          "step": 9,
          "text": "Cover the muffins with a towel and let them rise for another 30 minutes."
        },
        {
          "step": 10,
          "text": "Preheat your oven to 350°F (175°C). Bake the muffins for 20-25 minutes, or until golden brown."
        },
        {
          "step": 11,
          "text": "Remove from the oven and let cool on a wire rack before splitting and toasting."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "5g",
        "carbs": "30g",
        "fat": "2g",
        "fiber": "1g",
        "sugar": "1g"
      },
    tags: ["vegan","breakfast","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a gluten-free version, substitute all-purpose flour with a gluten-free all-purpose blend. Be sure to use a gluten-free baking powder.',
    faqs: [
        {
          "question": "Can I make these in advance?",
          "answer": "Yes, you can prepare the dough the night before, let it rise in the fridge, and bake them fresh in the morning."
        },
        {
          "question": "What can I use instead of maple syrup?",
          "answer": "Agave syrup or coconut sugar can be used as a substitute for sweetness."
        }
      ],
    tips: ["For a more authentic flavor, add a pinch of nutmeg or cinnamon to the dough.","These muffins freeze well; simply toast them from frozen."],
    variations: ["Add dried herbs like rosemary or thyme for a savory twist.","Incorporate seeds such as chia or flax for added texture and nutrition."],
    storage: 'Store the muffins in an airtight container at room temperature for up to 3 days, or freeze for up to 3 months.',
  },
  {
    id: '1767019791753.6672',
    title: 'Peanut Butter Cookies',
    slug: 'peanut-butter-cookies',
    description: 'Deliciously rich and chewy, these vegan peanut butter cookies are perfect for satisfying your sweet tooth while keeping it wholesome and plant-based.',
    prologue: 'Discover the joy of baking with these Peanut Butter Cookies, crafted to be completely vegan and whole-food-plant-based. With just a few simple ingredients, these cookies are not only easy to make but are also packed with flavor and nutrition. Visit vegancooking.recipes for more delightful and healthy vegan recipes that will inspire your culinary adventures.',
    image: '/recipe-images/peanut-butter-cookies-1767019793017.webp',
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 24,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Natural peanut butter",
          "amount": "1",
          "unit": "cup",
          "notes": "Make sure it's unsweetened and creamy."
        },
        {
          "name": "Maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Acts as a natural sweetener."
        },
        {
          "name": "Whole wheat flour",
          "amount": "1",
          "unit": "cup",
          "notes": "Can substitute with almond flour for a gluten-free option."
        },
        {
          "name": "Baking soda",
          "amount": "1",
          "unit": "tsp",
          "notes": "Helps cookies rise."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "Enhances flavor."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "For added flavor."
        },
        {
          "name": "Plant-based milk",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Use almond or soy milk."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a baking sheet with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the natural peanut butter and maple syrup. Stir until smooth and well combined."
        },
        {
          "step": 3,
          "text": "Add the whole wheat flour, baking soda, salt, vanilla extract, and plant-based milk to the mixture. Stir until a dough forms."
        },
        {
          "step": 4,
          "text": "Using a tablespoon, scoop out dough and roll into balls. Place them on the prepared baking sheet, spacing them about 2 inches apart."
        },
        {
          "step": 5,
          "text": "Flatten each ball slightly with a fork, creating a crisscross pattern on top."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 10 minutes, or until the edges are lightly golden."
        },
        {
          "step": 7,
          "text": "Remove from the oven and let the cookies cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 100,
        "protein": "3g",
        "carbs": "12g",
        "fat": "5g",
        "fiber": "1g",
        "sugar": "3g"
      },
    tags: ["vegan","cookies","baking","dessert","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Natural peanut butter is key for a wholesome cookie. If you have a nut allergy, try sunflower seed butter instead. Maple syrup provides sweetness without refined sugars, but agave syrup can be an alternative.',
    faqs: [
        {
          "question": "Can I use a different type of flour?",
          "answer": "Yes, you can substitute whole wheat flour with almond flour or oat flour, but the texture may vary slightly."
        },
        {
          "question": "How can I make these cookies gluten-free?",
          "answer": "Use almond flour or a gluten-free all-purpose flour blend in place of whole wheat flour."
        }
      ],
    tips: ["For a richer flavor, consider adding dark chocolate chips or chopped nuts to the dough.","Make sure your peanut butter is at room temperature for easier mixing."],
    variations: ["Add 1/2 cup of dairy-free chocolate chips for a chocolatey twist.","Incorporate 1/4 cup of shredded coconut for added texture and flavor."],
    storage: 'Store the cookies in an airtight container at room temperature for up to 5 days, or freeze for up to 3 months. To freeze, place the cookies in a single layer on a baking sheet, freeze until solid, then transfer to a freezer bag.',
  },
  {
    id: '1767019826932.8643',
    title: 'Sweet Potato Pie',
    slug: 'sweet-potato-pie',
    description: 'This rich and creamy Sweet Potato Pie is a delightful vegan twist on a classic dessert, perfect for any occasion.',
    prologue: 'Discover the warm flavors of fall with this delectable Sweet Potato Pie, a completely vegan dessert that will impress everyone at your table. Made with wholesome ingredients and a buttery crust, this pie is both satisfying and nutritious. Ideal for holidays or a cozy family gathering, this recipe from vegancooking.recipes will have you going back for seconds!',
    image: '/recipe-images/sweet-potato-pie-1767019828294.webp',
    prepTime: 20,
    cookTime: 60,
    totalTime: 80,
    servings: 8,
    difficulty: 'medium',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "sweet potatoes",
          "amount": "2",
          "unit": "cups",
          "notes": "mashed, about 2 medium-sized sweet potatoes"
        },
        {
          "name": "coconut milk",
          "amount": "1",
          "unit": "cup",
          "notes": "full-fat for creaminess"
        },
        {
          "name": "maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "or agave syrup"
        },
        {
          "name": "coconut oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "melted"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "pure vanilla extract"
        },
        {
          "name": "ground cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "ground nutmeg",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "ground ginger",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "to enhance sweetness"
        },
        {
          "name": "vegan pie crust",
          "amount": "1",
          "unit": "crust",
          "notes": "store-bought or homemade"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "Peel and cube the sweet potatoes, then boil them in a pot of water for about 15-20 minutes or until tender."
        },
        {
          "step": 3,
          "text": "Drain the sweet potatoes and mash them in a large mixing bowl until smooth."
        },
        {
          "step": 4,
          "text": "Add coconut milk, maple syrup, melted coconut oil, vanilla extract, cinnamon, nutmeg, ginger, and salt to the mashed sweet potatoes. Mix until well combined."
        },
        {
          "step": 5,
          "text": "Pour the sweet potato mixture into the prepared vegan pie crust, smoothing the top with a spatula."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 45-50 minutes, or until the filling is set and a toothpick inserted in the center comes out clean."
        },
        {
          "step": 7,
          "text": "Remove the pie from the oven and let it cool at room temperature for at least 30 minutes before slicing."
        },
        {
          "step": 8,
          "text": "Serve chilled or at room temperature, optionally topped with coconut whipped cream."
        }
      ],
    nutritionInfo: {
        "calories": 210,
        "protein": "3g",
        "carbs": "30g",
        "fat": "10g",
        "fiber": "4g",
        "sugar": "8g"
      },
    tags: ["dessert","vegan","pie","sweet potato","plant-based","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Sweet potatoes can be substituted with pumpkin for a different flavor. Use a gluten-free pie crust if necessary.',
    faqs: [
        {
          "question": "Can I make this pie ahead of time?",
          "answer": "Yes, this pie can be made a day ahead and stored in the refrigerator. Just let it cool completely before wrapping it."
        },
        {
          "question": "What can I use as a sweetener instead of maple syrup?",
          "answer": "You can use agave syrup, brown sugar, or coconut sugar as alternatives."
        }
      ],
    tips: ["To enhance the flavor, try adding a tablespoon of almond butter or peanut butter to the filling.","For a decorative touch, sprinkle some chopped pecans on top before baking."],
    variations: ["Add a tablespoon of peanut butter for a nutty flavor.","Top with a layer of vegan marshmallows for a toasted pie."],
    storage: 'Store any leftover pie in an airtight container in the refrigerator for up to 4 days. It can also be frozen for up to 2 months; just thaw in the refrigerator before serving.',
  },
  {
    id: '1767019925111.081',
    title: 'Blondies',
    slug: 'blondies',
    description: 'These decadent vegan blondies are rich, chewy, and packed with flavor, making them an irresistible treat for any occasion.',
    prologue: 'Indulge in the delightful world of vegan baking with these scrumptious blondies that are completely plant-based and made with whole foods. Perfect for satisfying your sweet tooth, these blondies offer a chewy texture and a rich flavor profile thanks to wholesome ingredients. Visit vegancooking.recipes for more delicious vegan dessert ideas that everyone will love.',
    image: '/recipe-images/blondies-1767019926599.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 16,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Almond flour",
          "amount": "2",
          "unit": "cups",
          "notes": "For a chewy texture; can substitute with whole wheat flour."
        },
        {
          "name": "Maple syrup",
          "amount": "3/4",
          "unit": "cup",
          "notes": "Use pure maple syrup for best flavor."
        },
        {
          "name": "Nut butter (almond or cashew)",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Smooth nut butter works best."
        },
        {
          "name": "Unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Acts as an egg replacer."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tbsp",
          "notes": "For enhanced flavor."
        },
        {
          "name": "Baking soda",
          "amount": "1",
          "unit": "tsp",
          "notes": "Leavening agent."
        },
        {
          "name": "Sea salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "To enhance flavor."
        },
        {
          "name": "Vegan chocolate chips",
          "amount": "1",
          "unit": "cup",
          "notes": "Optional, for added sweetness and texture."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line an 8x8 inch baking pan with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the almond flour, baking soda, and sea salt. Stir well to combine."
        },
        {
          "step": 3,
          "text": "In another bowl, mix together the maple syrup, nut butter, unsweetened applesauce, and vanilla extract until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix."
        },
        {
          "step": 5,
          "text": "Fold in the vegan chocolate chips if using."
        },
        {
          "step": 6,
          "text": "Spread the batter evenly into the prepared baking pan."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 25 minutes or until the edges are lightly golden and a toothpick inserted in the center comes out clean."
        },
        {
          "step": 8,
          "text": "Remove from the oven and let cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
        },
        {
          "step": 9,
          "text": "Once cooled, cut into 16 squares and enjoy!"
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "4g",
        "carbs": "25g",
        "fat": "8g",
        "fiber": "2g",
        "sugar": "10g"
      },
    tags: ["vegan","dessert","blondies","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Almond flour gives these blondies a unique texture and flavor; if you need a nut-free option, you can use oat flour instead. Maple syrup adds natural sweetness, but agave syrup or date syrup can also be used.',
    faqs: [
        {
          "question": "Can I use a different type of flour?",
          "answer": "Yes, you can substitute almond flour with whole wheat flour or a gluten-free blend, but the texture may vary."
        },
        {
          "question": "How should I store these blondies?",
          "answer": "Store them in an airtight container at room temperature for up to 5 days or refrigerate for up to a week."
        }
      ],
    tips: ["For extra flavor, add a pinch of cinnamon or nutmeg to the batter.","Let the blondies cool completely for the best texture before cutting."],
    variations: ["Add chopped nuts such as walnuts or pecans for added crunch.","Mix in dried fruit like cranberries or raisins for a chewy texture."],
    storage: 'Store in an airtight container at room temperature for up to 5 days. For longer storage, keep them in the refrigerator for up to a week or freeze for up to 3 months.',
  },
  {
    id: '1767020113385.4001',
    title: 'Garlic Bread',
    slug: 'garlic-bread',
    description: 'Deliciously crispy and aromatic, this garlic bread is the perfect accompaniment to any meal or a delightful snack on its own.',
    prologue: 'Looking for a simple yet mouthwatering vegan garlic bread recipe? Look no further! This whole-food-plant-based garlic bread is made with wholesome ingredients, ensuring you indulge without the guilt. Perfect for serving alongside pasta dishes or as an appetizer, this recipe is a must-try for every vegan cooking enthusiast at vegancooking.recipes.',
    image: '/recipe-images/garlic-bread-1767020114668.webp',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Whole grain bread",
          "amount": "4",
          "unit": "slices",
          "notes": "Preferably sourdough or any whole grain variety"
        },
        {
          "name": "Garlic",
          "amount": "4",
          "unit": "cloves",
          "notes": "Minced"
        },
        {
          "name": "Olive oil",
          "amount": "3",
          "unit": "tbsp",
          "notes": "Extra virgin for best flavor"
        },
        {
          "name": "Fresh parsley",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Chopped, can substitute with dried parsley"
        },
        {
          "name": "Nutritional yeast",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Optional, for a cheesy flavor"
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
          "notes": "Freshly ground for best results"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 400°F (200°C)."
        },
        {
          "step": 2,
          "text": "In a mixing bowl, combine minced garlic, olive oil, chopped parsley, nutritional yeast, salt, and black pepper."
        },
        {
          "step": 3,
          "text": "Stir the mixture until well combined, creating a garlic oil spread."
        },
        {
          "step": 4,
          "text": "Spread the garlic mixture evenly on one side of each slice of whole grain bread."
        },
        {
          "step": 5,
          "text": "Place the slices of bread on a baking sheet, garlic side up."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 10-15 minutes, or until the edges are golden and crispy."
        },
        {
          "step": 7,
          "text": "Remove from the oven and let cool slightly before serving."
        },
        {
          "step": 8,
          "text": "Slice and serve warm, optionally garnishing with additional fresh parsley."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "6g",
        "carbs": "30g",
        "fat": "6g",
        "fiber": "4g",
        "sugar": "1g"
      },
    tags: ["vegan","garlic bread","snack","appetizer","whole food","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole grain bread is recommended for added fiber and nutrients. You can substitute olive oil with avocado oil for a different flavor profile. Nutritional yeast gives a cheesy taste but can be omitted if desired.',
    faqs: [
        {
          "question": "Can I make this garlic bread gluten-free?",
          "answer": "Yes, use gluten-free bread as a substitute for whole grain bread."
        },
        {
          "question": "How do I store leftover garlic bread?",
          "answer": "Store any leftover garlic bread in an airtight container in the refrigerator for up to 3 days. To reheat, pop it in the toaster or oven."
        }
      ],
    tips: ["For a more intense garlic flavor, let the garlic sit in the olive oil for 30 minutes before mixing in the other ingredients.","Experiment with adding other herbs like thyme or oregano for a flavor twist."],
    variations: ["Add red pepper flakes for a spicy kick.","Try spreading a layer of vegan pesto on the bread before adding the garlic mixture."],
    storage: 'Store leftover garlic bread in an airtight container in the refrigerator for up to 3 days. To reheat, place it in a toaster oven or regular oven at 350°F (175°C) until warmed through.',
  },
  {
    id: '1767020151226.185',
    title: 'Bagels',
    slug: 'bagels',
    description: 'Deliciously chewy and perfectly baked, these vegan bagels are made with wholesome ingredients and are sure to please everyone at the breakfast table.',
    prologue: 'If you’re looking for a delightful way to start your day, these whole-food, plant-based bagels are the perfect choice. Made without any animal products, they are not only healthier but also incredibly satisfying. Follow this easy recipe from vegancooking.recipes to create your own batch of fresh bagels right at home.',
    image: '/recipe-images/bagels-1767020152565.webp',
    prepTime: 30,
    cookTime: 25,
    totalTime: 55,
    servings: 8,
    difficulty: 'medium',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "All-purpose flour",
          "amount": "4",
          "unit": "cups",
          "notes": "You can substitute with whole wheat flour for a denser bagel."
        },
        {
          "name": "Warm water",
          "amount": "1.5",
          "unit": "cups",
          "notes": "Temperature should be around 110°F (43°C)."
        },
        {
          "name": "Active dry yeast",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Check the expiration date for effectiveness."
        },
        {
          "name": "Maple syrup",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Acts as a sweetener and helps activate the yeast."
        },
        {
          "name": "Salt",
          "amount": "1.5",
          "unit": "tsp",
          "notes": "Adjust to taste."
        },
        {
          "name": "Baking soda",
          "amount": "2",
          "unit": "tbsp",
          "notes": "For boiling the bagels."
        },
        {
          "name": "Sesame seeds",
          "amount": "1",
          "unit": "cup",
          "notes": "For topping, optional."
        },
        {
          "name": "Poppy seeds",
          "amount": "1",
          "unit": "cup",
          "notes": "For topping, optional."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large mixing bowl, combine warm water and maple syrup. Sprinkle the active dry yeast over the water and let it sit for about 5-10 minutes until frothy."
        },
        {
          "step": 2,
          "text": "Add the salt and gradually mix in the all-purpose flour, one cup at a time, until a dough forms."
        },
        {
          "step": 3,
          "text": "Knead the dough on a floured surface for about 8-10 minutes until it is smooth and elastic."
        },
        {
          "step": 4,
          "text": "Place the kneaded dough in a lightly greased bowl, cover with a damp cloth, and let it rise in a warm place for about 1 hour or until doubled in size."
        },
        {
          "step": 5,
          "text": "Preheat your oven to 425°F (220°C) and line a baking sheet with parchment paper."
        },
        {
          "step": 6,
          "text": "Once the dough has risen, punch it down and divide it into 8 equal pieces. Roll each piece into a ball, then poke a hole through the center with your thumb. Gently stretch to form a bagel shape."
        },
        {
          "step": 7,
          "text": "In a large pot, bring water to a boil and add baking soda. Boil each bagel for about 1 minute on each side, then transfer to the prepared baking sheet."
        },
        {
          "step": 8,
          "text": "If desired, sprinkle sesame seeds or poppy seeds on top of the bagels before placing them in the oven."
        },
        {
          "step": 9,
          "text": "Bake in the preheated oven for 20-25 minutes or until golden brown. Let them cool on a wire rack before serving."
        }
      ],
    nutritionInfo: {
        "calories": 210,
        "protein": "7g",
        "carbs": "42g",
        "fat": "1g",
        "fiber": "2g",
        "sugar": "1g"
      },
    tags: ["vegan","baking","breakfast","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a gluten-free option, use a gluten-free all-purpose flour blend. Adjust the water as needed since gluten-free flours absorb more or less moisture.',
    faqs: [
        {
          "question": "Can I freeze these bagels?",
          "answer": "Yes, once completely cooled, you can freeze the bagels in an airtight container for up to 3 months."
        },
        {
          "question": "What toppings can I use?",
          "answer": "Feel free to use everything bagel seasoning, garlic powder, or even nutritional yeast for added flavor."
        }
      ],
    tips: ["Ensure your water is warm, not hot, to properly activate the yeast.","For an extra chewy texture, let the boiled bagels rest for a few minutes before baking."],
    variations: ["Add dried herbs like rosemary or thyme into the dough for a savory flavor.","Incorporate diced olives or sun-dried tomatoes into the dough for a Mediterranean twist."],
    storage: 'Store the bagels in an airtight container at room temperature for up to 3 days or refrigerate for up to a week. Reheat in the oven or toaster before serving.',
  },
  {
    id: '1767020228221.549',
    title: 'Vanilla Cupcakes',
    slug: 'vanilla-cupcakes',
    description: 'Delight in these light and fluffy vegan vanilla cupcakes, perfect for any occasion and topped with a simple vegan frosting.',
    prologue: 'If you\'re searching for the perfect vegan dessert, look no further than these delightful vanilla cupcakes. Made with wholesome, plant-based ingredients, they are light, fluffy, and full of flavor. Ideal for birthdays, celebrations, or just a sweet treat, these cupcakes are sure to impress both vegans and non-vegans alike. Visit vegancooking.recipes for more delicious vegan recipes and cooking tips!',
    image: '/recipe-images/vanilla-cupcakes-1767020229738.webp',
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
          "notes": "Ensure it's fresh"
        },
        {
          "name": "baking soda",
          "amount": "½",
          "unit": "tsp",
          "notes": "Fresh"
        },
        {
          "name": "salt",
          "amount": "¼",
          "unit": "tsp",
          "notes": "Adjust to taste"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "½",
          "unit": "cup",
          "notes": "Acts as an egg substitute"
        },
        {
          "name": "maple syrup",
          "amount": "¾",
          "unit": "cup",
          "notes": "For natural sweetness"
        },
        {
          "name": "unsweetened plant milk",
          "amount": "½",
          "unit": "cup",
          "notes": "Almond, soy, or oat milk are good choices"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Use pure vanilla for best flavor"
        },
        {
          "name": "coconut oil",
          "amount": "⅓",
          "unit": "cup",
          "notes": "Melted"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a cupcake tray with 12 cupcake liners."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the sifted all-purpose flour, baking powder, baking soda, and salt until well combined."
        },
        {
          "step": 3,
          "text": "In another bowl, combine the applesauce, maple syrup, plant milk, vanilla extract, and melted coconut oil. Mix until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir gently until just combined. Be careful not to overmix; a few lumps are okay."
        },
        {
          "step": 5,
          "text": "Spoon the batter evenly into the prepared cupcake liners, filling each about 2/3 full."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 18-20 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 7,
          "text": "Once baked, remove from the oven and let the cupcakes cool in the pan for 5 minutes, then transfer them to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "2g",
        "carbs": "25g",
        "fat": "6g",
        "fiber": "1g",
        "sugar": "10g"
      },
    tags: ["vegan","dessert","cupcakes","plant-based","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'All-purpose flour can be replaced with a gluten-free blend if needed. Maple syrup can be substituted with agave syrup for a similar sweetness.',
    faqs: [
        {
          "question": "Can I use gluten-free flour?",
          "answer": "Yes, you can substitute all-purpose flour with a gluten-free flour blend."
        },
        {
          "question": "How do I store leftover cupcakes?",
          "answer": "Store in an airtight container at room temperature for up to 3 days or in the fridge for up to a week."
        }
      ],
    tips: ["For an extra hint of flavor, add a teaspoon of almond extract.","You can top these cupcakes with vegan buttercream frosting for added sweetness."],
    variations: ["Add lemon zest for a citrus twist.","Incorporate chocolate chips or nuts into the batter for added texture."],
    storage: 'Store the cupcakes in an airtight container at room temperature for up to 3 days. For longer storage, refrigerate for up to a week or freeze for up to 3 months.',
  },
  {
    id: '1767020751526.4534',
    title: 'Donuts',
    slug: 'donuts',
    description: 'Deliciously fluffy and perfectly sweet, these vegan donuts make for a delightful treat that everyone will love.',
    prologue: 'Welcome to vegancooking.recipes, where we empower you to indulge in delightful plant-based treats! These whole-food plant-based donuts are not just delicious; they are also healthy and easy to make. With simple ingredients and minimal preparation, you can create a batch that will satisfy your sweet tooth and impress your friends and family.',
    image: '/recipe-images/donuts-1767020753032.webp',
    prepTime: 20,
    cookTime: 15,
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
          "notes": "Sifted"
        },
        {
          "name": "baking powder",
          "amount": "2",
          "unit": "teaspoons",
          "notes": "Ensure it's fresh"
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Enhances rise"
        },
        {
          "name": "cinnamon",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For flavor"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Balances sweetness"
        },
        {
          "name": "maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Natural sweetener"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Acts as a binder"
        },
        {
          "name": "almond milk",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Or any plant milk"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For aroma"
        },
        {
          "name": "nutmeg",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "Optional, for extra flavor"
        },
        {
          "name": "coconut oil",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Melted, for moisture"
        },
        {
          "name": "powdered sugar",
          "amount": "1",
          "unit": "cup",
          "notes": "For glazing"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and lightly grease a donut pan with non-stick spray or coconut oil."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the whole wheat flour, baking powder, baking soda, cinnamon, nutmeg (if using), and salt until well combined."
        },
        {
          "step": 3,
          "text": "In a separate bowl, mix together the maple syrup, unsweetened applesauce, almond milk, melted coconut oil, and vanilla extract until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir gently until just combined. Be careful not to overmix."
        },
        {
          "step": 5,
          "text": "Transfer the batter to a piping bag or a zip-top bag with the corner cut off. Fill each donut cavity about 2/3 full."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 12-15 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 7,
          "text": "Remove from the oven and allow the donuts to cool in the pan for 5 minutes before transferring them to a wire rack to cool completely."
        },
        {
          "step": 8,
          "text": "Once cooled, drizzle or dip the donuts in a glaze made from powdered sugar and a little almond milk to achieve your desired consistency."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "2g",
        "carbs": "22g",
        "fat": "3g",
        "fiber": "2g",
        "sugar": "5g"
      },
    tags: ["vegan","baked","donuts","whole-food","plant-based","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour can be substituted with spelt flour for a different flavor. For a gluten-free version, use a gluten-free all-purpose flour blend. You can also swap maple syrup for agave syrup if desired.',
    faqs: [
        {
          "question": "Can I make these donuts gluten-free?",
          "answer": "Yes, simply substitute the whole wheat flour with a gluten-free all-purpose flour blend."
        },
        {
          "question": "How can I store leftover donuts?",
          "answer": "Store the donuts in an airtight container at room temperature for up to 3 days, or refrigerate them for up to a week."
        }
      ],
    tips: ["Make sure not to overmix the batter to keep the donuts fluffy.","Experiment with different glazes like chocolate or a citrus glaze for variety."],
    variations: ["Add chocolate chips to the batter for a chocolatey twist.","Top with shredded coconut or chopped nuts for added texture."],
    storage: 'Store in an airtight container at room temperature for up to 3 days, or refrigerate for up to 1 week. You can also freeze the donuts for up to 2 months; just thaw before serving.',
  },
  {
    id: '1767021258799.9495',
    title: 'Pumpkin Pie',
    slug: 'pumpkin-pie',
    description: 'This delicious vegan pumpkin pie is rich, creamy, and bursting with the flavors of fall. Made with wholesome ingredients, it’s the perfect dessert for any occasion.',
    prologue: 'Pumpkin pie is a classic dessert often associated with celebrations and family gatherings. This vegan version, made with whole food plant-based ingredients, ensures that everyone can enjoy a slice of this seasonal favorite without compromising on flavor or nutrition. At vegancooking.recipes, we believe in creating dishes that are not only delicious but also healthy and satisfying. Dive into this simple recipe that will impress your guests and satisfy your taste buds!',
    image: '/recipe-images/pumpkin-pie-1767021260421.webp',
    prepTime: 20,
    cookTime: 60,
    totalTime: 80,
    servings: 8,
    difficulty: 'medium',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Pumpkin puree",
          "amount": "2",
          "unit": "cups",
          "notes": "Use canned or homemade pumpkin puree."
        },
        {
          "name": "Coconut milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Full-fat coconut milk for creaminess."
        },
        {
          "name": "Maple syrup",
          "amount": "3/4",
          "unit": "cup",
          "notes": "Adjust sweetness according to taste."
        },
        {
          "name": "Ground cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "For warm spice flavor."
        },
        {
          "name": "Ground nutmeg",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Enhances the fall flavor."
        },
        {
          "name": "Ground ginger",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Adds a zesty kick."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "To balance the sweetness."
        },
        {
          "name": "Cornstarch",
          "amount": "3",
          "unit": "tbsp",
          "notes": "For thickening."
        },
        {
          "name": "Vegan pie crust",
          "amount": "1",
          "unit": "prepared crust",
          "notes": "Store-bought or homemade."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine pumpkin puree, coconut milk, maple syrup, ground cinnamon, ground nutmeg, ground ginger, salt, and cornstarch."
        },
        {
          "step": 3,
          "text": "Whisk the mixture until smooth and all ingredients are well incorporated."
        },
        {
          "step": 4,
          "text": "Pour the pumpkin filling into the prepared vegan pie crust, spreading it evenly."
        },
        {
          "step": 5,
          "text": "Bake in the preheated oven for 50-60 minutes, or until the filling is set and a toothpick inserted comes out clean."
        },
        {
          "step": 6,
          "text": "Remove the pie from the oven and let it cool on a wire rack for at least 2 hours before slicing."
        },
        {
          "step": 7,
          "text": "Serve with your favorite vegan whipped cream or enjoy plain!"
        }
      ],
    nutritionInfo: {
        "calories": 210,
        "protein": "3g",
        "carbs": "30g",
        "fat": "9g",
        "fiber": "3g",
        "sugar": "8g"
      },
    tags: ["dessert","pumpkin","vegan","pie","fall","baking","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Pumpkin puree can be substituted with butternut squash puree if desired. You can adjust the spices according to your preference. For a gluten-free option, use a gluten-free pie crust.',
    faqs: [
        {
          "question": "Can I use fresh pumpkin instead of canned?",
          "answer": "Yes, you can roast and puree fresh pumpkin. Just make sure to use a variety that's suitable for pies, such as Sugar Pie or Pie Pumpkin."
        },
        {
          "question": "How can I make this pie sweeter?",
          "answer": "You can add more maple syrup or a sweetener of your choice, but remember to adjust the other ingredients to maintain the consistency."
        }
      ],
    tips: ["Let the pie cool completely to set properly before slicing.","For a decorative touch, sprinkle a little cinnamon on top before serving."],
    variations: ["Add a layer of vegan chocolate ganache for a decadent twist.","Incorporate a layer of spiced pecan topping for added texture."],
    storage: 'Store the pie covered in the refrigerator for up to 5 days. You can also freeze the pie before baking for up to 3 months.',
  },
  {
    id: '1767021332685.6948',
    title: 'Apple Pie',
    slug: 'apple-pie',
    description: 'A classic vegan apple pie that boasts a flaky crust and a sweet, cinnamon-spiced apple filling, perfect for any occasion.',
    prologue: 'This vegan apple pie is a delightful dessert that captures the essence of traditional baking while embracing a whole-food-plant-based lifestyle. With a perfectly flaky crust and a luscious filling made from fresh, juicy apples, this pie is sure to impress your family and friends. At vegancooking.recipes, we believe in creating deliciously wholesome dishes that everyone can enjoy, and this apple pie is no exception. Let\'s dive into the recipe that will make your kitchen smell like autumn!',
    image: '/recipe-images/apple-pie-1767021333887.webp',
    prepTime: 30,
    cookTime: 60,
    totalTime: 90,
    servings: 8,
    difficulty: 'medium',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "all-purpose flour",
          "amount": "2",
          "unit": "cups",
          "notes": "plus extra for dusting"
        },
        {
          "name": "coconut oil",
          "amount": "1/2",
          "unit": "cup",
          "notes": "solid, not melted"
        },
        {
          "name": "cold water",
          "amount": "4-6",
          "unit": "tbsp",
          "notes": "ice-cold"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "for the crust"
        },
        {
          "name": "sugar",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for the crust"
        },
        {
          "name": "apples",
          "amount": "6",
          "unit": "medium",
          "notes": "peeled, cored, and sliced (Granny Smith or Honeycrisp work well)"
        },
        {
          "name": "brown sugar",
          "amount": "1/2",
          "unit": "cup",
          "notes": "for the filling"
        },
        {
          "name": "ground cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "nutmeg",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "freshly grated if possible"
        },
        {
          "name": "lemon juice",
          "amount": "1",
          "unit": "tbsp",
          "notes": "freshly squeezed"
        },
        {
          "name": "cornstarch",
          "amount": "2",
          "unit": "tbsp",
          "notes": "to thicken the filling"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large bowl, mix together the all-purpose flour, salt, and sugar."
        },
        {
          "step": 2,
          "text": "Add the solid coconut oil and use a pastry cutter or your fingers to blend it into the flour until the mixture resembles coarse crumbs."
        },
        {
          "step": 3,
          "text": "Gradually add cold water, one tablespoon at a time, mixing until the dough comes together. You may not need all the water."
        },
        {
          "step": 4,
          "text": "Divide the dough into two equal parts, shape them into discs, wrap in plastic wrap, and refrigerate for at least 30 minutes."
        },
        {
          "step": 5,
          "text": "Preheat your oven to 425°F (220°C)."
        },
        {
          "step": 6,
          "text": "While the dough is chilling, prepare the filling by combining the sliced apples, brown sugar, ground cinnamon, nutmeg, lemon juice, cornstarch, and vanilla extract in a large bowl. Toss until the apples are well coated."
        },
        {
          "step": 7,
          "text": "Roll out one disc of chilled dough on a floured surface to fit your pie dish. Transfer the dough to the pie dish and trim the edges."
        },
        {
          "step": 8,
          "text": "Pour the apple filling into the crust and spread it evenly."
        },
        {
          "step": 9,
          "text": "Roll out the second disc of dough and place it over the filling. Trim the edges and crimp them to seal. Cut slits in the top crust to allow steam to escape."
        },
        {
          "step": 10,
          "text": "Bake the pie in the preheated oven for 45-50 minutes, or until the crust is golden and the filling is bubbling."
        },
        {
          "step": 11,
          "text": "Remove from the oven and let the pie cool for at least 30 minutes before slicing. Serve warm or at room temperature."
        }
      ],
    nutritionInfo: {
        "calories": 280,
        "protein": "2g",
        "carbs": "45g",
        "fat": "12g",
        "fiber": "3g",
        "sugar": "20g"
      },
    tags: ["vegan","dessert","baking","apple pie","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a gluten-free version, substitute all-purpose flour with a gluten-free flour blend. Coconut oil can be replaced with vegan butter, but ensure it is solid for the crust.',
    faqs: [
        {
          "question": "Can I use different types of apples?",
          "answer": "Yes, you can mix different varieties of apples for a more complex flavor. Tart apples like Granny Smith work well with sweeter varieties."
        },
        {
          "question": "How do I prevent the crust from getting soggy?",
          "answer": "Pre-baking the crust for about 10 minutes before adding the filling can help prevent sogginess."
        }
      ],
    tips: ["Chill your dough thoroughly for a flaky crust.","Serve with vegan ice cream for an extra treat!"],
    variations: ["Add a tablespoon of maple syrup to the filling for additional sweetness.","Incorporate dried cranberries or raisins for a fruity twist."],
    storage: 'Store leftover apple pie in an airtight container in the refrigerator for up to 3 days. It can also be frozen for up to 2 months; thaw in the refrigerator before serving.',
  },
  {
    id: '1767021566196.6677',
    title: 'Zucchini Bread',
    slug: 'zucchini-bread',
    description: 'This moist and flavorful zucchini bread is a perfect treat for breakfast or a snack. Packed with whole food ingredients, it\'s a wholesome choice for any time of day.',
    prologue: 'Discover the delightful world of vegan baking with this easy Whole Food Plant-Based Zucchini Bread recipe. Created for those who love healthy, delicious, and easy-to-make treats, this bread is a fantastic way to use up fresh zucchini while enjoying a guilt-free indulgence. Check out more vegan recipes at vegancooking.recipes to elevate your plant-based cooking game!',
    image: '/recipe-images/zucchini-bread-1767015911437.webp',
    prepTime: 15,
    cookTime: 50,
    totalTime: 65,
    servings: 8,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "zucchini",
          "amount": "2",
          "unit": "cups",
          "notes": "shredded, about 2 medium zucchinis"
        },
        {
          "name": "whole wheat flour",
          "amount": "1.5",
          "unit": "cups",
          "notes": "can substitute with spelt flour"
        },
        {
          "name": "baking powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "for leavening"
        },
        {
          "name": "baking soda",
          "amount": "0.5",
          "unit": "tsp",
          "notes": "for leavening"
        },
        {
          "name": "salt",
          "amount": "0.5",
          "unit": "tsp",
          "notes": "to enhance flavor"
        },
        {
          "name": "cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "for warmth and flavor"
        },
        {
          "name": "nutmeg",
          "amount": "0.25",
          "unit": "tsp",
          "notes": "optional, for added spice"
        },
        {
          "name": "maple syrup",
          "amount": "0.5",
          "unit": "cups",
          "notes": "for natural sweetness"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "0.5",
          "unit": "cups",
          "notes": "acts as an egg replacer"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "walnuts",
          "amount": "0.5",
          "unit": "cups",
          "notes": "chopped, optional for texture"
        },
        {
          "name": "raisins",
          "amount": "0.5",
          "unit": "cups",
          "notes": "optional, for sweetness"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and grease a 9x5 inch loaf pan or line it with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour, baking powder, baking soda, salt, cinnamon, and nutmeg. Whisk together until well mixed."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the shredded zucchini, maple syrup, applesauce, and vanilla extract until fully combined."
        },
        {
          "step": 4,
          "text": "Add the wet ingredients to the dry ingredients and stir gently until just combined. Do not overmix."
        },
        {
          "step": 5,
          "text": "Fold in the chopped walnuts and raisins if using."
        },
        {
          "step": 6,
          "text": "Pour the batter into the prepared loaf pan and smooth the top with a spatula."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 45-50 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 8,
          "text": "Allow the bread to cool in the pan for about 10 minutes before transferring it to a wire rack to cool completely."
        },
        {
          "step": 9,
          "text": "Slice and enjoy your delicious zucchini bread!"
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "4g",
        "carbs": "30g",
        "fat": "7g",
        "fiber": "3g",
        "sugar": "8g"
      },
    tags: ["vegan","baking","snack","breakfast","healthy","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Zucchini adds moisture and nutrients to the bread, while whole wheat flour provides fiber. You can substitute maple syrup with agave nectar or coconut sugar for different sweetness levels.',
    faqs: [
        {
          "question": "Can I use other flours?",
          "answer": "Yes, you can substitute whole wheat flour with spelt flour or gluten-free flour blends, though the texture may differ."
        },
        {
          "question": "How do I store leftover zucchini bread?",
          "answer": "Store in an airtight container at room temperature for up to 3 days or refrigerate for up to a week. It can also be frozen for up to 3 months."
        }
      ],
    tips: ["For extra flavor, consider adding a tablespoon of ground flaxseed or chia seeds to the batter.","Make sure to squeeze out excess moisture from the shredded zucchini using a clean kitchen towel for a less dense bread."],
    variations: ["Add chocolate chips for a sweet twist.","Substitute half of the zucchini with grated carrots for a carrot-zucchini bread."],
    storage: 'Store the zucchini bread in an airtight container at room temperature for up to 3 days. For longer storage, wrap it tightly in plastic wrap and freeze for up to 3 months.',
  },
  {
    id: '1767021634376.8562',
    title: 'Cornbread',
    slug: 'cornbread',
    description: 'This delightful cornbread is golden, fluffy, and packed with wholesome ingredients, making it the perfect side dish for any meal.',
    prologue: 'Discover the joy of baking with this delicious vegan cornbread recipe that uses whole-food plant-based ingredients. Perfect for family gatherings or cozy dinners, this cornbread is easy to make and pairs wonderfully with soups and stews. Visit vegancooking.recipes for more plant-based recipes that inspire healthy eating.',
    image: '/recipe-images/cornbread-1767021635647.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 9,
    difficulty: 'easy',
    category: ["baking"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Cornmeal",
          "amount": "1",
          "unit": "cup",
          "notes": "Use medium or fine cornmeal for better texture."
        },
        {
          "name": "Whole wheat flour",
          "amount": "1",
          "unit": "cup",
          "notes": "You can substitute with gluten-free flour if needed."
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Ensure it's fresh for best results."
        },
        {
          "name": "Salt",
          "amount": "1",
          "unit": "tsp",
          "notes": "Adjust to taste."
        },
        {
          "name": "Almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Any unsweetened plant milk can be used."
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "This adds a touch of sweetness."
        },
        {
          "name": "Apple cider vinegar",
          "amount": "1",
          "unit": "tbsp",
          "notes": "This helps to activate the baking powder."
        },
        {
          "name": "Olive oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Can substitute with melted coconut oil."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat the oven to 400°F (200°C). Grease a 9-inch square baking pan or line it with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the cornmeal, whole wheat flour, baking powder, and salt. Whisk together until well mixed."
        },
        {
          "step": 3,
          "text": "In another bowl, whisk together the almond milk, maple syrup, apple cider vinegar, and olive oil."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir gently until just combined. Do not overmix; a few lumps are fine."
        },
        {
          "step": 5,
          "text": "Pour the batter into the prepared baking pan and spread it evenly."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 20-25 minutes or until a toothpick inserted in the center comes out clean."
        },
        {
          "step": 7,
          "text": "Remove from the oven and let cool in the pan for about 10 minutes before transferring to a wire rack to cool completely."
        },
        {
          "step": 8,
          "text": "Slice and serve warm, or store in an airtight container."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "4g",
        "carbs": "25g",
        "fat": "5g",
        "fiber": "3g",
        "sugar": "1g"
      },
    tags: ["vegan","baking","cornbread","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Cornmeal is the star of this recipe, providing a natural sweetness and texture. Whole wheat flour enhances the health benefits and adds to the fiber content. If you\'re gluten-free, substitute the whole wheat flour with a gluten-free blend, and adjust the baking powder as needed.',
    faqs: [
        {
          "question": "Can I make this cornbread gluten-free?",
          "answer": "Yes! Substitute the whole wheat flour with a gluten-free flour blend."
        },
        {
          "question": "How can I make this cornbread sweeter?",
          "answer": "You can increase the maple syrup to 1/3 cup for a sweeter cornbread."
        }
      ],
    tips: ["For a savory twist, add chopped jalapeños or corn kernels to the batter.","Serve with vegan butter or a spread of your choice for added flavor."],
    variations: ["Add fresh herbs like rosemary or thyme for a fragrant touch.","Mix in some vegan cheese for added creaminess."],
    storage: 'Store leftover cornbread in an airtight container at room temperature for up to 2 days or in the refrigerator for up to a week. For longer storage, freeze it in slices, wrapped tightly in plastic wrap, and then placed in a freezer bag for up to 3 months.',
  },
];

