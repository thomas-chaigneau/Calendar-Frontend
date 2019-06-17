import * as actionTypes from './actionsTypes';

export const openEventDialog = () => ({
  type: actionTypes.OPEN_DIALOG_EVENT,
});

export const recordTitle = title => ({
  type: actionTypes.RECORD_EVENT_TITLE,
  title,
});

export const recordDate = startingDate => ({
  type: actionTypes.RECORD_DATE,
  startingDate,
});

export const recordHour = startingHour => ({
  type: actionTypes.RECORD_HOUR,
  startingHour,
});

export const recordDuration = duration => ({
  type: actionTypes.RECORD_DURATION,
  duration,
});

export const recordFrequency = (frequency, amount, unitOfTime) => ({
  type: actionTypes.RECORD_FREQUENCY,
  frequency,
  amount,
  unitOfTime,
});

export const recordRepetedDays = days => ({
  type: actionTypes.RECORD_REPETED_DAYS,
  days,
});
