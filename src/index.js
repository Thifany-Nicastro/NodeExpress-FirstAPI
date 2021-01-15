import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app';

const port = process.env.NODE_PORT

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})