import React, { Component } from 'react';

import '../App.css';

class Login extends Component {
  render() {
    return (
      <div className="container-login">
        <div className="login">
          <div className="login-text">Login</div>
          <input />
          <input />
          <a className="login-button">
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
