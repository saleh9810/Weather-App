import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import App from './App';
import './style/style.css'
import reportWebVitals from './reportWebVitals';
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);


ReactDOM.render(
  <React.StrictMode>
  <Provider store={createStoreWithMiddleware(reducers)}>
       <App />
  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
