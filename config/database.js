const mongoose = require('mongoose');

// Global configuration
const mongoURI = process.env.MONGO_URI;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
  .on('open', () => console.log('connected to mongo'))
  .on('close', () => console.log('disconnected from mongoose'))
  .on('error', error => console.log(error))



module.exports = db;