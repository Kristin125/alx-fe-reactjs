import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const navigate = useNavigate();

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

      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
        {/* afterDelete navigates back to home */}
        <DeleteRecipeButton id={id} afterDelete={() => navigate('/')} />
      </div>
    </article>
  );
};

export default RecipeDetails;
