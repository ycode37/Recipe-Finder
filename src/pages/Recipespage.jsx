import { RefreshCcw, Search, Filter, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import RecipeModal from '../components/RecipeModal';
import { recipeApi } from '../services/recipeapi';

const Recipespage = () => {
  const [error, setError] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  const fetchRandomRecipes = async () => {
    try {
      setLoading(true);
      setError(false);
      setCurrentCategory('');
      const data = await recipeApi.getRandomRecipes(9);
      setRecipes(data);
    } catch (err) {
      console.error('Failed to fetch recipes:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipesByCategory = async (category) => {
    if (!category) {
      fetchRandomRecipes();
      return;
    }

    try {
      setLoading(true);
      setError(false);
      setCurrentCategory(category);
      const data = await recipeApi.getRecipesByCategory(category);
      // Category API returns minimal info, so we'll display what we have
      setRecipes(data);
    } catch (err) {
      console.error('Failed to fetch recipes by category:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filters) => {
    if (filters.category) {
      fetchRecipesByCategory(filters.category);
    } else {
      fetchRandomRecipes();
    }
  };

  const handleRecipeClick = (recipeId) => {
    setSelectedRecipeId(recipeId);
  };

  const closeModal = () => {
    setSelectedRecipeId(null);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      fetchRandomRecipes();
      return;
    }

    try {
      setLoading(true);
      setError(false);
      setCurrentCategory('');
      const data = await recipeApi.searchByName(searchQuery.trim());
      setRecipes(data);

      if (data.length === 0) {
        setError(true);
      }
    } catch (err) {
      console.error('Failed to search recipes:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  function openFilter() {
    setIsFilter(!isFilter);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-lime-500 to-pink-500 text-white py-16 px-6 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Explore Our{' '}
            <span className="text-yellow-300">Healthy & Simple</span> Recipes
          </h1>
          <p className="text-lg lg:text-xl text-orange-50 leading-relaxed max-w-3xl mx-auto">
            Discover nutritious recipes from around the world that fit your busy
            lifestyle. Search by name, ingredient, or explore by category - find
            your next favourite dish.
          </p>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
          <form
            onSubmit={handleSearch}
            className="flex flex-col lg:flex-row gap-4"
          >
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search recipes, ingredients..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
            >
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>

            {/* Filter Button */}
            <button
              type="button"
              onClick={openFilter}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
            >
              {isFilter ? (
                <X className="w-5 h-5" />
              ) : (
                <Filter className="w-5 h-5" />
              )}
              <span>{isFilter ? 'Close' : 'Filters'}</span>
            </button>
          </form>

          {/* FilterBar Component - Conditional Rendering */}
          {isFilter && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <FilterBar onFilterChange={handleFilterChange} />
            </div>
          )}
        </div>
      </div>

      {/* Content/Error Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {error ? (
          /* Error State */
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold text-red-800 mb-4">
                {searchQuery
                  ? 'No recipes found'
                  : 'Oops! Something went wrong'}
              </p>
              <p className="text-red-600 mb-6">
                {searchQuery
                  ? `We couldn't find any recipes matching "${searchQuery}". Try a different search term.`
                  : "We couldn't load the recipes. Please try again."}
              </p>
              <button
                onClick={fetchRandomRecipes}
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <RefreshCcw className="w-5 h-5" />
                <span>{searchQuery ? 'Clear Search' : 'Retry'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Recipes Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              /* Loading Skeleton */
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="h-56 bg-gradient-to-br from-orange-200 to-red-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
              ))
            ) : recipes.length > 0 ? (
              /* Recipe Cards with Real Data */
              recipes.map((recipe) => (
                <div
                  key={recipe.idMeal}
                  onClick={() => handleRecipeClick(recipe.idMeal)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                      {recipe.strMeal}
                    </h3>
                    {recipe.strCategory || recipe.strArea ? (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        {recipe.strCategory && (
                          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                            {recipe.strCategory}
                          </span>
                        )}
                        {recipe.strArea && (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                            {recipe.strArea}
                          </span>
                        )}
                      </div>
                    ) : currentCategory ? (
                      <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium inline-block">
                        {currentCategory}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))
            ) : (
              /* No Results */
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-600">No recipes found</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Recipe Detail Modal */}
      {selectedRecipeId && (
        <RecipeModal recipeId={selectedRecipeId} onClose={closeModal} />
      )}
    </div>
  );
};

export default Recipespage;
