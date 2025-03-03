const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Global mapping of userId to socket.id
const userSocketMap = {};

const getChatting = async (req, res) => {
  const { from, to } = req.body;
  try {
    const chatting = await prisma.chatting.findFirst({
      where: {
        OR: [
          { from, to },
          { from: to, to: from },
        ],
      },
      include: { messages: true },
    });
    res.status(200).json(chatting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const chatList = async (req, res) => {
  const { from } = req.body;
  try {
    const chatting = await prisma.chatting.findMany({
      where: { from },
      include: { messages: true },
    });
    res.status(200).json(chatting);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const users = {};

// Socket controller with messaging to specific users
const socketsmanage = (socket, io) => {
  console.log('Socket connected:', socket.id);

  socket.on("join", (userId) => {
    users[userId] = socket.id;
  });

  // Listen for sendMessege event
  socket.on('sendMessege', async (data) => {
    const { from, to, content } = data;
    try {
      // Find existing chat between from and to (in either direction)
      let chatting = await prisma.chatting.findFirst({
        where: {
          OR: [
            { from, to },
            { from: to, to: from },
          ],
        },
        include: { messages: true },
      });

      if (!chatting) {
        // Create new chat if it doesn't exist
        chatting = await prisma.chatting.create({
          data: {
            from,
            to,
            messages: {
              create: { messager: from, content },
            },
          },
          include: { messages: true },
        });
      } else {
        // Add new message to existing chat
        await prisma.message.create({
          data: {
            messager: from,
            content,
            chattingId: chatting.id,
          },
        });
        // Fetch updated chatting with messages
        chatting = await prisma.chatting.findUnique({
          where: { id: chatting.id },
          include: { messages: true },
        });
      }

      // Emit to sender if online
      if (users[from]) {
        io.to(users[from]).emit('receivedMessege', { from, content });
      }

      // Emit to receiver if online
      if (users[to]) {
        io.to(users[to]).emit('receivedMessege', { from, content });
      }

    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = { getChatting, chatList, socketsmanage };