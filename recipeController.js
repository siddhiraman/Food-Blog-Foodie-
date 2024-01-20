const Recipe = require('../models/Recipes'); // Import your Recipe model

// Create a new recipe
async function createRecipe(req, res) {
    try {
        const newRecipe = new Recipe(req.body);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        console.error('Error creating recipe:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Fetch all recipes
async function getAllRecipes(req, res) {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Fetch a recipe by ID
async function getRecipeById(req, res) {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        console.error('Error fetching recipe by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Update a recipe by ID
async function updateRecipe(req, res) {
    const { id } = req.params;
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(updatedRecipe);
    } catch (error) {
        console.error('Error updating recipe:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Delete a recipe by ID
async function deleteRecipe(req, res) {
    const { id } = req.params;
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if (!deletedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json({ message: 'Recipe deleted' });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
};
