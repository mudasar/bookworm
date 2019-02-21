import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import authActions from '../../actions/auth';


export const HomePage = ({isAuthenticated, logout}) => (
  <div>
    <h1>Home Page</h1>
    {isAuthenticated ? <Button  to="/logout" onClick={logout} >Logout</Button>: <Link to="/login"  >Login</Link>}
    
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
   return {
    isAuthenticated: !!state.user.token
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ ... authActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

