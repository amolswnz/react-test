import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import stateValidator from './middleware/stateValidator';
import reducers from './reducers';

export default function ({ children, inititalState = {} }) {
  const store = createStore(
    reducers,
    inititalState,
    applyMiddleware(reduxPromise, stateValidator),
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
