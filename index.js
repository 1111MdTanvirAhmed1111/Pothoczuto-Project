require('dotenv').config()
const express = require('express')
const router = require('./router')
const app = express()
const cors = require('cors')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


app.use(cors())
app.use(express.json({limit:"50mb"}))
app.use('/', router)



app.listen(2084)
