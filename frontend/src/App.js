import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect  } from "react-router-dom";
import { Provider } from 'react-redux'

import Car from './components/car'
import Garage from './components/garage'
import Login from './components/login'


import './App.css';

import store from './redux/store'

class App extends Component {
  isLogin () {
    let token = localStorage.getItem('token')
    if (token) {
      return (
        <div>
          <a className="logout-button">Logout</a>
        </div>
      )
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="header">
            </div>
            <Route exact path="/" render={() => (
              localStorage.getItem('token') ? (
                <Redirect to="/garages"/>
              ) : (
                <Garage/>
              )
            )}/>
            <Route exact path="/" component={Login} />
            <Route path="/garages" component={Garage} />
            <Route path="/garages/:id" component={Car} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
