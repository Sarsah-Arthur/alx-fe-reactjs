
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data.json'; 

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <div className="text-center py-10">Recipe not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{recipe.name}</h1>

      {/* Ingredients */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {recipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      <Link
        to="/"
        className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
      >
        Back to Recipes
      </Link>
    </div>
  );
}

export default RecipeDetail;
