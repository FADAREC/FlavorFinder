import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
    return (
        <div className="row">
            {recipes.map((recipe) => (
                <div className="col-md-4 mb-3" key={recipe.id}>
                    <RecipeCard recipe={recipe} />
                </div>
            ))}
        </div>
    );
};

export default RecipeList;