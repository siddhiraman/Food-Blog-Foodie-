const express = require('express');
const router = express.Router();
const userFollowController = require('../Controller/userFollowController');


// Create a new follow relationship
router.post('/follow/:userId',  userFollowController.followUser);

// Remove an existing follow relationship
router.delete('/unfollow/:userId',  userFollowController.unfollowUser);

// Get a list of users following a specific user
router.get('/followers/:userId', userFollowController.getFollowers);

// Get a list of users followed by a specific user
router.get('/following/:userId', userFollowController.getFollowing);

module.exports = router;
