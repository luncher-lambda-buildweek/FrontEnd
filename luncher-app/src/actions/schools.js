import { axiosWithAuth } from '../axiosAuth';

export const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const fetchSchools = () => dispatch => {
  dispatch({ type: FETCH_SCHOOLS });
  axiosWithAuth()
    .get('/schools')
    .then(res => ({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => ({ type: FETCH_FAILED }));
};
