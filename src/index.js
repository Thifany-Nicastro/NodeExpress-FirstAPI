import 'dotenv/config';
import app from './app';
import database from './config/database';

const port = process.env.NODE_PORT;

database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function() {
  console.log("Connected!");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})