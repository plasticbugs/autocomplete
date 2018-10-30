import {combineReducers} from 'redux';
import {
  initializeBooksReducer,
  initializeCitiesReducer,
  storeQuery,
} from '../SearchPage/reducers'

export const rootReducer = combineReducers({
  citiesData: initializeCitiesReducer,
  booksData: initializeBooksReducer,
  queries: storeQuery,
});
