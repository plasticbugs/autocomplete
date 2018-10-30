import React, { Component } from 'react';
import './styles.css';
import _ from 'lodash';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      inputValid: true,
      hasFocus: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const searchString = e.target.value.toLowerCase();
    const inputValid = this.inputValid(searchString);

    this.setState({
      searchString,
      inputValid,
    }, () => {
      if (inputValid && searchString.length !==0) {
        this.getAndStoreMatches(searchString);
      } else {
        this.props.storeQuery([]);
      }  
    })
  }

  inputValid(str) {
    return str.length >= 3 || str.length === 0;
  }

  getAndStoreMatches(searchString) {
    const {
      searchOn,
      data,
      storeQuery,
    } = this.props;
    let results;

    if (searchOn && typeof data[0] === 'object') {
      results = data.filter(item => {
        if (item[searchOn] && item[searchOn].toLowerCase().indexOf(searchString) === 0) {
          return item;
        }
        return null;
      })
    } else {
      results = this.props.data.filter(word => {
        if (word.toLowerCase().indexOf(searchString) === 0) {
          return word;
        }
        return null;
      })
    }
    storeQuery(results);
  }

  renderAutocompleteItems() {
    const {
      queryData,
    } = this.props;
    return (
      <ul>
        {queryData.length ? (
          queryData.map(item => {
            return this.renderResult(item);
          })
        ) : (
          this.renderResult('No items found')
        )
        }
      </ul>
    )
  }

  renderResult(item) {
    let result = [];
    let key;
    const { searchOn } = this.props;

    if (typeof item === 'object' && searchOn) {
      const clone = _.clone(item);
      key = clone[searchOn];
      result.push(<div key={ key } className='result-header'>{ clone[searchOn] }</div>)
      delete clone[searchOn];

      for (let key in clone) {
        result.push(
          <div key={ clone[key] } className='result-details'>{ clone[key] }</div>
        )
      }
    } else {
      key = item;
      result = <div className='result-header'>{ item }</div>;
    }
    return (
      <li key={ key } className='search-result'>
        { result }
      </li>
    )
  }

  renderInputError() {
    if (!this.state.inputValid && this.state.hasFocus) {
      return (
        <div className='input-error'>
          Please enter three or more characters.
        </div>
      )
    }
    return null;
  }

  displayResults() {
    return this.state.inputValid && this.state.searchString.length !== 0 && this.state.hasFocus;
  }

  render() {
    return  (
      <div className='search-form'>
        <input
          autoFocus={ this.props.autoFocus }
          className='search-input'
          onChange={ this.handleInputChange }
          onFocus={() => {this.setState({hasFocus: true})}}
          onBlur={() => {this.setState({hasFocus: false})}}
          placeholder={ this.props.placeholder }
        />
        { this.displayResults() ? (
            this.renderAutocompleteItems()
          ) : (
            this.renderInputError()
          )
        }
      </div>
    );
  }
}

export default Search;