import * as actionTypes from './actionsTypes';

const initialState = {
  isOpen: false,
  title: '',
  startingDate: '',
  startingHour: '09:30',
  duration: '02:00',
  frequency: null,
  amount: null,
  unitOfTime: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_DIALOG_EVENT:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case actionTypes.RECORD_EVENT_TITLE:
      return {
        ...state,
        title: action.title,
      };

    case actionTypes.RECORD_DATE:
      return {
        ...state,
        startingDate: action.startingDate,
      };

    case actionTypes.RECORD_HOUR:
      return {
        ...state,
        startingHour: action.startingHour,
      };
    case actionTypes.RECORD_DURATION:
      return {
        ...state,
        duration: action.duration,
      };
    case actionTypes.RECORD_FREQUENCY:
      return {
        ...state,
        frequency: action.frequency,
        amount: action.amount,
        unitOfTime: action.unitOfTime,
      };
    // case actionTypes.RECORD_MULTIPLES_DAYS:
    //   return {
    //     ...state,
    //     daysSelected: action.days,
    //   };
    default:
      return state;
  }
};
