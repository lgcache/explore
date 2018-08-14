import React, { Component } from 'react';
import logo from './logo.svg';
import SearchFilters from './components/SearchFilters'
import Upload from './components/upload'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Upload></Upload>
				<SearchFilters></SearchFilters>
      </div>
    );
  }
}

export default App;
