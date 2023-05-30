const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter =  require('./controllers/bloglists')
const mongoose = require('mongoose')

const mongoUrl = 'mongodb+srv://fullstack:asader123@phonebook.rngmcxx.mongodb.net/bloglist?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
 
app.use('/api/blogs', blogsRouter) 
 
module.exports = app