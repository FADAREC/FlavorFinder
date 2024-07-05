import React, { useState } from 'react';
import { fetchRecipes } from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ setRecipes }) => {
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState('');

  const handleAddIngredient = () => {
    if (ingredient.trim() !== '' && !ingredients.includes(ingredient.trim())) {
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient('');
    }
  };

  const handleSearch = async () => {
    if (ingredients.length === 0) {
      setError('Please enter at least one ingredient');
      return;
    }
    setError('');
    const recipes = await fetchRecipes(ingredients.join(','));
    setRecipes(recipes);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddIngredient();
    }
  };

  return (
    <div className="p-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter the ingredients you have (separated by commas):"
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-secondary transition duration-300 ease-in-out hover:bg-gray-700" onClick={handleAddIngredient}>Add</button>
      </div>
      <div>
        {ingredients.map((ing, index) => (
          <span key={index} className="badge bg-secondary mx-1">
            {ing}
          </span>
        ))}
      </div>
      <div>
        <button className="btn btn-primary mt-3 transition duration-300 ease-in-out hover:bg-blue-700" onClick={handleSearch}>Search Recipes</button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default SearchBar;