import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux'

import Car from './components/car'
import Garage from './components/garage'


import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            Hai
            <Route path="/car" component={Car} />
            <Route exact path="/" component={Garage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
