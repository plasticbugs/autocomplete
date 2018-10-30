import {
  BOOK_QUERY,
  CITY_QUERY,
} from './constants';

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
