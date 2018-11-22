import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { loadUserFlashcards, addFlashcard } from './actions';
import { getUserFlashcards } from './reducers';
import styles from '../_css/Flashcards.css';

import FlashcardForm from './FlashcardForm';
import FlashcardDisplay from './FlashcardDisplay';

class Flashcards extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    flashcards: PropTypes.array,
    loadUserFlashcards: PropTypes.func.isRequired,
    addFlashcard: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentDidMount = () => {
    this.props.loadUserFlashcards();
  };

  handleAdd = flashcard => {
    const { user } = this.props;
    flashcard.category = flashcard.category.value;
    flashcard.subCategory = flashcard.subCategory.value;
    flashcard.profileId = user.profile._id;
    const { addFlashcard } = this.props;
    return addFlashcard(flashcard)
      .then(() => this.toggleAdd());
  };

  toggleAdd = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  render() {
    const { editing } = this.state;
    const { flashcards } = this.props;
    return (
      <Fragment>
        <div className={styles.flashcards}>
          {editing
            ? <FlashcardForm submit={this.handleAdd} onCancel={this.toggleAdd}/>
            : <button onClick={this.toggleAdd}>Add a flashcard</button>
          }
          {flashcards &&
              <ul>
                {flashcards.map(flashcard => 
                  <FlashcardDisplay
                    flashcard={flashcard}
                    key={flashcard._id}    
                  />)}
              </ul>
          }
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    flashcards: getUserFlashcards(state),
    user: getUser(state)
  }),
  { loadUserFlashcards, addFlashcard }
)(Flashcards);