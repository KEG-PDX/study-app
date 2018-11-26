import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFlashcard } from './actions';
import styles from '../_css/FlashcardDisplay.css';
import ReactCardFlip from 'react-card-flip';
import closeButton from '../../assets/close-window.png';
import flipCard from '../../assets/flip.png';

class Flashcard extends Component {
  static propTypes = {
    flashcard: PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleDelete = () => {
    const { removeFlashcard, flashcard } = this.props;
    flashcard.deleted = true;
    removeFlashcard(flashcard);
  };

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { flashcard } = this.props;
    return (
      <li className={styles.flashcardDisplay}>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front" className="flashcardDetail">
            <img id="close-button" src={closeButton} onClick={this.handleDelete}/><br></br>
            <div className="question"><strong>Q: </strong>{flashcard.question}</div>
            <img className="flip-button-front" src={flipCard} onClick={this.handleClick}/><br></br>
          </div>

          <div key="back" className="flashcardDetail">
            <div className="answer"><strong>A: </strong>{flashcard.answer}</div>
            <img className="flip-button-back" src={flipCard} onClick={this.handleClick}/><br></br>
          </div>
        </ReactCardFlip>
      </li>
    );
  }
}

export default connect(
  null,
  { removeFlashcard } 
)(Flashcard);