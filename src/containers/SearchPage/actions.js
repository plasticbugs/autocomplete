import {
  BOOK_QUERY,
  CITY_QUERY,
} from './constants';

export function bookQuery(data) {
  return {
    type: BOOK_QUERY,
    payload: data,
  }
}

export function cityQuery(data) {
  return {
    type: CITY_QUERY,
    payload: data,
  }
}
