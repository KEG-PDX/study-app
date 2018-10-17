import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Flashcard extends Component {
  static propTypes = {
    flashcard: PropTypes.object
  };

  render() {
    const { flashcard } = this.props;
    return (
      <div>
        Question: {flashcard.question}<br/>
        Answer: {flashcard.answer}
      </div>
    );
  }
}

export default Flashcard;