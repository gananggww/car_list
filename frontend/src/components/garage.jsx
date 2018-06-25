import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


import { garages, cars, deleteGarage, actionModalEditGarage } from '../redux/action'
import Form from './form.js'
import Edit from './edit.js'


import '../App.css'

class Garage extends Component {
  componentWillMount() {
    this.props.garagesList_dispatch()
  }

  render() {
    return (
      <div className="garage-container">
        <div>
          <Form/>
        </div>
        <div>
          <Edit/>
        </div>
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
                <div className="content-opsi">
                  <a onClick={() => this.props.modalEditGarage_dispatch([e, 'block'])} className="opsi edit">Edit</a>
                  <a onClick={() => this.props.deleteGarage_dispatch(e)} className="opsi hapus">Hapus</a>
                </div>
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
    garagesList_dispatch: () => dispatch(garages()),
    carsList_dispatch: (payload) => dispatch(cars(payload)),
    deleteGarage_dispatch: (payload) => dispatch(deleteGarage(payload)),
    modalEditGarage_dispatch: (payload) => dispatch(actionModalEditGarage(payload)),
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Garage)
export default Conn;
