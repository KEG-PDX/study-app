import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Flashcards from './Flashcards';
export default class Dashboard extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        Hello Dashboard!
        <Flashcards/>
      </div>
    );
  }
}
