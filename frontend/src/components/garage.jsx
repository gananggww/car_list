import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


import { garages, cars, deleteGarage, actionModalEditGarage } from '../redux/action'
import Form from './form.js'
import Edit from './edit.js'


import '../App.css'

class Garage extends Component {
  componentWillMount() {
    let token = localStorage.getItem('token')
    let role = localStorage.getItem('role')
    if (token) {
      this.props.garagesList_dispatch(token)
    } else {
      if (this.props.history) {
        this.props.history.push('/')
      }
    }
  }

  ifAdminEditHapus (e) {
    let role = localStorage.getItem('role')
    let token = localStorage.getItem('token')
    if (role === 'admin') {
      return (
        <div className="content-opsi">
          <a onClick={() => this.props.modalEditGarage_dispatch([e, 'block'])} className="opsi edit">Edit</a>
          <a onClick={() => this.props.deleteGarage_dispatch({e, token})} className="opsi hapus">Hapus</a>
        </div>
      )
    }
  }

  ifAdminModal () {
    let role = localStorage.getItem('role')
    if (role === 'admin') {
      return (
        <div>
          <div>
            {<Form/>}
          </div>
          <div>
            <Edit/>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="garage-container">
          {this.ifAdminModal()}
          {
            this.props.garages_state.map(e => {
              return (
                <div className="container-item">
                  <Link to={`/${e.id}`} onClick={() => this.props.carsList_dispatch(e.id)}>
                    <div className="item">
                      <div className= "garage name">
                        {e.name}
                      </div>
                      <div className="garage">
                        {e.address}
                      </div>
                      <div className="garage">
                        {e.phone_number}
                      </div>
                      <div className="garage">
                        {e.email}
                      </div>
                      <div className="garage">
                        {e.max_car}
                      </div>
                    </div>
                  </Link>
                  {this.ifAdminEditHapus(e)}
                </div>

              )
            })
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    garages_state: state.garages,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    garagesList_dispatch: (payload) => dispatch(garages(payload)),
    carsList_dispatch: (payload) => dispatch(cars(payload)),
    deleteGarage_dispatch: (payload) => dispatch(deleteGarage(payload)),
    modalEditGarage_dispatch: (payload) => dispatch(actionModalEditGarage(payload)),
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Garage)
export default Conn;
