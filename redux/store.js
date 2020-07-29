import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/';
import initialState from './initialState';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(rootReducer),
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
