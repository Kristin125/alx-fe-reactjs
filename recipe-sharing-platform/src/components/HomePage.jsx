import { Link } from "react-router-dom";


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🍳 Recipe Sharing Platform
      </h1>

     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{recipe.summary}</p>
              <Link
  to={`/recipe/${recipe.id}`}
  className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-3 inline-block"
>
  View Details →
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
