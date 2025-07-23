import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar'; 

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>Recipe Sharing App</h1>
        {/* Show SearchBar only on home page */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar /> 
                <RecipeList />
              </>
            }
          />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
