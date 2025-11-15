import { ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { recipeApi } from '../services/recipeapi';

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    prepTime: '',
    cookTime: '',
  });
  const [categories, setCategories] = useState([
    { value: '', label: 'All Categories' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const data = await recipeApi.getCategories();
      const categoryOptions = [
        { value: '', label: 'All Categories' },
        ...data.map((cat) => ({
          value: cat.strCategory,
          label: cat.strCategory,
        })),
      ];
      setCategories(categoryOptions);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const prepTimes = [
    { value: '', label: 'Any Time' },
    { value: '10', label: 'Under 10 mins' },
    { value: '20', label: 'Under 20 mins' },
    { value: '30', label: 'Under 30 mins' },
    { value: '60', label: 'Under 1 hour' },
  ];

  const cookTimes = [
    { value: '', label: 'Any Time' },
    { value: '15', label: 'Under 15 mins' },
    { value: '30', label: 'Under 30 mins' },
    { value: '45', label: 'Under 45 mins' },
    { value: '60', label: 'Under 1 hour' },
  ];

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: '',
      prepTime: '',
      cookTime: '',
    };
    setFilters(clearedFilters);
    if (onFilterChange) {
      onFilterChange(clearedFilters);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Filter Recipes</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category Filter */}
        <div className="space-y-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <div className="relative">
            <select
              id="category"
              name="category"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full appearance-none px-4 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all bg-white text-gray-700 cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Max Prep Time Filter */}
        <div className="space-y-2">
          <label
            htmlFor="prepTime"
            className="block text-sm font-medium text-gray-700"
          >
            Max Prep Time
          </label>
          <div className="relative">
            <select
              id="prepTime"
              name="prepTime"
              value={filters.prepTime}
              onChange={(e) => handleFilterChange('prepTime', e.target.value)}
              className="w-full appearance-none px-4 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all bg-white text-gray-700 cursor-pointer"
            >
              {prepTimes.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Max Cook Time Filter */}
        <div className="space-y-2">
          <label
            htmlFor="cookTime"
            className="block text-sm font-medium text-gray-700"
          >
            Max Cook Time
          </label>
          <div className="relative">
            <select
              id="cookTime"
              name="cookTime"
              value={filters.cookTime}
              onChange={(e) => handleFilterChange('cookTime', e.target.value)}
              className="w-full appearance-none px-4 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all bg-white text-gray-700 cursor-pointer"
            >
              {cookTimes.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Active Filters Display (Optional) */}
      {(filters.category || filters.prepTime || filters.cookTime) && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-600 font-medium">
              Active filters:
            </span>
            {filters.category && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                {categories.find((c) => c.value === filters.category)?.label}
              </span>
            )}
            {filters.prepTime && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                Prep:{' '}
                {prepTimes.find((t) => t.value === filters.prepTime)?.label}
              </span>
            )}
            {filters.cookTime && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                Cook:{' '}
                {cookTimes.find((t) => t.value === filters.cookTime)?.label}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
