const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  avgRating: { type: Number, default: 0 },
  category: { 
    type: String, 
    enum: ["coffee", "drink"], 
    required: true 
  }
});

module.exports = mongoose.model('Product', ProductSchema);