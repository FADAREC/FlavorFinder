import axios from 'axios';

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes/';

export const fetchRecipes = async (ingredients) => {
    try {
        const response = await axios.get(`${BASE_URL}findByIngredients`, {
            params: {
                ingredients: ingredients,
                apiKey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
};