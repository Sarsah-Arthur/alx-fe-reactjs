import { Link } from "react-router-dom";
import recipes from "../data.json";

export default function HomePage() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link
          to={`/recipe/${recipe.id}`}
          key={recipe.id}
          aria-label={`View details for ${recipe.name}`}
        >
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{recipe.name}</h2>
              <p className="text-sm text-gray-600">{recipe.shortDescription}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
