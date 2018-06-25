import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import Car from './components/car'
import Garage from './components/garage'

import './App.css';

import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Garage} />
            <Route path="/:id" component={Car} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
