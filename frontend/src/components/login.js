import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';

import { login } from '../redux/action'


class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  componentWillReceiveProps(newProps, ownProps) {
    if (newProps.errorResponse_state) {
      this.setState({
        error: newProps.errorResponse_state
      })
    }
    if (newProps.token_state) {
      if (newProps.token_state.tokenStat) {
        this.props.history.push('/garages')
      } else {
        this.props.history.push('/')
      }
    }
  }

  render() {
    return (
      <div className="container-login">
        <div className="login">
          <div className="login-text">Login</div>
          <input placeholder="Username" onChange={(e) => this.setState({username:e.target.value})} />
          <input type="password" placeholder="Password" onChange={(e) => this.setState({password:e.target.value})}/>
          {this.state.error ? (
            <div className="error-login">
              {this.state.error}
            </div>
          ) : <div></div>}
          <a onClick={() => this.props.login_dispatch(this.state)} className="login-button">
            Login
          </a>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    token_state: state.token,
    errorResponse_state: state.error_response
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login_dispatch: (payload) => dispatch(login(payload))
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Login)
export default Conn;
