const Comment = require('../models/Comment');

// Add a comment to a blog post
const addComment = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { text } = req.body;
    const comment =  await Comment.create({
      blogId,
      text,
      createdBy: req.user._id,
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
    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found.' });

    comment.replies.push({ text, createdBy: req.user._id });
    await comment.save();
    res.status(200).json({ message: 'Reply added successfully.', comment });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error.', error: err.message });
  }
};

// Approve a comment
const approveComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findByIdAndUpdate(
      id,
      { approved: true },
      { new: true }
    );
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
    const comment = await Comment.findByIdAndDelete(id);
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
  deleteComment 
};