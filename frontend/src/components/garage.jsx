import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


import { garages, cars } from '../redux/action'

import '../App.css'

class Garage extends Component {
  componentWillMount() {
    this.props.garagesList_dispatch()
  }

  render() {
    return (
      <div className="garage-container">
        {
          this.props.garages_state.map(e => {
            return (
              <div>
                <Link to={`/${e.id}`} onClick={() => this.props.carsList_dispatch(e.id)}>
                  <div className="item">
                    <div className= "garage-name">
                      {e.name}
                    </div>
                    <div className="">
                      {e.address}
                    </div>
                    <div className="">
                      {e.phone_number}
                    </div>
                    <div className="">
                      {e.email}
                    </div>
                    <div className="">
                      {e.max_car}
                    </div>
                  </div>
                </Link>
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
    garages_state: state.garages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    garagesList_dispatch: () => dispatch(garages()),
    carsList_dispatch: (payload) => dispatch(cars(payload))
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Garage)
export default Conn;
