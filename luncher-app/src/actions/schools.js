import { axiosWithAuth } from '../axiosAuth';
import { HOST_URL } from '../consts/urls';

export const FAILED = 'FAILED';

export const FETCH_SCHOOLS = 'FETCH_SCHOOLS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSchools = () => dispatch => {
  dispatch({ type: FETCH_SCHOOLS });
  axiosWithAuth()
    .get(`${HOST_URL}/schools`)
    .then(res => {
      return dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FAILED, payload: err.response.data.message }));
};

export const CREATE_SCHOOL_START = 'CREATE_SCHOOL_START';
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
      console.log(err.response.data.message)
      dispatch({ type: FAILED, payload: err.response.data.message });
    });
};

export const UPDATE_SCHOOL_START = 'UPDATE_SCHOOL_START';
export const UPDATE_SCHOOL_SUCCESS = 'UPDATE_SCHOOL_SUCCESS';
export const updateSchool = (updatedSchool, id) => dispatch => {
  dispatch({ type: UPDATE_SCHOOL_START });
  return axiosWithAuth()
    .put(`${HOST_URL}/schools/${id}`, updatedSchool)
    .then(res => {
      dispatch({ type: UPDATE_SCHOOL_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: FAILED, payload: err.response.data.message });
    });
};

export const DELETE_SCHOOL_START = 'DELETE_SCHOOL_START';
export const DELETE_SCHOOL_SUCCESS = 'DELETE_SCHOOL_SUCCESS';
export const deleteSchool = id => dispatch => {
  dispatch({ type: DELETE_SCHOOL_START });
  return axiosWithAuth()
    .delete(`${HOST_URL}/schools/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SCHOOL_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: FAILED, payload: err.response.data.message });
    });
};

export const GET_SCHOOL = 'GET_SCHOOL';
export const GET_SUCCESS = 'GET_SUCCESS';
export const getSchool = id => dispatch => {
  dispatch({ type: UPDATE_SCHOOL_START });
  return axiosWithAuth()
    .get(`${HOST_URL}/schools/${id}`)
    .then(res => {
      dispatch({ type: GET_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      dispatch({ type: FAILED, payload: err.response.data.message });
    });
};

export const DONATE_START = 'DONATE_START';
export const DONATE_SUCCESS = 'DONATE_SUCCESS';
export const donate = (id, amount) => dispatch => {
  dispatch({ type: DONATE_START });
  return axiosWithAuth()
    .post(`${HOST_URL}/schools/${id}/donate`, {
      amountDonated: parseInt(amount, 10),
    })
    .then(res => {
      dispatch({ type: DONATE_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: FAILED, payload: err.response.data.message});
    });
};
