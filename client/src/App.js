import React, { useState } from 'react';
import './App.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App = () => {
    const [recipes, setRecipes] = useState([]);

    return (
        <div className="container">
            <h1 className="text-center my-4">Recipe Finder</h1>
            <SearchBar setRecipes={setRecipes} />
            
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default App;