const RecipeLike = require('../models/Recipes');
const Recipe = require('../models/recipelikeModel');

// Like a recipe
const likeRecipe = async (req, res) => {
    const userId = req.user.id; // Assuming you have user information from authentication

    try {
        const { recipeId } = req.params;

        // Check if the user has already liked the recipe
        const existingLike = await RecipeLike.findOne({ recipe: recipeId, user: userId });

        if (existingLike) {
            return res.status(400).json({ message: 'You have already liked this recipe.' });
        }

        const newLike = new RecipeLike({ recipe: recipeId, user: userId });
        await newLike.save();

        // You can also update the recipe model to increase its like count
        await Recipe.findByIdAndUpdate(recipeId, { $inc: { likes: 1 } });

        return res.status(200).json({ message: 'Recipe liked successfully.' });
    } catch (error) {
        console.error('Error liking the recipe:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Unlike a recipe
const unlikeRecipe = async (req, res) => {
    const userId = req.user.id; // Assuming you have user information from authentication

    try {
        const { recipeId } = req.params;

        // Check if the user has liked the recipe
        const existingLike = await RecipeLike.findOne({ recipe: recipeId, user: userId });

        if (!existingLike) {
            return res.status(400).json({ message: "You haven't liked this recipe." });
        }

        await existingLike.remove();

        // You can also update the recipe model to decrease its like count
        await Recipe.findByIdAndUpdate(recipeId, { $inc: { likes: -1 } });

        return res.status(200).json({ message: 'Recipe unliked successfully.' });
    } catch (error) {
        console.error('Error unliking the recipe:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get the number of likes for a recipe
const getLikeCount = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const likeCount = await RecipeLike.countDocuments({ recipe: recipeId });
        return res.status(200).json({ count: likeCount });
    } catch (error) {
        console.error('Error getting like count:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get the list of users who liked a recipe
const getLikedUsers = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const likedUsers = await RecipeLike.find({ recipe: recipeId }).populate('user', 'username');
        return res.status(200).json(likedUsers);
    } catch (error) {
        console.error('Error getting liked users:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { likeRecipe, unlikeRecipe, getLikeCount, getLikedUsers };
