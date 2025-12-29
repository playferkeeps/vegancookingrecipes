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
];

