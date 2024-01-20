const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // Add this line to parse JSON in request bodies

// Replace 'your-database-name' with your actual MongoDB database name
const dbURI = 'mongodb://127.0.0.1:27017/Foodie_Blog';

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');

    // Define and use the recipesRouter
    const recipesRouter = require('./foodie/routes/recipes'); // Adjust the path as needed
    app.use('/api/recipes', recipesRouter);

    // Define and use the usersRouter for user-related routes
    const usersRouter = require('./foodie/routes/userRoutes'); // Adjust the path as needed
    app.use('/api', usersRouter);

    // Include the login route here
    const authRouter = require('./foodie/routes/authRoutes'); // Adjust the path as needed
    
    app.use('/api', authRouter);

    

    app.get('/api/test', (req, res) => {
        res.json({ message: 'Connected to the backend!' });
    });

    const blogRouter = require('./foodie/routes/blogRoutes'); 
    app.use('/api', blogRouter);

    const reviewRouter = require('./foodie/routes/reviewRoutes'); 
    app.use('/api', reviewRouter);

    
   
    const recipeLikeRoutes = require('./foodie/routes/recipelikesroute');
    const blogPostLikeRoutes = require('./foodie/routes/blogpostlikesroute');

    app.use('/api/recipelikes', recipeLikeRoutes);
    app.use('/api/blogs', blogPostLikeRoutes);

    const followRoutes = require('./foodie/routes/userFollowRoutes');

    app.use('/api/user', followRoutes);

    

    



    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
