import {
  OPEN_DIALOG_EVENT,
  RECORD_EVENT_TITLE,
  RECORD_FREQUENCY,
  RECORD_MULTIPLES_DAYS,
  RECORD_DATE,
} from './actionsTypes';

const initialState = {
  isOpen: false,
  title: '',
  startingDate: '',
  endingDate: '',
  frequency: '',
  daysSelected: '',
  events: [],
  isLoaded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DIALOG_EVENT:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case RECORD_EVENT_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case RECORD_FREQUENCY:
      return {
        ...state,
        frequency: action.frequency,
      };
    case RECORD_MULTIPLES_DAYS:
      return {
        ...state,
        daysSelected: action.days,
      };
    case RECORD_DATE:
      return {
        ...state,
        startingDate: action.startingDate,
        endingDate: action.endingDate,
      };
    default:
      return state;
  }
};
