import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients.split(",").map((item) => item.trim());
    if (ingredientsList.length < 2) {
      setError("Please include at least two ingredients separated by commas.");
      return;
    }

    // Simulated submission
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientsList,
      instructions: steps.split(".").map((s) => s.trim()).filter(Boolean),
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully!");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Add New Recipe
      </h1>

      {error && (
        <div className="bg-red-100 text-red-700 border border-red-400 rounded-md p-3 mb-4 text-center">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="E.g., flour, sugar, butter"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Describe preparation steps here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
