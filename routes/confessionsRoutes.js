const express = require('express');
const router = express.Router();
const confessionsController = require('../controllers/confessionsController');


router.get('/', confessionsController.getAllConfessions);
router.get('/category/:cat', confessionsController.getConfessionsByCategory);
router.delete('/:id', confessionsController.deleteConfession);
router.get('/:id', confessionsController.getConfessionById);
router.post('/', confessionsController.createConfession);
module.exports = router;