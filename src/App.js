import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage  from './components/pages/HomePage';
import  LoginPage  from './components/pages/LoginPage';

const App = () => (
  <div className="ui container" style={{marginTop: '3em'}}>
  <Switch>
  <Route path="/" exact  component={HomePage} />
    <Route path="/login" component={LoginPage} />
  </Switch>
    

  </div>
);

export default  App;
