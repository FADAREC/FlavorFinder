import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>FlavourFinder</h1>
        <SearchBar setRecipes={setRecipes} />
      </header>
      <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
    </div>
  );
}

export default App;