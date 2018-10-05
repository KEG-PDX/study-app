import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Auth from '../auth/Auth';
export default class App extends Component {
  

  render() {
    return (
      <Router>
        <main>
          <Switch>
            <Route path="/" component={Auth}/>
            <Redirect to="/"/>
          </Switch>
        </main>
      </Router>
    );
  }
}
