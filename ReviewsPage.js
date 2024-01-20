// ReviewsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewsPage.css';

function ReviewsPage() {
    const [reviews, setReviews] = useState([]);

    // Fetch all reviews when the component mounts
    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await axios.get('http://localhost:3001/api/reviews'); // Replace with your actual API endpoint
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        }

        fetchReviews();
    }, []);

    return (
        <div className="reviews-container">
            <h2>All Reviews</h2>
            <div className="review-list">
                {reviews.map((review) => (
                    <div className="review-box" key={review._id}>
                        <h3>{review.title}</h3>
                        <p>{review.content}</p>
                        <p>Author: {review.author}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Date: {new Date(review.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewsPage;
