import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import authActions from '../../actions/auth';
import { LoginForm } from '../forms/LoginForm';

export class LoginPage extends Component {

    state = {};
    handleSubmit = (data) => {
      this.props.login(data);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      return null;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      if (nextProps.user !== this.props.user) {
        return true;
      }

     return false;  
    }

    render() {
      return (
        <div>
          <h1>Login Page</h1>
            <LoginForm submit={this.handleSubmit} {...this.props.user} />
        </div>
      );
    }
}

LoginPage.propTypes = {
  authActions: PropTypes.shape({
    login: PropTypes.func.isRequired,
  }), 
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
   return {
    user: state.user,
  };
};


const mapDispatchToProps = dispatch => { return bindActionCreators({... authActions }, dispatch)};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
