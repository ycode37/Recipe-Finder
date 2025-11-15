import { X, Clock, Globe, Tag, ChefHat } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { recipeApi } from '../services/recipeapi';

const RecipeModal = ({ recipeId, onClose }) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (!recipeId) return;
      
      setLoading(true);
      const data = await recipeApi.getRecipeDetails(recipeId);
      setRecipe(data);
      setLoading(false);
    };

    fetchRecipeDetails();
  }, [recipeId]);

  // Get ingredients from recipe object
  const getIngredients = () => {
    if (!recipe) return [];
    
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure ? measure.trim() : '',
        });
      }
    }
    return ingredients;
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!recipeId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {loading ? (
          /* Loading State */
          <div className="p-8">
            <div className="h-64 bg-gradient-to-br from-orange-200 to-red-200 rounded-xl animate-pulse mb-6"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mb-8"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        ) : recipe ? (
          /* Recipe Content */
          <div>
            {/* Hero Image */}
            <div className="h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Title & Badges */}
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {recipe.strMeal}
                </h2>
                
                <div className="flex flex-wrap gap-3">
                  {recipe.strCategory && (
                    <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full">
                      <Tag className="w-4 h-4" />
                      <span className="font-medium">{recipe.strCategory}</span>
                    </div>
                  )}
                  {recipe.strArea && (
                    <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                      <Globe className="w-4 h-4" />
                      <span className="font-medium">{recipe.strArea}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Ingredients Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <ChefHat className="w-6 h-6 text-orange-500" />
                  <h3 className="text-2xl font-bold text-gray-800">Ingredients</h3>
                </div>
                <div className="bg-orange-50 rounded-xl p-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {getIngredients().map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-orange-500 font-bold mt-1">•</span>
                        <span>
                          <span className="font-semibold">{item.measure}</span>{' '}
                          {item.ingredient}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructions Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <h3 className="text-2xl font-bold text-gray-800">Instructions</h3>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="prose max-w-none">
                    {recipe.strInstructions.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                          {paragraph.trim()}
                        </p>
                      )
                    ))}
                  </div>
                </div>
              </div>

              {/* Video Link */}
              {recipe.strYoutube && (
                <div className="mt-6">
                  <a
                    href={recipe.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Watch Video Tutorial
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Error State */
          <div className="p-8 text-center">
            <p className="text-xl text-gray-600">Failed to load recipe details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeModal;
