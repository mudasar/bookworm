import React from 'react';
import { Link } from 'react-router-dom';

import { LoginPage } from './LoginPage';

export const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/login" exact component={LoginPage}>Login</Link>
  </div>
);

export default HomePage;
