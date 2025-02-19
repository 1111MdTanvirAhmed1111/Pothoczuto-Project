require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const commentRoutes = require('./routes/commentRoutes')
const cors = require('cors')
const app = express();
const https = require('https')

app.use(express.json());
 
app.use(cors())
app.use('/api/auth', authRoutes);
app.use('/api/posts', blogRoutes);
app.use('/api/comments', commentRoutes);

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
