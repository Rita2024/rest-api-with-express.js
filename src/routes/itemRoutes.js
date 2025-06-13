const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { validateItem } = require('../utils/validator');
const auth = require('../middlewares/auth');

// All item routes protected
router.get('/', auth, itemController.getAllItems);
router.get('/:id', auth, itemController.getItemById);
router.post('/', auth, validateItem, itemController.createItem);
router.put('/:id', auth, validateItem, itemController.updateItem);
router.delete('/:id', auth, itemController.deleteItem);

module.exports = router;