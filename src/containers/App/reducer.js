import {combineReducers} from 'redux';

import {
  INITIALIZE_BOOKS_DATA,
  INITIALIZE_CITIES_DATA,
} from './constants';

import {
  storeQuery,
} from '../SearchPage/reducers'

export function initializeCitiesReducer(state=[], {type, payload}) {
  switch (type) {
    case INITIALIZE_CITIES_DATA:
      return payload;
    default:
      return state;
  }
};

export function initializeBooksReducer(state=[], {type, payload}) {
  switch (type) {
    case INITIALIZE_BOOKS_DATA:
      return payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  citiesData: initializeCitiesReducer,
  booksData: initializeBooksReducer,
  queries: storeQuery,
});
