/* eslint-disable no-undef */
import React from 'react';

import { cleanup, fireEvent } from '@testing-library/react';

import { renderWithRedux, mockStore, initialState } from '../../../test/mockReduxStore';
import { openEventDialog } from '../../../redux/eventForm/actionsCreator';
import 'jest-dom/extend-expect';

import EventCreationDialog from './EventCreationDialog';

const { api, event } = initialState;

afterEach(cleanup);

it('modal to creat events have a title', () => {
  const state = { api, event: { ...event, isOpen: true } };
  const { getByTestId } = renderWithRedux(<EventCreationDialog />, mockStore(state));
  expect(getByTestId('form-dialog-title')).toHaveTextContent('événement');
});

it('have a close modal button', () => {
  const state = { api, event: { ...event, isOpen: true } };
  const { getByTestId } = renderWithRedux(<EventCreationDialog />, mockStore(state));
  expect(getByTestId('cancel-button')).toHaveTextContent('Annuler');
});

it('dispach an action', () => {
  const state = { api, event };
  const store = mockStore(state);
  store.dispatch(openEventDialog());
  const actions = store.getActions();
  const expectedPayload = { type: 'OPEN_DIALOG_EVENT' };
  expect(actions).toEqual([expectedPayload]);
});


it('do somethink (closing ???) when closing button is clicked ', () => {
  // https://stackoverflow.com/questions/52208973/what-should-be-tested-when-calling-onclick-with-a-redux-action-creator
});