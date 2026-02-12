const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  mobile: {
    type: String,
    required: true,
  },

  issue: {
    type: String,
    required: true,
  },

  source: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Query", querySchema);
