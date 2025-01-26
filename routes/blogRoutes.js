const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const { createPost, GetPosts, deletePost, updatePost } = require('../controllers/blogController');
const { uploadSingle } = require('../middlewares/multer');

const router = express.Router();


router.post('/' , authMiddleware, roleMiddleware('admin'), uploadSingle('PostImg'),createPost)
router.get('/',GetPosts)
router.delete('/:id' , deletePost)
router.put('/:id' , updatePost)

module.exports = router;