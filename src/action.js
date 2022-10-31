import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE,
} from "./constants";

export const setSearchField = textContent => ({
  type: CHANGE_SEARCH_FIELD,
  payload: textContent,
});

export const requestRobots = apiCall => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  return apiCall("https://jsonplaceholder.typicode.com/users")
    .then(data => {
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
    })
    .catch(error => {
      dispatch({ type: REQUEST_ROBOTS_FAILURE, payload: error });
    });
};
