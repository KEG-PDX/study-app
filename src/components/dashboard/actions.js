import { FLASHCARD_LOAD, FLASHCARD_ADD } from './reducers';
import { getUserFlashcards, postFlashcard } from '../../services/flashcardsApi';

export const loadUserFlashcards = () => {
  return {
    type: FLASHCARD_LOAD,
    payload: getUserFlashcards()
  };
};

export const addFlashcard = data => {
  return {
    type: FLASHCARD_ADD,
    payload: postFlashcard(data)
  };
};