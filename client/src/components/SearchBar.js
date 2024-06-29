import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ setRecipes }) => {
    const [ingredients, setIngredients] = useState('');

    const handleSearch = async () => {
        // Placeholder for the search function
    };

    return (
        <div className="input-group mb-3">
            <input 
                type="text" 
                className="form-control" 
                value={ingredients} 
                onChange={(e) => setIngredients(e.target.value)} 
                placeholder="Enter ingredients" 
            />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;