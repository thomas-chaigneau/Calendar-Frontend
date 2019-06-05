import * as eventsRoute from '../../services/apiClient/eventRoutes/eventRoutes';

import * as actionTypes from './actionsTypes';

export const postNewEvent = eventInfo => (dispatch) => {
  dispatch({ type: actionTypes.POST_EVENT });
  eventsRoute.postEvent(eventInfo)
    .then(res => dispatch({
      type: actionTypes.POST_EVENT_SUCCES,
      eventAdded: res.data,
    }))
    .catch(() => {
      dispatch({ type: actionTypes.POST_EVENT_FAILED });
    });
};

export const getEventList = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_EVENT_LIST });
  eventsRoute.getAllEvents()
    .then(res => dispatch({
      type: actionTypes.GET_EVENT_LIST_SUCCES,
      allEvents: res.data,
    }))
    .catch(() => {
      dispatch({ type: actionTypes.GET_EVENT_LIST_FAILED });
    });
};
