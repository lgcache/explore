import React, { Component } from 'react';
import FilterContainer from './redux-modules/containers/Filter'
import ResultContainer from './redux-modules/containers/Result'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <FilterContainer></FilterContainer>
          <ResultContainer></ResultContainer>
        </div>
    );
  }
}

export default App;
