import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(''); // comma-separated
  const [prepTime, setPrepTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const recipe = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients
        .split(',')
        .map((i) => i.trim())
        .filter(Boolean),
      prepTime: prepTime ? Number(prepTime) : null,
    };

    addRecipe(recipe);
    setTitle('');
    setDescription('');
    setIngredients('');
    setPrepTime('');

    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <h2>Add Recipe</h2>

      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: 8 }}
        />
      </label>

      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ display: 'block', width: '100%', marginBottom: 8 }}
        />
      </label>

      <label>
        Ingredients (comma separated)
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="eg. tomato, basil, garlic"
          style={{ display: 'block', width: '100%', marginBottom: 8 }}
        />
      </label>

      <label>
        Prep time (minutes)
        <input
          type="number"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: 8 }}
        />
      </label>

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
