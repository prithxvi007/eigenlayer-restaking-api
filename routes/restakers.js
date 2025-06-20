const express = require('express');
const router = express.Router();
const {
  getAllRestakers,
  getRestakerById,
  createRestaker,
  updateRestaker,
  deleteRestaker
} = require('../controllers/restakerController');

router.get('/', getAllRestakers);             // GET all
router.get('/:id', getRestakerById);          // GET by ID
router.post('/', createRestaker);             // POST new
router.put('/:id', updateRestaker);           // UPDATE by ID
router.delete('/:id', deleteRestaker);        // DELETE by ID

module.exports = router;
