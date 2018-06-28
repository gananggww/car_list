const express = require('express');
const router = express.Router();
const garage_controller = require('../controllers/garage')
const jwt = require('jsonwebtoken')

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

router.get('/', midty, garage_controller.findAll)
router.post('/', midty, garage_controller.insert)
router.get('/:id', midty, garage_controller.findOne)
router.delete('/:id', midty, garage_controller.deleteOne)
router.put('/:id', midty, garage_controller.updateOne)


module.exports = router;
