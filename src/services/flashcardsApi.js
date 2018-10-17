import { get, post } from './request';

const URL = '/api';
const FLASHCARDS_URL = `${URL}/flashcards`;

export const getUserFlashcards = () => get(`${FLASHCARDS_URL}`);
export const postFlashcard = data => post(`${FLASHCARDS_URL}`, data);