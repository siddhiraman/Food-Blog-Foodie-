import './styles.css';
import MainLayout from './MainLayout';
import React from 'react';

// Sample food images (replace with your own)
const foodImages = [
  'https://example.com/food1.jpg',
  'https://example.com/food2.jpg',
  'https://example.com/food3.jpg',
  // Add more image URLs here
];

const HomePage = () => (
  <div>
    <h2>Welcome to Foodie Blog</h2>
    <div className="food-images">
      {foodImages.map((image, index) => (
        <img key={index} src={image} alt={`Food ${index + 1}`} />
      ))}
    </div>
  </div>
);

export default HomePage;