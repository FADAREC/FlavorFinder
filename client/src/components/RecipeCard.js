import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="card">
            <img src={recipe.image} className="card-img-top" alt={recipe.title} />
            <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">Used ingredients: {recipe.usedIngredientCount}</p>
                <p className="card-text">Missed ingredients: {recipe.missedIngredientCount}</p>
            </div>
        </div>
    );
};

export default RecipeCard;