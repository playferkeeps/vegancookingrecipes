import { NextResponse } from 'next/server';
import { getRecipeBySlug } from '@/data/recipes';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const recipe = getRecipeBySlug(params.slug);

  if (!recipe) {
    return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
  }

  return NextResponse.json(recipe);
}

