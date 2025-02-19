require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const commentRoutes = require('./routes/commentRoutes')
const cors = require('cors')
const app = express();
const https = require('https')
const multer = require('multer');
const path = require('path');
const blogController = require('./controllers/blogController');

app.use(express.json());
 
app.use(cors())
app.use('/api/auth', authRoutes);
app.use('/api/posts', blogRoutes);
app.use('/api/comments', commentRoutes);

// Configure multer for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/blogs/images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
});

// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

const PORT =  4000;


setInterval(() => {
https.get('https://mukhboddho-mern.onrender.com')
}, 2* 60 * 1000);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err.message));

// Blog routes with image upload
app.post('/api/posts', auth, upload.single('image'), blogController.createPost);
app.put('/api/posts/:id', auth, upload.single('image'), blogController.updatePost);
app.delete('/api/posts/:id', auth, blogController.deletePost);
