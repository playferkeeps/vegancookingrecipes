import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/types/recipe';
import { getAllRecipes } from '@/data/recipes';

interface RelatedRecipesProps {
  currentRecipeId: string;
  relatedRecipeIds?: string[];
  category: string[];
}

export default function RelatedRecipes({
  currentRecipeId,
  relatedRecipeIds,
  category,
}: RelatedRecipesProps) {
  let recipesToShow: Recipe[] = [];

  // If specific related recipes are provided, use those
  if (relatedRecipeIds && relatedRecipeIds.length > 0) {
    recipesToShow = relatedRecipeIds
      .map((id) => getAllRecipes().find((r) => r.id === id))
      .filter((r): r is Recipe => r !== undefined)
      .slice(0, 3);
  } else {
    // Otherwise, show recipes from the same category
    const allRecipes = getAllRecipes();
    recipesToShow = allRecipes
      .filter(
        (recipe) =>
          recipe.id !== currentRecipeId &&
          recipe.category.some((cat) => category.includes(cat))
      )
      .slice(0, 3);
  }

  if (recipesToShow.length === 0) return null;

  return (
    <section className="mt-12 mb-12">
      <h2 className="text-3xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipesToShow.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.slug}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <div className="relative h-48 w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src={recipe.image}
                alt={`${recipe.title} - Related vegan recipe`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
              <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
                <span>{recipe.totalTime} min</span>
                <span>•</span>
                <span className="capitalize">{recipe.difficulty}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

