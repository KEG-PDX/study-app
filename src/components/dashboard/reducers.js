export const FLASHCARD_LOAD = 'FLASHCARD_LOAD';
export const FLASHCARD_ADD = 'FLASHCARD_ADD';
export const FLASHCARD_REMOVE = 'FLASHCARD_REMOVE';

export const getUserFlashcards = state => state.userFlashcards;

export function userFlashcards(state = [], { type, payload }) {
  switch(type) {
    case FLASHCARD_LOAD:
      return payload;
    case FLASHCARD_ADD:
      return [...state, payload];
    case FLASHCARD_REMOVE:
      return state.filter(flashcard => flashcard.deleted === false);
    default:
      return state;
  }
}