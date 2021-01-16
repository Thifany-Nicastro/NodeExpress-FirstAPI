import 'dotenv/config';
import mongoose from 'mongoose';

const name = process.env.DB_DATABASE;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbURI = `mongodb+srv://${user}:${password}@cluster0.g9eik.mongodb.net/${name}?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

export default database;