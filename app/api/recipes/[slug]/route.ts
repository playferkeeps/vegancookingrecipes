import { NextResponse } from 'next/server';
import { getRecipeBySlugAsync } from '@/data/recipes/helpers';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const recipe = await getRecipeBySlugAsync(slug);

  if (!recipe) {
    return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
  }

  return NextResponse.json(recipe);
}

