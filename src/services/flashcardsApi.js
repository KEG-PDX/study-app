import { get, post, put } from './request';

const URL = '/api';
const FLASHCARDS_URL = `${URL}/flashcards`;

export const getUserFlashcards = () => get(`${FLASHCARDS_URL}/created-cards`);
export const postFlashcard = data => post(`${FLASHCARDS_URL}`, data);
export const putFlashcard = flashcard => put(`${FLASHCARDS_URL}/${flashcard._id}`, flashcard);