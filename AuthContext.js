import { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [userId, setUserId] = useState(null); // Add userId state

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const savedUsername = localStorage.getItem('username');
        //const savedUserId = localStorage.getItem('userId'); // Retrieve user ID

        setLoggedIn(isUserLoggedIn);
        setUsername(savedUsername || '');
        //setUserId(savedUserId || ''); // Set the userId state

        if (isUserLoggedIn) {
            axios.get('http://localhost:3001/api/user_data') // Replace with your endpoint
                .then((response) => {
                    setUserData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });

            // Fetch and set the user ID
            fetchAndSetUserId();
        }
    }, []);

    const fetchUserId = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/user-id'); // Replace with your endpoint
            if (response.status === 200) {
                return response.data.userId.toString(); // Convert ObjectId to a string
            }
        } catch (error) {
            console.error('Error fetching user ID:', error);
        }
        return null;
    };

    const fetchAndSetUserId = async () => {
        const id = await fetchUserId();
        if (id) {
            setUserId(id);
        }
    };

    const login = (username, userData) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);

        if (userData) {
            localStorage.setItem('userData', JSON.stringify(userData));
            //localStorage.setItem('userId', userData.userId.toString()); // Store the user ID as a string
        }

        setLoggedIn(true);
        setUsername(username);
        //setUserId(userData ? userData.userId.toString() : null); // Set userId state as a string
    };

    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('userId'); // Remove user ID from localStorage
        setLoggedIn(false);
        setUsername('');
        setUserId(null); // Clear the userId state
        setUserData(null);
    };

    return (
        <AuthContext.Provider value={{ loggedIn, username, userData, userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
