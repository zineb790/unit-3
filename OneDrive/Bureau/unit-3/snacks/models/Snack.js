const { Schema, model } = require('mongoose');

// make fruits schema
const snacksSchema = new Schema({
  name: String,
  cost: Number,
  calories: Number
});

// make the snack model
const Snack = model('Snack', snacksSchema);

module.exports = Snack;