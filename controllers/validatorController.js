const Validator = require('../models/validator');

// CREATE
exports.createValidator = async (req, res) => {
  try {
    const validator = new Validator(req.body);
    await validator.save();
    res.status(201).json(validator);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ
exports.getAllValidators = async (req, res) => {
  try {
    const validators = await Validator.find();
    res.status(200).json(validators);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Validator by ID
exports.getValidatorById = async (req, res) => {
  try {
    const validator = await Validator.findById(req.params.id);
    if (!validator) return res.status(404).json({ error: 'Validator not found' });
    res.json(validator);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch validator' });
  }
};


// UPDATE
exports.updateValidator = async (req, res) => {
  try {
    const updated = await Validator.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
exports.deleteValidator = async (req, res) => {
  try {
    await Validator.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
