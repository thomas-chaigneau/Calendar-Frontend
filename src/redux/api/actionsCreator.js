import * as eventsRoute from '../../services/apiClient/eventRoutes/eventRoutes';

import * as actionTypes from './actionsTypes';

export const getEvents = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_EVENT_LIST });
  eventsRoute.getAllEvents()
    .then((res) => {
      dispatch({
        type: actionTypes.GET_EVENT_LIST_SUCCES,
        allEvents: res.data,
      });
    })
    .catch(() => {
      dispatch({ type: actionTypes.GET_EVENT_LIST_FAILED });
    });
};

export const postNewEvent = eventInfo => (dispatch) => {
  dispatch({ type: actionTypes.POST_EVENT });
  eventsRoute.postEvent(eventInfo)
    .then((res) => {
      // console.log(res.status, res.data);
      dispatch({
        type: actionTypes.POST_EVENT_SUCCES,
        newEvent: res.data,
      });
    })
    .catch(() => {
      // console.log('--------------', err)
      dispatch({ type: actionTypes.POST_EVENT_FAILED });
    });
};
