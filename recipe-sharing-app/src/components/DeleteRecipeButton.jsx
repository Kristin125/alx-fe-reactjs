import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id, afterDelete }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    // simple confirmation
    if (!window.confirm('Are you sure you want to delete this recipe?')) return;
    deleteRecipe(id);
    if (typeof afterDelete === 'function') afterDelete();
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
