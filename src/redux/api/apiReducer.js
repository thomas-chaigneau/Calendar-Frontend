import * as actionsTypes from './actionsTypes';

const initialState = {
  events: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_EVENT_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case actionsTypes.GET_EVENT_LIST_SUCCES:
      return {
        ...state,
        events: action.allEvents,
        isLoading: false,
      };


    case actionsTypes.POST_EVENT_SUCCES:
      return {
        ...state,
        events: [...state.events, ...action.newEvent],
      };
    default:
      return state;
  }
};
