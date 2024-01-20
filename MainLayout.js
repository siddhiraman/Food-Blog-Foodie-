// MainLayout.js
import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="content">
        {children}
      </div>
      {/* Add any other layout elements here */}
    </div>
  );
};

export default MainLayout;
