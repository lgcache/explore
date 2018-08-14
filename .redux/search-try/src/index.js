import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducers from './redux-modules/reducer/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reduxStore = createStore(Reducers)

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
