const express = require('express');
const cors = require('cors');
const authRoutes =require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

app.use('/auth',authRoutes);

const port = 8000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})