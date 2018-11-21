import { FLASHCARD_LOAD, FLASHCARD_ADD, FLASHCARD_REMOVE } from './reducers';
import { getUserFlashcards, postFlashcard, putFlashcard } from '../../services/flashcardsApi';

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

export const removeFlashcard = flashcard => ({
  type: FLASHCARD_REMOVE,
  payload: putFlashcard(flashcard)
});