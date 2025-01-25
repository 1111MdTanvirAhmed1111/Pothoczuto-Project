require('dotenv').config()
const express = require('express')
const router = require('./router')
const app = express()
const cors = require('cors')



app.use(cors())
app.use(express.json({limit:"50mb"}))
app.use('/', router)

mongoose.connect(process.env.DB).then(res=>console.log("connected to db")).catch(err=>console.log(err));



app.listen(2084)
