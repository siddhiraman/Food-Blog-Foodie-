import './CreateAccountPage.css'; // Import your CSS file
import Navbar from './Navbar';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

function CreateAccountPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleCreateAccount = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to your backend for user registration
            const response = await axios.post('http://localhost:3001/api/register', {
                email,
                password,
                username,
            });

            // Check the response from the backend
            if (response.status === 201) {
                // User registration successful
                setMessage('Account created! You can now log in.');
                // You can redirect the user to the login page or other pages here if needed
            } else {
                // Registration failed
                setMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error creating account:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="create-account-container">
                <h2>Create Account</h2>
                <form onSubmit={handleCreateAccount}>
                    <div className="input-container">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Create Account</button>
                </form>
                <p>{message}</p> {/* Display registration status message */}
            </div>
        </div>
    );
}

export default CreateAccountPage;
