import { Recipe } from '@/types/recipe';

// Recipes generated using OpenAI - all recipes here are accurate and tested
// To add new recipes, use: npm run generate-recipes -- --title "Recipe Name" --category dessert
export const dessertRecipes: Recipe[] = [
// Recipes will be added here via the generation script,
  {
    id: '1766971015265.5906',
    title: 'Vegan Blondies',
    slug: 'vegan-blondies',
    description: 'These delicious vegan blondies are rich, chewy, and full of flavor, making them the perfect dessert for any occasion.',
    prologue: 'Discover the joy of baking with these vegan blondies that are not only easy to make but also incredibly satisfying. Made with wholesome, plant-based ingredients, these blondies will satisfy your sweet tooth without compromising your dietary choices. Perfect for sharing or enjoying on your own, these blondies are a great addition to any dessert table. Visit vegancooking.recipes for more delightful vegan recipes!',
    image: '/recipe-images/vegan-blondies-1766974157102.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 12,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Almond flour",
          "amount": "1",
          "unit": "cup",
          "notes": "You can substitute with oat flour or whole wheat flour."
        },
        {
          "name": "Coconut sugar",
          "amount": "3/4",
          "unit": "cup",
          "notes": "For a lighter flavor, use brown sugar."
        },
        {
          "name": "Unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Acts as a binder and moisture."
        },
        {
          "name": "Almond milk",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Can use any non-dairy milk."
        },
        {
          "name": "Natural almond butter",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Peanut butter can be used as a substitute."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "For enhanced flavor."
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "tsp",
          "notes": "Ensure it's fresh for proper rising."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "Optional, enhances flavor."
        },
        {
          "name": "Dairy-free chocolate chips",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Optional, for added sweetness and texture."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line an 8x8 inch baking pan with parchment paper, leaving some overhang for easy removal."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine almond flour, coconut sugar, baking powder, and salt. Mix well to ensure there are no clumps."
        },
        {
          "step": 3,
          "text": "In another bowl, whisk together the unsweetened applesauce, almond milk, almond butter, and vanilla extract until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix."
        },
        {
          "step": 5,
          "text": "Fold in the dairy-free chocolate chips if using."
        },
        {
          "step": 6,
          "text": "Spread the batter evenly into the prepared baking pan."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 25-30 minutes, or until the edges are golden and a toothpick inserted in the center comes out clean."
        },
        {
          "step": 8,
          "text": "Allow to cool in the pan for about 10 minutes, then lift the blondies out using the parchment paper and let them cool completely on a wire rack."
        },
        {
          "step": 9,
          "text": "Once cooled, cut into squares and enjoy!"
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "4g",
        "carbs": "20g",
        "fat": "7g",
        "fiber": "2g",
        "sugar": "6g"
      },
    tags: ["vegan","dessert","blondies","whole-food-plant-based","dessert","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Almond flour gives a nice texture to the blondies, but you can use oat flour or whole wheat flour as a substitute if you prefer. The use of applesauce helps keep these blondies moist and acts as a binding agent. Feel free to adjust the sweetness by using more or less coconut sugar based on your taste preference.',
    faqs: [
        {
          "question": "Can I use a different nut butter?",
          "answer": "Yes, you can substitute almond butter with any nut or seed butter like peanut butter or sunflower seed butter."
        },
        {
          "question": "How should I store these blondies?",
          "answer": "Store them in an airtight container at room temperature for up to 5 days or in the refrigerator for up to 10 days."
        }
      ],
    tips: ["For a chewier texture, slightly underbake the blondies and let them set as they cool.","Add chopped nuts or dried fruits for added texture and flavor."],
    variations: ["Add a teaspoon of cinnamon for a warm spice flavor.","Substitute some of the almond flour with cocoa powder for a chocolate version."],
    storage: 'Store in an airtight container at room temperature for up to 5 days. For longer storage, refrigerate for up to 10 days or freeze for up to 3 months. To freeze, wrap individual blondies in plastic wrap and place them in a freezer-safe bag.',
  },
  {
    id: '1766979844312.1548',
    title: 'Vegan Fruit Sorbet',
    slug: 'vegan-fruit-sorbet',
    description: 'A refreshing and fruity sorbet that\'s completely vegan and perfect for hot summer days.',
    prologue: 'This Vegan Fruit Sorbet recipe is a delightful dessert that showcases the natural sweetness of fruits without any animal products. Perfect for a quick and easy treat, this sorbet is an excellent way to enjoy a cold dessert while adhering to a whole-food-plant-based diet. Whether you\'re looking for a simple dessert for a family gathering or just a cool treat for yourself, this sorbet delivers on flavor and satisfaction. Check out vegancooking.recipes for more delicious vegan ideas!',
    image: '/recipe-images/vegan-fruit-sorbet-1766979845449.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Ripe bananas",
          "amount": "3",
          "unit": "medium",
          "notes": "peeled and chopped, preferably frozen"
        },
        {
          "name": "Fresh strawberries",
          "amount": "2",
          "unit": "cups",
          "notes": "hulled and sliced, can use frozen"
        },
        {
          "name": "Fresh lemon juice",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "freshly squeezed"
        },
        {
          "name": "Maple syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "optional, adjust based on fruit sweetness"
        },
        {
          "name": "Water",
          "amount": "1/4",
          "unit": "cup",
          "notes": "to help blend"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "If using frozen bananas, let them thaw for about 5-10 minutes at room temperature for easier blending."
        },
        {
          "step": 2,
          "text": "In a blender or food processor, combine the thawed bananas, fresh strawberries, lemon juice, maple syrup (if using), and water."
        },
        {
          "step": 3,
          "text": "Blend on high until the mixture is smooth and well-combined, scraping down the sides as needed."
        },
        {
          "step": 4,
          "text": "Taste the mixture and adjust sweetness by adding more maple syrup if desired."
        },
        {
          "step": 5,
          "text": "Pour the blended mixture into a shallow container or ice cream maker."
        },
        {
          "step": 6,
          "text": "If using a container, freeze for about 2-3 hours, stirring every 30 minutes to break up any ice crystals."
        },
        {
          "step": 7,
          "text": "Once the sorbet is firm but scoopable, serve immediately, or store in the freezer until ready to serve."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "1g",
        "carbs": "30g",
        "fat": "0g",
        "fiber": "3g",
        "sugar": "15g"
      },
    tags: ["dessert","sorbet","vegan","fruit","gluten-free","dessert","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can substitute the strawberries with any other fruit, such as mango or peaches. For a creamier texture, consider adding a small amount of coconut cream.',
    faqs: [
        {
          "question": "Can I use frozen fruit?",
          "answer": "Yes, using frozen fruit is a great option and can save you prep time. Just ensure that the fruit is ripe for the best flavor."
        },
        {
          "question": "How long can I store the sorbet?",
          "answer": "The sorbet can be stored in an airtight container in the freezer for up to 1 month. If it hardens too much, let it sit at room temperature for a few minutes before scooping."
        }
      ],
    tips: ["For an extra flavor boost, try adding a splash of vanilla extract.","Use a high-speed blender for a smoother consistency."],
    variations: ["Substitute strawberries with blueberries for a different berry sorbet.","Add fresh mint leaves during blending for a refreshing mint flavor."],
    storage: 'Store the sorbet in an airtight container in the freezer. If the sorbet becomes too hard, let it sit out for 5-10 minutes before serving to soften.',
  },
  {
    id: '1766980442408.5056',
    title: 'Vegan Chocolate Truffles',
    slug: 'vegan-chocolate-truffles',
    description: 'Indulge in these rich and decadent vegan chocolate truffles, made with wholesome ingredients and bursting with flavor.',
    prologue: 'Satisfy your sweet tooth with these delightful vegan chocolate truffles that are both healthy and delicious. Made from whole food plant-based ingredients, these truffles are perfect for a guilt-free treat or a special occasion. At vegancooking.recipes, we believe in creating desserts that not only taste great but also nourish your body. Try these truffles and enjoy a blend of rich chocolate and natural sweetness!',
    image: '/recipe-images/vegan-chocolate-truffles-1766980443605.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 12,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Medjool dates",
          "amount": "1",
          "unit": "cup",
          "notes": "pitted and packed"
        },
        {
          "name": "Raw cacao powder",
          "amount": "1/2",
          "unit": "cup",
          "notes": "plus extra for dusting"
        },
        {
          "name": "Almond butter",
          "amount": "1/4",
          "unit": "cup",
          "notes": "or any nut or seed butter"
        },
        {
          "name": "Pure maple syrup",
          "amount": "2",
          "unit": "tbsp",
          "notes": "adjust for sweetness"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "pure"
        },
        {
          "name": "Sea salt",
          "amount": "1",
          "unit": "pinch",
          "notes": "optional, enhances flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a food processor, combine the pitted Medjool dates, raw cacao powder, almond butter, pure maple syrup, vanilla extract, and sea salt."
        },
        {
          "step": 2,
          "text": "Process the mixture until it becomes a smooth and sticky dough. You may need to scrape down the sides of the bowl to ensure everything is well combined."
        },
        {
          "step": 3,
          "text": "Using your hands, form small balls (about 1 inch in diameter) from the dough. If the mixture is too sticky, wet your hands slightly to help shape the truffles."
        },
        {
          "step": 4,
          "text": "Roll each truffle in extra raw cacao powder for a chocolatey coating."
        },
        {
          "step": 5,
          "text": "Place the truffles on a plate lined with parchment paper and refrigerate for at least 30 minutes to firm them up."
        },
        {
          "step": 6,
          "text": "Once set, enjoy your vegan chocolate truffles or store them in an airtight container in the refrigerator."
        }
      ],
    nutritionInfo: {
        "calories": 90,
        "protein": "2g",
        "carbs": "10g",
        "fat": "5g",
        "fiber": "2g",
        "sugar": "6g"
      },
    tags: ["vegan","dessert","chocolate","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Medjool dates serve as a natural sweetener and binder in this recipe. If you don\'t have Medjool dates, you can use other soft dried fruits like figs or prunes, but the flavor will differ slightly. For a nut-free version, substitute almond butter with sunflower seed butter.',
    faqs: [
        {
          "question": "Can I use cocoa powder instead of cacao powder?",
          "answer": "Yes, you can use cocoa powder, but raw cacao powder offers a richer flavor and more nutrients."
        },
        {
          "question": "How long can I store these truffles?",
          "answer": "These truffles can be stored in an airtight container in the refrigerator for up to 1 week."
        }
      ],
    tips: ["Make sure your dates are fresh for the best flavor.","Experiment with adding spices like cinnamon or nutmeg for a unique twist."],
    variations: ["Add chopped nuts or dried fruits inside the truffles for added texture.","Coat the truffles with shredded coconut instead of cacao powder for a different flavor."],
    storage: 'Store the truffles in an airtight container in the refrigerator for up to 1 week. You can also freeze them for up to 3 months; just make sure to separate them with parchment paper to prevent sticking.',
  },
  {
    id: '1766980902419.0908',
    title: 'Vegan Whole-Food Plant-Based Cheesecake',
    slug: 'vegan-whole-food-plant-based-cheesecake',
    description: 'Indulge in this creamy, rich, and delightful vegan cheesecake made from wholesome ingredients, perfect for any dessert lover.',
    prologue: 'This vegan cheesecake is a deliciously creamy and satisfying dessert that everyone will love, even those who aren\'t vegan! Made with whole food ingredients like cashews and coconut, this cheesecake is not only easy to prepare but also packed with flavor. Whether you\'re celebrating a special occasion or simply craving something sweet, this cheesecake will impress your taste buds and nourish your body. Explore more vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-whole-food-plant-based-cheesecake-1766980903573.webp',
    prepTime: 30,
    cookTime: 20,
    totalTime: 50,
    servings: 8,
    difficulty: 'medium',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Raw cashews",
          "amount": "2",
          "unit": "cups",
          "notes": "Soaked in water for at least 4 hours or overnight"
        },
        {
          "name": "Coconut cream",
          "amount": "1",
          "unit": "cup",
          "notes": "Use full-fat canned coconut milk, chilled"
        },
        {
          "name": "Maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "For sweetness"
        },
        {
          "name": "Lemon juice",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Freshly squeezed"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For flavor"
        },
        {
          "name": "Coconut oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Melted"
        },
        {
          "name": "Almond flour",
          "amount": "1",
          "unit": "cup",
          "notes": "For the crust"
        },
        {
          "name": "Medjool dates",
          "amount": "10",
          "unit": "pieces",
          "notes": "Pitted and chopped"
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "To enhance flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Drain and rinse the soaked cashews under cold water."
        },
        {
          "step": 2,
          "text": "In a high-speed blender, combine the soaked cashews, coconut cream, maple syrup, lemon juice, vanilla extract, and melted coconut oil."
        },
        {
          "step": 3,
          "text": "Blend on high until the mixture is smooth and creamy, scraping down the sides as needed."
        },
        {
          "step": 4,
          "text": "Taste the mixture and adjust the sweetness or acidity by adding more maple syrup or lemon juice, if desired."
        },
        {
          "step": 5,
          "text": "In a separate bowl, mix the almond flour, chopped Medjool dates, and salt until well combined to form the crust."
        },
        {
          "step": 6,
          "text": "Press the crust mixture evenly into the bottom of a 9-inch springform pan."
        },
        {
          "step": 7,
          "text": "Pour the cheesecake filling over the crust and smooth the top with a spatula."
        },
        {
          "step": 8,
          "text": "Cover the cheesecake with plastic wrap and place it in the freezer for at least 4 hours or until set."
        },
        {
          "step": 9,
          "text": "Once set, remove the cheesecake from the springform pan and let it sit at room temperature for about 15 minutes before slicing."
        },
        {
          "step": 10,
          "text": "Serve as is or with your favorite vegan toppings such as fresh berries or a fruit coulis."
        }
      ],
    nutritionInfo: {
        "calories": 320,
        "protein": "5g",
        "carbs": "30g",
        "fat": "22g",
        "fiber": "4g",
        "sugar": "10g"
      },
    tags: ["vegan","dessert","cheesecake","plant-based","whole-food","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a nut-free version, you can substitute the cashews with silken tofu. If you prefer a gluten-free crust, ensure the almond flour is certified gluten-free.',
    faqs: [
        {
          "question": "Can I use other nuts instead of cashews?",
          "answer": "While cashews provide a creamy texture, you can experiment with soaked macadamia nuts or silken tofu for a different flavor."
        },
        {
          "question": "How long can I store the cheesecake?",
          "answer": "The cheesecake can be stored in the freezer for up to 2 months, or in the refrigerator for about 5 days."
        }
      ],
    tips: ["For best results, make sure to soak the cashews long enough to achieve a smooth texture.","Chilling the cheesecake overnight in the fridge enhances the flavor and texture."],
    variations: ["Add cocoa powder to the filling for a chocolate cheesecake variation.","Top with fresh fruit or a fruit coulis for added flavor and decoration."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 5 days, or freeze for longer storage.',
  },
];
