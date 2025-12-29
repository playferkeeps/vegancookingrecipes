import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/recipes/${recipe.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{recipe.title}</h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{recipe.totalTime} min</span>
            <span>{recipe.servings} servings</span>
            <span className="capitalize">{recipe.difficulty}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {recipe.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full capitalize"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}

