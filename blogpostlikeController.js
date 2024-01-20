const BlogPostLike = require('../models/bloglikeModel');
const BlogPost = require('../models/Blog');


// Like a blog post
const likeBlogPost = async (req, res) => {
    try {
        const { postId, userId } = req.body;

        if (!userId) {
            return res.status(400).json({ message: 'userId is required in the request body.' });
        }

        // Check if the user has already liked the blog post
        const existingLike = await BlogPostLike.findOne({ post: postId, user: userId });

        if (existingLike) {
            return res.status(400).json({ message: 'You have already liked this blog post.' });
        }

        const newLike = new BlogPostLike({ post: postId, user: userId });
        await newLike.save();

        // You can also update the blog post model to increase its like count
        await BlogPost.findByIdAndUpdate(postId, { $inc: { likes: 1 } });

        return res.status(200).json({ message: 'Blog post liked successfully.' });
    } catch (error) {
        console.error('Error liking the blog post:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};



// Unlike a blog post
const unlikeBlogPost = async (req, res) => {
    const userId = req.user.id; // Assuming you have user information from authentication

    try {
        const { postId } = req.params;

        // Check if the user has liked the blog post
        const existingLike = await BlogPostLike.findOne({ post: postId, user: userId });

        if (!existingLike) {
            return res.status(400).json({ message: "You haven't liked this blog post." });
        }

        await existingLike.remove();

        // You can also update the blog post model to decrease its like count
        await BlogPost.findByIdAndUpdate(postId, { $inc: { likes: -1 } });

        return res.status(200).json({ message: 'Blog post unliked successfully.' });
    } catch (error) {
        console.error('Error unliking the blog post:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get the number of likes for a blog post
const getLikeCount = async (req, res) => {
    try {
        const { postId } = req.params;
        const likeCount = await BlogPostLike.countDocuments({ post: postId });
        return res.status(200).json({ count: likeCount });
    } catch (error) {
        console.error('Error getting like count:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get the list of users who liked a blog post
const getLikedUsers = async (req, res) => {
    try {
        const { postId } = req.params;
        const likedUsers = await BlogPostLike.find({ post: postId }).populate('user', 'username');
        return res.status(200).json(likedUsers);
    } catch (error) {
        console.error('Error getting liked users:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { likeBlogPost, unlikeBlogPost, getLikeCount, getLikedUsers };
