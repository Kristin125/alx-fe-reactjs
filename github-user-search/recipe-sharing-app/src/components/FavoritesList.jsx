// src/components/FavoritesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((s) => s.favorites);
  const recipes = useRecipeStore((s) => s.recipes);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  const favRecipes = favorites.map((id) => recipes.find((r) => r.id === id)).filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>
      {favRecipes.length === 0 ? (
        <p>No favorites yet — add some ❤️</p>
      ) : (
        favRecipes.map((r) => (
          <article key={r.id} style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
            <h3><Link to={`/recipes/${r.id}`}>{r.title}</Link></h3>
            <p>{r.description}</p>
            <button onClick={() => removeFavorite(r.id)}>Remove Favorite</button>
          </article>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
