const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    userType: {
        type: String,
        required: false,
    },
    profilePicture: {
        type: String,
        required: false,
    },
    fullName: {
        type: String,
        required: false,
    },
    contactInfo: {
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
    },
    socialMedia: {
        facebook: {
            type: String,
        },
        twitter: {
            type: String,
        },
    },
});

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;
