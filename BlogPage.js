import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogPage.css'; // Import your CSS file
import { useAuth } from './AuthContext'; // Import the useAuth hook

function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const { loggedIn } = useAuth(); // Get the loggedIn state from your AuthContext

    // Fetch all blogs when the component mounts
    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await axios.get('http://localhost:3001/api/blogs'); // Replace with your actual API endpoint
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        }

        fetchBlogs();
    }, []);

    const handleLike = async (index) => {
        if (loggedIn) { // Check if the user is logged in
            // Retrieve the user ID from local storage
            const userId = localStorage.getItem('userId');

            if (!userId) {
                // Handle the case where the user ID is not found in local storage
                console.error('User ID not found in local storage.');
                return;
            }

            // Retrieve the actual blogId from your state using the 'index'
            const blogId = blogs[index]._id; // Replace '_id' with the actual property that stores the post ID

            // Define the request data
            const requestData = {
                postId: blogId, // Actual post ID retrieved from the selected blog post
                userId: userId, // Retrieve the user ID from local storage
            };

            try {
                // Make the POST request with requestData
                await axios.post(`http://localhost:3001/api/blogs/${blogId}/like`, requestData);
                // You can update your local state or perform any actions needed
            } catch (error) {
                console.error('Error liking blog:', error);
            }
        }
    };

    const handleFollow = async (userId) => {
        if (loggedIn) { // Check if the user is logged in
            // Implement the logic to follow a user only if the user is logged in
            try {
                await axios.post(`http://localhost:3001/api/user/follow/${userId}`);
                // You can update your local state or perform any actions needed
            } catch (error) {
                console.error('Error following user:', error);
            }
        }
    };

    return (
        <div className="blog-container">
            <h2>All Blogs</h2>
            <div className="blog-list">
                {blogs.map((blog, index) => (
                    <div className="blog-box" key={blog._id}>
                        <h3>{blog.title}</h3>
                        <p className="blog-details">
                            <span>Author: {blog.author}</span>
                            {loggedIn ? ( // Check if the user is logged in
                                <div className="blog-actions">
                                    <button onClick={() => handleLike(index)}>Like</button>
                                    <button onClick={() => handleFollow(blog.author)}>Follow</button>
                                </div>
                            ) : null}
                        </p>
                        <p>{blog.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogPage;
