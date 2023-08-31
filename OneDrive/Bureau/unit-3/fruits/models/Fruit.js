const mongoose = require('mongoose');

// Schema is like the blueprint, or structure
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean
})

// model adds all the methods to the schema that we can use to edit our data
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;