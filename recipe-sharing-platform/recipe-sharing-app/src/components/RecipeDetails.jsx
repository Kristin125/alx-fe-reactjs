import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back home</Link>
      </div>
    );
  }

  return (
    <article>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p><strong>ID:</strong> {recipe.id}</p>
      <p><strong>Ingredients:</strong> {Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients || '—'}</p>
      <p><strong>Prep time:</strong> {recipe.prepTime ?? '—'} min</p>

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
        <DeleteRecipeButton recipeId={id} />
      </div>
    </article>
  );
};

export default RecipeDetails;

