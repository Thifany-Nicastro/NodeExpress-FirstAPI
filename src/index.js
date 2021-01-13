// import Express from 'express';
// import { Server } from "./Server"

// const server = new Server()

// server.startup()

// import express from "express"

// const app = express()

// app.listen(8000, () => {
//     console.log("server started at http://localhost:3000")
// })

import express from 'express';

const dotenv = require('dotenv').config()
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')

// const userRoutes = require('./routes/userRoutes')
// const postRoutes = require('./routes/postRoutes')

const app = express()
const port = process.env.NODE_PORT

// app.use('/users', userRoutes)
// app.use('/posts', postRoutes)

// app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})