const express = require('express');
const router = express.Router();
const car_controller = require('../controllers/car')

router.get('/', car_controller.findAll)
router.post('/', car_controller.insert)
router.get('/garage/:id', car_controller.findOne)
router.delete('/:id', car_controller.deleteOne)
router.get('/:garages_id', car_controller.findOneByGaragesId)



module.exports = router;
