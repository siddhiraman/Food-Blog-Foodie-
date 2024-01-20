// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// User login
router.post('/login', authController.loginUser);



module.exports = router;
