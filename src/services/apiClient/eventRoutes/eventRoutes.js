import ApiClient from '../apiClient';

const apiClient = new ApiClient(process.env.REACT_APP_API_URL);
const ROUTE = '/events';

export const getAllEvents = () => apiClient.get(ROUTE);

export const getEventById = id => apiClient.get(`${ROUTE}/:${id}`); // not use

export const getImportantEvents = () => apiClient.get(`${ROUTE}/important`); // not uses


export const postEvent = eventInfo => apiClient.post(ROUTE, eventInfo); // not uses
