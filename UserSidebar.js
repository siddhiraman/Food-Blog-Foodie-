import React, { useState } from 'react';
import './Navbar.css';
import './UserSidebar.css';
import UserSidebar from './UserSidebar';

const Navbar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Foodie
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isSidebarActive ? 'open' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/home">
                Home
              </a>
            </li>
            {/* ... (other navbar items) */}
            <li className="nav-item">
              <a className="nav-link" onClick={toggleSidebar}>
                User Sidebar
              </a>
              <div className={`user-sidebar ${isSidebarActive ? 'open' : ''}`}>
                <ul>
                  <li>Privacy</li>
                  <li>Comments</li>
                  <li>Blog Posts</li>
                  <li>Followers</li>
                  <li>Likes</li>
                  {/* Add more items as needed */}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
