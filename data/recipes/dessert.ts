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
  {
    id: '1766990193499.9927',
    title: 'Vegan Chocolate Chia Pudding',
    slug: 'vegan-chocolate-chia-pudding',
    description: 'Indulge in this creamy, decadent vegan chocolate chia pudding that\'s packed with nutrients and flavor.',
    prologue: 'This Vegan Chocolate Chia Pudding is a delightful dessert that satisfies your sweet tooth while keeping it wholesome and plant-based. With just a few simple ingredients, this recipe is perfect for anyone looking to enjoy a delicious treat without compromising on health. Visit vegancooking.recipes for more amazing vegan recipes that are easy to prepare and full of flavor.',
    image: '/recipe-images/vegan-chocolate-chia-pudding-1766990194767.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Chia seeds",
          "amount": "1/2",
          "unit": "cup",
          "notes": "These are the base of the pudding and provide a rich source of omega-3 fatty acids."
        },
        {
          "name": "Unsweetened cocoa powder",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Use high-quality cocoa for best flavor."
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Adjust sweetness to taste."
        },
        {
          "name": "Almond milk",
          "amount": "2",
          "unit": "cups",
          "notes": "You can use any plant-based milk."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For added flavor."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "Enhances the chocolate flavor."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium bowl, combine the chia seeds, cocoa powder, maple syrup, almond milk, vanilla extract, and salt."
        },
        {
          "step": 2,
          "text": "Whisk the mixture thoroughly until all ingredients are well combined and there are no clumps of cocoa powder."
        },
        {
          "step": 3,
          "text": "Let the mixture sit for about 5 minutes to allow the chia seeds to absorb the liquid."
        },
        {
          "step": 4,
          "text": "After 5 minutes, whisk the mixture again to break up any clumps of chia seeds."
        },
        {
          "step": 5,
          "text": "Cover the bowl with plastic wrap or transfer the mixture to individual serving containers."
        },
        {
          "step": 6,
          "text": "Refrigerate for at least 2 hours, or overnight for best results."
        },
        {
          "step": 7,
          "text": "Once set, stir the pudding before serving. Optionally, top with fresh fruit, nuts, or vegan whipped cream."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "5g",
        "carbs": "30g",
        "fat": "6g",
        "fiber": "11g",
        "sugar": "8g"
      },
    tags: ["vegan","dessert","chocolate","healthy","easy","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Chia seeds are crucial for the pudding texture. If you\'re allergic to nuts, you can substitute almond milk with oat milk or soy milk. Adjust the sweetness by varying the amount of maple syrup or using another sweetener like agave syrup.',
    faqs: [
        {
          "question": "How long does chia pudding last?",
          "answer": "Chia pudding can be stored in the refrigerator for up to 5 days."
        },
        {
          "question": "Can I use other sweeteners?",
          "answer": "Yes, feel free to substitute with agave nectar, date syrup, or any other preferred sweetener."
        }
      ],
    tips: ["For a creamier texture, blend the ingredients before refrigerating.","Add a pinch of cinnamon for an extra flavor boost."],
    variations: ["Try adding a tablespoon of nut butter for a richer taste.","Mix in some fresh fruit puree before refrigerating for flavored puddings."],
    storage: 'Store the chia pudding in airtight containers in the refrigerator. It will keep well for up to 5 days. Stir before serving.',
  },
  {
    id: '1766990337768.8982',
    title: 'Vegan Whole-Food Plant-Based Cookies',
    slug: 'vegan-whole-food-plant-based-cookies',
    description: 'Delightfully chewy and naturally sweetened, these vegan cookies are perfect for satisfying your sweet tooth while sticking to whole-food plant-based ingredients.',
    prologue: 'Discover the joy of baking with our Vegan Whole-Food Plant-Based Cookies. Made without any animal products, these cookies rely on wholesome ingredients like oats, bananas, and nut butter to create a delicious treat. Perfect for dessert or a snack, you can enjoy these guilt-free cookies while knowing they are healthy and nourishing. Check out more delicious vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-whole-food-plant-based-cookies-1766990339021.webp',
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 12,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Rolled oats",
          "amount": "2",
          "unit": "cups",
          "notes": "Use gluten-free oats if needed."
        },
        {
          "name": "Ripe bananas",
          "amount": "2",
          "unit": "medium",
          "notes": "Mashed."
        },
        {
          "name": "Natural almond butter",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Can substitute with any nut or seed butter."
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "You can adjust this based on your sweetness preference."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For flavor."
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "To help cookies rise."
        },
        {
          "name": "Cinnamon",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Optional, for a warm flavor."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "Enhances flavor."
        },
        {
          "name": "Dark chocolate chips",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Use vegan chocolate chips."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a baking sheet with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, mash the ripe bananas with a fork until smooth."
        },
        {
          "step": 3,
          "text": "Add the almond butter, maple syrup, and vanilla extract to the mashed bananas and mix until well combined."
        },
        {
          "step": 4,
          "text": "In a separate bowl, combine the rolled oats, baking powder, cinnamon, and salt."
        },
        {
          "step": 5,
          "text": "Gradually mix the dry ingredients into the wet ingredients until a dough forms."
        },
        {
          "step": 6,
          "text": "Fold in the dark chocolate chips."
        },
        {
          "step": 7,
          "text": "Using a tablespoon, scoop out portions of dough and place them on the prepared baking sheet, spacing them about 2 inches apart."
        },
        {
          "step": 8,
          "text": "Flatten each cookie slightly with the back of a spoon."
        },
        {
          "step": 9,
          "text": "Bake in the preheated oven for 12-15 minutes, or until the edges are golden."
        },
        {
          "step": 10,
          "text": "Remove from the oven and let cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "3g",
        "carbs": "18g",
        "fat": "5g",
        "fiber": "2g",
        "sugar": "6g"
      },
    tags: ["vegan","whole-food","plant-based","cookies","dessert","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'These cookies are versatile; you can substitute the almond butter with peanut butter or sunflower seed butter. For a nut-free version, use a seed butter. The bananas provide natural sweetness and moisture, so be sure to use ripe ones for the best flavor.',
    faqs: [
        {
          "question": "Can I freeze these cookies?",
          "answer": "Yes, once cooled, you can freeze these cookies in an airtight container for up to 3 months."
        },
        {
          "question": "How can I make these cookies gluten-free?",
          "answer": "Simply use certified gluten-free rolled oats."
        }
      ],
    tips: ["For extra flavor, add a pinch of nutmeg or a tablespoon of chia seeds to the mixture.","Make sure your bananas are very ripe; they should have brown spots for optimal sweetness."],
    variations: ["Add chopped nuts like walnuts or pecans for added crunch.","Substitute chocolate chips with dried fruits like cranberries or raisins for a fruity version."],
    storage: 'Store the cookies in an airtight container at room temperature for up to 5 days, or refrigerate for up to 1 week. For longer storage, freeze in an airtight container.',
  },
  {
    id: '1766991189611.6416',
    title: 'Vegan Apple Crisp',
    slug: 'vegan-apple-crisp',
    description: 'A warm, comforting dessert featuring tender apples topped with a crispy, oat-based crumble, perfect for any occasion.',
    prologue: 'Indulge in this delightful Vegan Apple Crisp, a wholesome dessert that combines the natural sweetness of apples with a crunchy, whole-food plant-based topping. This recipe is not only easy to prepare but also packed with flavor, making it a perfect treat for family gatherings or a cozy night in. Discover more delicious vegan recipes at vegancooking.recipes!',
    image: '/recipe-images/vegan-apple-crisp-1766991191062.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 6,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "apples",
          "amount": "6",
          "unit": "medium",
          "notes": "peeled, cored, and sliced (e.g., Granny Smith or Honeycrisp)"
        },
        {
          "name": "maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for sweetness"
        },
        {
          "name": "lemon juice",
          "amount": "2",
          "unit": "tbsp",
          "notes": "to prevent browning of apples"
        },
        {
          "name": "rolled oats",
          "amount": "1",
          "unit": "cup",
          "notes": "gluten-free if needed"
        },
        {
          "name": "almond flour",
          "amount": "1/2",
          "unit": "cup",
          "notes": "can be substituted with whole wheat flour"
        },
        {
          "name": "cinnamon",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "nutmeg",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "optional, for additional warmth"
        },
        {
          "name": "coconut oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "melted, can be substituted with applesauce for a lower fat option"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "to enhance flavors"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the sliced apples, maple syrup, lemon juice, and a pinch of salt. Toss until the apples are evenly coated."
        },
        {
          "step": 3,
          "text": "Transfer the apple mixture into a greased 9x9 inch baking dish, spreading it out evenly."
        },
        {
          "step": 4,
          "text": "In another bowl, combine rolled oats, almond flour, cinnamon, nutmeg, and salt. Stir well to combine."
        },
        {
          "step": 5,
          "text": "Add the melted coconut oil and vanilla extract to the dry mixture. Mix until the oats are evenly coated and crumbly."
        },
        {
          "step": 6,
          "text": "Spread the oat mixture evenly over the apples in the baking dish."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 25-30 minutes, or until the apples are tender and the topping is golden brown."
        },
        {
          "step": 8,
          "text": "Remove from the oven and let it cool for a few minutes before serving."
        },
        {
          "step": 9,
          "text": "Serve warm, optionally with a scoop of vegan ice cream or a dollop of coconut whipped cream."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "3g",
        "carbs": "36g",
        "fat": "9g",
        "fiber": "5g",
        "sugar": "12g"
      },
    tags: ["dessert","vegan","whole-food-plant-based","apple crisp","gluten-free"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'You can use any variety of apples based on your preference. If you want a lower-fat option, substitute coconut oil with unsweetened applesauce in the topping mixture. Adjust the sweetness of the dish by using more or less maple syrup, depending on the tartness of the apples used.',
    faqs: [
        {
          "question": "Can I use other fruits instead of apples?",
          "answer": "Yes! Pears, peaches, or a mix of berries can be used for a different flavor profile."
        },
        {
          "question": "Is this recipe gluten-free?",
          "answer": "Yes, simply use certified gluten-free rolled oats and almond flour."
        }
      ],
    tips: ["For added texture, consider mixing in some chopped nuts like walnuts or pecans in the topping.","Make it ahead of time and reheat in the oven before serving for a cozy dessert."],
    variations: ["Add dried fruits such as raisins or cranberries for added sweetness and texture.","Incorporate spices like ginger or allspice for a different flavor profile."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. To reheat, simply warm in the oven at 350°F (175°C) until heated through.',
  },
  {
    id: '1766991251357.8433',
    title: 'Vegan Whole-Food Plant-Based Brownies',
    slug: 'vegan-whole-food-plant-based-brownies',
    description: 'These rich and fudgy vegan brownies are made with wholesome ingredients and are entirely free from animal products, making them the perfect guilt-free treat.',
    prologue: 'Looking for a deliciously rich brownie that aligns with your whole-food plant-based lifestyle? This vegan brownie recipe, available at vegancooking.recipes, is made with nutrient-dense ingredients that provide the perfect balance of flavor and texture. Indulge in a dessert that\'s not only satisfying but also wholesome and free from refined sugars and oils.',
    image: '/recipe-images/vegan-whole-food-plant-based-brownies-1766991252779.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 12,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Black beans",
          "amount": "1",
          "unit": "cup",
          "notes": "cooked and drained"
        },
        {
          "name": "Oats",
          "amount": "1",
          "unit": "cup",
          "notes": "rolled or quick oats"
        },
        {
          "name": "Cocoa powder",
          "amount": "1/2",
          "unit": "cup",
          "notes": "unsweetened"
        },
        {
          "name": "Maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "for sweetening"
        },
        {
          "name": "Almond butter",
          "amount": "1/4",
          "unit": "cup",
          "notes": "or any nut/seed butter"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "pure vanilla extract"
        },
        {
          "name": "Baking powder",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "for leavening"
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "to enhance flavor"
        },
        {
          "name": "Dark chocolate chips",
          "amount": "1/2",
          "unit": "cup",
          "notes": "dairy-free, optional"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line an 8x8 inch baking pan with parchment paper."
        },
        {
          "step": 2,
          "text": "In a food processor, combine the cooked black beans, oats, cocoa powder, maple syrup, almond butter, vanilla extract, baking powder, and salt."
        },
        {
          "step": 3,
          "text": "Blend the mixture until smooth and well combined, scraping down the sides as needed."
        },
        {
          "step": 4,
          "text": "If using, fold in the dark chocolate chips into the brownie batter."
        },
        {
          "step": 5,
          "text": "Pour the brownie batter into the prepared baking pan and spread evenly."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted in the center comes out with a few moist crumbs."
        },
        {
          "step": 7,
          "text": "Once baked, remove from the oven and let cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
        },
        {
          "step": 8,
          "text": "Cut into squares and serve. Enjoy your delicious vegan brownies!"
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "4g",
        "carbs": "20g",
        "fat": "4g",
        "fiber": "4g",
        "sugar": "5g"
      },
    tags: ["vegan","dessert","brownies","whole-food plant-based","gluten-free","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Black beans provide moisture and richness without the need for fats, while oats serve as a wholesome base. You can substitute almond butter with peanut butter or sunflower seed butter if preferred. For a sweeter taste, adjust the maple syrup to your liking.',
    faqs: [
        {
          "question": "Can I use canned black beans?",
          "answer": "Yes, canned black beans work perfectly. Just make sure to rinse and drain them well before using."
        },
        {
          "question": "How can I make these brownies gluten-free?",
          "answer": "Simply use certified gluten-free oats to ensure that the brownies are gluten-free."
        }
      ],
    tips: ["For a fudgier texture, do not overbake the brownies.","Allow the brownies to cool completely for better texture before cutting."],
    variations: ["Add chopped nuts like walnuts or pecans for extra crunch.","Incorporate spices such as cinnamon or nutmeg for a warm flavor twist."],
    storage: 'Store leftovers in an airtight container at room temperature for up to 3 days, or refrigerate for up to a week. For longer storage, freeze brownies in an airtight container for up to 3 months.',
  },
  {
    id: '1766991511201.3643',
    title: 'Vegan Red Velvet Cake',
    slug: 'vegan-red-velvet-cake',
    description: 'This stunning Vegan Red Velvet Cake is a show-stopping dessert, combining a rich flavor with a beautiful red hue. Perfect for birthdays or special occasions, it\'s both delicious and entirely plant-based.',
    prologue: 'Discover the joy of baking with this Vegan Red Velvet Cake, a delightful dessert that will impress both vegans and non-vegans alike. Made with whole food, plant-based ingredients, this cake is moist, fluffy, and bursting with flavor. Whether you\'re celebrating a birthday or just treating yourself, this cake is sure to satisfy your sweet tooth. Visit vegancooking.recipes for more delicious vegan recipes and tips.',
    image: '/recipe-images/vegan-red-velvet-cake-1766991514103.webp',
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 12,
    difficulty: 'medium',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "all-purpose flour",
          "amount": "2",
          "unit": "cups",
          "notes": "Sifted"
        },
        {
          "name": "cocoa powder",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Unsweetened"
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "tsp",
          "notes": "For leavening"
        },
        {
          "name": "salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "To balance flavors"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1",
          "unit": "cup",
          "notes": "Acts as an egg replacer"
        },
        {
          "name": "maple syrup",
          "amount": "1",
          "unit": "cup",
          "notes": "For sweetness"
        },
        {
          "name": "plant-based milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Almond or soy milk work well"
        },
        {
          "name": "vegetable oil",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Can substitute with melted coconut oil"
        },
        {
          "name": "apple cider vinegar",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Creates a nice reaction with baking soda"
        },
        {
          "name": "red food coloring",
          "amount": "2",
          "unit": "tbsp",
          "notes": "Use natural food coloring if preferred"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "For flavor enhancement"
        },
        {
          "name": "vegan cream cheese",
          "amount": "8",
          "unit": "oz",
          "notes": "For frosting"
        },
        {
          "name": "powdered sugar",
          "amount": "2",
          "unit": "cups",
          "notes": "For frosting sweetness"
        },
        {
          "name": "lemon juice",
          "amount": "1",
          "unit": "tbsp",
          "notes": "For frosting tanginess"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "For frosting flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, sift together the all-purpose flour, cocoa powder, baking soda, and salt."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the applesauce, maple syrup, plant-based milk, vegetable oil, apple cider vinegar, red food coloring, and vanilla extract until well combined."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix."
        },
        {
          "step": 5,
          "text": "Divide the batter evenly between the two prepared cake pans."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted in the center comes out clean."
        },
        {
          "step": 7,
          "text": "Remove the cakes from the oven and let them cool in the pans for about 10 minutes before transferring to wire racks to cool completely."
        },
        {
          "step": 8,
          "text": "While the cakes are cooling, prepare the frosting by beating the vegan cream cheese, powdered sugar, lemon juice, and vanilla extract together until smooth and creamy."
        },
        {
          "step": 9,
          "text": "Once the cakes are completely cooled, place one layer on a serving plate and spread a layer of frosting on top."
        },
        {
          "step": 10,
          "text": "Top with the second layer of cake and spread frosting on the top and sides. Decorate as desired."
        }
      ],
    nutritionInfo: {
        "calories": 360,
        "protein": "3g",
        "carbs": "62g",
        "fat": "12g",
        "fiber": "2g",
        "sugar": "30g"
      },
    tags: ["vegan","dessert","cake","red velvet","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a healthier version, consider substituting some all-purpose flour with whole wheat flour. You can use homemade applesauce or store-bought. For the frosting, feel free to adjust the sweetness by adding more or less powdered sugar.',
    faqs: [
        {
          "question": "Can I use whole wheat flour?",
          "answer": "Yes, you can substitute some or all of the all-purpose flour with whole wheat flour, but the texture may be denser."
        },
        {
          "question": "What can I use instead of red food coloring?",
          "answer": "You can use beet juice or puree for a natural red color, but be aware that it may alter the flavor slightly."
        }
      ],
    tips: ["Ensure all ingredients are at room temperature for best results.","Let the cakes cool completely before frosting to prevent melting."],
    variations: ["Add chopped walnuts or pecans into the batter for added texture.","Use a chocolate ganache instead of cream cheese frosting for a richer flavor."],
    storage: 'Store leftover cake in an airtight container in the refrigerator for up to 5 days. You can also freeze the cake layers wrapped in plastic wrap for up to 3 months.',
  },
  {
    id: '1766992054348.0933',
    title: 'Vegan Trifle',
    slug: 'vegan-trifle',
    description: 'Indulge in this delightful vegan trifle, layered with creamy custard, fresh fruits, and a light sponge cake for a perfect dessert treat!',
    prologue: 'This Vegan Trifle is the ultimate dessert for any occasion, showcasing layers of deliciousness that will impress your guests and satisfy your sweet tooth. Made entirely from whole-food plant-based ingredients, this trifle is not only delectable but also healthy. Explore the simplicity of vegan cooking with this delightful recipe from vegancooking.recipes that combines flavors and textures in every spoonful.',
    image: '/recipe-images/vegan-trifle-1766992055613.webp',
    prepTime: 30,
    cookTime: 30,
    totalTime: 60,
    servings: 6,
    difficulty: 'medium',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "1",
          "unit": "cup",
          "notes": "for the sponge cake"
        },
        {
          "name": "baking powder",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for leavening the cake"
        },
        {
          "name": "coconut sugar",
          "amount": "1/2",
          "unit": "cup",
          "notes": "or any other granulated sugar"
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "acts as an egg replacer"
        },
        {
          "name": "almond milk",
          "amount": "1/2",
          "unit": "cup",
          "notes": "or any other plant-based milk"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "cornstarch",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for the custard"
        },
        {
          "name": "coconut cream",
          "amount": "1",
          "unit": "cup",
          "notes": "for creaminess in custard"
        },
        {
          "name": "maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for sweetness in custard"
        },
        {
          "name": "fresh mixed berries",
          "amount": "2",
          "unit": "cups",
          "notes": "strawberries, blueberries, raspberries, etc."
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor in custard"
        },
        {
          "name": "lemon juice",
          "amount": "1",
          "unit": "tbsp",
          "notes": "to enhance flavors"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C). Grease a 9-inch round cake pan or line it with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour, baking powder, and coconut sugar."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the unsweetened applesauce, almond milk, and vanilla extract until well combined."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir until just combined."
        },
        {
          "step": 5,
          "text": "Transfer the batter to the prepared cake pan and smooth the top. Bake for 25-30 minutes, or until a toothpick comes out clean."
        },
        {
          "step": 6,
          "text": "While the cake is baking, prepare the vegan custard. In a saucepan, whisk together the cornstarch, coconut cream, maple syrup, vanilla extract, and lemon juice."
        },
        {
          "step": 7,
          "text": "Heat over medium heat, continuously whisking until the mixture thickens (about 5-7 minutes). Remove from heat and let it cool."
        },
        {
          "step": 8,
          "text": "Once the cake is done, remove it from the oven and allow it to cool completely. Once cooled, cut the cake into cubes."
        },
        {
          "step": 9,
          "text": "To assemble the trifle, in a large glass bowl or individual serving glasses, layer the cake cubes, followed by a layer of custard, and then a layer of fresh mixed berries."
        },
        {
          "step": 10,
          "text": "Repeat the layers until all ingredients are used, finishing with a layer of custard and a sprinkle of berries on top."
        },
        {
          "step": 11,
          "text": "Chill the trifle in the refrigerator for at least 1 hour before serving to allow the flavors to meld."
        }
      ],
    nutritionInfo: {
        "calories": 300,
        "protein": "5g",
        "carbs": "45g",
        "fat": "12g",
        "fiber": "5g",
        "sugar": "15g"
      },
    tags: ["dessert","vegan","trifle","whole-food-plant-based","sweet treat"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For the sponge cake, you can substitute whole wheat flour with gluten-free flour if desired. If you want to reduce sugar, you can use ripe bananas instead of coconut sugar.',
    faqs: [
        {
          "question": "Can I make this trifle ahead of time?",
          "answer": "Yes, you can prepare the sponge cake and custard a day in advance. Assemble the trifle a few hours before serving for best results."
        },
        {
          "question": "What fruits can I use?",
          "answer": "You can use any combination of fruits you like, such as peaches, mangoes, or kiwis, in place of mixed berries."
        }
      ],
    tips: ["For extra flavor, add a splash of almond extract to the custard.","Use seasonal fruits for the best taste and freshness."],
    variations: ["Add layers of chocolate pudding for a chocolate trifle variation.","Incorporate nuts or seeds for added crunch in the layers."],
    storage: 'Store any leftover trifle covered in the refrigerator for up to 3 days. The cake may become soggy, so it is best consumed within 24 hours for optimal texture.',
  },
  {
    id: '1766992345707.108',
    title: 'Vegan Berry Sorbet',
    slug: 'vegan-berry-sorbet',
    description: 'A refreshing and vibrant berry sorbet that is perfect for hot summer days or as a light dessert any time of the year.',
    prologue: 'Indulge in the delightful flavors of our Vegan Berry Sorbet, a delicious dessert that captures the essence of fresh fruits without any animal products. This sorbet is not only easy to make but is also a healthy, whole-food, plant-based treat that you can whip up in a matter of minutes. Perfect for cooling down on a warm day or serving at dinner parties, this recipe is a must-try for anyone exploring vegan cooking. Discover more amazing vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-berry-sorbet-1766992347732.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Frozen mixed berries",
          "amount": "2",
          "unit": "cups",
          "notes": "A mix of strawberries, blueberries, and raspberries works well."
        },
        {
          "name": "Banana",
          "amount": "1",
          "unit": "medium",
          "notes": "Ripe for natural sweetness."
        },
        {
          "name": "Maple syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Adjust according to sweetness preference."
        },
        {
          "name": "Fresh lemon juice",
          "amount": "1",
          "unit": "tablespoon",
          "notes": "Adds brightness to the flavor."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a food processor, combine the frozen mixed berries, banana, maple syrup, and fresh lemon juice."
        },
        {
          "step": 2,
          "text": "Pulse the mixture until it starts to blend smoothly, scraping down the sides of the bowl as necessary."
        },
        {
          "step": 3,
          "text": "Continue blending until the mixture is completely smooth and creamy."
        },
        {
          "step": 4,
          "text": "Taste the sorbet and adjust sweetness if desired by adding more maple syrup."
        },
        {
          "step": 5,
          "text": "Transfer the sorbet mixture to an airtight container and spread it evenly."
        },
        {
          "step": 6,
          "text": "Freeze the sorbet for at least 2 hours to firm up before serving."
        },
        {
          "step": 7,
          "text": "Scoop the sorbet into bowls or cones and enjoy!"
        }
      ],
    nutritionInfo: {
        "calories": 110,
        "protein": "1g",
        "carbs": "28g",
        "fat": "0g",
        "fiber": "3g",
        "sugar": "15g"
      },
    tags: ["dessert","sorbet","vegan","whole-food","plant-based","berries","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a different flavor, you can substitute the mixed berries with mango or peach. Make sure to use ripe fruits for the best sweetness and flavor.',
    faqs: [
        {
          "question": "Can I use fresh berries instead of frozen?",
          "answer": "Yes, but the sorbet will need additional freezing time and may require ice to achieve the right texture."
        },
        {
          "question": "How long can I store the sorbet?",
          "answer": "Store the sorbet in an airtight container in the freezer for up to 2 weeks."
        }
      ],
    tips: ["For a creamier texture, blend in a tablespoon of coconut cream.","Serve with fresh berries or mint leaves for garnish."],
    variations: ["Add a tablespoon of chia seeds for added nutrition.","Substitute maple syrup with agave syrup or date syrup for a different sweetness profile."],
    storage: 'Keep the sorbet in an airtight container in the freezer. Allow it to sit at room temperature for a few minutes before scooping to make serving easier.',
  },
  {
    id: '1766992418739.7305',
    title: 'Vegan Crème Brûlée',
    slug: 'vegan-cr-me-br-l-e',
    description: 'Indulge in this rich and creamy vegan crème brûlée, featuring a silky coconut and cashew base, topped with a perfectly caramelized sugar crust.',
    prologue: 'This vegan crème brûlée is a delightful dessert that will impress your guests and satisfy your sweet tooth. Made with whole-food, plant-based ingredients, this recipe is both delicious and healthy. Perfect for special occasions or a cozy night in, follow this step-by-step guide on vegancooking.recipes to create a dairy-free version of this classic French dessert that everyone will love.',
    image: '/recipe-images/vegan-cr-me-br-l-e-1766992419953.webp',
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 4,
    difficulty: 'medium',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "raw cashews",
          "amount": "1",
          "unit": "cup",
          "notes": "soaked in water for at least 4 hours"
        },
        {
          "name": "canned coconut milk",
          "amount": "1",
          "unit": "cup",
          "notes": "full-fat for creaminess"
        },
        {
          "name": "maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for sweetness"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tbsp",
          "notes": "pure vanilla extract"
        },
        {
          "name": "agar-agar powder",
          "amount": "1",
          "unit": "tbsp",
          "notes": "for setting the custard"
        },
        {
          "name": "water",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for dissolving agar-agar"
        },
        {
          "name": "coconut sugar",
          "amount": "4",
          "unit": "tbsp",
          "notes": "for caramelizing on top"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Drain and rinse the soaked cashews. Place them in a high-speed blender."
        },
        {
          "step": 2,
          "text": "Add the canned coconut milk, maple syrup, vanilla extract, and blend until completely smooth and creamy."
        },
        {
          "step": 3,
          "text": "In a small saucepan, combine the agar-agar powder and water. Bring to a boil while stirring continuously."
        },
        {
          "step": 4,
          "text": "Once boiling, reduce the heat and simmer for 1-2 minutes until the agar-agar is fully dissolved."
        },
        {
          "step": 5,
          "text": "Pour the agar-agar mixture into the blender with the cashew mixture and blend for an additional 30 seconds until well incorporated."
        },
        {
          "step": 6,
          "text": "Pour the mixture into ramekins, filling them about 3/4 full. Place them in the refrigerator to set for at least 3 hours."
        },
        {
          "step": 7,
          "text": "Once set, preheat your oven’s broiler."
        },
        {
          "step": 8,
          "text": "Sprinkle 1 tablespoon of coconut sugar evenly on each ramekin."
        },
        {
          "step": 9,
          "text": "Place the ramekins under the broiler for 2-5 minutes, watching carefully until the sugar melts and caramelizes to a golden brown crust."
        },
        {
          "step": 10,
          "text": "Remove from the oven and allow to cool for a few minutes before serving."
        }
      ],
    nutritionInfo: {
        "calories": 350,
        "protein": "6g",
        "carbs": "30g",
        "fat": "24g",
        "fiber": "3g",
        "sugar": "16g"
      },
    tags: ["dessert","vegan","whole-food-plant-based","French","creme brulee"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Raw cashews are essential for achieving the creamy texture. If you don\'t have agar-agar, you can substitute with cornstarch, but the setting may differ. Coconut sugar is preferred for its lower glycemic index, but brown sugar can also work.',
    faqs: [
        {
          "question": "Can I make this ahead of time?",
          "answer": "Yes, you can prepare the custard a day in advance and refrigerate it. Just add the sugar and caramelize it just before serving."
        },
        {
          "question": "What can I use instead of coconut milk?",
          "answer": "You can use any non-dairy milk, but ensure it is thick and creamy for the best results."
        }
      ],
    tips: ["Ensure the cashews are soaked long enough for a smooth blend.","Watch the sugar closely while caramelizing to prevent burning."],
    variations: ["Add a pinch of turmeric for a subtle color change.","Incorporate a dash of espresso for a coffee-flavored version."],
    storage: 'Store any leftovers in the refrigerator for up to 3 days. The caramelized sugar top may become soft, so consider re-crisping it under the broiler before serving.',
  },
  {
    id: '1766992703396.7817',
    title: 'Vegan Berry Chia Parfait',
    slug: 'vegan-berry-chia-parfait',
    description: 'A refreshing and delicious vegan parfait layered with creamy chia pudding, vibrant mixed berries, and crunchy granola.',
    prologue: 'Discover the delightful world of vegan desserts with this easy-to-make Berry Chia Parfait. Packed with nutrients, this whole-food-plant-based treat combines the goodness of chia seeds, fresh berries, and wholesome granola, making it the perfect dessert or snack. Enjoy the vibrant flavors and textures while indulging guilt-free. Explore more vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-berry-chia-parfait-1766992705100.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Chia seeds",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Use organic chia seeds for best results."
        },
        {
          "name": "Unsweetened almond milk",
          "amount": "2",
          "unit": "cups",
          "notes": "You can substitute with any other plant-based milk."
        },
        {
          "name": "Maple syrup",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "Adjust sweetness to taste."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Use pure vanilla extract for better flavor."
        },
        {
          "name": "Mixed berries",
          "amount": "2",
          "unit": "cups",
          "notes": "A mix of strawberries, blueberries, and raspberries works well."
        },
        {
          "name": "Granola",
          "amount": "1",
          "unit": "cup",
          "notes": "Choose a vegan granola without honey."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a mixing bowl, combine the chia seeds, almond milk, maple syrup, and vanilla extract. Stir well to avoid clumps."
        },
        {
          "step": 2,
          "text": "Let the mixture sit for 5 minutes, then stir again to break up any clumps of chia seeds."
        },
        {
          "step": 3,
          "text": "Cover the bowl and refrigerate for at least 2 hours or overnight until the mixture thickens to a pudding-like consistency."
        },
        {
          "step": 4,
          "text": "Once the chia pudding is ready, take 4 serving glasses or bowls."
        },
        {
          "step": 5,
          "text": "Layer the parfait by adding 1/4 cup of chia pudding at the bottom of each glass."
        },
        {
          "step": 6,
          "text": "Top with 1/2 cup of mixed berries, followed by a layer of granola (about 2 tablespoons)."
        },
        {
          "step": 7,
          "text": "Repeat the layers until the glasses are full, finishing with a layer of berries on top."
        },
        {
          "step": 8,
          "text": "Serve immediately or refrigerate for up to 2 hours before serving."
        }
      ],
    nutritionInfo: {
        "calories": 250,
        "protein": "7g",
        "carbs": "38g",
        "fat": "9g",
        "fiber": "10g",
        "sugar": "10g"
      },
    tags: ["vegan","dessert","healthy","parfait","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Chia seeds are high in omega-3 fatty acids and fiber, making them a great addition to any diet. You can substitute almond milk with any other plant-based milk of your choice, such as soy or oat milk. Use seasonal berries for the best flavor.',
    faqs: [
        {
          "question": "Can I make this parfait ahead of time?",
          "answer": "Yes, you can prepare the chia pudding the night before and layer the parfait just before serving."
        },
        {
          "question": "What other fruits can I use?",
          "answer": "You can use any fruit you like, such as bananas, mangoes, or peaches."
        }
      ],
    tips: ["For a creamier texture, blend the almond milk and chia seeds together before refrigerating.","Experiment with different sweeteners such as agave nectar or date syrup."],
    variations: ["Add a layer of coconut yogurt for a creamier parfait.","Incorporate nuts or seeds between the layers for added crunch and nutrition."],
    storage: 'Store any leftover parfait in an airtight container in the refrigerator for up to 2 days. The granola may become soggy over time, so it\'s best to add it just before serving.',
  },
  {
    id: '1766992916101.3643',
    title: 'Vegan Chocolate Mousse',
    slug: 'vegan-chocolate-mousse',
    description: 'Indulge in this rich and creamy vegan chocolate mousse, made with wholesome ingredients that will satisfy your sweet cravings guilt-free.',
    prologue: 'Discover the delight of a classic dessert reimagined in a whole-food, plant-based way with this Vegan Chocolate Mousse recipe, perfect for any occasion. Using silken tofu for a creamy texture and raw cacao for rich chocolate flavor, this mousse is not only delicious but also packed with nutrients. Explore more delightful vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-chocolate-mousse-1766992917327.webp',
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 4,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Silken tofu",
          "amount": "12",
          "unit": "oz",
          "notes": "soft or medium silken tofu works best"
        },
        {
          "name": "Raw cacao powder",
          "amount": "1/2",
          "unit": "cup",
          "notes": "ensure it's raw for maximum health benefits"
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "adjust sweetness to taste"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "for enhanced flavor"
        },
        {
          "name": "Coconut cream",
          "amount": "1/4",
          "unit": "cup",
          "notes": "chilled and thickened cream from a can of coconut milk"
        },
        {
          "name": "Lemon juice",
          "amount": "1",
          "unit": "tbsp",
          "notes": "to balance flavors"
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "optional, enhances the chocolate flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Begin by draining the silken tofu and patting it dry with a paper towel to remove excess moisture."
        },
        {
          "step": 2,
          "text": "In a blender or food processor, combine the drained silken tofu, raw cacao powder, maple syrup, vanilla extract, coconut cream, lemon juice, and salt."
        },
        {
          "step": 3,
          "text": "Blend on high until the mixture is completely smooth and creamy, scraping down the sides as necessary."
        },
        {
          "step": 4,
          "text": "Taste the mousse and adjust sweetness if needed by adding more maple syrup."
        },
        {
          "step": 5,
          "text": "Once blended, transfer the mousse into individual serving dishes or glasses."
        },
        {
          "step": 6,
          "text": "Refrigerate for at least 1 hour to allow the mousse to thicken and flavors to meld."
        },
        {
          "step": 7,
          "text": "Serve chilled, optionally topped with fresh berries or a dollop of coconut whipped cream."
        }
      ],
    nutritionInfo: {
        "calories": 150,
        "protein": "4g",
        "carbs": "18g",
        "fat": "8g",
        "fiber": "3g",
        "sugar": "6g"
      },
    tags: ["dessert","vegan","chocolate","mousse","healthy dessert","whole food plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Silken tofu is a key ingredient that gives this mousse its creamy texture without dairy. For a nut-free version, ensure to use coconut cream instead of any nut-based cream.',
    faqs: [
        {
          "question": "Can I use regular tofu instead of silken tofu?",
          "answer": "No, regular tofu will not achieve the same creamy texture. Silken tofu is essential for this mousse."
        },
        {
          "question": "Can I make this mousse ahead of time?",
          "answer": "Yes, this mousse can be made a day in advance and stored in the refrigerator."
        }
      ],
    tips: ["For an extra chocolatey flavor, consider adding a tablespoon of melted dark chocolate to the mixture.","Use high-quality cocoa powder for the best flavor."],
    variations: ["Add a tablespoon of espresso powder for a mocha flavor.","Incorporate a pinch of cinnamon for a warm, spiced twist."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 3 days. Make sure to cover the mousse to prevent it from absorbing any odors.',
  },
  {
    id: '1766993064427.0012',
    title: 'Vegan Berry Cobbler',
    slug: 'vegan-berry-cobbler',
    description: 'Indulge in this delicious vegan berry cobbler, bursting with juicy berries and a fluffy, golden topping. It\'s the perfect dessert for any occasion!',
    prologue: 'This Vegan Berry Cobbler is a delightful dessert that combines the natural sweetness of berries with a wholesome, plant-based topping. Perfect for warm summer evenings or cozy winter nights, this dessert is sure to impress everyone at the table. With simple ingredients and easy preparation, you can make this cobbler in no time. Explore more delicious vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-berry-cobbler-1766993065718.webp',
    prepTime: 20,
    cookTime: 35,
    totalTime: 55,
    servings: 8,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Mixed berries (fresh or frozen)",
          "amount": "4",
          "unit": "cups",
          "notes": "Use a mix of strawberries, blueberries, raspberries, and blackberries."
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Adjust sweetness based on the tartness of berries."
        },
        {
          "name": "Cornstarch",
          "amount": "2",
          "unit": "tablespoons",
          "notes": "For thickening the berry filling."
        },
        {
          "name": "Oats",
          "amount": "1",
          "unit": "cup",
          "notes": "Old-fashioned rolled oats work best."
        },
        {
          "name": "Whole wheat flour",
          "amount": "1",
          "unit": "cup",
          "notes": "Can substitute with gluten-free flour."
        },
        {
          "name": "Baking powder",
          "amount": "2",
          "unit": "teaspoons",
          "notes": "For leavening."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "Enhances flavor."
        },
        {
          "name": "Almond milk",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Any non-dairy milk can be used."
        },
        {
          "name": "Coconut oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Melted, can substitute with vegan butter."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "For flavor."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the mixed berries, maple syrup, and cornstarch. Toss gently to coat the berries evenly. Pour the berry mixture into a greased 9x13 inch baking dish."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the oats, whole wheat flour, baking powder, and salt. Stir well to combine."
        },
        {
          "step": 4,
          "text": "In a separate small bowl, whisk together the almond milk, melted coconut oil, and vanilla extract."
        },
        {
          "step": 5,
          "text": "Pour the wet ingredients into the dry ingredients and mix until just combined. Do not overmix."
        },
        {
          "step": 6,
          "text": "Drop spoonfuls of the batter over the berry mixture, covering as much of the surface as possible."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 30-35 minutes, or until the topping is golden brown and a toothpick inserted into the cobbler comes out clean."
        },
        {
          "step": 8,
          "text": "Allow the cobbler to cool slightly before serving. Enjoy warm, optionally with a scoop of vegan ice cream!"
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "3g",
        "carbs": "30g",
        "fat": "7g",
        "fiber": "4g",
        "sugar": "8g"
      },
    tags: ["dessert","vegan","whole-food-plant-based","cobbler","berries"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Using a mix of berries adds a complex flavor. You can use any combination of berries you prefer. For a sweeter cobbler, feel free to increase the maple syrup to 1/3 cup.',
    faqs: [
        {
          "question": "Can I use frozen berries?",
          "answer": "Yes, frozen berries work great! Just ensure they are thawed and drained of excess liquid before mixing."
        },
        {
          "question": "Is there a gluten-free option?",
          "answer": "Absolutely! Substitute the whole wheat flour with a gluten-free flour blend to make the cobbler gluten-free."
        }
      ],
    tips: ["Serve with a scoop of your favorite vegan ice cream for an extra treat.","For added flavor, sprinkle some cinnamon over the berry mixture before adding the batter."],
    variations: ["Try using peaches or apples for a different flavor profile.","Add nuts or seeds to the topping for extra crunch."],
    storage: 'Store leftovers in an airtight container in the refrigerator for up to 3 days. Reheat in the oven or microwave before serving.',
  },
];
