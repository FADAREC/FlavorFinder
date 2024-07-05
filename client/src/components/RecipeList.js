import React from 'react';
import RecipeCard from './RecipeCard';
import 'animate.css';

const RecipeList = ({ recipes }) => {
  return (
    <div className="row animate__animated animate__fadeIn">
      {recipes.map((recipe) => (
        <div className="col-md-4 mb-3" key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;