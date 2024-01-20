import React from 'react';
import './AboutUsPage.css';

import Navbar from './Navbar'; // Import your Navbar component here

const AboutMePage = () => {
  return (
    <div>
      {/* Include the Navbar component */}
     

      <div className="about-us">
        <div className="about-image">
          {/* Place your background image here */}
        </div>
        
        <div className="about-content">

          <h2>About Us</h2>
          <div className="line"></div>
          <p>
           Propelled by our affection for flowers and energy about nature, it is our obsession to make creative and noteworthy plant and new flower courses of action. 
           We trust that the best, freshest flowers deliver the most noteworthy presentations. 
           BLOOM'S is glad to give quality flowers and plants to our customers. 
           Our retail premises opened in 2012 after much interest from the London open, who respected our orchids at the Chelsea Flower Show. 
           From that point forward, we have bloomed into a full administration flower specialist with both private and corporate customers. 
           We owe quite a bit of our prosperity to our extraordinary customers, who move us to make unique and dazzling structures. 
           Our master staff is here to enable all customers to pick the best flowers and plants for all events and purposes. 
           Since the primary orchid achieved Europe in 1515, its uncommon and fragile excellence has made it an image of extravagance and polish.
           Today there are more than 30,000 perceived types of orchids – with an astonishing 300 new assortments found every year – and BLOOM'S offers probably the most beautiful and fantastic blossoms accessible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
