import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Recipe, Ingredient, Instruction } from '@/types/recipe';
import { generateSlug } from '@/data/recipeHelpers';
import { getPrismaClient } from '@/lib/prisma';
import { randomUUID } from 'crypto';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Fetch HTML content from a URL
 */
async function fetchRecipeContent(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    return html;
  } catch (error: any) {
    throw new Error(`Error fetching recipe URL: ${error.message}`);
  }
}

/**
 * Extract text content from HTML (remove scripts, styles, etc.)
 */
function extractTextFromHTML(html: string): string {
  // Remove script and style tags
  let text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Extract text from common recipe elements
  const recipeSelectors = [
    /<h1[^>]*>(.*?)<\/h1>/gi,
    /<h2[^>]*>(.*?)<\/h2>/gi,
    /<h3[^>]*>(.*?)<\/h3>/gi,
    /<[^>]*itemprop=["']recipeIngredient["'][^>]*>(.*?)<\/[^>]+>/gi,
    /<[^>]*itemprop=["']recipeInstructions["'][^>]*>(.*?)<\/[^>]+>/gi,
    /<[^>]*class=["'][^"']*ingredient[^"']*["'][^>]*>(.*?)<\/[^>]+>/gi,
    /<[^>]*class=["'][^"']*instruction[^"']*["'][^>]*>(.*?)<\/[^>]+>/gi,
    /<[^>]*class=["'][^"']*step[^"']*["'][^>]*>(.*?)<\/[^>]+>/gi,
    /<li[^>]*>(.*?)<\/li>/gi,
    /<p[^>]*>(.*?)<\/p>/gi,
  ];
  
  let extractedText = '';
  for (const regex of recipeSelectors) {
    const matches = html.matchAll(regex);
    for (const match of matches) {
      if (match[1]) {
        const cleanText = match[1].replace(/<[^>]+>/g, ' ').trim();
        if (cleanText.length > 5) {
          extractedText += cleanText + '\n';
        }
      }
    }
  }
  
  // Fallback: extract all text if no structured data found
  if (extractedText.length < 100) {
    text = text.replace(/<[^>]+>/g, ' ');
    text = text.replace(/\s+/g, ' ').trim();
    return text;
  }
  
  return extractedText;
}

/**
 * Check if a recipe with similar title already exists
 */
async function checkRecipeExists(title: string): Promise<{ exists: boolean; slug?: string }> {
  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      return { exists: false };
    }

    // Normalize title for comparison
    const normalizedTitle = title.toLowerCase().trim();
    
    // Check for exact match
    const exactMatch = await prisma.recipe.findFirst({
      where: {
        title: {
          equals: normalizedTitle,
          mode: 'insensitive',
        },
      },
      select: { slug: true },
    });

    if (exactMatch) {
      return { exists: true, slug: exactMatch.slug };
    }

    // Check for similar titles (fuzzy match - titles that contain key words)
    const titleWords = normalizedTitle.split(/\s+/).filter(w => w.length > 3);
    if (titleWords.length > 0) {
      const similarMatch = await prisma.recipe.findFirst({
        where: {
          title: {
            contains: titleWords[0],
            mode: 'insensitive',
          },
        },
        select: { slug: true, title: true },
      });

      if (similarMatch) {
        // Check if titles are very similar (80% match)
        const similarity = calculateSimilarity(normalizedTitle, similarMatch.title.toLowerCase());
        if (similarity > 0.8) {
          return { exists: true, slug: similarMatch.slug };
        }
      }
    }

    return { exists: false };
  } catch (error) {
    // If database check fails, assume it doesn't exist
    console.error('Error checking recipe existence:', error);
    return { exists: false };
  }
}

/**
 * Simple similarity calculation (Jaccard similarity)
 */
function calculateSimilarity(str1: string, str2: string): number {
  const words1 = new Set(str1.split(/\s+/));
  const words2 = new Set(str2.split(/\s+/));
  const intersection = new Set([...words1].filter(x => words2.has(x)));
  const union = new Set([...words1, ...words2]);
  return intersection.size / union.size;
}

/**
 * Save recipe to database
 */
async function saveRecipeToDatabase(recipe: Recipe): Promise<void> {
  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      throw new Error('Database not available');
    }

    // Ensure slug is unique
    let slug = recipe.slug;
    let counter = 1;
    while (await prisma.recipe.findUnique({ where: { slug } })) {
      slug = `${recipe.slug}-${counter}`;
      counter++;
    }
    recipe.slug = slug;

    // Create recipe with all relations
    await prisma.recipe.create({
      data: {
        id: recipe.id,
        title: recipe.title,
        slug: recipe.slug,
        description: recipe.description,
        prologue: recipe.prologue,
        image: recipe.image || '/img/vcr-logo-lg.png',
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        totalTime: recipe.totalTime,
        servings: recipe.servings,
        difficulty: recipe.difficulty,
        author: recipe.author,
        datePublished: new Date(recipe.datePublished),
        dateModified: recipe.dateModified ? new Date(recipe.dateModified) : undefined,
        ingredientNotes: recipe.ingredientNotes,
        tips: recipe.tips || [],
        variations: recipe.variations || [],
        storage: recipe.storage,
        originalUrl: recipe.originalUrl || null,
        // Categories
        categories: {
          create: recipe.category.map((cat) => ({ category: cat })),
        },
        // Vegan types
        veganTypes: {
          create: recipe.veganType.map((vt) => ({ veganType: vt })),
        },
        // Ingredients
        ingredients: {
          create: recipe.ingredients.map((ing, index) => ({
            name: ing.name,
            amount: ing.amount,
            unit: ing.unit || null,
            notes: ing.notes || null,
            orderIndex: index,
          })),
        },
        // Instructions
        instructions: {
          create: recipe.instructions.map((inst) => ({
            step: inst.step,
            text: inst.text,
            image: inst.image || null,
          })),
        },
        // Tags
        tags: {
          create: recipe.tags.map((tag) => ({ tag })),
        },
      },
    });
  } catch (error: any) {
    throw new Error(`Failed to save recipe: ${error.message}`);
  }
}

/**
 * Extract and veganize recipe in one API call (cost-optimized)
 */
async function extractAndVeganizeRecipe(html: string, url: string): Promise<Recipe> {
  // Extract text content from HTML (much smaller than full HTML)
  const textContent = extractTextFromHTML(html);
  
  // Limit to 15k characters to reduce token usage
  const limitedText = textContent.length > 15000 
    ? textContent.substring(0, 15000) + '...' 
    : textContent;

  const prompt = `Extract recipe from this content and create a completely original vegan version.

URL: ${url}

Content:
${limitedText}

CRITICAL COPYRIGHT COMPLIANCE REQUIREMENTS:
- You must REWRITE all text content in completely original wording. Do NOT copy or closely paraphrase the original text.
- Instructions must be completely rewritten with different phrasing, sentence structure, and word choice while maintaining the same cooking steps.
- Description and prologue must be entirely original, not copied from the source.
- Use your own creative voice and cooking expertise to describe the process.
- The recipe structure and steps can be similar, but every word must be your own original writing.

Extract the recipe concept, then create a completely original vegan version by:
1. Replacing non-vegan ingredients with plant-based alternatives
2. Completely rewriting all instructions in your own original words
3. Writing an original description and prologue (150-200 words) about the veganized recipe
4. Creating original tips and notes based on your vegan cooking expertise

Return JSON:

{
  "title": "Vegan [Recipe Title]",
  "description": "Original brief vegan description (completely rewritten, not copied)",
  "prologue": "150-200 word original intro about veganizing this recipe (entirely original text)",
  "prepTime": number,
  "cookTime": number,
  "totalTime": number,
  "servings": number,
  "difficulty": "easy"|"medium"|"hard",
  "category": ["category1"],
  "tags": ["tag1", "tag2"],
  "ingredients": [{"name": "vegan ingredient", "amount": "amount as string (e.g., '4', '1/2', '2 cups')", "unit": "unit", "notes": "substitution note"}],
  "instructions": [{"step": 1, "text": "completely original instruction text (rewritten, not copied)"}],
  "ingredientNotes": "Original notes about key substitutions (your own words)",
  "tips": ["original tip 1", "original tip 2"],
  "storage": "original storage info"
}

Use Noah's badass, experimental voice. He's a fearless vegan cook who thrives outside the box and isn't afraid to break the rules. All text must be completely original to avoid copyright issues.`;

  try {
    // Use gpt-4o-mini which is ~10x cheaper than gpt-4o
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are Noah, a vegan cook and recipe developer. When veganizing recipes, you must completely rewrite all text content in your own original words to ensure copyright compliance. Never copy or closely paraphrase original recipe text. Use your creative expertise to describe cooking processes in entirely new wording. Return JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.8, // Higher temperature for more creative/original rewording
      max_tokens: 2500, // Increased to allow for more detailed original descriptions
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    let veganizedData;
    try {
      veganizedData = JSON.parse(content);
    } catch (e) {
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
      if (jsonMatch) {
        veganizedData = JSON.parse(jsonMatch[1]);
      } else {
        throw new Error('Failed to parse recipe JSON');
      }
    }

    // Generate proper slug and ID
    const title = veganizedData.title || 'Vegan Recipe';
    const baseSlug = generateSlug(title);
    
    // Use placeholder image path (can be replaced with generated image later)
    // Using the logo as a placeholder until an image is generated
    const placeholderImage = '/img/vcr-logo-lg.png';
    
    // Convert to Recipe format
    const recipe: Recipe = {
      id: randomUUID(),
      title: title,
      slug: baseSlug,
      description: veganizedData.description || '',
      prologue: veganizedData.prologue || '',
      image: placeholderImage,
      prepTime: veganizedData.prepTime || 0,
      cookTime: veganizedData.cookTime || 0,
      totalTime: veganizedData.totalTime || (veganizedData.prepTime || 0) + (veganizedData.cookTime || 0),
      servings: veganizedData.servings || 4,
      difficulty: (veganizedData.difficulty as 'easy' | 'medium' | 'hard') || 'medium',
      category: veganizedData.category || ['savory'],
      veganType: [],
      ingredients: (veganizedData.ingredients || []).map((ing: any, index: number) => ({
        name: ing.name || '',
        amount: String(ing.amount || ''), // Ensure amount is always a string
        unit: ing.unit || undefined,
        notes: ing.notes || undefined,
      })) as Ingredient[],
      instructions: (veganizedData.instructions || []).map((inst: any, index: number) => ({
        step: inst.step || index + 1,
        text: inst.text || '',
      })) as Instruction[],
      tags: veganizedData.tags || [],
      author: 'Noah',
      datePublished: new Date().toISOString(),
      ingredientNotes: veganizedData.ingredientNotes || undefined,
      tips: veganizedData.tips || [],
      variations: [],
      storage: veganizedData.storage || undefined,
      originalUrl: url, // Store original URL for attribution
    };

    return recipe;
  } catch (error: any) {
    throw new Error(`Error processing recipe: ${error.message}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Fetch recipe content
    const html = await fetchRecipeContent(url);

    // Extract and veganize in one optimized call
    const veganizedRecipe = await extractAndVeganizeRecipe(html, url);

    // Check if recipe already exists
    const existingCheck = await checkRecipeExists(veganizedRecipe.title);
    let saved = false;
    let recipeSlug = veganizedRecipe.slug;

    if (existingCheck.exists) {
      // Recipe already exists, return existing slug
      recipeSlug = existingCheck.slug || veganizedRecipe.slug;
    } else {
      // Save new recipe to database
      try {
        await saveRecipeToDatabase(veganizedRecipe);
        saved = true;
        recipeSlug = veganizedRecipe.slug;
      } catch (error: any) {
        // Log error but don't fail the request - user still gets the veganized recipe
        console.error('Failed to save veganized recipe:', error);
        // Continue without saving
      }
    }

    return NextResponse.json({
      success: true,
      recipe: {
        ...veganizedRecipe,
        slug: recipeSlug,
      },
      originalUrl: url,
      saved: saved,
      alreadyExists: existingCheck.exists,
      recipeUrl: existingCheck.exists || saved ? `/recipes/${recipeSlug}` : null,
    });
  } catch (error: any) {
    console.error('Error in veganize API:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while veganizing the recipe' },
      { status: 500 }
    );
  }
}
