import { combineReducers } from 'redux';
import eventReducer from './eventForm/eventReducer';
import apiReducer from './api/apiReducer';

export default combineReducers({
  event: eventReducer,
  api: apiReducer,
});
