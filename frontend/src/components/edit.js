import React, { Component } from 'react';
import { connect } from 'react-redux'

import { actionModalEditGarage, editGarage } from '../redux/action'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      phone_number: '',
      email: '',
      max_car: '',
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      name: newProps.editValue_state.name,
      address: newProps.editValue_state.address,
      phone_number: newProps.editValue_state.phone_number,
      email: newProps.editValue_state.email,
      max_car: newProps.editValue_state.max_car
    })
  }

  render () {
    return (
      <div style={{display: `${this.props.editModal_state}`}} id="myModal" class="modal">
        <div className="modal-content">
          <a onClick={() => this.props.modalEditGarage_dispatch([this.state, 'none'])} class="close">&times;</a>
          <p></p>
          <div className="form-container">
            <div>Edit Garage</div>
            <div className="input">
              <input value={this.state.name} onChange={(e) => this.setState({name:e.target.value})} placeholder="Name"/>
              <input value={this.state.address}  onChange={(e) => this.setState({address:e.target.value})} placeholder="Address" />
              <input value={this.state.phone_number}  onChange={(e) => this.setState({phone_number:e.target.value})} placeholder="Phone Number" />
              <input value={this.state.email}  onChange={(e) => this.setState({email:e.target.value})} placeholder="Email" />
              <input value={this.state.max_car}  onChange={(e) => this.setState({max_car:e.target.value})} placeholder="Maximal Car" />
              <a onClick={() => this.props.editGarage_dispatch(this.state)} className="button-insert" type="button">Submit</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editModal_state: state.edit_modal,
    editValue_state: state.edit_value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modalEditGarage_dispatch: (payload) => dispatch(actionModalEditGarage(payload)),
    editGarage_dispatch: (payload) => dispatch(editGarage(payload))
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Edit)
export default Conn;
