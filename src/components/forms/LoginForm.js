import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';

import { Form, Button } from 'semantic-ui-react';

import InlineError from '../messages/InlineError';

export class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    loading: this.props.loading,
    errors: {},
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.loading !== nextProps.loading) {
      return {loading: nextProps.loading};
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {

    if(this.state === nextState){
      return false;
    }
    else if (this.props === nextProps && this.state === nextState) {
       return false;
     }else{
       return true;
     }
  }

  onChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  onSubmit = () => {
    const { data } = this.state;
    const errors = this.validate(data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
    if (!data.password) errors.password = 'Password can\'t be empty';
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;
    //console.log(' I am rendered @' + Date())
    return (
      <Form>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary onClick={this.onSubmit}>{ loading ? 'Loading ...': 'Login' }</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default LoginForm;
