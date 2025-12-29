'use client';

import { useEffect, useState } from 'react';

interface JumpToRecipeProps {
  recipeId?: string;
}

export default function JumpToRecipe({ recipeId = 'recipe' }: JumpToRecipeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const recipeElement = document.getElementById(recipeId);
      if (recipeElement) {
        const rect = recipeElement.getBoundingClientRect();
        setIsVisible(rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [recipeId]);

  const scrollToRecipe = () => {
    const recipeElement = document.getElementById(recipeId);
    if (recipeElement) {
      recipeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToRecipe}
      className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-label="Jump to recipe"
    >
      Jump to Recipe ↓
    </button>
  );
}

