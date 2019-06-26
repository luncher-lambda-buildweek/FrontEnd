import { axiosWithAuth } from '../axiosAuth';
import { HOST_URL } from '../consts/urls';

export const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const fetchSchools = () => dispatch => {
  dispatch({ type: FETCH_SCHOOLS });
  axiosWithAuth()
    .get(`${HOST_URL}/schools`)
    .then(res => {
      return dispatch({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => ({ type: FETCH_FAILED }));
};

export const CREATE_SCHOOL_START = 'CREATE_SCHOOL_START';
export const CREATE_SCHOOL_FAILURE = 'CREATE_SCHOOL_FAILURE';
export const CREATE_SCHOOL_SUCCESS = 'CREATE_SCHOOL_SUCCESS';

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

export const UPDATE_SCHOOL_START = 'UPDATE_SCHOOL_START';
export const UPDATE_SCHOOL_SUCCESS = 'UPDATE_SCHOOL_SUCCESS';
export const UPDATE_SCHOOL_FAILED = 'UPDATE_SCHOOL_FAILED';

export const updateSchool = (updatedSchool, id) => dispatch => {
  dispatch({ type: UPDATE_SCHOOL_START });
  return axiosWithAuth()
    .put(`${HOST_URL}/schools/${id}`, updatedSchool)
    .then(res => {
      dispatch({ type: UPDATE_SCHOOL_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: UPDATE_SCHOOL_FAILED, payload: err.message });
    });
};

export const DELETE_SCHOOL_START = 'DELETE_SCHOOL_START';
export const DELETE_SCHOOL_SUCCESS = 'DELETE_SCHOOL_SUCCESS';
export const DELETE_SCHOOL_FAILED = 'DELETE_SCHOOL_FAILED';

export const deleteSchool = id => dispatch => {
  dispatch({ type: DELETE_SCHOOL_START });
  return axiosWithAuth()
    .delete(`${HOST_URL}/schools/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SCHOOL_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: DELETE_SCHOOL_FAILED, payload: err.message });
    });
};

export const GET_SCHOOLS = 'GET_SCHOOLS';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILED = 'GET_FAILED';

export const getSchool = (id) => dispatch => {
  dispatch({ type: UPDATE_SCHOOL_START });
  return axiosWithAuth()
    .get(`${HOST_URL}/schools/${id}`)
    .then(res => {
      dispatch({ type: UPDATE_SCHOOL_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: UPDATE_SCHOOL_FAILED, payload: err.message });
    });
};