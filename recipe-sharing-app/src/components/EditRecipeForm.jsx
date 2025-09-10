import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back home</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = { id, title: title.trim(), description: description.trim() };
    updateRecipe(updated);
    navigate(`/recipes/${id}`); // go back to details
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <label>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} required style={{ display: 'block', width: '100%', marginBottom: 8 }} />
      </label>

      <label>
        Description
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={{ display: 'block', width: '100%', marginBottom: 8 }} />
      </label>

      <button type="submit">Save changes</button>
    </form>
  );
};

export default EditRecipeForm;
