import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import { getUser } from './reducers';
import Credentials from './Credentials';
import Error from '../shared/Error';
import styles from '../_css/Auth.css';
import arrowUp from '../../assets/arrow-up.png';
import signUp from '../../assets/sign-up.png';
import returnToLogin from '../../assets/left-arrow.png';
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
      <section className={styles.auth}>
        <Switch>
          <Route path="/auth/signin" render={() => (
            <div className="landing">
              <h2>Study Up</h2>
              <img src={arrowUp}></img>
              <Error/>
              <Credentials action="Login" submit={signin}/>
              <Link to="/auth/signup"><button><img src={signUp}></img></button></Link>
            </div>
          )}/>
          <Route path="/auth/signup" render={() => (
            <div>
              <Link to="/auth/signin"><img id="returnToLogin" src={returnToLogin}/></Link>
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