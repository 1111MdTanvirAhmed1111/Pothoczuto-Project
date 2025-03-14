const Chatting = require('@/models/Chatting');

// Global mapping of userId to socket.id
const userSocketMap = {};


const getChatting = async (req, res) => {
  const { from, to } = req.body;
  const chatting = await Chatting.findOne({ from, to });
  res.status(200).json(chatting);
};

const chatList = async (req, res) => {
  const { from } = req.body;
  const chatting = await Chatting.find({ from });
  res.status(200).json(chatting);
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
 const { from, to, content } = data
try {
  

    // Find or create the chatting document
    let chatting = await Chatting.findOne({ from, to }) || await Chatting.findOne({ from:to, to:from });



    if (!chatting) {
      chatting = await Chatting.create({
        from,
        to,
        messeges: [{ messeger: from, content }]
      });
    } else {
      chatting.messeges.push({ messeger: from, content });
      await chatting.save();
    }


    
    if (users[from]) {
      io.to(users[from]).emit('receivedMessege', { from, content });
    }

      if(users[to]){
        io.to(users[to]).emit('receivedMessege', { from, content })
      }

      
    } catch (error) {
      console.log(error)
    }
    }
  );







};

module.exports = { getChatting, chatList, socketsmanage };
