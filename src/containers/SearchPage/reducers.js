import {
  BOOK_QUERY,
  CITY_QUERY,
  INITIALIZE_BOOKS_DATA,
  INITIALIZE_CITIES_DATA,
} from './constants';

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

const initialQueryStore = {
  books: [],
  cities: [],
}

export function storeQuery(state=initialQueryStore, {type, payload}) {
  switch (type) {
    case BOOK_QUERY:
      return {
        ...state,
        books: payload,
      };
    case CITY_QUERY:
      return {
        ...state,
        cities: payload,
      };
    default:
      return state;
  }
}
