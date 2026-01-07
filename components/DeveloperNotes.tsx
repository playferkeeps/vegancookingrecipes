'use client';

import { Recipe } from '@/types/recipe';

interface DeveloperNotesProps {
  recipe: Recipe & {
    isTested?: boolean;
    developerNotes?: string;
    testedDate?: string | Date;
  };
}

export default function DeveloperNotes({ recipe }: DeveloperNotesProps) {
  const isTested = 'isTested' in recipe ? recipe.isTested : false;
  const developerNotes = 'developerNotes' in recipe ? recipe.developerNotes : undefined;
  const testedDate = 'testedDate' in recipe ? recipe.testedDate : undefined;

  if (!isTested && !developerNotes) {
    return null;
  }

  return (
    <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6 my-8">
      <div className="flex items-center gap-2 mb-4">
        {isTested && (
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded uppercase">
            Notes
          </span>
        )}
        {testedDate && (
          <span className="text-sm text-gray-600">
            Tried on {new Date(testedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        )}
      </div>
      
      {developerNotes && (
        <div className="prose prose-sm max-w-none">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Developer Notes
          </h3>
          <div className="text-gray-700 whitespace-pre-line">
            {developerNotes}
          </div>
        </div>
      )}
    </div>
  );
}
