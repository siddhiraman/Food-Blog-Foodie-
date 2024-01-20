const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


// Create a new user
router.post('/register', userController.createUser);

// Fetch user profile by ID
router.get('/api/users/:id', userController.getUserProfile);

router.get('/user_data', userController.getUserProfile);


module.exports = router;
