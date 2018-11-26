import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getError } from '../app/reducers';
import { clearError } from '../app/actions';

class Error extends Component {
  
  static propTypes =  {
    error: PropTypes.any,
    clearError: PropTypes.func
  };

  componentDidUpdate() {
    const { error, clearError } = this.props;

    if(error) {
      setTimeout(() => {
        clearError();
      }, 6000);
    }
  }

  render() { 
    const { error } = this.props;
    if(!error) return null;

    const message = error.error || error.message || error;

    return (
      <p style={{ color: 'red' }}>{message}</p>
    );
  }
}
 
export default connect(
  state => ({
    error: getError(state)
  }),
  { clearError }
)(Error);