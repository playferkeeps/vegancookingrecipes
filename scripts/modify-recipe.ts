/**
 * Script to modify recipes using natural language instructions
 * 
 * Usage:
 *   npm run modify-recipe -- --slug "recipe-slug" --instructions "make it spicier"
 *   npm run modify-recipe -- --title "Recipe Title" --instructions "add more vegetables and reduce cooking time by 10 minutes"
 *   npm run modify-recipe -- --slug "recipe-slug" --instructions "make it gluten-free" --dry-run
 * 
 * The script will:
 * 1. Load the recipe from the database
 * 2. Use AI to understand your instructions
 * 3. Apply the modifications
 * 4. Save the updated recipe back to the database
 */

import 'dotenv/config';
import OpenAI from 'openai';
import { Recipe } from '../types/recipe';
import { getRecipeBySlugAsync } from '../data/recipes/helpers';

// Use the singleton Prisma client from lib/prisma
function getPrismaClient() {
  const { prisma } = require('../lib/prisma');
  if (!prisma) {
    throw new Error('Prisma Client is not initialized. Check DATABASE_URL configuration.');
  }
  return prisma;
}

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured. Set it as an environment variable.');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

/**
 * Find recipe by slug or title
 */
async function findRecipe(identifier: string, bySlug: boolean): Promise<Recipe | null> {
  if (bySlug) {
    return await getRecipeBySlugAsync(identifier) || null;
  } else {
    // Search by title
    const prisma = getPrismaClient();
    const recipe = await prisma.recipe.findFirst({
      where: {
        title: {
          contains: identifier,
          mode: 'insensitive',
        },
      },
      include: {
        ingredients: { orderBy: { orderIndex: 'asc' } },
        instructions: { orderBy: { step: 'asc' } },
        categories: true,
        tags: true,
        faqs: { orderBy: { orderIndex: 'asc' } },
        nutritionInfo: true,
        veganTypes: true,
      },
    });

    if (!recipe) {
      return null;
    }

    // Convert Prisma format to Recipe format
    return {
      id: recipe.id,
      title: recipe.title,
      slug: recipe.slug,
      description: recipe.description,
      prologue: recipe.prologue,
      image: recipe.image,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      totalTime: recipe.totalTime,
      servings: recipe.servings,
      difficulty: recipe.difficulty as 'easy' | 'medium' | 'hard',
      author: recipe.author,
      datePublished: recipe.datePublished.toISOString(),
      dateModified: recipe.dateModified?.toISOString(),
      category: recipe.categories.map((c: any) => c.category as any),
      veganType: recipe.veganTypes.map((v: any) => v.veganType as any),
      ingredients: recipe.ingredients.map((ing: any) => ({
        name: ing.name,
        amount: ing.amount,
        unit: ing.unit || undefined,
        notes: ing.notes || undefined,
      })),
      instructions: recipe.instructions.map((inst: any) => ({
        step: inst.step,
        text: inst.text,
        image: inst.image || undefined,
      })),
      tags: recipe.tags.map((t: any) => t.tag),
      faqs: recipe.faqs.map((faq: any) => ({
        question: faq.question,
        answer: faq.answer,
      })),
      ingredientNotes: recipe.ingredientNotes || undefined,
      tips: recipe.tips || [],
      variations: recipe.variations || [],
      storage: recipe.storage || undefined,
      nutritionInfo: recipe.nutritionInfo ? {
        calories: recipe.nutritionInfo.calories || 0,
        protein: recipe.nutritionInfo.protein || undefined,
        carbs: recipe.nutritionInfo.carbs || undefined,
        fat: recipe.nutritionInfo.fat || undefined,
        fiber: recipe.nutritionInfo.fiber || undefined,
        sugar: recipe.nutritionInfo.sugar || undefined,
      } : undefined,
    };
  }
}

/**
 * Use AI to modify the recipe based on natural language instructions
 */
async function modifyRecipeWithAI(
  openai: OpenAI,
  recipe: Recipe,
  instructions: string
): Promise<Recipe> {
  const prompt = `You are a recipe modification assistant. A user wants to modify a vegan recipe based on their instructions.

CURRENT RECIPE:
Title: ${recipe.title}
Description: ${recipe.description}
Prologue: ${recipe.prologue || 'N/A'}

Prep Time: ${recipe.prepTime} minutes
Cook Time: ${recipe.cookTime} minutes
Total Time: ${recipe.totalTime} minutes
Servings: ${recipe.servings}
Difficulty: ${recipe.difficulty}

Categories: ${recipe.category.join(', ')}
Tags: ${recipe.tags.join(', ')}

Ingredients:
${recipe.ingredients.map((ing, i) => `${i + 1}. ${ing.amount} ${ing.unit || ''} ${ing.name}${ing.notes ? ` (${ing.notes})` : ''}`).join('\n')}

Instructions:
${recipe.instructions.map((inst, i) => `${i + 1}. ${inst.text}`).join('\n\n')}

${recipe.ingredientNotes ? `Ingredient Notes: ${recipe.ingredientNotes}` : ''}
${recipe.tips.length > 0 ? `Tips: ${recipe.tips.join(', ')}` : ''}
${recipe.variations.length > 0 ? `Variations: ${recipe.variations.join(', ')}` : ''}
${recipe.storage ? `Storage: ${recipe.storage}` : ''}

USER INSTRUCTIONS:
"${instructions}"

Your task is to modify the recipe according to the user's instructions. You must:
1. Understand what changes the user wants (e.g., "make it spicier" = add spicy ingredients, "reduce cooking time" = adjust cookTime, "add more vegetables" = add vegetable ingredients, "add tip about X" = add to tips array, "add note about Y" = add to ingredientNotes)
2. Apply the changes while maintaining the recipe's integrity and vegan nature
3. Update relevant fields (ingredients, instructions, times, servings, tips, ingredientNotes, etc.) as needed
4. Keep the recipe's core identity and structure
5. Ensure all changes are logical and make sense together
6. Update prepTime, cookTime, and totalTime if cooking methods or complexity change
7. Update nutrition info if ingredients change significantly
8. If user asks to "add" information to tips or ingredientNotes, you MUST include the new information in addition to existing content (unless they ask to replace it)
9. If user asks to add ingredients, you MUST include the new ingredients in the ingredients array

Return the complete modified recipe as a JSON object with this exact structure:
{
  "title": "Recipe title (may be modified if instructions require it)",
  "description": "Updated description if needed",
  "prologue": "Updated prologue if needed",
  "prepTime": number,
  "cookTime": number,
  "totalTime": number,
  "servings": number,
  "difficulty": "easy" | "medium" | "hard",
  "ingredients": [
    {
      "name": "ingredient name",
      "amount": "amount as string (e.g., '1', '2 cups', '1/2')",
      "unit": "unit (e.g., 'cup', 'tbsp', 'tsp', or null if no unit)",
      "notes": "optional notes"
    }
  ],
  "instructions": [
    {
      "step": 1,
      "text": "instruction text"
    }
  ],
  "ingredientNotes": "updated ingredient notes or null",
  "tips": ["tip 1", "tip 2"],
  "variations": ["variation 1", "variation 2"],
  "storage": "storage instructions or null",
  "category": ["category1", "category2"],
  "tags": ["tag1", "tag2"]
}

IMPORTANT:
- Keep the recipe ID, slug, image, author, and datePublished unchanged
- If the user asks to "add" information to tips, ingredientNotes, or ingredients, you MUST include the new information (add to existing, don't replace unless explicitly asked)
- If the user asks to modify or add something, you MUST update the relevant field(s) - don't keep them the same
- Only keep fields unchanged if the user's instructions don't mention them at all
- Ensure all ingredients and instructions are vegan
- Make sure the recipe still makes sense after modifications
- When adding to ingredientNotes, append the new information to the existing notes (unless user asks to replace)`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful recipe modification assistant. You modify vegan recipes based on user instructions while maintaining their integrity. Always return valid JSON.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    let modifiedData;
    try {
      modifiedData = JSON.parse(content);
    } catch (e) {
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
      if (jsonMatch) {
        modifiedData = JSON.parse(jsonMatch[1]);
      } else {
        throw new Error('Failed to parse modified recipe JSON');
      }
    }

    // Merge modifications with original recipe (preserve unchanged fields)
    const modifiedRecipe: Recipe = {
      ...recipe,
      title: modifiedData.title || recipe.title,
      description: modifiedData.description || recipe.description,
      prologue: modifiedData.prologue || recipe.prologue,
      prepTime: modifiedData.prepTime ?? recipe.prepTime,
      cookTime: modifiedData.cookTime ?? recipe.cookTime,
      totalTime: modifiedData.totalTime ?? recipe.totalTime,
      servings: modifiedData.servings ?? recipe.servings,
      difficulty: modifiedData.difficulty || recipe.difficulty,
      ingredients: Array.isArray(modifiedData.ingredients) && modifiedData.ingredients.length > 0 ? modifiedData.ingredients : recipe.ingredients,
      instructions: Array.isArray(modifiedData.instructions) && modifiedData.instructions.length > 0 ? modifiedData.instructions : recipe.instructions,
      ingredientNotes: modifiedData.ingredientNotes !== undefined ? modifiedData.ingredientNotes : recipe.ingredientNotes,
      tips: Array.isArray(modifiedData.tips) ? modifiedData.tips : recipe.tips,
      variations: modifiedData.variations || recipe.variations,
      storage: modifiedData.storage !== undefined ? modifiedData.storage : recipe.storage,
      category: modifiedData.category || recipe.category,
      tags: modifiedData.tags || recipe.tags,
      dateModified: new Date().toISOString(),
    };

    return modifiedRecipe;
  } catch (error: any) {
    throw new Error(`Failed to modify recipe with AI: ${error.message}`);
  }
}

/**
 * Save modified recipe to database
 */
async function saveModifiedRecipe(recipe: Recipe, isDryRun: boolean): Promise<void> {
  if (isDryRun) {
    console.log('\n📋 DRY RUN - Recipe would be updated with these changes:');
    console.log(JSON.stringify(recipe, null, 2));
    return;
  }

  const prisma = getPrismaClient();

  // Update recipe
  await prisma.recipe.update({
    where: { slug: recipe.slug },
    data: {
      title: recipe.title,
      description: recipe.description,
      prologue: recipe.prologue,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      totalTime: recipe.totalTime,
      servings: recipe.servings,
      difficulty: recipe.difficulty,
      dateModified: new Date(),
      ingredientNotes: recipe.ingredientNotes,
      tips: recipe.tips,
      variations: recipe.variations,
      storage: recipe.storage,
    },
  });

  // Update categories
  await prisma.recipeCategory.deleteMany({
    where: { recipeId: recipe.id },
  });
  await prisma.recipeCategory.createMany({
    data: recipe.category.map(cat => ({
      recipeId: recipe.id,
      category: cat,
    })),
  });

  // Update tags
  await prisma.recipeTag.deleteMany({
    where: { recipeId: recipe.id },
  });
  await prisma.recipeTag.createMany({
    data: recipe.tags.map(tag => ({
      recipeId: recipe.id,
      tag: tag,
    })),
  });

  // Update ingredients
  await prisma.ingredient.deleteMany({
    where: { recipeId: recipe.id },
  });
  await prisma.ingredient.createMany({
    data: recipe.ingredients.map((ing, index) => ({
      recipeId: recipe.id,
      name: ing.name,
      amount: ing.amount,
      unit: ing.unit || null,
      notes: ing.notes || null,
      orderIndex: index,
    })),
  });

  // Update instructions
  await prisma.instruction.deleteMany({
    where: { recipeId: recipe.id },
  });
  await prisma.instruction.createMany({
    data: recipe.instructions.map(inst => ({
      recipeId: recipe.id,
      step: inst.step,
      text: inst.text,
      image: inst.image || null,
    })),
  });

  // Update FAQs
  await prisma.fAQ.deleteMany({
    where: { recipeId: recipe.id },
  });
  if (recipe.faqs && recipe.faqs.length > 0) {
    await prisma.fAQ.createMany({
      data: recipe.faqs.map((faq, index) => ({
        recipeId: recipe.id,
        question: faq.question,
        answer: faq.answer,
        orderIndex: index,
      })),
    });
  }

  console.log(`✅ Recipe "${recipe.title}" updated successfully!`);
}

async function main() {
  const args = process.argv.slice(2);

  let slug: string | undefined;
  let title: string | undefined;
  let instructions: string | undefined;
  let isDryRun = false;

  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--slug' && args[i + 1]) {
      slug = args[i + 1].trim();
      i++;
    } else if (args[i] === '--title' && args[i + 1]) {
      title = args[i + 1].trim();
      i++;
    } else if (args[i] === '--instructions' && args[i + 1]) {
      instructions = args[i + 1].trim();
      i++;
    } else if (args[i] === '--dry-run') {
      isDryRun = true;
    }
  }

  if (!slug && !title) {
    console.error('❌ Error: Must provide either --slug or --title');
    console.error('\nUsage:');
    console.error('  npm run modify-recipe -- --slug "recipe-slug" --instructions "make it spicier"');
    console.error('  npm run modify-recipe -- --title "Recipe Title" --instructions "add more vegetables"');
    console.error('  npm run modify-recipe -- --slug "recipe-slug" --instructions "reduce cooking time by 10 minutes" --dry-run');
    process.exit(1);
  }

  if (!instructions) {
    console.error('❌ Error: Must provide --instructions');
    console.error('\nUsage:');
    console.error('  npm run modify-recipe -- --slug "recipe-slug" --instructions "your modification instructions"');
    process.exit(1);
  }

  console.log('\n🔧 Recipe Modifier');
  console.log('==================\n');
  if (slug) {
    console.log(`📝 Recipe Slug: ${slug}`);
  } else {
    console.log(`📝 Recipe Title: ${title}`);
  }
  console.log(`💬 Instructions: ${instructions}`);
  if (isDryRun) {
    console.log('⚠️  DRY RUN MODE - No changes will be saved\n');
  }
  console.log('');

  try {
    const prisma = getPrismaClient();
    const openai = getOpenAIClient();

    // Find recipe
    console.log('🔍 Loading recipe...');
    const recipe = await findRecipe(slug || title!, !!slug);
    
    if (!recipe) {
      console.error(`❌ Recipe not found: ${slug || title}`);
      process.exit(1);
    }

    console.log(`✅ Found recipe: "${recipe.title}"`);
    console.log('');

    // Modify recipe with AI
    console.log('🤖 Processing modifications with AI...');
    const modifiedRecipe = await modifyRecipeWithAI(openai, recipe, instructions);
    console.log('✅ Modifications generated');
    console.log('');

    // Show summary of changes
    console.log('📊 Summary of Changes:');
    let hasChanges = false;
    if (modifiedRecipe.title !== recipe.title) {
      console.log(`   Title: "${recipe.title}" → "${modifiedRecipe.title}"`);
      hasChanges = true;
    }
    if (modifiedRecipe.description !== recipe.description) {
      console.log(`   Description: Updated`);
      hasChanges = true;
    }
    if (modifiedRecipe.prologue !== recipe.prologue) {
      console.log(`   Prologue: Updated`);
      hasChanges = true;
    }
    if (modifiedRecipe.prepTime !== recipe.prepTime) {
      console.log(`   Prep Time: ${recipe.prepTime}min → ${modifiedRecipe.prepTime}min`);
      hasChanges = true;
    }
    if (modifiedRecipe.cookTime !== recipe.cookTime) {
      console.log(`   Cook Time: ${recipe.cookTime}min → ${modifiedRecipe.cookTime}min`);
      hasChanges = true;
    }
    if (modifiedRecipe.totalTime !== recipe.totalTime) {
      console.log(`   Total Time: ${recipe.totalTime}min → ${modifiedRecipe.totalTime}min`);
      hasChanges = true;
    }
    if (modifiedRecipe.servings !== recipe.servings) {
      console.log(`   Servings: ${recipe.servings} → ${modifiedRecipe.servings}`);
      hasChanges = true;
    }
    if (modifiedRecipe.difficulty !== recipe.difficulty) {
      console.log(`   Difficulty: ${recipe.difficulty} → ${modifiedRecipe.difficulty}`);
      hasChanges = true;
    }
    if (JSON.stringify(modifiedRecipe.ingredients) !== JSON.stringify(recipe.ingredients)) {
      const addedIngredients = modifiedRecipe.ingredients.filter(mi => 
        !recipe.ingredients.some(ri => ri.name.toLowerCase() === mi.name.toLowerCase())
      );
      const removedIngredients = recipe.ingredients.filter(ri => 
        !modifiedRecipe.ingredients.some(mi => mi.name.toLowerCase() === ri.name.toLowerCase())
      );
      if (addedIngredients.length > 0) {
        console.log(`   Ingredients Added: ${addedIngredients.map(i => i.name).join(', ')}`);
      }
      if (removedIngredients.length > 0) {
        console.log(`   Ingredients Removed: ${removedIngredients.map(i => i.name).join(', ')}`);
      }
      if (addedIngredients.length === 0 && removedIngredients.length === 0) {
        console.log(`   Ingredients: Modified (${modifiedRecipe.ingredients.length} total)`);
      }
      hasChanges = true;
    }
    if (JSON.stringify(modifiedRecipe.instructions) !== JSON.stringify(recipe.instructions)) {
      console.log(`   Instructions: Updated (${modifiedRecipe.instructions.length} steps)`);
      hasChanges = true;
    }
    if (modifiedRecipe.ingredientNotes !== recipe.ingredientNotes) {
      const originalPreview = recipe.ingredientNotes?.substring(0, 60) || 'None';
      const modifiedPreview = modifiedRecipe.ingredientNotes?.substring(0, 60) || 'None';
      console.log(`   Ingredient Notes: Updated`);
      if (recipe.ingredientNotes && modifiedRecipe.ingredientNotes) {
        const addedText = modifiedRecipe.ingredientNotes.length > recipe.ingredientNotes.length 
          ? modifiedRecipe.ingredientNotes.substring(recipe.ingredientNotes.length).substring(0, 60)
          : null;
        if (addedText) {
          console.log(`      Added: "${addedText}..."`);
        }
      }
      hasChanges = true;
    }
    if (JSON.stringify(modifiedRecipe.tips) !== JSON.stringify(recipe.tips)) {
      const addedTips = modifiedRecipe.tips?.filter(mt => 
        !recipe.tips?.some(rt => rt === mt)
      ) || [];
      if (addedTips.length > 0) {
        console.log(`   Tips Added: ${addedTips.length}`);
        addedTips.forEach(tip => console.log(`      - "${tip.substring(0, 60)}${tip.length > 60 ? '...' : ''}"`));
      } else {
        console.log(`   Tips: Updated (${modifiedRecipe.tips?.length || 0} total)`);
      }
      hasChanges = true;
    }
    if (JSON.stringify(modifiedRecipe.variations) !== JSON.stringify(recipe.variations)) {
      console.log(`   Variations: Updated`);
      hasChanges = true;
    }
    if (modifiedRecipe.storage !== recipe.storage) {
      console.log(`   Storage: Updated`);
      hasChanges = true;
    }
    if (JSON.stringify(modifiedRecipe.category) !== JSON.stringify(recipe.category)) {
      console.log(`   Categories: ${recipe.category.join(', ')} → ${modifiedRecipe.category.join(', ')}`);
      hasChanges = true;
    }
    if (JSON.stringify(modifiedRecipe.tags) !== JSON.stringify(recipe.tags)) {
      console.log(`   Tags: Updated`);
      hasChanges = true;
    }
    if (!hasChanges) {
      console.log('   (No changes detected - this may indicate the recipe already matches the instructions)');
    }
    console.log('');

    // Save modified recipe
    console.log('💾 Saving modified recipe...');
    await saveModifiedRecipe(modifiedRecipe, isDryRun);
    
    if (!isDryRun) {
      console.log('\n✅ Recipe modification complete!');
    } else {
      console.log('\n✅ Dry run complete! Use without --dry-run to apply changes.');
    }
  } catch (error: any) {
    console.error(`❌ Error: ${error.message}`);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  } finally {
    const prisma = getPrismaClient();
    if (prisma) {
      await prisma.$disconnect();
    }
  }
}

if (require.main === module) {
  main();
}

export { main as modifyRecipe };
