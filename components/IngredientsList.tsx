'use client';

import { useState } from 'react';
import { Ingredient } from '@/types/recipe';

interface IngredientsListProps {
  ingredients: Ingredient[];
}

// Common ingredient keywords that should link to Amazon
const AMAZON_KEYWORDS = [
  'flour', 'sugar', 'salt', 'pepper', 'oil', 'butter', 'milk', 'vanilla',
  'cocoa', 'chocolate', 'baking', 'soda', 'powder', 'yeast', 'spices',
  'cinnamon', 'nutmeg', 'ginger', 'garlic', 'onion', 'tomato', 'avocado',
  'banana', 'apple', 'lemon', 'lime', 'orange', 'berries', 'nuts', 'seeds',
  'quinoa', 'rice', 'pasta', 'noodles', 'tofu', 'tempeh', 'chickpeas',
  'beans', 'lentils', 'coconut', 'almond', 'cashew', 'walnut', 'peanut',
  'maple', 'syrup', 'honey', 'agave', 'vinegar', 'soy', 'tamari', 'miso',
  'nutritional', 'yeast', 'chia', 'flax', 'hemp', 'protein', 'powder'
];

// Amazon Associates tag - replace with your actual tag
const AMAZON_TAG = 'playferkeeps-20'; // Replace with your Amazon Associates tag

function createAmazonLink(keyword: string): string {
  const searchQuery = encodeURIComponent(keyword);
  return `https://www.amazon.com/s?k=${searchQuery}&tag=${AMAZON_TAG}`;
}

function parseIngredientText(text: string): (string | { text: string; isLink: boolean; keyword: string })[] {
  // Split by word boundaries, preserving spaces and punctuation
  const parts: (string | { text: string; isLink: boolean; keyword: string })[] = [];
  const words = text.match(/\S+|\s+/g) || [];
  
  for (const word of words) {
    // Skip whitespace-only parts
    if (/^\s+$/.test(word)) {
      parts.push(word);
      continue;
    }
    
    // Clean word for keyword matching (remove punctuation at end)
    const cleanWord = word.toLowerCase().replace(/[^\w]+$/, '').replace(/^[^\w]+/, '');
    
    // Check if word matches any Amazon keyword
    const matchedKeyword = AMAZON_KEYWORDS.find(keyword => {
      const wordLower = cleanWord.toLowerCase();
      const keywordLower = keyword.toLowerCase();
      // Exact match or contains the keyword
      return wordLower === keywordLower || 
             wordLower.includes(keywordLower) || 
             keywordLower.includes(wordLower);
    });
    
    if (matchedKeyword && cleanWord.length > 2) {
      parts.push({ text: word, isLink: true, keyword: matchedKeyword });
    } else {
      parts.push({ text: word, isLink: false, keyword: '' });
    }
  }
  
  return parts;
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

      return (
        <section className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ingredients</h3>
          <ul className="space-y-2 sm:space-y-3">
        {ingredients.map((ingredient, index) => {
          const isChecked = checkedItems.has(index);
          const ingredientText = `${ingredient.amount}${ingredient.unit ? ` ${ingredient.unit}` : ''} ${ingredient.name}${ingredient.notes ? ` (${ingredient.notes})` : ''}`;
          const parsedText = parseIngredientText(ingredientText);
          
              return (
                <li key={index} className="flex items-start">
                  <input
                    type="checkbox"
                    id={`ingredient-${index}`}
                    checked={isChecked}
                    onChange={() => toggleItem(index)}
                    className="mt-1 mr-3 w-5 h-5 sm:w-6 sm:h-6 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2 cursor-pointer flex-shrink-0"
                  />
                  <label
                    htmlFor={`ingredient-${index}`}
                    className={`flex-1 text-sm sm:text-base text-gray-700 cursor-pointer leading-relaxed ${
                      isChecked ? 'line-through text-gray-400' : ''
                    }`}
                  >
                {parsedText.map((part, partIndex) => {
                  if (typeof part === 'string') {
                    return <span key={partIndex}>{part}</span>;
                  }
                  
                  if (part.isLink) {
                    return (
                      <a
                        key={partIndex}
                        href={createAmazonLink(part.keyword)}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="text-green-600 hover:text-green-700 underline font-medium"
                        onClick={(e) => e.stopPropagation()}
                        title={`Shop for ${part.keyword} on Amazon`}
                      >
                        {part.text}
                      </a>
                    );
                  }
                  
                  return <span key={partIndex}>{part.text}</span>;
                })}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

