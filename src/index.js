import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes';

const app = express()
const port = process.env.NODE_PORT

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})