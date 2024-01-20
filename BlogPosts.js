import React, { useState, useEffect } from 'react';
import './BlogPosts.css'; // You can create a BlogPosts.css file for styling
import axios from 'axios';
import { useAuth } from './AuthContext'; // Import the useAuth hook

function BlogPosts() {
    const { username } = useAuth();
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState({ title: '', content: '' });

    useEffect(() => {
        axios.get(`http://localhost:3001/api/blogposts/${username}`)
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.error('Error fetching blog posts:', error);
            });
    }, [username]);

    const handleBlogCreate = () => {
        axios.post('http://localhost:3001/api/blogposts', { ...newBlog, author: username })
            .then((response) => {
                // Handle success, e.g., update your state with the new blog post
                // You can also clear the form
                setNewBlog({ title: '', content: '' });
            })
            .catch((error) => {
                console.error('Error creating a blog post:', error);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBlog({ ...newBlog, [name]: value });
    };

    return (
        <div className="blog-posts">
            <div className="create-blog-section">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h3>Create a New Blog Post</h3>

                <div className="create-blog-form">
                    <div className="input-box">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={newBlog.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-box">
                        <textarea
                            name="content"
                            placeholder="Blog Content"
                            value={newBlog.content}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="create-button" onClick={handleBlogCreate}>Create</button>
                </div>
            </div>

            <div className="existing-blog-posts">
                <h3>My Existing Blog Posts</h3>
                {blogs.map((blog) => (
                    <div key={blog._id} className="blog-post">
                        <h4>{blog.title}</h4>
                        <p>{blog.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogPosts;
