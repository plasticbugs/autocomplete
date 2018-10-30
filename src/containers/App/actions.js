import {
  INITIALIZE_BOOKS_DATA,
  INITIALIZE_CITIES_DATA,
} from './constants';

export function initializeBooksData(data) {
  return {
    type: INITIALIZE_BOOKS_DATA,
    payload: data,
  }
}

export function initializeCitiesData(data) {
  return {
    type: INITIALIZE_CITIES_DATA,
    payload: data,
  }
}
