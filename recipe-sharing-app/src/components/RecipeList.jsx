import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = (id) => favorites.includes(id);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            padding: '10px',
          }}
        >
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          {isFavorite(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>Unfavorite</button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>Favorite</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
