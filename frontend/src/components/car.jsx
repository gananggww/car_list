import React, { Component } from 'react';
import { connect } from 'react-redux'

import { cars } from '../redux/action'

class Car extends Component {
  componentDidMount () {
    if (this.props.carList_state.length === 0) {
      this.props.carsList_dispatch(this.props.match.params.id)
    }
  }
  render() {
    return (
      <div>
        {JSON.stringify(this.props.carList_state)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carList_state: state.car
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    carsList_dispatch: (payload) => dispatch(cars(payload))
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Car)
export default Conn;
