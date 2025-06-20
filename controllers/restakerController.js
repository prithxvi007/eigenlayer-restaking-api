const Restaker = require('../models/restaker');

// Get all restakers
exports.getAllRestakers = async (req, res) => {
  const restakers = await Restaker.find();
  res.json(restakers);
};

// Get one restaker by ID
exports.getRestakerById = async (req, res) => {
  const restaker = await Restaker.findById(req.params.id);
  if (!restaker) return res.status(404).json({ message: 'Not found' });
  res.json(restaker);
};

// Create new restaker
exports.createRestaker = async (req, res) => {
  try {
    const newRestaker = new Restaker(req.body);
    await newRestaker.save();
    res.status(201).json(newRestaker);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create restaker' });
  }
};


// Update Restaker
exports.updateRestaker = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Restaker.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Restaker not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update restaker' });
  }
};

// Delete Restaker
exports.deleteRestaker = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Restaker.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Restaker not found' });
    res.json({ message: 'Restaker deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete restaker' });
  }
};
