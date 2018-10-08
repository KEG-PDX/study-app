import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';

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
    this.props.submit(this.state);
  };
  
  render() { 
    const { action } = this.props;
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {(action === 'Sign Up') &&  
        <Fragment>
          <div>
            <FormControl label="Name">
              <input name="name" type="text" value={name} onChange={this.handleChange}></input>
            </FormControl>
          </div>
        </Fragment>
        }
        <FormControl>
          <label className="emailLabel">Email:</label>
        </FormControl>
        <FormControl>
          <input className="emailForm" name="email" type="email" value={email} onChange={this.handleChange} required></input>
        </FormControl>
        <FormControl>
          <label className="passLabel">Password:</label>
        </FormControl>
        <FormControl>
          <input className="passForm" name="password" type="password" value={password} onChange={this.handleChange} required></input>
        </FormControl>

        <FormControl>
          <button>{action}</button>
        </FormControl>
      </form>
    );
  }
}
export default Credentials;