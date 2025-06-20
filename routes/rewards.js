const express = require('express');
const router = express.Router();
const {
  createReward,
  getAllRewards,
  getRewardById,
  updateReward,
  deleteReward
} = require('../controllers/rewardController');

router.post('/', createReward);
router.get('/', getAllRewards);
router.get('/:id', getRewardById);
router.put('/:id', updateReward);
router.delete('/:id', deleteReward);

module.exports = router;
