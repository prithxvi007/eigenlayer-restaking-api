const mongoose = require('mongoose');

const validatorSchema = new mongoose.Schema({
  validatorId: { type: String, required: true, unique: true },
  name: String,
  address: String
});

module.exports = mongoose.model('Validator', validatorSchema);
