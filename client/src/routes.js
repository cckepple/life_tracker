import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Callback from './Callback';
import Auth from './auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => <Callback {...props} />} /> 
      </div>
    </Router>
  );
}