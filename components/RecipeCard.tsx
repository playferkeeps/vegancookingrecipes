import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/types/recipe';
import SocialShareCompact from './SocialShareCompact';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  // Ensure image URL is absolute for social sharing
  const imageUrl = recipe.image.startsWith('http') 
    ? recipe.image 
    : `https://vegancooking.recipes${recipe.image.startsWith('/') ? recipe.image : `/${recipe.image}`}`;
  
  const recipeUrl = `https://vegancooking.recipes/recipes/${recipe.slug}`;
  const shareTitle = `${recipe.title} - Vegan Recipe | vegancooking.recipes`;
  const shareDescription = recipe.description || `Delicious vegan ${recipe.title} recipe. Find this and more plant-based recipes at vegancooking.recipes`;

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/recipes/${recipe.slug}`} className="block">
        <div className="relative h-40 sm:h-48 md:h-52 w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            src={recipe.image}
            alt={`${recipe.title} - Vegan recipe image`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-4 sm:p-5 md:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 leading-tight">{recipe.title}</h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{recipe.description}</p>
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 flex-wrap gap-2">
            <span className="whitespace-nowrap">{recipe.totalTime} min total</span>
            {recipe.cookTime > 0 && (
              <span className="whitespace-nowrap">{recipe.cookTime} min cook</span>
            )}
            <span className="whitespace-nowrap">{recipe.servings} servings</span>
            <span className="capitalize whitespace-nowrap">{recipe.difficulty}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {recipe.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-green-100 text-green-800 text-xs rounded-full capitalize"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-0 flex justify-end">
        <SocialShareCompact
          url={recipeUrl}
          title={shareTitle}
          description={shareDescription}
          image={imageUrl}
        />
      </div>
    </article>
  );
}

