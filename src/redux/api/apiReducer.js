import * as actionsTypes from './actionsTypes';

const initialState = {
  events: [],
  isLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_EVENT_LIST:
      return {
        ...state,
        isLoaded: true,
      };
    case actionsTypes.GET_EVENT_LIST_SUCCES:
      return {
        ...state,
        events: action.events,
        isLoaded: false,
      };

    case actionsTypes.POST_EVENT_SUCCES:
      return {
        ...state,
        events: action.newEvent,
      };

    default:
      return state;
  }
};
