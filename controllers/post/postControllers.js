
// Assuming you have a Post model like this:
const Post = require('../../models/Post') // Path to your Post model

// Get all posts or a specific post
async function GetPosts(req, res) {
  const { id } = req.query;

  if (id) {
    try {
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({ "title": "Post Not Found" });
      }

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

// Create a new post
const createPost = async (req, res) => {
  if (!req.body.Pdata) {
    return res.status(400).json({ "error": "Please Provide Details" });
  }

  const { title, content, author, category } = JSON.parse(req.body.Pdata);

  try {
    // Use the `create()` method to insert a new document in a single step
    const post = await Post.create({
      title,
      content,
      author,
      category
    });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post', message: error.message });
  }
};


// Update a post
async function updatePost(req, res) {
  const { id } = req.params;

  if (!req.body.Pdata) {
    return res.status(404).json({ "error": "Please Provide Details" });
  }

  const { title, content, author, category } = JSON.parse(req.body.Pdata);

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content, author, category },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ "error": "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
}

// Delete a post
async function deletePost(req, res) {
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ "error": "Post not found" });
    }


    // Delete the image file


    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
}

module.exports = { GetPosts, createPost, updatePost, deletePost };
