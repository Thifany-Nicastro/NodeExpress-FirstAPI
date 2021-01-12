const express = require('express')
const bodyParser = require("body-parser");
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')

const app = express()
const port = 3000

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})