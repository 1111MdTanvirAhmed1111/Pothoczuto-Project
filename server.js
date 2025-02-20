require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const commentRoutes = require('./routes/commentRoutes')
const cors = require('cors')


//socket io
const { createServer } = require('http');
const { Server } = require('socket.io');
//end

const app = express();
const httpServer = createServer(app);




const io = new Server(httpServer, {
  cors: {
    origin: "*", // প্রোডাকশনে এখানে শুধু আপনার ফ্রন্টএন্ড ডোমেইন দিন
    methods: ["GET", "POST"]
  }
});

app.use(express.json());
 
app.use(cors())
app.use('/api/auth', authRoutes);
app.use('/api/posts', blogRoutes);
app.use('/api/comments', commentRoutes);

// Configure multer for image upload



// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

const PORT =  4000;

// Socket.IO events
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  // Join a specific post's room
  socket.on('join_post', (postId) => {
    socket.join(`post_${postId}`);
    console.log(`User ${socket.id} joined post ${postId}`);
  });

  // Leave a post's room
  socket.on('leave_post', (postId) => {
    socket.leave(`post_${postId}`);
    console.log(`User ${socket.id} left post ${postId}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });
});

// Make io accessible to our controllers
app.set('io', io);


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Use httpServer instead of app.listen
    httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err.message));

