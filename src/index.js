import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers/index';
import middleware from './middleware/index';
import './css/navbar.css';
import './css/user.css';
import './css/login.css';
import './css/question.css';
import './css/compose-question.css';
import './css/leaderboard.css';
const state = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

let store = createStore(reducer, state, middleware);
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  , document.getElementById('root')
);
