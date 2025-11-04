const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeeSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String, // URL
  avgRating: { type: Number, default: 0 }
});

module.exports = mongoose.model('Coffee', CoffeeSchema);
