const { Schema, model } = require('mongoose');

const flightsSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    required: true,
    default: () => new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000) // One year from now
  }
});

const Flight = model('Flight', flightsSchema);

module.exports = Flight;