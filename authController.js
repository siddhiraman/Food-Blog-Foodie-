const User = require('../models/User'); // Import your User model

// User login
async function loginUser(req, res) {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        // If the user does not exist, return an error
        if (!user) {
            return res.status(401).json({ error: 'Incorrect email or password' });
        }

        // Compare the provided password with the stored password
        if (user.password !== password) {
            return res.status(401).json({ error: 'Incorrect email or password' });
        }

        // If the email and password are correct, send the user's data
        res.status(200).json({
            username: user.username, // Include any other user data you need
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    loginUser,
};
