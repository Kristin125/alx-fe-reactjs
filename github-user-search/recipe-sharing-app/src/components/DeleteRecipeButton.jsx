import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = (event) => {
    event.preventDefault();
    deleteRecipe(recipeId);
    navigate('/'); // go back to list
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;

