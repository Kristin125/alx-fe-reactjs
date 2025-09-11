// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const favorites = useRecipeStore((s) => s.favorites);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back home</Link>
      </div>
    );
  }

  const isFav = favorites.includes(recipe.id);

  return (
    <article>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p><strong>Ingredients:</strong> {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : (recipe.ingredients || '—')}</p>
      <p><strong>Prep time:</strong> {recipe.prepTime ?? '—'} min</p>
      <p><strong>ID:</strong> {recipe.id}</p>

      <div style={{ marginTop: 12 }}>
        {isFav ? (
          <button onClick={() => removeFavorite(recipe.id)}>💔 Remove Favorite</button>
        ) : (
          <button onClick={() => addFavorite(recipe.id)}>❤️ Add Favorite</button>
        )}
        <Link to={`/recipes/${recipe.id}/edit`} style={{ marginLeft: 8 }}>Edit</Link>
      </div>
    </article>
  );
};

export default RecipeDetails;
