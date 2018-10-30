import React, { Component } from 'react';
import './App.css';
import Search from '../../containers/SearchPage';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Search />
      </Provider>
    );
  }
}

export default App;
