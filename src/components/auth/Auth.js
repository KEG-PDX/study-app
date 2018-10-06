import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

export default class Auth extends Component {
  static propTypes = {
    user: PropTypes.object,
    // signin: PropTypes.func.isRequired,
    // signup: PropTypes.func.isRequired
  };

  render() {
    return (
      <section>
        <h2>Study App</h2>
        <Switch>
          <Route path="/auth/signin" render={() => (
            <p>Have you signed up? <Link to="/auth/signup">Sign Up</Link></p>
          )}/>
          <Route path="/auth/signup" render={() => (
            <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
          )}/>
          <Redirect to="/auth/signup"/>
        </Switch>
      </section>
    );
  }
}
