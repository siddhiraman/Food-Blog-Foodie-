const User = require('../models/User'); // Import your User model

// Create a new user
async function createUser(req, res) {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Fetch user profile by ID
async function getUserProfile(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select('-password'); // Exclude the password field from the response
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createUser,
    getUserProfile,
};
