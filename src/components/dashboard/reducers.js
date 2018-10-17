export const FLASHCARD_LOAD = 'FLASHCARD_LOAD';
export const FLASHCARD_ADD = 'FLASHCARD_ADD';

export const getUserFlashcards = state => state.userFlashcards;

export function userFlashcards(state = [], { type, payload }) {
  switch(type) {
    case FLASHCARD_LOAD:
      return payload;
    case FLASHCARD_ADD:
      return [...state, payload];
    default:
      return state;
  }
}