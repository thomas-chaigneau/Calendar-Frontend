import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from '.';

const initialState = {};

const middleware = [thunk];

export const createReduxStore = (reducer = rootReducer, defaultState = initialState) => (
  createStore(
    reducer,
    defaultState,
    composeWithDevTools(applyMiddleware(...middleware)),
  )
);

const store = createReduxStore();

export default store;
