import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <section>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above.</p>
      ) : (
        recipes.map((r) => (
          <article key={r.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 8 }}>
            <h3>
              <Link to={`/recipes/${r.id}`}>{r.title}</Link>
            </h3>
            <p>{r.description}</p>
            <div>
              <Link to={`/recipes/${r.id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
              <DeleteRecipeButton id={r.id} />
            </div>
          </article>
        ))
      )}
    </section>
  );
};

export default RecipeList;


