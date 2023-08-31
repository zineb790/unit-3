
const mongoose = require('./connection');
const { Schema, model } = mongoose;

// make logs schema
const logsSchema = new Schema({
  title: String,
  entry: String,
  shipIsBroken:  { type: Boolean, default: false },
  
},
     { timestamps: true }
);

// make the log model
const Log = model('Log', logsSchema);

module.exports = Log;