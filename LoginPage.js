import React, { useState } from 'react';
import './LoginPage.css';
import Navbar from './Navbar';
import axios from 'axios';
import { useAuth } from './AuthContext';

function LoginPage() {
    const { loggedIn, login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const simulateLogin = false;

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            if (simulateLogin) {
                const userData = {
                    username: 'testuser',
                    userId: '12345',
                    // Add other user data here
                };
                login(userData.username, userData);
                setMessage('Logged in');
            } else {
                const response = await axios.post('http://localhost:3001/api/login', {
                    email,
                    password,
                });

                if (response.status === 200) {
                    const userData = response.data;
                    login(userData.username, userData);
                    setMessage('Logged in');
                } else {
                    setMessage('Incorrect email or password');
                }
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setMessage('Incorrect Username or Password.');
        }
    };

    return (
        <div>
            <Navbar loggedIn={loggedIn} />
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button type="submit">Login</button>
                </form>
                <p>{message}</p>
                <p>
                    Don't have an account?{' '}
                    <a href="/create-account" style={{ color: 'blue' }}>
                        Create one
                    </a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
