const mongoose = require('mongoose');

const restakerSchema = new mongoose.Schema({
  address: String,
  amount: Number,
  validatorId: String,
  token: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Restaker', restakerSchema);
