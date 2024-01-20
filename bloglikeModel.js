const mongoose = require('mongoose');

const blogPostLikeSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogPost', // Reference to the BlogPost model
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

const BlogPostLike = mongoose.model('BlogPostLike', blogPostLikeSchema);

module.exports = BlogPostLike;
