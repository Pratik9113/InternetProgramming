import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/recipes/${id}`);
                if (response.data.success) {
                    setRecipe(response.data.data);
                }
            } catch (error) {
                console.log("Error fetching recipe details:", error);
            }
        };

        fetchRecipe();
    }, [id]); 

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} width="300" />
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
            <Link to="/">Back to Recipes</Link>
        </div>
    );
};

export default RecipeDetail;
