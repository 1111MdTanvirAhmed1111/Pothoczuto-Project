const { GetPosts, updatePost, deletePost, createPost } = require('./controllers/post/postControllers')
const {uploadSingle} = require('./middlewares/multer')
const router = require('express').Router()


// Posts Zone

router.post('/posts' , uploadSingle('PostImg'),createPost)
router.get('/posts',GetPosts)
router.delete('/posts/:id' , deletePost)
router.put('/posts/:id' , updatePost)


module.exports = router