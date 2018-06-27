const express = require('express');
const router = express.Router();
const car_controller = require('../controllers/car')

const midty = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token,"XWORK")
    req.headers.auth = decoded
    next()
  }
  else {
    res.send({
      status_code: 0,
      messege: 'Sorry, you must login first',
    })
  }
}


router.get('/', car_controller.findAll)
router.post('/', midty, car_controller.insert)
router.get('/garage/:id', car_controller.findOne)
router.delete('/:id', midty, car_controller.deleteOne)
router.get('/:garages_id', car_controller.findOneByGaragesId)
router.put('/:id', midty, car_controller.updateOne)



module.exports = router;
