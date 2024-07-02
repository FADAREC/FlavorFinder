import axios from 'axios';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '3c569388b9124102a7ceb6a2915d20f1';
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
