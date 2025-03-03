const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Get all posts or a specific post
async function GetPosts(req, res) {
  const { id, limit } = req.query;

  try {
    if (id) {
      const post = await prisma.post.findUnique({
        where: { id },
      });
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ title: "Post Not Found" });
      }
    } else {
      const posts = await prisma.post.findMany({
        take: limit ? parseInt(limit) : undefined,
      });
      res.status(200).json(posts);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Create a new post
const createPost = async (req, res) => {
  try {
    if (!req.body.Pdata) {
      return res.status(400).json({ error: "Please Provide Details" });
    }

    const { title, content, author, category } = JSON.parse(req.body.Pdata);
    const imageUrl = req.file ? `./uploads/blogs/images/${req.file.filename}` : "null";

    const post = await prisma.post.create({
      data: {
        title,
        content,
        author,
        category,
        imageUrl,
      },
    });

    const io = req.app.get('io');
    io.emit('new_post', post);

    res.status(200).json(post);
  } catch (error) {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: 'Failed to create post', message: error.message });
  }
};

// Update a post
async function updatePost(req, res) {
  const { id } = req.params;

  if (!req.body.Pdata) {
    return res.status(404).json({ error: "Please Provide Details" });
  }

  try {
    const existingPost = await prisma.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    const { title, content, author, category } = JSON.parse(req.body.Pdata);
    let imageUrl = existingPost.imageUrl;

    if (req.file) {
      if (existingPost.imageUrl && existingPost.imageUrl !== "null") {
        const oldImagePath = path.join(__dirname, '..', existingPost.imageUrl);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      imageUrl = `./uploads/blogs/images/${req.file.filename}`;
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
        author,
        category,
        imageUrl,
      },
    });

    const io = req.app.get('io');
    io.to(`post_${id}`).emit('post_updated', updatedPost);

    res.status(200).json(updatedPost);
  } catch (error) {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: 'Failed to update post' });
  }
}

// Delete a post
async function deletePost(req, res) {
  const { id } = req.params;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.imageUrl && post.imageUrl !== "null") {
      const imagePath = path.join(__dirname, '..', post.imageUrl.replace('.', ''));
      console.log('Attempting to delete image at:', imagePath);
      
      try {
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
          console.log('Image deleted successfully');
        }
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }

    await prisma.post.delete({
      where: { id },
    });

    const io = req.app.get('io');
    io.emit('post_deleted', id);

    res.status(200).json({ message: "Post deleted successfully", post });
  } catch (error) {
    console.error('Delete post error:', error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
}

module.exports = { GetPosts, createPost, updatePost, deletePost };