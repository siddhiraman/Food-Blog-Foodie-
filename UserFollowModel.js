const mongoose = require('mongoose');

const userFollowSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const UserFollow = mongoose.model('UserFollow', userFollowSchema);

module.exports = UserFollow;
