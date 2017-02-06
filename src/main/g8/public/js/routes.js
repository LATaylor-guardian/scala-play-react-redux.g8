import React from 'react';
import {Router, Route, IndexRoute, browserHistory, IndexRedirect} from 'react-router';
import ReactApp from './components/ReactApp';


export const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={ReactApp}>
      </Route>
    </Router>
);