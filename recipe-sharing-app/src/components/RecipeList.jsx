// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  // show filteredRecipes if they exist else all recipes
  const filtered = useRecipeStore((s) => s.filteredRecipes);
  const recipes = useRecipeStore((s) => s.recipes);
  const display = (filtered && filtered.length) ? filtered : recipes;

  const favorites = useRecipeStore((s) => s.favorites);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  if (!display || display.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      {display.map((r) => (
        <article key={r.id} style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
          <h3><Link to={`/recipes/${r.id}`}>{r.title}</Link></h3>
          <p>{r.description}</p>
          <p style={{ fontSize: 12, color: '#555' }}>Ingredients: {Array.isArray(r.ingredients) ? r.ingredients.join(', ') : r.ingredients || '—'}</p>
          <p style={{ fontSize: 12, color: '#555' }}>Prep: {r.prepTime ?? '—'} min</p>
          {favorites.includes(r.id) ? (
            <button onClick={() => removeFavorite(r.id)}>💔 Unfavorite</button>
          ) : (
            <button onClick={() => addFavorite(r.id)}>❤️ Favorite</button>
          )}
        </article>
      ))}
    </div>
  );
};

export default RecipeList;
