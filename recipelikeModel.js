const mongoose = require('mongoose');

const recipeLikeSchema = new mongoose.Schema({
    recipeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe', // Reference to the Recipe model
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const RecipeLike = mongoose.model('RecipeLike', recipeLikeSchema);

module.exports = RecipeLike;
