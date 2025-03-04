require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const commentRoutes = require('./routes/commentRoutes')
const cors = require('cors')
const https = require('https')
const { socketsmanage } = require('./controllers/ChattingControllers');

//socket io
const { createServer } = require('http')
const { Server } = require('socket.io');


const app = express();
const httpServer = createServer(app);


const io = new Server(httpServer, {
  cors: {
    origin: ["https://pothoczuto.xyz"], // Your Next.js app URL
    methods: ["GET", "POST"],
    credentials: true,
    transports: ['websocket', 'polling'] // Add explicit transports
  },
  allowEIO3: true // Enable compatibility with Socket.IO v3 clients
});


// Socket.IO events

// Make io accessible to our controllers
app.set('io', io);

// Socket.IO events

io.on('connection', socket=>{

  socketsmanage(socket, io)

})
  




// Middlewares
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', blogRoutes);
app.use('/api/comments', commentRoutes);

// Configure multer for image upload
// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));





// Server Technical Zone (Connection)
const PORT = process.env.PORT || 5000;

// Getting Local Ip Address
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

// Mongoose Connection Setup


   httpServer.listen(PORT, () => console.log(`Server running on port ${ipAddress}:${PORT}`));


  setInterval(() => {
    https.get("https://pothoczuto-backend.onrender.com/"); 
    }, 45 * 1000);
  