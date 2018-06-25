import React, { Component } from 'react';
import { connect } from 'react-redux'

import { insertCar } from '../redux/action'

import '../App.css'

class FormCar extends Component {
  constructor() {
    super()
    this.state = {
      brand: "",
      model: "",
      year: "",
      color: "",
      mileage: "",
      engine: '',
      power: '',
      price: '',
      modal: "none"
    }
  }

  form () {
    this.props.insertCar_dispatch([this.state, this.props.id_garage])
  }
  render() {
    return (
      <div className="container-insert">
        <a onClick={() => this.setState({modal:'block'})} id="openmodal-insert">
          Input Car
        </a>
        <div style={{display: `${this.state.modal}`}} id="myModal" class="modal">
          <div className="modal-content">
            <a onClick={() => this.setState({modal:'none'})} class="close">&times;</a>
            <p></p>
            <div className="form-container">
              <div>Input Garage</div>
              <div className="input">
                <input onChange={(e) => this.setState({brand:e.target.value})} placeholder="Brand"/>
                <input onChange={(e) => this.setState({model:e.target.value})} placeholder="Model" />
                <input onChange={(e) => this.setState({year:e.target.value})} placeholder="Year" />
                <input onChange={(e) => this.setState({color:e.target.value})} placeholder="Color" />
                <input onChange={(e) => this.setState({mileage:e.target.value})} placeholder="Milaege" />
                <input onChange={(e) => this.setState({engine:e.target.value})} placeholder="engine" />
                <input onChange={(e) => this.setState({power:e.target.value})} placeholder="price" />
                <input onChange={(e) => this.setState({price:e.target.value})} placeholder="Milaege" />
                <a onClick={() => this.form()} className="button-insert" type="button">Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertCar_dispatch: (payload) => dispatch(insertCar(payload))
  }
}

const Conn = connect(null, mapDispatchToProps)(FormCar)
export default Conn;
