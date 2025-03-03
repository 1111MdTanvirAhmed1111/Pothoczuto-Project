const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Get all comments for a blog post
const getAllComments = async (req, res) => {
  try {
    const { blogId } = req.params;
    const comments = await prisma.comment.findMany({
      where: { blogId },
      include: { replies: true },
    });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.', error: err.message });
  }
};

// Add a comment to a blog post
const addComment = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { text } = req.body;
    const comment = await prisma.comment.create({
      data: {
        blogId,
        text,
        createdBy: req.user.id, // Changed from _id to id
      },
    });
    res.status(201).json({ message: 'Comment added successfully.', comment });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.', error: err.message });
  }
};

// Reply to a comment
const replyToComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { text } = req.body;
    
    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });
    if (!comment) return res.status(404).json({ message: 'Comment not found.' });

    const reply = await prisma.reply.create({
      data: {
        text,
        createdBy: req.user.id,
        commentId,
      },
    });

    const updatedComment = await prisma.comment.findUnique({
      where: { id: commentId },
      include: { replies: true },
    });

    res.status(200).json({ message: 'Reply added successfully.', comment: updatedComment });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.', error: err.message });
  }
};

// Edit a comment
const editComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    
    const comment = await prisma.comment.findUnique({
      where: { id },
    });
    if (!comment) return res.status(404).json({ message: 'Comment not found.' });

    if (comment.createdBy !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized to edit this comment.' });
    }

    const updatedComment = await prisma.comment.update({
      where: { id },
      data: { text },
    });

    res.status(200).json({ message: 'Comment edited successfully.', comment: updatedComment });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.', error: err.message });
  }
};

// Approve a comment
const approveComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await prisma.comment.update({
      where: { id },
      data: { approved: true },
    });
    if (!comment) return res.status(404).json({ message: 'Comment not found.' });
    res.status(200).json({ message: 'Comment approved.', comment });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.', error: err.message });
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await prisma.comment.delete({
      where: { id },
    });
    if (!comment) return res.status(404).json({ message: 'Comment not found.' });
    res.status(200).json({ message: 'Comment deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.', error: err.message });
  }
};

module.exports = { 
  addComment, 
  replyToComment, 
  approveComment, 
  deleteComment,
  editComment,
  getAllComments
};