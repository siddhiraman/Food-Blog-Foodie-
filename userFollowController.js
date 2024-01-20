const UserFollow = require('../models/UserFollowModel');

// Follow a user
async function followUser(req, res) {
    const { userId } = req.params;
    const followerId = req.user.id; // Extract the user ID from the authenticated user

    try {
        const follow = await UserFollow.create({
            follower: followerId,
            following: userId,
        });

        res.status(201).json(follow);
    } catch (error) {
        console.error('Error following user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Unfollow a user
async function unfollowUser(req, res) {
    const { userId } = req.params;
    const followerId = req.user.id; // Extract the user ID from the authenticated user

    try {
        const unfollow = await UserFollow.findOneAndDelete({
            follower: followerId,
            following: userId,
        });

        if (unfollow) {
            res.status(204).send(); // No content, indicating successful unfollow
        } else {
            res.status(404).json({ message: 'Follow relationship not found' });
        }
    } catch (error) {
        console.error('Error unfollowing user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Get a list of users following a specific user
async function getFollowers(req, res) {
    const { userId } = req.params;

    try {
        const followers = await UserFollow.find({ following: userId })
            .populate('follower', 'username'); // Populate the follower with their username
        res.status(200).json(followers);
    } catch (error) {
        console.error('Error fetching followers:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Get a list of users followed by a specific user
async function getFollowing(req, res) {
    const { userId } = req.params;

    try {
        const following = await UserFollow.find({ follower: userId })
            .populate('following', 'username'); // Populate the following user with their username
        res.status(200).json(following);
    } catch (error) {
        console.error('Error fetching following:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing,
};
