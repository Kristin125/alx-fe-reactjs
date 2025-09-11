// src/components/recipeStore.js
import { create } from 'zustand';

/* helper: does recipe match search term (title, description, ingredients, prepTime) */
const matchesSearch = (recipe, term) => {
  if (!term) return true;
  const t = term.toString().toLowerCase().trim();
  if ((recipe.title||'').toLowerCase().includes(t)) return true;
  if ((recipe.description||'').toLowerCase().includes(t)) return true;

  if (Array.isArray(recipe.ingredients)) {
    if (recipe.ingredients.join(' ').toLowerCase().includes(t)) return true;
  } else if (typeof recipe.ingredients === 'string' && recipe.ingredients.toLowerCase().includes(t)) {
    return true;
  }

  if (recipe.prepTime !== undefined && recipe.prepTime !== null) {
    if (String(recipe.prepTime).includes(t)) return true;
  }

  return false;
};

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],          // array of recipe ids (strings)
  recommendations: [],    // array of recipe objects

  /* set initial recipes (keeps filtered in sync) */
  setRecipes: (recipes) => {
    const term = get().searchTerm || '';
    const filtered = recipes.filter((r) => matchesSearch(r, term));
    set({ recipes, filteredRecipes: filtered });
  },

  /* add recipe (id as string) */
  addRecipe: (recipe) => {
    const r = { ...recipe, id: String(recipe.id ?? Date.now().toString()) };
    set((state) => {
      const recipes = [...state.recipes, r];
      const filtered = recipes.filter((x) => matchesSearch(x, state.searchTerm));
      return { recipes, filteredRecipes: filtered };
    });
  },

  /* update recipe */
  updateRecipe: (updated) =>
    set((state) => {
      const recipes = state.recipes.map((r) => (r.id === updated.id ? { ...r, ...updated } : r));
      const filtered = recipes.filter((x) => matchesSearch(x, state.searchTerm));
      return { recipes, filteredRecipes: filtered };
    }),

  /* delete recipe */
  deleteRecipe: (id) =>
    set((state) => {
      const recipes = state.recipes.filter((r) => r.id !== id);
      const filtered = state.filteredRecipes.filter((r) => r.id !== id);
      const favorites = state.favorites.filter((fid) => fid !== id);
      return { recipes, filteredRecipes: filtered, favorites };
    }),

  /* search API */
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((r) => matchesSearch(r, term));
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  /* favorites API */
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: Array.from(new Set([...state.favorites, String(recipeId)])) })),

  removeFavorite: (recipeId) =>
    set((state) => ({ favorites: state.favorites.filter((id) => id !== String(recipeId)) })),

  /* recommendations: simple algorithm
     - collect ingredients from favorites
     - score other recipes by shared ingredient count
     - recommend top 5; fallback to random if none */
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const favRecipes = recipes.filter((r) => favorites.includes(r.id));
    const favIngredients = new Set(
      favRecipes.flatMap((r) => (Array.isArray(r.ingredients) ? r.ingredients : r.ingredients ? [r.ingredients] : [])).map((i) => String(i).toLowerCase())
    );

    const candidates = recipes.filter((r) => !favorites.includes(r.id));
    const scored = candidates
      .map((r) => {
        const rIngredients = (Array.isArray(r.ingredients) ? r.ingredients : r.ingredients ? [r.ingredients] : []).map((i) => String(i).toLowerCase());
        const score = rIngredients.reduce((acc, ing) => acc + (favIngredients.has(ing) ? 1 : 0), 0);
        return { ...r, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score);

    let recommended = scored.slice(0, 5);
    if (recommended.length === 0) {
      // fallback: random up to 5
      const randomized = candidates.sort(() => Math.random() - 0.5).slice(0, 5);
      recommended = randomized;
    }

    set({ recommendations: recommended });
  },
}));
