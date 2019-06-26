import { axiosWithAuth } from '../axiosAuth';
import { HOST_URL } from '../consts/urls';

export const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const CREATE_SCHOOL_START = 'CREATE_SCHOOL_START';
export const CREATE_SCHOOL_FAILURE = 'CREATE_SCHOOL_FAILURE';
export const CREATE_SCHOOL_SUCCESS = 'CREATE_SCHOOL_SUCCESS';

export const fetchSchools = () => dispatch => {
  dispatch({ type: FETCH_SCHOOLS });
  axiosWithAuth()
    .get(`${HOST_URL}/schools`)
    .then(res => {
      return dispatch({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => ({ type: FETCH_FAILED }));
};

export const createSchool = newSchool => dispatch => {
  dispatch({ type: CREATE_SCHOOL_START });
  return axiosWithAuth()
    .post(`${HOST_URL}/schools`, newSchool)
    .then(res => {
      dispatch({ type: CREATE_SCHOOL_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: CREATE_SCHOOL_FAILURE, payload: err.message });
    });
};
