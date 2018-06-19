const model = require('../models')
const isValid = require('../helpers/input_validation')

class Controller {
  insert(req, res) {
    if (isValid.garage(req.body) === 'pass') {
      model.Garage.create(req.body)
      .then(response=>{
        res.send({
          status_code: 1,
          messege: 'success insert',
          data: response
        })
      })
      .catch(err => {
        res.send({
          status_code: 0,
          messege: err
        })
      })
    } else {
      res.send(isValid.garage(req.body))
    }
  }
  findAll(req, res) {
    model.Garage.findAll()
    .then(response => {
      res.send({
        status_code: 1,
        messege: 'seccess get all list Garages',
        data: response
      })
    })
    .catch(err => {
      res.send({
        status_code : 0,
        messege: err
      })
    })
  }
  deleteOne(req, res) {
    model.Garage.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(response => {
      let status_code = JSON.stringify(response)
      if (status_code == 1) {
        res.send({
          status_code: status_code,
          messege: 'berhasil dihapus'
        })
      } else {
        res.send({
          status_code: status_code,
          messege: 'garage tidak tersedia'
        })
      }
    })
    .catch(err => {
      res.send({
        status_code: 0,
        messege: err
      })
    })
  }
  findOne(req, res) {
    model.Garage.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(response => {
      res.send({
        status_code: 1,
        messege: `success findById : ${req.params.id}`,
        data: response
      })
    })
    .catch(err => {
      res.send({
        status_code: 0,
        messege: err
      })
    })
  }
}
const controller = new Controller()
module.exports = controller
