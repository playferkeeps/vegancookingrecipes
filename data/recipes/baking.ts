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
];

