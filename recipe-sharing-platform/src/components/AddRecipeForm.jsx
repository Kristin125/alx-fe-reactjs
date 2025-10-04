import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!steps.trim()) newErrors.steps = 'Steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      alert('Recipe added successfully!');
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md md:max-w-lg md:p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center md:text-3xl">
          Add New Recipe
        </h2>

        <label className="block mb-2 font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 md:p-3"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        <label className="block mt-4 mb-2 font-medium text-gray-700">
          Ingredients
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="3"
          className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 md:p-3"
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}

        <label className="block mt-4 mb-2 font-medium text-gray-700">
          Preparation Steps
        </label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows="3"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 md:p-3"
        ></textarea>
        {errors.steps && (
          <p className="text-red-500 text-sm">{errors.steps}</p>
        )}

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition md:py-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
