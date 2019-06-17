/* eslint-disable no-undef */
import React from 'react';
import { renderWithRedux, mockStore, initialState } from '../../test/mockReduxStore';
import 'jest-dom/extend-expect';

import Calendar from './Calendar';

it('Inform user when loading events list', () => {
  const state = { ...initialState, api: { events: [], isLoading: true } };
  const { getByTestId } = renderWithRedux(<Calendar />, mockStore(state));
  expect(getByTestId('api-loading-message')).toHaveTextContent('Loading');
});

it('Inform user when events are loaded', () => {
  const state = { ...initialState, api: { events: [], isLoading: false } };
  const { getByTestId } = renderWithRedux(<Calendar />, mockStore(state));
  expect(getByTestId('api-loaded-message')).toHaveTextContent('With have a response');
});
