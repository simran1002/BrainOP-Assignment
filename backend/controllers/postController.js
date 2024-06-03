const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author').sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
