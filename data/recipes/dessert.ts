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
  {
    id: '1767010753366.5078',
    title: 'Vegan Vanilla Cake',
    slug: 'vegan-vanilla-cake',
    description: 'This delightful vegan vanilla cake is light, fluffy, and bursting with flavor. Perfect for any occasion, it\'s made with wholesome ingredients that everyone will love!',
    prologue: 'Looking for a delicious vegan dessert that everyone will enjoy? This vegan vanilla cake is the perfect solution! Made with whole-food, plant-based ingredients, this cake is not only simple to prepare but also incredibly satisfying. Visit vegancooking.recipes for more mouthwatering vegan recipes that will impress your family and friends.',
    image: '/recipe-images/vegan-vanilla-cake-1767010755199.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 8,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "You can substitute with all-purpose flour if preferred."
        },
        {
          "name": "baking powder",
          "amount": "2",
          "unit": "teaspoons",
          "notes": "Ensure it's aluminum-free."
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Helps the cake rise."
        },
        {
          "name": "sea salt",
          "amount": "1/2",
          "unit": "teaspoon",
          "notes": "Balances the sweetness."
        },
        {
          "name": "unsweetened applesauce",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Acts as an egg replacer."
        },
        {
          "name": "maple syrup",
          "amount": "3/4",
          "unit": "cup",
          "notes": "Can substitute with agave syrup."
        },
        {
          "name": "vanilla extract",
          "amount": "2",
          "unit": "teaspoons",
          "notes": "For a rich vanilla flavor."
        },
        {
          "name": "unsweetened almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Any plant-based milk can be used."
        },
        {
          "name": "coconut oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Melted for moisture."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and grease two 8-inch round cake pans."
        },
        {
          "step": 2,
          "text": "In a large bowl, sift together the whole wheat flour, baking powder, baking soda, and sea salt. Set aside."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the unsweetened applesauce, maple syrup, vanilla extract, almond milk, and melted coconut oil until well combined."
        },
        {
          "step": 4,
          "text": "Slowly pour the wet ingredients into the dry ingredients and mix until just combined. Avoid over-mixing."
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
          "text": "Allow the cakes to cool in the pans for 10 minutes, then transfer to a wire rack to cool completely."
        },
        {
          "step": 8,
          "text": "Once cool, frost with your favorite vegan frosting or enjoy plain!"
        }
      ],
    nutritionInfo: {
        "calories": 190,
        "protein": "4g",
        "carbs": "33g",
        "fat": "6g",
        "fiber": "2g",
        "sugar": "10g"
      },
    tags: ["dessert","cake","vegan","vanilla","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Whole wheat flour adds fiber and nutrients, but all-purpose flour can be used for a lighter texture. Maple syrup provides a natural sweetness, while unsweetened applesauce keeps the cake moist without added fats.',
    faqs: [
        {
          "question": "Can I use a different sweetener?",
          "answer": "Yes, you can substitute maple syrup with agave syrup or even coconut sugar, but the texture may vary."
        },
        {
          "question": "How can I make this cake gluten-free?",
          "answer": "You can use a 1:1 gluten-free flour blend in place of the whole wheat flour."
        }
      ],
    tips: ["Make sure all your wet ingredients are at room temperature for a better mix.","For added flavor, consider folding in some dairy-free chocolate chips or nuts into the batter."],
    variations: ["Add lemon zest for a citrus twist.","Incorporate spices like cinnamon or nutmeg for a warm flavor."],
    storage: 'Store any leftovers in an airtight container at room temperature for up to 3 days, or refrigerate for up to a week. The cake can also be frozen for up to 3 months; just wrap it tightly in plastic wrap.',
  },
  {
    id: '1767010858907.743',
    title: 'Vegan Chocolate Fudge',
    slug: 'vegan-chocolate-fudge',
    description: 'Indulge in this rich and creamy vegan chocolate fudge that melts in your mouth, made with wholesome ingredients for a guilt-free dessert.',
    prologue: 'Discover the decadence of vegan chocolate fudge that satisfies your sweet tooth without compromising your dietary choices. This recipe, crafted for whole-food-plant-based enthusiasts, utilizes simple, natural ingredients to create a delicious and creamy treat. Perfect for any occasion, this fudge is not only easy to make but also a delightful addition to your dessert repertoire. Explore more vegan cooking inspirations at vegancooking.recipes.',
    image: '/recipe-images/vegan-chocolate-fudge-1767010860438.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 16,
    difficulty: 'medium',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Medjool dates",
          "amount": "2",
          "unit": "cups",
          "notes": "pitted and packed tightly"
        },
        {
          "name": "Raw cashews",
          "amount": "1",
          "unit": "cup",
          "notes": "soaked in water for at least 4 hours"
        },
        {
          "name": "Cocoa powder",
          "amount": "1/2",
          "unit": "cup",
          "notes": "unsweetened"
        },
        {
          "name": "Pure vanilla extract",
          "amount": "1",
          "unit": "tbsp",
          "notes": "optional for flavor"
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "optional for added sweetness"
        },
        {
          "name": "Coconut oil",
          "amount": "1/4",
          "unit": "cup",
          "notes": "melted"
        },
        {
          "name": "Sea salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "to taste"
        },
        {
          "name": "Chopped walnuts",
          "amount": "1/2",
          "unit": "cup",
          "notes": "optional for texture"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a large bowl, soak the pitted Medjool dates in hot water for about 10 minutes to soften them."
        },
        {
          "step": 2,
          "text": "Drain the dates and transfer them to a food processor."
        },
        {
          "step": 3,
          "text": "Add the soaked cashews, cocoa powder, vanilla extract, maple syrup, melted coconut oil, and sea salt to the food processor."
        },
        {
          "step": 4,
          "text": "Blend the mixture on high speed until smooth and creamy, scraping down the sides as needed. This may take about 2-3 minutes."
        },
        {
          "step": 5,
          "text": "If the mixture is too thick, add a tablespoon of water at a time until desired consistency is reached."
        },
        {
          "step": 6,
          "text": "Fold in the chopped walnuts if using, mixing gently to combine."
        },
        {
          "step": 7,
          "text": "Line an 8x8 inch baking dish with parchment paper, leaving some overhang for easy removal."
        },
        {
          "step": 8,
          "text": "Pour the fudge mixture into the prepared baking dish and spread it evenly with a spatula."
        },
        {
          "step": 9,
          "text": "Refrigerate for at least 2 hours or until firm."
        },
        {
          "step": 10,
          "text": "Once set, lift the fudge out of the dish using the parchment paper and cut into squares."
        },
        {
          "step": 11,
          "text": "Store any leftovers in an airtight container in the fridge for up to one week."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "3g",
        "carbs": "15g",
        "fat": "7g",
        "fiber": "2g",
        "sugar": "8g"
      },
    tags: ["dessert","vegan","chocolate","fudge","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Medjool dates are key for sweetness and richness; if unavailable, other soft dried fruits like figs can be used. Soaking cashews makes them blend smoothly, creating a creamy texture. Adjust maple syrup based on the sweetness of your dates.',
    faqs: [
        {
          "question": "Can I use another nut instead of cashews?",
          "answer": "Yes, you can use soaked almonds or sunflower seeds for a nut-free option, although the flavor and texture may vary."
        },
        {
          "question": "How can I make this fudge chocolate-flavored?",
          "answer": "The recipe already includes cocoa powder, but you can enhance the chocolate flavor by adding vegan chocolate chips or increasing the cocoa powder."
        }
      ],
    tips: ["Ensure the dates are soft for easy blending; if they're hard, soak them longer.","For a variety of flavors, consider adding a pinch of cinnamon or espresso powder."],
    variations: ["Add a layer of nut butter on top before refrigerating for a delicious swirl.","Incorporate dried fruits like cranberries or coconut flakes for added texture."],
    storage: 'Store the fudge in an airtight container in the refrigerator for up to one week or freeze for up to three months. To freeze, cut into squares and place in a single layer in a freezer-safe container.',
  },
  {
    id: '1767010887380.7542',
    title: 'Vegan Whole-Food Plant-Based Chocolate Chip Cookies',
    slug: 'vegan-whole-food-plant-based-chocolate-chip-cookies',
    description: 'Deliciously chewy and perfectly sweet, these vegan chocolate chip cookies are made with wholesome ingredients that everyone will love.',
    prologue: 'Discover the joy of baking with these Vegan Whole-Food Plant-Based Chocolate Chip Cookies, perfect for satisfying your sweet tooth without compromising your health. Made with simple, wholesome ingredients, this recipe is a delightful treat that fits into a whole-food, plant-based lifestyle. Whether you\'re vegan or just looking to add more plant-based options to your diet, these cookies are easy to make and utterly delicious. Explore more at vegancooking.recipes for a variety of recipes that celebrate plant-based cooking!',
    image: '/recipe-images/vegan-whole-food-plant-based-chocolate-chip-cookie-1767010888619.webp',
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 12,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Whole wheat flour",
          "amount": "1 1/2",
          "unit": "cups",
          "notes": "Sifted"
        },
        {
          "name": "Baking soda",
          "amount": "1",
          "unit": "tsp",
          "notes": "For leavening"
        },
        {
          "name": "Salt",
          "amount": "1/2",
          "unit": "tsp",
          "notes": "Enhances flavor"
        },
        {
          "name": "Coconut oil",
          "amount": "1/3",
          "unit": "cup",
          "notes": "Melted and slightly cooled"
        },
        {
          "name": "Maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Natural sweetener"
        },
        {
          "name": "Unsweetened applesauce",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Acts as an egg replacer"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "For flavor"
        },
        {
          "name": "Dairy-free chocolate chips",
          "amount": "1",
          "unit": "cup",
          "notes": "Use vegan-certified chocolate chips"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line a baking sheet with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, whisk together the whole wheat flour, baking soda, and salt until well combined."
        },
        {
          "step": 3,
          "text": "In another bowl, mix the melted coconut oil, maple syrup, applesauce, and vanilla extract until smooth."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix."
        },
        {
          "step": 5,
          "text": "Fold in the dairy-free chocolate chips evenly throughout the dough."
        },
        {
          "step": 6,
          "text": "Using a tablespoon, scoop out the dough and place it on the prepared baking sheet, leaving space between each cookie."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 10-12 minutes, or until the edges are golden brown."
        },
        {
          "step": 8,
          "text": "Remove from the oven and let the cookies cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely."
        }
      ],
    nutritionInfo: {
        "calories": 120,
        "protein": "2g",
        "carbs": "18g",
        "fat": "5g",
        "fiber": "2g",
        "sugar": "6g"
      },
    tags: ["vegan","dessert","whole-food","cookies","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a gluten-free option, substitute whole wheat flour with a gluten-free flour blend. You can also substitute coconut oil with applesauce for a lower-fat option.',
    faqs: [
        {
          "question": "Can I use a different type of flour?",
          "answer": "Yes, you can substitute whole wheat flour with all-purpose flour or a gluten-free flour blend, but the texture may vary."
        }
      ],
    tips: ["Make sure to let the cookies cool on the baking sheet before transferring them to avoid breaking.","Experiment with adding nuts or dried fruits for added flavor and texture."],
    variations: ["Add 1/2 cup of chopped nuts like walnuts or pecans for a crunchy texture.","Substitute chocolate chips with raisins or dried cranberries for a fruity twist."],
    storage: 'Store cookies in an airtight container at room temperature for up to 5 days. For longer storage, freeze cookies in a single layer, then transfer to a freezer-safe bag for up to 3 months.',
  },
  {
    id: '1767010918230.9287',
    title: 'Vegan Coconut Panna Cotta',
    slug: 'vegan-coconut-panna-cotta',
    description: 'This creamy and luscious vegan panna cotta made with coconut milk is a delightful dessert that will impress your guests and satisfy your sweet tooth.',
    prologue: 'Discover the joy of creating a silky smooth Vegan Coconut Panna Cotta that is both indulgent and entirely plant-based. Made with simple ingredients like coconut milk and agar-agar, this dessert is not only easy to prepare but also a healthy alternative to traditional panna cotta. Perfect for any occasion, this recipe is a must-try for anyone looking to enjoy delicious vegan desserts. Explore more at vegancooking.recipes!',
    image: '/recipe-images/vegan-coconut-panna-cotta-1767010919602.webp',
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    servings: 4,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Coconut milk",
          "amount": "2",
          "unit": "cups",
          "notes": "Use full-fat coconut milk for creaminess."
        },
        {
          "name": "Agar-agar powder",
          "amount": "2",
          "unit": "tsp",
          "notes": "A plant-based gelatin substitute."
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Adjust sweetness to taste."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "For flavor."
        },
        {
          "name": "Lemon juice",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Adds brightness."
        },
        {
          "name": "Fresh berries",
          "amount": "1",
          "unit": "cup",
          "notes": "For topping, optional."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium saucepan, combine the coconut milk, maple syrup, vanilla extract, and lemon juice. Stir well."
        },
        {
          "step": 2,
          "text": "Sprinkle the agar-agar powder evenly over the coconut milk mixture and let it sit for about 5 minutes to hydrate."
        },
        {
          "step": 3,
          "text": "Place the saucepan over medium heat and bring the mixture to a gentle boil, stirring constantly until the agar-agar is fully dissolved (about 5-7 minutes)."
        },
        {
          "step": 4,
          "text": "Once dissolved, remove the saucepan from heat and let it cool for a few minutes."
        },
        {
          "step": 5,
          "text": "Pour the mixture into 4 serving cups or ramekins, filling each about three-quarters full."
        },
        {
          "step": 6,
          "text": "Refrigerate for at least 4 hours or until set."
        },
        {
          "step": 7,
          "text": "Once set, top with fresh berries before serving."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "2g",
        "carbs": "20g",
        "fat": "16g",
        "fiber": "2g",
        "sugar": "8g"
      },
    tags: ["vegan","dessert","coconut","panna cotta","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Coconut milk is essential for achieving the creamy texture in this panna cotta. If you want a lower-fat version, you can use light coconut milk, but the texture may be less rich. Agar-agar can also be substituted with carrageenan, but the setting time might vary.',
    faqs: [
        {
          "question": "Can I use a different sweetener?",
          "answer": "Yes, you can substitute maple syrup with agave syrup or any other liquid sweetener to suit your taste."
        },
        {
          "question": "How long can I store the panna cotta?",
          "answer": "The panna cotta can be stored in the refrigerator for up to 4 days."
        }
      ],
    tips: ["Make sure to stir the mixture continuously while heating to prevent lumps from forming.","For an extra layer of flavor, consider infusing the coconut milk with a sprig of mint or a cinnamon stick during heating."],
    variations: ["Add a layer of fruit puree on top before serving for a fruity twist.","Incorporate cocoa powder to create a chocolate coconut panna cotta."],
    storage: 'Store any leftovers in an airtight container in the refrigerator for up to 4 days. If the panna cotta has been topped with fresh fruits, eat within 1-2 days for optimal freshness.',
  },
  {
    id: '1767010984178.849',
    title: 'Vegan Fruit Tarts',
    slug: 'vegan-fruit-tarts',
    description: 'Delicate and delicious, these vegan fruit tarts are made with a wholesome crust and a creamy filling, topped with fresh seasonal fruits.',
    prologue: 'Discover the joy of vegan baking with these delightful fruit tarts that are not only visually stunning but also packed with flavor. Using whole-food plant-based ingredients, these tarts are suitable for everyone, whether you\'re vegan or simply looking to enjoy a healthier dessert option. Visit vegancooking.recipes for more inspiring vegan recipes that will satisfy your sweet tooth without compromising on health.',
    image: '/recipe-images/vegan-fruit-tarts-1767010985463.webp',
    prepTime: 30,
    cookTime: 25,
    totalTime: 55,
    servings: 8,
    difficulty: 'medium',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Almond flour",
          "amount": "1 ½",
          "unit": "cups",
          "notes": "For the tart crust."
        },
        {
          "name": "Coconut oil",
          "amount": "¼",
          "unit": "cup",
          "notes": "Melted."
        },
        {
          "name": "Maple syrup",
          "amount": "3",
          "unit": "tbsp",
          "notes": "For sweetness."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "For flavor."
        },
        {
          "name": "Salt",
          "amount": "¼",
          "unit": "tsp",
          "notes": "To enhance flavor."
        },
        {
          "name": "Coconut cream",
          "amount": "1",
          "unit": "cup",
          "notes": "Chilled and whipped."
        },
        {
          "name": "Powdered sugar",
          "amount": "2",
          "unit": "tbsp",
          "notes": "For the filling."
        },
        {
          "name": "Fresh fruits",
          "amount": "2",
          "unit": "cups",
          "notes": "Choose a mix of berries, kiwi, or any seasonal fruits."
        },
        {
          "name": "Lemon juice",
          "amount": "1",
          "unit": "tbsp",
          "notes": "For freshness."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a mixing bowl, combine almond flour, melted coconut oil, maple syrup, vanilla extract, and salt. Mix until a dough forms."
        },
        {
          "step": 3,
          "text": "Press the dough into a tart pan evenly across the bottom and up the sides. Prick the bottom with a fork to prevent bubbling."
        },
        {
          "step": 4,
          "text": "Bake in the preheated oven for 15-20 minutes, or until the crust is lightly golden. Remove from the oven and let cool."
        },
        {
          "step": 5,
          "text": "In a separate bowl, whip the chilled coconut cream with a hand mixer until fluffy. Add powdered sugar and lemon juice, and whip until combined."
        },
        {
          "step": 6,
          "text": "Once the tart crust is completely cool, spread the coconut cream filling evenly across the crust."
        },
        {
          "step": 7,
          "text": "Arrange your choice of fresh fruits on top of the filling in a decorative manner."
        },
        {
          "step": 8,
          "text": "Chill the tarts in the refrigerator for at least 30 minutes before serving to set."
        },
        {
          "step": 9,
          "text": "Slice, serve, and enjoy your delightful vegan fruit tarts!"
        }
      ],
    nutritionInfo: {
        "calories": 200,
        "protein": "3g",
        "carbs": "22g",
        "fat": "12g",
        "fiber": "3g",
        "sugar": "6g"
      },
    tags: ["vegan","dessert","fruit tarts","whole food plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Almond flour can be substituted with oat flour or gluten-free flour for a gluten-free option. For the fruits, feel free to mix and match based on seasonal availability or personal preference.',
    faqs: [
        {
          "question": "Can I use a different sweetener?",
          "answer": "Yes, you can substitute maple syrup with agave syrup or date syrup, but keep in mind that it may alter the flavor slightly."
        },
        {
          "question": "How can I make these tarts gluten-free?",
          "answer": "Use gluten-free flour blends in place of almond flour for the crust."
        }
      ],
    tips: ["Make sure the coconut cream is well-chilled before whipping for best results.","Experiment with different combinations of fruits for a unique flavor each time."],
    variations: ["Substitute the coconut cream with a cashew cream made from soaked cashews, blended with a bit of plant milk.","Top with a vegan chocolate ganache instead of fruit for a decadent chocolate tart."],
    storage: 'Store the tarts covered in the refrigerator for up to 3 days. For best quality, consume within 2 days.',
  },
  {
    id: '1767011209172.5488',
    title: 'Vegan Coconut Banana Ice Cream',
    slug: 'vegan-coconut-banana-ice-cream',
    description: 'Creamy and delicious, this Vegan Coconut Banana Ice Cream is the perfect indulgence for any occasion, made with simple whole food ingredients.',
    prologue: 'Discover the joy of homemade ice cream with this Vegan Coconut Banana Ice Cream recipe from vegancooking.recipes. Made with just three wholesome ingredients, this refreshing dessert is perfect for warm days or a sweet treat anytime. Enjoy a guilt-free delight that is not only vegan but also full of flavor and nutrition.',
    image: '/recipe-images/vegan-coconut-banana-ice-cream-1767011210512.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "ripe bananas",
          "amount": "3",
          "unit": "medium",
          "notes": "peeled and sliced"
        },
        {
          "name": "coconut milk",
          "amount": "1",
          "unit": "cup",
          "notes": "full-fat for creaminess"
        },
        {
          "name": "pure vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor enhancement"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Peel and slice the ripe bananas into small pieces and place them in a freezer-safe container."
        },
        {
          "step": 2,
          "text": "Freeze the banana slices for at least 2 hours or until solid."
        },
        {
          "step": 3,
          "text": "Once the bananas are frozen, remove them from the freezer and place them in a high-speed blender or food processor."
        },
        {
          "step": 4,
          "text": "Add the coconut milk and vanilla extract to the blender with the frozen banana slices."
        },
        {
          "step": 5,
          "text": "Blend on high speed until the mixture is smooth and creamy, scraping down the sides as needed. This may take 1-2 minutes."
        },
        {
          "step": 6,
          "text": "Taste the mixture and adjust sweetness if desired by adding a bit of maple syrup, agave, or an alternative sweetener."
        },
        {
          "step": 7,
          "text": "Transfer the ice cream mixture to a freezer-safe container and smooth the top with a spatula."
        },
        {
          "step": 8,
          "text": "Freeze for an additional 1-2 hours for a firmer consistency before serving."
        },
        {
          "step": 9,
          "text": "Scoop into bowls or cones and enjoy your delicious vegan ice cream!"
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "3g",
        "carbs": "30g",
        "fat": "8g",
        "fiber": "3g",
        "sugar": "10g"
      },
    tags: ["vegan","dessert","ice cream","whole food","plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Using ripe bananas enhances the natural sweetness of the ice cream. For a lighter version, you can use light coconut milk, but full-fat gives a creamier texture.',
    faqs: [
        {
          "question": "Can I make this ice cream without coconut milk?",
          "answer": "Yes, you can substitute with almond milk or cashew milk, but the texture will be less creamy."
        },
        {
          "question": "How can I store leftovers?",
          "answer": "Store any leftover ice cream in an airtight container in the freezer for up to one week."
        }
      ],
    tips: ["Make sure the bananas are fully ripe for the best flavor.","For added flavor, consider mixing in cocoa powder or nut butter during the blending process."],
    variations: ["Add a tablespoon of cocoa powder for a chocolate banana ice cream.","Mix in chopped nuts or chocolate chips after blending for added texture."],
    storage: 'Store the ice cream in an airtight container in the freezer. Allow it to sit at room temperature for about 5-10 minutes before scooping for easier serving.',
  },
  {
    id: '1767011239769.2861',
    title: 'Vegan Chocolate Cake',
    slug: 'vegan-chocolate-cake',
    description: 'Indulge in this rich and moist vegan chocolate cake that melts in your mouth. Perfect for any celebration or a simple dessert at home.',
    prologue: 'This vegan chocolate cake is not only delicious but also made with wholesome ingredients that make it a guilt-free treat. Perfect for birthdays, celebrations, or just a sweet craving, this cake is easy to make and will satisfy your chocolate desires. Discover more delicious vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-chocolate-cake-1767011240988.webp',
    prepTime: 20,
    cookTime: 30,
    totalTime: 50,
    servings: 8,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "all-purpose flour",
          "amount": "1 ½",
          "unit": "cups",
          "notes": "Sifted"
        },
        {
          "name": "cocoa powder",
          "amount": "½",
          "unit": "cup",
          "notes": "Unsweetened"
        },
        {
          "name": "baking soda",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "baking powder",
          "amount": "1",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "salt",
          "amount": "½",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "granulated sugar",
          "amount": "1",
          "unit": "cup",
          "notes": ""
        },
        {
          "name": "unsweetened applesauce",
          "amount": "½",
          "unit": "cup",
          "notes": "Acts as an egg replacer"
        },
        {
          "name": "vanilla extract",
          "amount": "2",
          "unit": "tsp",
          "notes": ""
        },
        {
          "name": "almond milk",
          "amount": "1",
          "unit": "cup",
          "notes": "Or any plant-based milk"
        },
        {
          "name": "vegetable oil",
          "amount": "⅓",
          "unit": "cup",
          "notes": "Can substitute with melted coconut oil"
        },
        {
          "name": "apple cider vinegar",
          "amount": "1",
          "unit": "tbsp",
          "notes": "Helps with leavening"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans or line them with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, sift together the all-purpose flour, cocoa powder, baking soda, baking powder, and salt."
        },
        {
          "step": 3,
          "text": "In another bowl, whisk together the granulated sugar, applesauce, vanilla extract, almond milk, vegetable oil, and apple cider vinegar until well combined."
        },
        {
          "step": 4,
          "text": "Pour the wet ingredients into the dry ingredients and mix gently until just combined, being careful not to overmix."
        },
        {
          "step": 5,
          "text": "Divide the batter evenly between the prepared cake pans."
        },
        {
          "step": 6,
          "text": "Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted into the center comes out clean."
        },
        {
          "step": 7,
          "text": "Once baked, allow the cakes to cool in the pans for 10 minutes, then transfer them to a wire rack to cool completely."
        },
        {
          "step": 8,
          "text": "Once cooled, frost with your favorite vegan frosting or enjoy plain. Slice and serve!"
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "3g",
        "carbs": "36g",
        "fat": "8g",
        "fiber": "2g",
        "sugar": "12g"
      },
    tags: ["dessert","vegan","chocolate","cake","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a gluten-free version, replace all-purpose flour with a gluten-free baking blend. You can use maple syrup or coconut sugar as a sweetener if preferred.',
    faqs: [
        {
          "question": "Can I use whole wheat flour instead?",
          "answer": "Yes, but the cake may become denser. Consider using white whole wheat flour for a lighter texture."
        },
        {
          "question": "How can I make this cake chocolatey without adding more cocoa?",
          "answer": "You can add vegan chocolate chips to the batter for extra chocolate flavor."
        }
      ],
    tips: ["Make sure all your ingredients are at room temperature for better mixing.","Let the cake cool completely before frosting to prevent melting."],
    variations: ["Add a layer of vegan cream cheese frosting for a tangy twist.","Top with fresh berries or nuts for added texture."],
    storage: 'Store the cake in an airtight container at room temperature for up to 3 days or refrigerate for up to a week. Freeze slices for longer storage.',
  },
  {
    id: '1767011696974.5615',
    title: 'Vegan Mango Sorbet',
    slug: 'vegan-mango-sorbet',
    description: 'This refreshing vegan mango sorbet is the perfect treat for hot days or as a light dessert after a meal, bursting with tropical flavors.',
    prologue: 'If you\'re looking for a delicious and healthy dessert, this vegan mango sorbet is a must-try! Made with whole, natural ingredients, it’s not only refreshing but also simple to prepare. Perfect for satisfying your sweet tooth without any animal products, this recipe is a great addition to your vegan cooking repertoire. Explore more delightful vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-mango-sorbet-1767011698553.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "ripe mangoes",
          "amount": "3",
          "unit": "medium",
          "notes": "peeled and diced"
        },
        {
          "name": "coconut water",
          "amount": "1/2",
          "unit": "cup",
          "notes": "unsweetened"
        },
        {
          "name": "lime juice",
          "amount": "2",
          "unit": "tbsp",
          "notes": "freshly squeezed"
        },
        {
          "name": "maple syrup",
          "amount": "2",
          "unit": "tbsp",
          "notes": "adjust to taste depending on sweetness of mangoes"
        },
        {
          "name": "pinch of sea salt",
          "amount": "1",
          "unit": "pinch",
          "notes": "to enhance flavor"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Start by peeling and dicing the ripe mangoes. Make sure to use very ripe mangoes for the best flavor."
        },
        {
          "step": 2,
          "text": "In a blender or food processor, combine the diced mangoes, coconut water, lime juice, maple syrup, and a pinch of sea salt."
        },
        {
          "step": 3,
          "text": "Blend the mixture until smooth and creamy. You may need to stop and scrape down the sides of the blender to ensure everything is well combined."
        },
        {
          "step": 4,
          "text": "Taste the mixture and adjust the sweetness by adding more maple syrup if desired."
        },
        {
          "step": 5,
          "text": "Pour the blended mixture into a shallow container or ice cream maker."
        },
        {
          "step": 6,
          "text": "If using an ice cream maker, churn according to the manufacturer's instructions until it reaches a soft-serve consistency. If not, place the container in the freezer."
        },
        {
          "step": 7,
          "text": "If freezing, stir the sorbet every 30 minutes for the first 2 hours to break up ice crystals until fully frozen, about 4-6 hours."
        },
        {
          "step": 8,
          "text": "Once frozen, let the sorbet sit at room temperature for about 5 minutes before scooping."
        },
        {
          "step": 9,
          "text": "Scoop the sorbet into bowls and serve immediately, garnished with fresh mint leaves if desired."
        }
      ],
    nutritionInfo: {
        "calories": 100,
        "protein": "1g",
        "carbs": "28g",
        "fat": "0g",
        "fiber": "2g",
        "sugar": "22g"
      },
    tags: ["vegan","dessert","sorbet","fruit-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Mangoes are the star of this sorbet; ensure they are perfectly ripe for optimal sweetness and flavor. Coconut water adds a subtle sweetness and tropical touch, but you can also use water or another fruit juice if desired. Adjust the maple syrup according to the sweetness of your mangoes.',
    faqs: [
        {
          "question": "Can I use frozen mangoes?",
          "answer": "Yes, you can use frozen mangoes for convenience, but make sure they are unsweetened and thaw them slightly before blending."
        },
        {
          "question": "How long does the sorbet last in the freezer?",
          "answer": "The sorbet can be stored in the freezer for up to 1 month. Just make sure it is in an airtight container."
        }
      ],
    tips: ["For a creamier texture, you can add a banana to the blender.","Experiment with different fruits like strawberries or peaches for unique flavors."],
    variations: ["Replace mangoes with peaches for a peach sorbet.","Add a handful of fresh mint leaves to the blender for a refreshing mint twist."],
    storage: 'Store the sorbet in an airtight container in the freezer. Before serving, allow it to sit at room temperature for a few minutes to soften slightly.',
  },
  {
    id: '1767011809942.4128',
    title: 'Vegan Caramels',
    slug: 'vegan-caramels',
    description: 'These rich and decadent vegan caramels are made with wholesome ingredients, offering a delightful treat that\'s completely plant-based.',
    prologue: 'Indulge in the sweetness of these Vegan Caramels, crafted with whole food and plant-based ingredients. Perfect for satisfying your sweet tooth, these caramels are not only delicious but also guilt-free! Whether you\'re looking for a treat for yourself or a homemade gift for a loved one, this recipe is sure to impress. Explore more vegan recipes at vegancooking.recipes.',
    image: '/recipe-images/vegan-caramels-1767011811314.webp',
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 24,
    difficulty: 'medium',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Medjool dates",
          "amount": "2",
          "unit": "cups",
          "notes": "pitted and chopped"
        },
        {
          "name": "Coconut cream",
          "amount": "1",
          "unit": "cup",
          "notes": "use the solid part from a can of coconut milk"
        },
        {
          "name": "Maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "preferably pure, grade A"
        },
        {
          "name": "Coconut sugar",
          "amount": "1/4",
          "unit": "cup",
          "notes": "for a caramel-like flavor"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "pure vanilla extract"
        },
        {
          "name": "Sea salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "adjust to taste"
        },
        {
          "name": "Almond flour",
          "amount": "1/4",
          "unit": "cup",
          "notes": "optional for texture"
        },
        {
          "name": "Dark chocolate",
          "amount": "4",
          "unit": "oz",
          "notes": "vegan chocolate for drizzling (optional)"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Prepare an 8x8 inch baking dish by lining it with parchment paper, leaving some overhang for easy removal."
        },
        {
          "step": 2,
          "text": "In a medium saucepan over low heat, combine the coconut cream, maple syrup, coconut sugar, and sea salt."
        },
        {
          "step": 3,
          "text": "Stir the mixture continuously until the coconut sugar is dissolved and the mixture is smooth, about 5 minutes."
        },
        {
          "step": 4,
          "text": "Add the chopped Medjool dates and vanilla extract to the saucepan, stirring until well combined."
        },
        {
          "step": 5,
          "text": "Increase the heat to medium and continue to cook for about 15-20 minutes, stirring frequently, until the mixture thickens and starts to pull away from the sides of the pan."
        },
        {
          "step": 6,
          "text": "If using, add the almond flour and mix well until fully incorporated."
        },
        {
          "step": 7,
          "text": "Pour the caramel mixture into the prepared baking dish, spreading it evenly with a spatula."
        },
        {
          "step": 8,
          "text": "Allow the caramels to cool at room temperature for at least 1 hour, then refrigerate for an additional 30 minutes to firm up."
        },
        {
          "step": 9,
          "text": "Once set, lift the caramels out of the baking dish using the parchment paper overhang and cut them into small squares."
        },
        {
          "step": 10,
          "text": "If desired, melt the dark chocolate and drizzle it over the caramels for an extra touch of decadence."
        }
      ],
    nutritionInfo: {
        "calories": 60,
        "protein": "1g",
        "carbs": "14g",
        "fat": "2g",
        "fiber": "1g",
        "sugar": "10g"
      },
    tags: ["dessert","vegan","caramel","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Medjool dates are essential for the caramel\'s sweetness and texture. If you\'re looking for a quick option, you can use store-bought date paste, but the fresh dates provide the best flavor. Coconut cream is crucial for creaminess; make sure to chill a can of full-fat coconut milk to separate the cream from the liquid.',
    faqs: [
        {
          "question": "Can I use other sweeteners instead of maple syrup?",
          "answer": "Yes, you can use agave syrup or brown rice syrup as alternatives, but they may slightly alter the flavor."
        },
        {
          "question": "How should I store these caramels?",
          "answer": "Store the caramels in an airtight container in the refrigerator for up to two weeks."
        }
      ],
    tips: ["Make sure to stir continuously when cooking to prevent burning.","For a fun twist, add a pinch of cinnamon or nutmeg to the mixture for extra flavor."],
    variations: ["Add chopped nuts or dried fruit for a chewy texture.","Substitute the almond flour with oat flour for a gluten-free option."],
    storage: 'Store the caramels in an airtight container in the refrigerator for up to two weeks, or freeze them for up to three months. Allow to thaw in the fridge before enjoying.',
  },
  {
    id: '1767012343610.1199',
    title: 'Vegan Tiramisu',
    slug: 'vegan-tiramisu',
    description: 'Indulge in this creamy, coffee-flavored Vegan Tiramisu that offers a delightful twist on the classic Italian dessert, made with wholesome, plant-based ingredients.',
    prologue: 'This Vegan Tiramisu is a delicious and guilt-free dessert that captures the essence of the traditional Italian treat without using any animal products. Perfect for special occasions or a sweet treat any day of the week, this recipe utilizes whole-food plant-based ingredients to deliver rich flavors and satisfying textures. At vegancooking.recipes, we believe that vegan desserts can be both indulgent and healthy, making them suitable for everyone to enjoy.',
    image: '/recipe-images/vegan-tiramisu-1767012345105.webp',
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
          "amount": "1",
          "unit": "cup",
          "notes": "soaked in water for at least 4 hours"
        },
        {
          "name": "Coconut cream",
          "amount": "1",
          "unit": "cup",
          "notes": "chilled and thick part of canned coconut milk"
        },
        {
          "name": "Maple syrup",
          "amount": "1/3",
          "unit": "cup",
          "notes": "adjust to taste"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "for flavor"
        },
        {
          "name": "Espresso or strong brewed coffee",
          "amount": "1",
          "unit": "cup",
          "notes": "cooled"
        },
        {
          "name": "Almond milk",
          "amount": "1/2",
          "unit": "cup",
          "notes": "or any plant-based milk"
        },
        {
          "name": "Cocoa powder",
          "amount": "1/4",
          "unit": "cup",
          "notes": "unsweetened"
        },
        {
          "name": "Ladyfinger cookies (vegan)",
          "amount": "24",
          "unit": "pieces",
          "notes": "store-bought or homemade"
        },
        {
          "name": "Cocoa powder",
          "amount": "for dusting",
          "unit": "",
          "notes": "optional for serving"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Drain and rinse the soaked raw cashews. In a blender, combine the cashews, coconut cream, maple syrup, and vanilla extract. Blend until smooth and creamy."
        },
        {
          "step": 2,
          "text": "In a shallow bowl, mix the cooled espresso or strong brewed coffee with almond milk. Dip each ladyfinger briefly into the coffee mixture, ensuring they are soaked but not soggy."
        },
        {
          "step": 3,
          "text": "In a rectangular dish (approximately 8x8 inches), layer half of the dipped ladyfingers at the bottom."
        },
        {
          "step": 4,
          "text": "Spread half of the cashew cream mixture over the layer of ladyfingers evenly."
        },
        {
          "step": 5,
          "text": "Repeat the process with the remaining ladyfingers and the rest of the cashew cream mixture."
        },
        {
          "step": 6,
          "text": "Cover the dish with plastic wrap and refrigerate for at least 4 hours, or overnight for best results."
        },
        {
          "step": 7,
          "text": "Before serving, dust the top with cocoa powder. Cut into squares and enjoy your Vegan Tiramisu!"
        }
      ],
    nutritionInfo: {
        "calories": 250,
        "protein": "4g",
        "carbs": "35g",
        "fat": "12g",
        "fiber": "2g",
        "sugar": "10g"
      },
    tags: ["dessert","vegan","tiramisu","plant-based","whole-food","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Raw cashews are essential for the creamy texture of the filling; soaking them softens them for easier blending. Coconut cream adds richness, while maple syrup sweetens the dessert naturally. For a gluten-free option, use gluten-free ladyfinger cookies.',
    faqs: [
        {
          "question": "Can I make this recipe nut-free?",
          "answer": "You can substitute the cashews with silken tofu blended until smooth, but the flavor and texture may vary."
        },
        {
          "question": "How long can I store the Vegan Tiramisu?",
          "answer": "Store it covered in the refrigerator for up to 5 days. It can also be frozen for up to 1 month; just thaw in the fridge before serving."
        }
      ],
    tips: ["For a stronger coffee flavor, increase the espresso amount or let the ladyfingers soak for a little longer.","Using homemade vegan ladyfingers can elevate the dish and ensure all ingredients are whole food and plant-based."],
    variations: ["Add a layer of fruit such as raspberries or strawberries between the layers for a fruity twist.","Incorporate a splash of coffee liqueur for an adult version of this dessert."],
    storage: 'Store the Vegan Tiramisu in an airtight container in the refrigerator for up to 5 days. If freezing, wrap individual portions tightly and store in the freezer for up to 1 month.',
  },
  {
    id: '1767012569135.0566',
    title: 'Vegan Nice Cream',
    slug: 'vegan-nice-cream',
    description: 'A creamy, delicious, and healthy frozen dessert made entirely from bananas, perfect for satisfying your sweet tooth without any dairy.',
    prologue: 'Discover the delightful world of vegan desserts with this wholesome Nice Cream recipe, featuring frozen bananas as its star ingredient. This easy-to-make treat will satisfy your cravings while keeping it plant-based and nutritious. Perfect for warm days or as a guilt-free indulgence, this recipe is a must-try for anyone exploring vegan cooking at vegancooking.recipes.',
    image: '/recipe-images/vegan-nice-cream-1767012570395.webp',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Ripe bananas",
          "amount": "2",
          "unit": "medium",
          "notes": "peeled and sliced, preferably frozen"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Begin by selecting two ripe bananas. Peel and slice them into smaller pieces for easier blending."
        },
        {
          "step": 2,
          "text": "Place the banana slices in a single layer on a baking sheet and freeze for at least 2 hours, or until completely frozen."
        },
        {
          "step": 3,
          "text": "Once the bananas are frozen, transfer them to a high-speed blender or food processor."
        },
        {
          "step": 4,
          "text": "Blend the bananas on high speed for about 2-3 minutes, stopping to scrape down the sides as needed, until the mixture becomes smooth and creamy."
        },
        {
          "step": 5,
          "text": "If desired, add any additional flavorings or mix-ins such as a tablespoon of pure vanilla extract, a tablespoon of cocoa powder, or a handful of frozen berries."
        },
        {
          "step": 6,
          "text": "Blend again until the mix-ins are fully incorporated."
        },
        {
          "step": 7,
          "text": "For a soft-serve consistency, enjoy the Nice Cream immediately. For a firmer texture, transfer the Nice Cream to an airtight container and freeze for an additional 30 minutes."
        },
        {
          "step": 8,
          "text": "Scoop into bowls and serve. Top with fresh fruit, nuts, or a drizzle of maple syrup if desired."
        }
      ],
    nutritionInfo: {
        "calories": 210,
        "protein": "2g",
        "carbs": "54g",
        "fat": "0g",
        "fiber": "6g",
        "sugar": "28g"
      },
    tags: ["vegan","dessert","ice cream","healthy dessert","whole food plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Using ripe bananas is key for sweetness and flavor. You can substitute frozen bananas with other frozen fruits like mango or strawberries for different flavors. Ensure they are ripe for the best results.',
    faqs: [
        {
          "question": "Can I use fresh bananas instead of frozen?",
          "answer": "Fresh bananas will not give you the same creamy texture. Freezing them is essential for achieving the nice cream consistency."
        },
        {
          "question": "How long can I store nice cream?",
          "answer": "Nice cream can be stored in the freezer for up to one week, but for best texture and flavor, enjoy within three days."
        }
      ],
    tips: ["For a creamier texture, use a high-speed blender or food processor.","Experiment with different add-ins like nut butters, coconut flakes, or spices for unique flavors!"],
    variations: ["Add 1 tablespoon of almond butter for a nutty flavor.","Blend in a handful of spinach or kale for a green nice cream packed with nutrients."],
    storage: 'Store any leftover nice cream in an airtight container in the freezer. Allow it to sit at room temperature for a few minutes before scooping if it becomes too hard.',
  },
  {
    id: '1767012724348.2026',
    title: 'Vegan Whole Food Plant-Based Chocolate Nut Bars',
    slug: 'vegan-whole-food-plant-based-chocolate-nut-bars',
    description: 'Deliciously rich and nutritious, these vegan chocolate nut bars are the perfect guilt-free dessert to satisfy your sweet tooth.',
    prologue: 'Looking for a wholesome dessert that\'s both satisfying and healthy? These Vegan Whole Food Plant-Based Chocolate Nut Bars are a fantastic option for anyone seeking a plant-based treat. With a blend of nuts, oats, and natural sweeteners, this recipe is not only easy to make but also packed with nutrients. Dive into the world of delicious vegan desserts with vegancooking.recipes and enjoy a treat that\'s good for you and the planet!',
    image: '/recipe-images/vegan-whole-food-plant-based-chocolate-nut-bars-1767012727605.webp',
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 12,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Rolled oats",
          "amount": "2",
          "unit": "cups",
          "notes": "Use gluten-free oats if necessary."
        },
        {
          "name": "Almonds",
          "amount": "1",
          "unit": "cup",
          "notes": "Chopped or whole, according to preference."
        },
        {
          "name": "Medjool dates",
          "amount": "1",
          "unit": "cup",
          "notes": "Pitted and chopped."
        },
        {
          "name": "Peanut butter",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Natural, unsweetened peanut butter."
        },
        {
          "name": "Cocoa powder",
          "amount": "1/3",
          "unit": "cup",
          "notes": "Unsweetened."
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "For additional sweetness."
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "Pure vanilla extract."
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "To enhance flavor."
        },
        {
          "name": "Unsweetened shredded coconut",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Optional, for added texture."
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C) and line an 8x8 inch baking dish with parchment paper."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the rolled oats, chopped almonds, and shredded coconut (if using). Mix well."
        },
        {
          "step": 3,
          "text": "In a separate bowl, combine the chopped Medjool dates, peanut butter, cocoa powder, maple syrup, vanilla extract, and salt."
        },
        {
          "step": 4,
          "text": "Using a food processor, blend the date mixture until smooth and creamy."
        },
        {
          "step": 5,
          "text": "Pour the date mixture into the dry ingredients and mix thoroughly until all ingredients are well combined."
        },
        {
          "step": 6,
          "text": "Transfer the mixture into the prepared baking dish and press down firmly to create an even layer."
        },
        {
          "step": 7,
          "text": "Bake in the preheated oven for 20-25 minutes, or until the edges are slightly golden."
        },
        {
          "step": 8,
          "text": "Remove from the oven and let it cool completely in the baking dish before slicing into bars."
        },
        {
          "step": 9,
          "text": "Store the bars in an airtight container in the fridge for up to a week."
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "4g",
        "carbs": "25g",
        "fat": "8g",
        "fiber": "3g",
        "sugar": "6g"
      },
    tags: ["vegan","dessert","snack","whole-food","plant-based","chocolate","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Medjool dates provide natural sweetness and moisture, making them a perfect binder. You can substitute almond butter or cashew butter for peanut butter if you prefer a different flavor profile. For nut-free bars, use sunflower seed butter and omit the almonds.',
    faqs: [
        {
          "question": "Can I make these bars gluten-free?",
          "answer": "Yes, simply use certified gluten-free rolled oats to ensure the bars are gluten-free."
        },
        {
          "question": "How should I store these bars?",
          "answer": "Store in an airtight container in the fridge for up to a week, or freeze for longer storage."
        }
      ],
    tips: ["Press the mixture firmly into the baking dish for better texture.","Experiment with different nuts or seeds for unique flavors."],
    variations: ["Add dried fruits like cranberries or apricots for extra sweetness.","Incorporate protein powder for a protein-packed version."],
    storage: 'Store the bars in an airtight container in the refrigerator for up to a week. They can also be frozen for up to 3 months; just thaw in the fridge before enjoying.',
  },
  {
    id: '1767013302642.6665',
    title: 'Vegan Blueberry Pie',
    slug: 'vegan-blueberry-pie',
    description: 'Indulge in this delightful vegan blueberry pie, packed with fresh blueberries and a buttery, flaky crust that will satisfy any dessert lover\'s cravings.',
    prologue: 'This Vegan Blueberry Pie is a delicious and wholesome dessert that everyone will love, even non-vegans! Made with simple, whole-food ingredients, this pie showcases the natural sweetness of blueberries, all while being completely plant-based. Perfect for summer gatherings or cozy family dinners, this recipe is easy to follow and uses no refined sugars. For more delightful vegan recipes, visit vegancooking.recipes.',
    image: '/recipe-images/vegan-blueberry-pie-1767013304245.webp',
    prepTime: 25,
    cookTime: 45,
    totalTime: 70,
    servings: 8,
    difficulty: 'medium',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "whole wheat flour",
          "amount": "2",
          "unit": "cups",
          "notes": "plus more for dusting"
        },
        {
          "name": "coconut oil",
          "amount": "1/2",
          "unit": "cup",
          "notes": "melted"
        },
        {
          "name": "cold water",
          "amount": "6",
          "unit": "tbsp",
          "notes": "add more if necessary"
        },
        {
          "name": "maple syrup",
          "amount": "1/2",
          "unit": "cup",
          "notes": "adjust to taste"
        },
        {
          "name": "fresh blueberries",
          "amount": "4",
          "unit": "cups",
          "notes": "can use frozen if necessary"
        },
        {
          "name": "cornstarch",
          "amount": "2",
          "unit": "tbsp",
          "notes": "to thicken filling"
        },
        {
          "name": "lemon juice",
          "amount": "2",
          "unit": "tbsp",
          "notes": "freshly squeezed"
        },
        {
          "name": "vanilla extract",
          "amount": "1",
          "unit": "tsp",
          "notes": "optional for flavor"
        },
        {
          "name": "salt",
          "amount": "1/4",
          "unit": "tsp",
          "notes": "to enhance sweetness"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "Preheat your oven to 350°F (175°C)."
        },
        {
          "step": 2,
          "text": "In a large mixing bowl, combine the whole wheat flour and salt."
        },
        {
          "step": 3,
          "text": "Add the melted coconut oil and mix until crumbly."
        },
        {
          "step": 4,
          "text": "Gradually add cold water, one tablespoon at a time, mixing until the dough holds together. You may need to adjust the amount of water."
        },
        {
          "step": 5,
          "text": "Divide the dough in half, shape into disks, wrap in plastic, and refrigerate for at least 30 minutes."
        },
        {
          "step": 6,
          "text": "In another bowl, combine the blueberries, maple syrup, cornstarch, lemon juice, and vanilla extract. Toss gently to coat."
        },
        {
          "step": 7,
          "text": "Remove one dough disk from the fridge. On a floured surface, roll it out to fit a 9-inch pie pan."
        },
        {
          "step": 8,
          "text": "Transfer the rolled-out dough to the pie pan and trim the edges."
        },
        {
          "step": 9,
          "text": "Pour the blueberry filling into the crust, spreading it evenly."
        },
        {
          "step": 10,
          "text": "Roll out the second dough disk and place it over the filling. Cut slits for ventilation, or create a lattice design."
        },
        {
          "step": 11,
          "text": "Bake in the preheated oven for 40-45 minutes, or until the crust is golden and the filling is bubbling."
        },
        {
          "step": 12,
          "text": "Remove from the oven and let it cool for at least 15 minutes before slicing and serving."
        }
      ],
    nutritionInfo: {
        "calories": 220,
        "protein": "3g",
        "carbs": "36g",
        "fat": "9g",
        "fiber": "4g",
        "sugar": "10g"
      },
    tags: ["dessert","vegan","blueberry","pie","whole-food plant-based","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'For a gluten-free version, substitute whole wheat flour with almond flour and add a binding agent like flaxseed meal. The maple syrup can be adjusted based on the sweetness of the blueberries you use.',
    faqs: [
        {
          "question": "Can I use frozen blueberries?",
          "answer": "Yes, you can use frozen blueberries, but make sure to thaw and drain any excess liquid before using."
        },
        {
          "question": "How do I store leftover pie?",
          "answer": "Store leftover pie in an airtight container in the refrigerator for up to 3 days."
        }
      ],
    tips: ["For a crispier crust, bake the bottom crust for 10 minutes before adding the filling.","Serve with a scoop of vegan ice cream for an extra treat!"],
    variations: ["Substitute blueberries with mixed berries for a berry medley pie.","Add a tablespoon of cinnamon for a spiced flavor."],
    storage: 'Store in the refrigerator in an airtight container for up to 3 days. For longer storage, freeze slices wrapped in plastic wrap and then in foil for up to 3 months.',
  },
  {
    id: '1767013343941.2585',
    title: 'Vegan Chocolate Pudding',
    slug: 'vegan-chocolate-pudding',
    description: 'Indulge in this rich and creamy vegan chocolate pudding that\'s both delicious and wholesome. Made with simple, whole-food ingredients, it\'s the perfect guilt-free dessert.',
    prologue: 'Discover the joy of vegan cooking with this delightful chocolate pudding recipe, perfect for dessert lovers looking for a healthy treat. This recipe from vegancooking.recipes is crafted with whole-food ingredients, ensuring you enjoy a dessert that is both satisfying and nourishing. With just a few ingredients and easy steps, you can whip up a delicious pudding that will impress everyone at the table.',
    image: '/recipe-images/vegan-chocolate-pudding-1767013345530.webp',
    prepTime: 10,
    cookTime: 5,
    totalTime: 15,
    servings: 4,
    difficulty: 'easy',
    category: ["dessert"],
    veganType: ["whole-food-plant-based"],
    ingredients: [
        {
          "name": "Almond milk",
          "amount": "2",
          "unit": "cups",
          "notes": "Unsweetened and unflavored preferred"
        },
        {
          "name": "Cocoa powder",
          "amount": "1/2",
          "unit": "cup",
          "notes": "Unsweetened"
        },
        {
          "name": "Maple syrup",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Adjust sweetness to taste"
        },
        {
          "name": "Cornstarch",
          "amount": "1/4",
          "unit": "cup",
          "notes": "For thickening"
        },
        {
          "name": "Vanilla extract",
          "amount": "1",
          "unit": "teaspoon",
          "notes": "Pure vanilla extract"
        },
        {
          "name": "Salt",
          "amount": "1/4",
          "unit": "teaspoon",
          "notes": "To enhance flavor"
        },
        {
          "name": "Dark chocolate chips",
          "amount": "1/4",
          "unit": "cup",
          "notes": "Dairy-free"
        }
      ],
    instructions: [
        {
          "step": 1,
          "text": "In a medium saucepan, whisk together the almond milk, cocoa powder, maple syrup, cornstarch, vanilla extract, and salt until smooth."
        },
        {
          "step": 2,
          "text": "Place the saucepan over medium heat and cook while continuously whisking. Bring the mixture to a gentle boil."
        },
        {
          "step": 3,
          "text": "Once boiling, reduce the heat to low and continue to whisk for about 2-3 minutes, until the pudding thickens."
        },
        {
          "step": 4,
          "text": "Remove the saucepan from heat and stir in the dark chocolate chips until melted and fully combined."
        },
        {
          "step": 5,
          "text": "Pour the pudding into individual serving dishes or a large bowl. Let it cool to room temperature, then cover and refrigerate for at least 2 hours to set."
        },
        {
          "step": 6,
          "text": "Serve chilled and enjoy your rich, creamy vegan chocolate pudding!"
        }
      ],
    nutritionInfo: {
        "calories": 180,
        "protein": "3g",
        "carbs": "29g",
        "fat": "7g",
        "fiber": "4g",
        "sugar": "10g"
      },
    tags: ["dessert","vegan","chocolate","pudding","whole-food","whole-food-plant-based"],
    author: 'vegancooking.recipes',
    datePublished: '2025-12-29',
    ingredientNotes: 'Almond milk can be substituted with any other plant-based milk such as oat or soy milk. For a sweeter pudding, increase the amount of maple syrup. Ensure the dark chocolate chips are dairy-free to maintain the vegan integrity of the recipe.',
    faqs: [
        {
          "question": "Can I use another sweetener instead of maple syrup?",
          "answer": "Yes, you can use agave syrup, date syrup, or any other liquid sweetener of your choice."
        },
        {
          "question": "How can I make this pudding thicker?",
          "answer": "If you want a thicker pudding, increase the amount of cornstarch slightly, or let it simmer longer while whisking."
        }
      ],
    tips: ["For a richer flavor, add a pinch of espresso powder to the mixture.","Top with fresh fruit or nuts for added texture and flavor."],
    variations: ["Add a tablespoon of peanut butter for a chocolate-peanut butter pudding.","Incorporate a tablespoon of chia seeds for added nutrition and texture."],
    storage: 'Store the pudding in an airtight container in the refrigerator for up to 5 days. Make sure to cover it well to avoid absorbing any other odors.',
  },
];
