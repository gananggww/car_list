const model = require('../models')
const isValid = require('../helpers/input_validation')
const jwt = require('jsonwebtoken')

class Controller {
  login (req, res) {
    if (isValid.login(req.body) === 'pass') {
      model.User.findOne({
        where: {
          username : req.body.username
        }
      })
      .then(row =>{
        if(row.password == req.body.password) {
          var token = jwt.sign({ id: row._id, username : row.username }, 'XWORK');
          res.send({status_code: 1, token : token, username : row.username, fullname: row.fullname, role: row.role})
        } else {
          res.send(err)
        }
      })
      .catch(err=>{
        res.send(err)
      })
    } else {
      res.send(isValid.login(req.body))
    }
  }
}

const controller = new Controller()
module.exports = controller
