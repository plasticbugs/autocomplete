import React, { Component } from 'react';
import Search from '../../components/Search';
import _ from 'lodash';
import './styles.css';

import {
  TITLE,
} from './constants';

export default class SearchPage extends Component {
  render() {
    return (
      <div className='search-forms'>
        <Search
          placeholder='Search cities'
          data={this.props.citiesData}
          autoFocus
          storeQuery={this.props.storeCityQuery}
          queryData={_.get(this.props, 'queries.cities')}
        />
        <Search
          placeholder='Search books'
          data={this.props.booksData}
          searchOn={TITLE}
          storeQuery={this.props.storeBookQuery}
          queryData={_.get(this.props, 'queries.books')}
        />
      </div>
    )
  }
}
