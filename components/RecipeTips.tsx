interface RecipeTipsProps {
  tips?: string[];
  ingredientNotes?: string;
  variations?: string[];
  storage?: string;
}

export default function RecipeTips({
  tips,
  ingredientNotes,
  variations,
  storage,
}: RecipeTipsProps) {
  if (!tips && !ingredientNotes && !variations && !storage) return null;

  return (
    <section className="mt-12 mb-12">
      {ingredientNotes && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Ingredients & Substitutions</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{ingredientNotes}</p>
          </div>
        </div>
      )}

      {tips && tips.length > 0 && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Tips & Notes</h2>
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-green-600 font-bold">•</span>
                <span className="text-gray-700 leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {variations && variations.length > 0 && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Recipe Variations</h2>
          <ul className="space-y-3">
            {variations.map((variation, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-green-600 font-bold">•</span>
                <span className="text-gray-700 leading-relaxed">{variation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {storage && (
        <div>
          <h2 className="text-3xl font-bold mb-4">Storage & Freezing</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{storage}</p>
          </div>
        </div>
      )}
    </section>
  );
}


