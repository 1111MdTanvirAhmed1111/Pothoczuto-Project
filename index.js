require('dotenv').config()
const express = require('express')
const router = require('./router')
const app = express()
const cors = require('cors')
const https = require('https')
const { default: mongoose } = require('mongoose')

app.use(cors())
app.use(express.json({limit:"50mb"}))
app.use('/', router)


setInterval(() => {
    https.get("https://mukhboddho-mern.onrender.com"); 
    }, 2* 60 * 1000);

mongoose.connect(process.env.DB).then(res=>console.log("connected to db")).catch(err=>console.log(err));



app.listen()
