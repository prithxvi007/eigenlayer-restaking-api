const express = require('express');
const {
  createValidator,
  getAllValidators,
  getValidatorById,  // add this
  updateValidator,
  deleteValidator,
} = require('../controllers/validatorController');

const router = express.Router();

router.post('/', createValidator);
router.get('/', getAllValidators);
router.get('/:id', getValidatorById);
router.put('/:id', updateValidator);
router.delete('/:id', deleteValidator);

module.exports = router;
