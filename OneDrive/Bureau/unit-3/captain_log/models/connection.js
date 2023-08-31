require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Establish Connection
mongoose.connect(MONGO_URI, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on('open', () => console.log('connected to mongo'))
  .on('close', () => console.log('disconnected from mongoose'))
  .on('error', error => console.log(error))

  module.exports = mongoose;