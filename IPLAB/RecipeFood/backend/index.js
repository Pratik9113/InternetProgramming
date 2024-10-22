import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());

// Sample recipe data
const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    image: 'https://example.com/spaghetti.jpg',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'],
    instructions: 'Cook spaghetti. In a bowl, beat eggs and mix with Parmesan. Fry pancetta. Combine everything in a pan. Serve with pepper.'
  },
  {
    id: 2,
    name: 'Chicken Tikka Masala',
    image: 'https://example.com/chicken-tikka.jpg',
    ingredients: ['Chicken', 'Yogurt', 'Garlic', 'Ginger', 'Garam Masala', 'Tomatoes', 'Cream'],
    instructions: 'Marinate chicken in yogurt and spices. Grill it. Cook tomatoes, cream, and spices in a pan. Add grilled chicken and simmer. Serve with rice.'
  },
  {
    id: 3,
    name: 'Sushi Rolls',
    image: 'https://example.com/sushi.jpg',
    ingredients: ['Sushi Rice', 'Nori Sheets', 'Fish', 'Vegetables', 'Soy Sauce', 'Wasabi'],
    instructions: 'Prepare sushi rice. Lay nori on a bamboo mat, spread rice, add fish and vegetables. Roll tightly, slice, and serve with soy sauce and wasabi.'
  }
];

// Endpoint to get all recipes
app.get('/recipes', (req, res) => {
  res.json({ success: true, data: recipes });
});

// Endpoint to get a specific recipe by ID
app.get('/recipes/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const recipe = recipes.find(r => r.id === recipeId);

  if (!recipe) {
    return res.status(404).json({ success: false, message: 'Recipe not found' });
  }

  res.json({ success: true, data: recipe });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
