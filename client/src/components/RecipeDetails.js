import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecipeDetail({ recipe }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(`/api/recipeDetails?id=${recipe.id}`);
      setDetails(response.data);
    };
    fetchDetails();
  }, [recipe]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {details.analyzedInstructions[0].steps.map((step, index) => (
          <li key={index}>{step.step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;