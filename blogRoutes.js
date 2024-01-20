const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
const Blog = require('../models/Blog');
 // Import your blog controller module

// Create a new blog
router.post('/blogs', blogController.createBlog);

// Fetch all blogs
router.get('/blogs', blogController.getAllBlogs);

// Fetch a blog by ID
router.get('/blogs/:id', blogController.getBlogById);

// Update a blog by ID
router.put('/blogs/:id', blogController.updateBlog);

// Delete a blog by ID
router.delete('/blogs/:id', blogController.deleteBlog);

router.get('/blogposts/:author', blogController.fetchBlogPosts);

// Route for creating a new blog post
router.post('/blogposts', blogController.createBlogPost);

module.exports = router;
