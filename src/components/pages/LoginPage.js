import React, { Component } from 'react'
import LoginForm from '../forms/LoginForm';


export class LoginPage extends Component {

    _handleSubmit = (data) => {
        console.log(data);
    }

  render() {
    return (
      <div>
         <h1>Login Page</h1>
    <LoginForm submit={this._handleSubmit} />
      </div>
    )
  }
}

export default LoginPage;
