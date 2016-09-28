import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers';
import counterApp from './reducers';


const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(counterApp);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
