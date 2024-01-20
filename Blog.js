const mongoose = require('mongoose');

// Define the schema for the "blogs" collection
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: false,
    },
});

// Create the "blogs" model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
