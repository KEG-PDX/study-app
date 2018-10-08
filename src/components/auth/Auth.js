import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import { getUser } from './reducers';
import Credentials from './Credentials';
import Error from '../app/Error';
class Auth extends Component {
  static propTypes = {
    user: PropTypes.object,
    signin: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired
  };

  render() {
    return (
      <section>
        <h2>Study App</h2>
        <Error/>
        <Switch>
          <Route path="/auth/signin" render={() => (
            <div>
              <p>New user? <Link to="/auth/signup">Sign Up</Link></p>
              <Credentials action="Sign In" submit={signin}/>
            </div>
          )}/>
          <Route path="/auth/signup" render={() => (
            <div>
              <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
              <Credentials action="Sign Up" submit={signup}/>
            </div>
          )}/>
          <Redirect to="/auth/signup"/>
        </Switch>
      </section>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state)
  }),
  { signin, signup }
)(Auth);