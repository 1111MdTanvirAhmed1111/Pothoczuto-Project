const express = require('express');
const {
  addComment,
  replyToComment,
  approveComment,
  deleteComment,
} = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Add a comment to a blog post
router.post('/:blogId', authMiddleware, addComment);

// Reply to a comment
router.post('/reply/:commentId', authMiddleware, replyToComment);

// Approve a comment (admin only)
router.put('/:id/approve', authMiddleware, roleMiddleware('admin'), approveComment);

// Delete a comment (admin only)
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteComment);

module.exports = router;
