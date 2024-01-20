const Review = require('../models/reviewModel'); // Import the Review model

// Create a new review
async function createReview(req, res) {
    try {
        const newReview = new Review(req.body);
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        console.error('Error creating review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Fetch all reviews
async function getAllReviews(req, res) {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Fetch a review by ID
async function getReviewById(req, res) {
    const { id } = req.params;
    try {
        const review = await Review.findById(id);
        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        console.error('Error fetching review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createReview,
    getAllReviews,
    getReviewById,
};
