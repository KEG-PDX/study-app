import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';
import login from '../../assets/login.png';
import signUp from '../../assets/sign-up.png';
import styles from '../_css/Credentials.css';

class Credentials extends Component {

  static propTypes = {
    submit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    error: PropTypes.any,
    clearError: PropTypes.func,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state)
      .catch(() => {});
  };
  
  render() { 
    const { action } = this.props;
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.credentials}>
        {action === 'Sign Up' &&  
        <Fragment>
          <div>
            <ul>
              <li>Step 1: Create an account.</li>
              <li>Step 2: Use Study Up to help you pass your exams, develop super human memorization, or save the world.</li>
            </ul>
            <div className="loginInputs">
              <FormControl label="Name">
                <input name="name" type="text" value={name} onChange={this.handleChange} required></input>
              </FormControl>
            </div>
          </div>
        </Fragment>
        }
        <div className="loginInputs">
          <FormControl label="Email">
            <input name="email" type="email" value={email} onChange={this.handleChange} required></input>
          </FormControl>
          <FormControl label="Password">
            <input name="password" type="password" value={password} onChange={this.handleChange} required></input>
          </FormControl>
        </div>

        <FormControl>
          <button>
            {action === 'Sign Up'
              ? <img src={signUp}></img>
              : <img src={login}></img>
            }
          </button>
        </FormControl>
      </form>
    );
  }
}
export default Credentials;