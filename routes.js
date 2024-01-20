const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController'); // Adjust the path as needed


// Define your API endpoints and their corresponding controller functions

// Create a new recipe
router.post('/api/recipes', recipeController.createRecipe);

// Fetch all recipes
router.get('/api/recipes', recipeController.getAllRecipes);

// Fetch a recipe by ID
router.get('/api/recipes/:id', recipeController.getRecipeById);

// Update a recipe by ID
router.put('/api/recipes/:id', recipeController.updateRecipe);

// Delete a recipe by ID
router.delete('/api/recipes/:id', recipeController.deleteRecipe);


// Test route
router.get('/api/test', (req, res) => {
    res.json({ message: 'Connected to the backend!' });
});

module.exports = router;
