import RouterDom from "./"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import { createBrowserHistory } from 'history';
import Home from './containers/home'

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
