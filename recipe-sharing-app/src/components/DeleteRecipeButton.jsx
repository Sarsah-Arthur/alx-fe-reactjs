import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); 

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); 
  };

  return (
    <button onClick={handleDelete} style={{ color: 'white', background: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
