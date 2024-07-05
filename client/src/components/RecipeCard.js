import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card transform transition duration-500 hover:scale-105 hover:shadow-lg">
      <img src={recipe.image} className="card-img-top" alt={recipe.title} />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <div className="card-text">
          <p>Used ingredients: {recipe.usedIngredientCount}</p>
          <p>Missed ingredients: {recipe.missedIngredientCount}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;