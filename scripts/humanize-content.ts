/**
 * Humanize Content Script
 * 
 * This script rewrites recipe content to sound more authentic and personal,
 * written in Noah's voice, to address AI-generated content concerns.
 * 
 * Usage:
 *   npm run humanize-content
 *   npm run humanize-content -- --dry-run  # Preview changes without saving
 *   npm run humanize-content -- --limit 10  # Process only 10 recipes
 */

import 'dotenv/config';
import OpenAI from 'openai';
import { PrismaClient } from '@prisma/client';
import { getDatabaseUrl } from '../lib/db-connection';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured. Set it as an environment variable.');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

function getPrismaClient() {
  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is required to use Prisma Client');
  }

  const pool = new Pool({ 
    connectionString: databaseUrl,
    max: 1,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 3000,
    statement_timeout: 0,
    allowExitOnIdle: true,
  });
  
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

/**
 * Rewrite content to sound more authentic and personal
 */
async function humanizeContent(
  openai: OpenAI,
  originalDescription: string,
  originalPrologue: string,
  recipeTitle: string,
  category: string,
  tips: string[],
  variations: string[],
  ingredientNotes: string | null
): Promise<{
  description: string;
  prologue: string;
  tips: string[];
  variations: string[];
  ingredientNotes: string;
}> {
  const prompt = `You are Noah, a badass vegan cook who thrives outside the box. You're experimental, fearless, and unafraid to break the rules. Your food philosophy is: break the rules, own your kitchen, and be comfortable outside the box. You push boundaries, experiment with unexpected flavor combinations, and create plant-based dishes that make people stop and say "wait, this is vegan?"

Rewrite the following recipe content to sound authentic, personal, and written by a real person (Noah) who has actually made this recipe. Make it sound like you're sharing a recipe you've tested and love, not like generic marketing copy.

RECIPE: ${recipeTitle}
CATEGORY: ${category}

CURRENT DESCRIPTION:
${originalDescription}

CURRENT PROLOGUE:
${originalPrologue}

CURRENT TIPS:
${tips.length > 0 ? tips.join('\n') : 'None'}

CURRENT VARIATIONS:
${variations.length > 0 ? variations.join('\n') : 'None'}

CURRENT INGREDIENT NOTES:
${ingredientNotes || 'None'}

Rewrite ALL of this content following these guidelines:

1. **Description (1-2 sentences)**: Make it personal and specific. Mention something unique about this recipe or why you love it. Avoid generic phrases like "absolutely delicious" or "perfect for". Instead, be specific: "I make these every Sunday" or "This is my go-to when I need comfort food."

2. **Prologue (3-4 sentences)**: Write like you're telling a friend about this recipe. Include:
   - A personal anecdote or memory (e.g., "I first made this when...")
   - A specific tip you discovered (e.g., "I found that using chilled coconut oil works best")
   - Why this recipe matters to you
   - Avoid mentioning "vegancooking.recipes" unless it feels natural

3. **Tips**: Make them specific and personal. Instead of "Store in an airtight container", say "I keep mine in a glass jar on the counter - they stay fresh for days." Each tip should sound like something you learned from experience.

4. **Variations**: Make them personal suggestions. Instead of "Try adding chocolate chips", say "Sometimes I'll throw in some dark chocolate chunks if I'm feeling fancy" or "My friend Sarah loves adding walnuts to hers."

5. **Ingredient Notes**: Write like you're explaining to a friend. Be conversational. Instead of "This ingredient can be substituted", say "If you don't have this, I've used X instead and it works great."

6. **Voice**: Write in first person ("I", "my", "me"). Be warm, friendly, and slightly casual. Use contractions. Sound like a real person, not a marketing department.

7. **Avoid**: 
   - Generic marketing phrases ("absolutely delicious", "perfect for", "sure to become a favorite")
   - Overly formal language
   - Repetitive patterns
   - SEO keyword stuffing
   - Phrases that sound like they were written by AI

Return a JSON object with this structure:
{
  "description": "Your rewritten description (1-2 sentences, personal and specific)",
  "prologue": "Your rewritten prologue (3-4 sentences, personal and conversational)",
  "tips": ["Personal tip 1", "Personal tip 2", "Personal tip 3"],
  "variations": ["Personal variation 1", "Personal variation 2"],
  "ingredientNotes": "Your rewritten ingredient notes (conversational and helpful)"
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are Noah, a badass vegan cook who writes recipes in a bold, experimental style. You write like you\'re sharing your wildest kitchen experiments with friends, pushing boundaries and breaking rules. Always return valid JSON.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.8, // Higher temperature for more creative, personal voice
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    const result = JSON.parse(content);
    return {
      description: result.description || originalDescription,
      prologue: result.prologue || originalPrologue,
      tips: Array.isArray(result.tips) ? result.tips : tips,
      variations: Array.isArray(result.variations) ? result.variations : variations,
      ingredientNotes: result.ingredientNotes || ingredientNotes || '',
    };
  } catch (error: any) {
    console.error(`   ❌ Error rewriting content: ${error.message}`);
    // Return original content on error
    return {
      description: originalDescription,
      prologue: originalPrologue,
      tips,
      variations,
      ingredientNotes: ingredientNotes || '',
    };
  }
}

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');
  const limitArg = args.find(arg => arg.startsWith('--limit='));
  const limit = limitArg ? parseInt(limitArg.split('=')[1], 10) : null;

  console.log('\n🌱 Humanize Content Script');
  console.log('==========================\n');
  
  if (isDryRun) {
    console.log('⚠️  DRY RUN MODE - No changes will be saved\n');
  }

  const openai = getOpenAIClient();
  const prisma = getPrismaClient();

  try {
    // Get all recipes
    const recipes = await prisma.recipe.findMany({
      include: {
        categories: true,
      },
      orderBy: {
        datePublished: 'desc',
      },
      take: limit || undefined,
    });

    console.log(`📚 Found ${recipes.length} recipe(s) to process\n`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      const category = recipe.categories[0]?.category || 'savory';
      
      console.log(`[${i + 1}/${recipes.length}] Processing: "${recipe.title}"`);
      
      try {
        // Check if content needs humanizing (look for AI-sounding phrases)
        const aiPhrases = [
          'absolutely delicious',
          'perfect for',
          'sure to become',
          'made completely vegan',
          'delicious vegan',
          'discover the perfect',
        ];
        
        const hasAIPhrases = 
          aiPhrases.some(phrase => 
            recipe.description.toLowerCase().includes(phrase) ||
            recipe.prologue.toLowerCase().includes(phrase)
          );

        if (!hasAIPhrases && !isDryRun) {
          console.log(`   ⏭️  Skipping - content already sounds authentic`);
          skipCount++;
          continue;
        }

        // Rewrite content
        const humanized = await humanizeContent(
          openai,
          recipe.description,
          recipe.prologue,
          recipe.title,
          category,
          recipe.tips || [],
          recipe.variations || [],
          recipe.ingredientNotes
        );

        // Show preview
        console.log(`   📝 New description: ${humanized.description.substring(0, 80)}...`);
        console.log(`   📝 New prologue: ${humanized.prologue.substring(0, 80)}...`);

        if (!isDryRun) {
          // Update recipe in database
          await prisma.recipe.update({
            where: { id: recipe.id },
            data: {
              description: humanized.description,
              prologue: humanized.prologue,
              tips: humanized.tips,
              variations: humanized.variations,
              ingredientNotes: humanized.ingredientNotes,
              author: 'Noah', // Update author to Noah for personal touch
              dateModified: new Date(),
            },
          });

          console.log(`   ✅ Updated successfully`);
          successCount++;
        } else {
          console.log(`   ✅ Would update (dry run)`);
          successCount++;
        }

        // Add delay to avoid rate limits
        if (i < recipes.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
        }
      } catch (error: any) {
        console.error(`   ❌ Error: ${error.message}`);
        errorCount++;
      }

      console.log(''); // Empty line for readability
    }

    console.log('\n✨ Processing complete!');
    console.log(`✅ Successfully processed: ${successCount} recipe(s)`);
    if (skipCount > 0) {
      console.log(`⏭️  Skipped (already authentic): ${skipCount} recipe(s)`);
    }
    if (errorCount > 0) {
      console.log(`❌ Errors: ${errorCount} recipe(s)`);
    }
    
    if (isDryRun) {
      console.log('\n💡 Run without --dry-run to apply changes');
    }
  } catch (error: any) {
    console.error('❌ Script failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();

