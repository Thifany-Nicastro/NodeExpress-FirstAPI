import express from 'express';
const dotenv = require('dotenv').config()
import bodyParser from 'body-parser';
const mongoose = require('mongoose')

// const userRoutes = require('./routes/userRoutes')
// const postRoutes = require('./routes/postRoutes')
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app = express()
const port = process.env.NODE_PORT

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello! :D'} );
});

app.use('/users', userRoutes)
app.use('/posts', postRoutes)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})