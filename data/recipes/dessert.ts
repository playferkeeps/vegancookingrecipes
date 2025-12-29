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
];
