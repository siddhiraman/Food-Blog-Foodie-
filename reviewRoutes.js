const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController'); // Import the review controller module

// Create a new review
router.post('/reviews', reviewController.createReview);

// Fetch all reviews
router.get('/reviews', reviewController.getAllReviews);

// Fetch a review by ID
router.get('/reviews/:id', reviewController.getReviewById);

module.exports = router;
