const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const cache = new Map();

export const recipeApi = {
  searchByName: async (name) => {
    const cacheKey = `search-${name}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/search.php?s=${name}`);
      const data = await response.json();
      const result = data.meals || [];
      cache.set(cacheKey, result);
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  getRandomRecipes: async (count = 8) => {
    const cacheKey = `random-${count}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    try {
      const promises = Array.from({ length: count }, () =>
        fetch(`${API_BASE_URL}/random.php`).then((res) => res.json())
      );
      const results = await Promise.all(promises);
      const meals = results.map((result) => result.meals[0]).filter(Boolean);
      cache.set(cacheKey, meals);
      return meals;
    } catch (error) {
      console.error('Error fetching random recipes:', error);
      return [];
    }
  },

  getCategories: async () => {
    const cacheKey = 'categories';
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    try {
      const response = await fetch(`${API_BASE_URL}/categories.php`);
      const data = await response.json();
      const result = data.categories || [];
      cache.set(cacheKey, result);
      return result;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  getRecipesByCategory: async (category) => {
    const cacheKey = `category-${category}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    try {
      const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
      const data = await response.json();
      const result = data.meals || [];
      cache.set(cacheKey, result);
      return result;
    } catch (error) {
      console.error('Error fetching recipes by category:', error);
      return [];
    }
  },

  getRecipeDetails: async (id) => {
    const cacheKey = `details-${id}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    try {
      const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
      const data = await response.json();
      const result = data.meals ? data.meals[0] : null;
      cache.set(cacheKey, result);
      return result;
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      return null;
    }
  },
};
