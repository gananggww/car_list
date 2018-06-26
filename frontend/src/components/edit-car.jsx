import React, { Component } from 'react';
import { connect } from 'react-redux'

import { actionModalEditCar, editCar } from '../redux/action'

class EditCar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brand: "",
      model: "",
      year: "",
      color: "",
      mileage: "",
      engine: '',
      power: '',
      price: '',
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      brand: newProps.editValueCar_state.brand,
      model: newProps.editValueCar_state.model,
      year: newProps.editValueCar_state.year,
      color: newProps.editValueCar_state.color,
      mileage: newProps.editValueCar_state.mileage,
      engine: newProps.editValueCar_state.engine,
      power: newProps.editValueCar_state.power,
      price: newProps.editValueCar_state.price
    })
  }

  render () {
    return (
      <div style={{display: `${this.props.editModalCar_state}`}} id="myModal" class="modal">
        <div className="modal-content">
          <a onClick={() => this.props.modalEditCar_dispatch([this.state, 'none'])} class="close">&times;</a>
          <p></p>
          <div className="form-container">
            <div>Edit Car</div>
            <div className="input">
              <input value={this.state.brand} onChange={(e) => this.setState({brand:e.target.value})} placeholder="Brand"/>
              <input value={this.state.model}  onChange={(e) => this.setState({model:e.target.value})} placeholder="Model" />
              <input value={this.state.year}  onChange={(e) => this.setState({year:e.target.value})} placeholder="Year" />
              <input value={this.state.color}  onChange={(e) => this.setState({color:e.target.value})} placeholder="Color" />
              <input value={this.state.mileage}  onChange={(e) => this.setState({mileage:e.target.value})} placeholder="Mileage" />
              <input value={this.state.engine}  onChange={(e) => this.setState({engine:e.target.value})} placeholder="Engine" />
              <input value={this.state.power}  onChange={(e) => this.setState({power:e.target.value})} placeholder="Power" />
              <input value={this.state.price}  onChange={(e) => this.setState({price:e.target.value})} placeholder="Price" />
              <a onClick={() => this.props.editCar_dispatch([this.state, this.props.id_garage])} className="button-insert" type="button">Submit</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editModalCar_state: state.editCar_modal,
    editValueCar_state: state.editCar_value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modalEditCar_dispatch: (payload) => dispatch(actionModalEditCar(payload)),
    editCar_dispatch: (payload) => dispatch(editCar(payload))
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(EditCar)
export default Conn;
