// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations);
  const addFavorite = useRecipeStore((s) => s.addFavorite);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for you</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet — favorite some recipes to get suggestions.</p>
      ) : (
        recommendations.map((r) => (
          <article key={r.id} style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
            <h3><Link to={`/recipes/${r.id}`}>{r.title}</Link></h3>
            <p>{r.description}</p>
            <button onClick={() => addFavorite(r.id)}>Add to Favorites</button>
          </article>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
