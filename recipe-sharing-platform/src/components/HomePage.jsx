import { Link } from "react-router-dom";
import recipes from "../data.json";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
            <img
              src={recipe.image || "https://via.placeholder.com/300"}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{recipe.title}</h2>
              <p className="text-sm text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
