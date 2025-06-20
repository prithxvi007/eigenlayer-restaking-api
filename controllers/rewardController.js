const Reward = require('../models/reward');

// Create Reward with Validation
exports.createReward = async (req, res) => {
  try {
    const { userAddress, amount, token } = req.body;

    if (!userAddress || !amount || !token) {
      return res.status(400).json({ error: 'userAddress, amount, and token are required' });
    }

    const reward = new Reward({ userAddress, amount, token });
    await reward.save();
    res.status(201).json(reward);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create reward' });
  }
};

// Get All Rewards
exports.getAllRewards = async (req, res) => {
  try {
    const rewards = await Reward.find();
    res.json(rewards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rewards' });
  }
};

// Get Single Reward by ID
exports.getRewardById = async (req, res) => {
  try {
    const reward = await Reward.findById(req.params.id);
    if (!reward) return res.status(404).json({ error: 'Reward not found' });
    res.json(reward);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reward' });
  }
};

// Update Reward by ID
exports.updateReward = async (req, res) => {
  try {
    const reward = await Reward.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reward) return res.status(404).json({ error: 'Reward not found' });
    res.json(reward);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update reward' });
  }
};

// Delete Reward by ID
exports.deleteReward = async (req, res) => {
  try {
    const reward = await Reward.findByIdAndDelete(req.params.id);
    if (!reward) return res.status(404).json({ error: 'Reward not found' });
    res.json({ message: 'Reward deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete reward' });
  }
};
