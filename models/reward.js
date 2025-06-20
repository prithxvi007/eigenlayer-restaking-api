const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  userAddress: { type: String, required: true },
  amount: { type: Number, required: true },
  token: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reward', rewardSchema);
