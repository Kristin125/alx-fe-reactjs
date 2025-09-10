import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newRecipe = {
      id: Date.now().toString(), // string id to match useParams
      title: title.trim(),
      description: description.trim(),
    };

    addRecipe(newRecipe);
    setTitle('');
    setDescription('');

    // go to the newly created recipe's detail page
    navigate(`/recipes/${newRecipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Add New Recipe</h2>

      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe title"
          required
          style={{ display: 'block', width: '100%', marginBottom: 8 }}
        />
      </label>

      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description / instructions"
          required
          style={{ display: 'block', width: '100%', marginBottom: 8 }}
        />
      </label>

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
