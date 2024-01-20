const express = require('express');
const router = express.Router();
const blogPostLikeController = require('../controller/blogpostlikeController');

// Like a blog post
router.post('/:postId/like', blogPostLikeController.likeBlogPost);

// Unlike a blog post
router.delete('/unlike/:postId', blogPostLikeController.unlikeBlogPost);

// Get the number of likes for a blog post
router.get('/count/:postId', blogPostLikeController.getLikeCount);

// Get the list of users who liked a blog post
router.get('/users/:postId', blogPostLikeController.getLikedUsers);

module.exports = router;
