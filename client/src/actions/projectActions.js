import axios from 'axios';
import { FETCH_PROJECTS_PENDING, FETCH_PROJECTS_FULFILLED, FETCH_PROJECTS_REJECTED } from '../constants';

export const fetchProjects = (option = {}) => {
  console.log('fetching projects with: ', option);
  return dispatch => {
    dispatch({ type: FETCH_PROJECTS_PENDING });
    return axios.get('/api/projects', option)
      .then(response => {
        dispatch({
          type: FETCH_PROJECTS_FULFILLED,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_PROJECTS_REJECTED,
          payload: err
        });
      });
  };
};
