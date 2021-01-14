import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
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