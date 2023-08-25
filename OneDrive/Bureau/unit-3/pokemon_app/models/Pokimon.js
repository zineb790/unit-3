const mongoose = require('mongoose');

// Schema is like the blueprint, or structure
const pokimonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
})

// model adds all the methods to the schema that we can use to edit our data
const Pokimon = mongoose.model('Pokimon', pokimonSchema);

module.exports = Pokimon;