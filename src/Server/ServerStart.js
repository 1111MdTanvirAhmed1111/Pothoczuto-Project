const express = require('express');
const path = require('path');

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
 


const {getLocalIpAddress} = require('@/utils/ipAddress');
const ipAddress = getLocalIpAddress();

const StartServer = async () => {
    const PORT = process.env.PORT || 5000;
    httpServer.listen(PORT, () => console.log(`Server running on port ${ipAddress}:${PORT}`));
}


module.exports = {StartServer, io , app, httpServer}