/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { render } from '@testing-library/react';

import configureMockStore from 'redux-mock-store';

// Override render method of reat_testing-library whith redux
export const renderWithRedux = (component, store) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

// create a testing store
const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);

// initialState
export const initialState = {
  event: {
    isOpen: false,
    title: '',
    startingDate: '',
    startingHour: '09:30',
    duration: '02:00',
    frequency: null,
    amount: null,
    unitOfTime: null },
  api: {
    events: [],
    isLoading: false,
  },
};
