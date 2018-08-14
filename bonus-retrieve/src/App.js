import React, { Component } from 'react';
import logo from './logo.svg';
import SearchFilters from './components/SearchFilters'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
				<SearchFilters></SearchFilters>
      </div>
    );
  }
}

export default App;
