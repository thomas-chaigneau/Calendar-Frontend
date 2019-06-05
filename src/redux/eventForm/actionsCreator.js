import {
  OPEN_DIALOG_EVENT,
  RECORD_EVENT_TITLE,
  RECORD_FREQUENCY,
  RECORD_MULTIPLES_DAYS,
  RECORD_DATE,
} from './actionsTypes';

export const openEventDialog = () => ({
  type: OPEN_DIALOG_EVENT,
});

export const recordTitle = title => ({
  type: RECORD_EVENT_TITLE,
  title,
});

export const recordAddress = (OtherAddressChecked, preciseAddress) => ({
  type: RECORD_EVENT_ADDRESS,
  OtherAddressChecked,
  address: preciseAddress,
});

export const recordDateAndTime = (startingDate, endingDate) => ({
  type: RECORD_DATE,
  startingDate,
  endingDate,
});

export const recordContact = contact => ({
  type: RECORD_CONTACT,
  contact,
});

export const recordCategory = category => ({
  type: RECORD_CATEGORY,
  category,
});

export const recordFrequency = frequency => ({
  type: RECORD_FREQUENCY,
  frequency,
});

export const recordMultipleDays = days => ({
  type: RECORD_MULTIPLES_DAYS,
  days,
});
