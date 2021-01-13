const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const userRoutes = require('./src/routes/userRoutes')
const postRoutes = require('./src/routes/postRoutes')

const app = express()
const port = process.env.NODE_PORT

app.use('/users', userRoutes)
app.use('/posts', postRoutes)

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})