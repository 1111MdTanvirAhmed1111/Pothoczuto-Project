require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const commentRoutes = require('./routes/commentRoutes')
const cors = require('cors')
const https = require('https')

const os = require('os');
const getLocalIpAddress = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal and non-IPv4 addresses
      if (!iface.internal && iface.family === 'IPv4') {
        return iface.address;
      }
    }
  }
  return 'localhost';
};
const ipAddress = getLocalIpAddress();



//socket io
const { createServer } = require('http');
const { Server } = require('socket.io');
//end

const app = express();
const httpServer = createServer(app);




const io = new Server(httpServer, {
  cors: {
    origin: ["pothoczuto.xyz"], // Your Next.js app URL
    methods: ["GET", "POST"],
    credentials: true,
    transports: ['websocket', 'polling'] // Add explicit transports
  },
  allowEIO3: true // Enable compatibility with Socket.IO v3 clients
});


setInterval(() => {
  https.get("https://pothoczuto-project-5kvp.onrender.com/"); 
  }, 45 * 1000);



app.use(express.json());
 
app.use(cors())
app.use('/api/auth', authRoutes);
app.use('/api/posts', blogRoutes);
app.use('/api/comments', commentRoutes);

// Configure multer for image upload



// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;

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
  
  socket.on("message", (message) => {
    console.log(message);
  })

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });
});

// Make io accessible to our controllers
app.set('io', io);


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB', ipAddress);
    // Use httpServer instead of app.listen
    httpServer.listen(PORT, () => console.log(`Server running on port ${ipAddress}:${PORT}`));
  })
  .catch((err) => console.log(err.message));

