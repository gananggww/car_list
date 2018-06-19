const model = require('../models')
const isValid = require('../helpers/input_validation')

class Controller {
  insert(req, res) {
    req.body['regis_date'] = new Date()
    if (isValid.car(req.body) === 'pass') {
      model.Car.create(req.body)
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
      res.send(isValid.car(req.body))
    }
  }
  findAll(req, res) {
    model.Car.findAll()
    .then(response => {
      res.send({
        status_code: 1,
        messege: 'success get all car list',
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
  deleteOne(req, res) {
    model.Car.destroy({
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
    model.Car.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(response => {
      res.send({
        status_code: 1,
        messege: `success findById ${req.params.id}`,
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