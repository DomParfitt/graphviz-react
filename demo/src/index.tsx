import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import graphvizApp from './reducers';

const store = createStore(graphvizApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
