const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
  rating: { type: Number, min:1, max:5, required: true },
  comment: String,
});
module.exports = mongoose.model('Review', ReviewSchema);
