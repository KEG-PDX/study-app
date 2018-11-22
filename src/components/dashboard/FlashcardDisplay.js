import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFlashcard } from './actions';
import styles from '../_css/FlashcardDisplay.css';
import closeButton from '../../assets/close-window.png';

class Flashcard extends Component {
  static propTypes = {
    flashcard: PropTypes.object
  };

  handleDelete = () => {
    const { removeFlashcard, flashcard } = this.props;
    flashcard.deleted = true;
    removeFlashcard(flashcard);
  };

  render() {
    const { flashcard } = this.props;
    return (
      <div className={styles.flashcardDisplay}>
        <div className="flashcardData">
          <img src={closeButton} onClick={this.handleDelete}/>
          <span><strong>Question:</strong> {flashcard.question}</span>
          <span><strong>Answer:</strong> {flashcard.answer}</span>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { removeFlashcard } 
)(Flashcard);