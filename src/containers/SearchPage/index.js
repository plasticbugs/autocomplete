import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  initializeCitiesData,
  initializeBooksData
} from '../App/actions';
import {
  bookQuery,
  cityQuery,
} from '../SearchPage/actions';
import bookData from '../App/data/books';
import citiesData from '../App/data/cities';
import SearchPageView from '../../views/SearchPage';

class SearchPage extends Component {
  render() {
    return <SearchPageView {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    citiesData: state.citiesData,
    booksData: state.booksData,
    queries: state.queries,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeBooksData: dispatch(initializeBooksData(bookData)),
    initializeCitiesData: dispatch(initializeCitiesData(citiesData)),
    storeBookQuery() {
      dispatch(bookQuery(...arguments))
    },
    storeCityQuery() {
      dispatch(cityQuery(...arguments))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);