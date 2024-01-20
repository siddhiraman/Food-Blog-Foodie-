const mongoose = require('mongoose');

// Replace with your actual MongoDB connection string
const dbURI = 'mongodb://127.0.0.1:27017/Foodie_Blog';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = db; // Export the database connection for use in other parts of your application
