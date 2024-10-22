import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:4000/recipes');
                if (response.data.success) {
                    setRecipes(response.data.data);
                }
            } catch (error) {
                console.log("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []); // Empty dependency array ensures this runs only once on component mount

    return (
        <div>
            <h1>Popular Dishes</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {
                    recipes.map((recipe) => (
                        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                            <div style={{ border: '1px solid black', padding: '10px' }}>
                                <h2>{recipe.name}</h2>
                                <img src={recipe.image} alt={recipe.name} width="200" />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default RecipeList;
