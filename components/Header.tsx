'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 sm:py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold text-green-600 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded transition-colors"
            onClick={closeMenu}
          >
            🌱 vegancooking.recipes
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-4 lg:gap-6 items-center">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1.5 text-sm lg:text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/recipes" 
                className="text-gray-700 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1.5 text-sm lg:text-base"
              >
                All Recipes
              </Link>
            </li>
            <li>
              <Link 
                href="/categories" 
                className="text-gray-700 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1.5 text-sm lg:text-base"
              >
                Categories
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <ul className="flex flex-col gap-2">
              <li>
                <Link 
                  href="/" 
                  className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-4 py-3 text-base font-medium"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/recipes" 
                  className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-4 py-3 text-base font-medium"
                  onClick={closeMenu}
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link 
                  href="/categories" 
                  className="block text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-4 py-3 text-base font-medium"
                  onClick={closeMenu}
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
