import React, { Component } from 'react';
import { LoginForm } from '../forms/LoginForm';


export class LoginPage extends Component {
    handleSubmit = (data) => {
      console.log(data);
    }

    render() {
      return (
        <div>
          <h1>Login Page</h1>
          <LoginForm submit={this.handleSubmit} />
        </div>
      );
    }
}

export default LoginPage;
