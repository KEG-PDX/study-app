import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import { getUser } from './reducers';
import Credentials from './Credentials';
import Error from '../shared/Error';
class Auth extends Component {
  
  static propTypes = {
    user: PropTypes.object,
    signin: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired
  };

  render() {
    const { signin, signup, user, location } = this.props;
    const redirect = location.state ? location.state.from : '/';
    if(user) return <Redirect to={redirect}/>;

    return (
      <section>
        <Switch>
          <Route path="/auth/signin" render={() => (
            <div>
              <h2>Study Up</h2>
              <Error/>
              <Credentials action="Login" submit={signin}/>
              <Link to="/auth/signup"><button>Sign Up</button></Link>
            </div>
          )}/>
          <Route path="/auth/signup" render={() => (
            <div>
              <p>&lt;&#61;&#61; <Link to="/auth/signin">Login</Link></p>
              <Credentials action="Sign Up" submit={signup}/>
            </div>
          )}/>
          <Redirect to="/auth/signin"/>
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