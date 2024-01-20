const express = require('express');
const router = express.Router();
const recipeLikeController = require('../controller/recipelikeController');

// Like a recipe
router.post('/like/:recipeId', recipeLikeController.likeRecipe);

// Unlike a recipe
router.delete('/unlike/:recipeId', recipeLikeController.unlikeRecipe);

// Get the number of likes for a recipe
router.get('/count/:recipeId', recipeLikeController.getLikeCount);

// Get the list of users who liked a recipe
router.get('/users/:recipeId', recipeLikeController.getLikedUsers);

module.exports = router;
