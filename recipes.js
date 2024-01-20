// recipes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipes'); // Import your Recipe model

// Define a route to fetch all recipes
router.get('/', async (req, res) => {
    try {
        // Fetch all recipes from the database
        const recipes = await Recipe.find();

        // Send the recipes as a JSON response
        res.json(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
