const express = require('express');
const router = express.Router();
const garage_controller = require('../controllers/garage')

router.get('/', garage_controller.findAll)
router.post('/', garage_controller.insert)
router.get('/:id', garage_controller.findOne)
router.delete('/:id', garage_controller.deleteOne)


module.exports = router;
