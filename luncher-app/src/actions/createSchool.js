import { axiosWithAuth } from '../axiosAuth';


export const CREATE_SCHOOL_START = 'CREATE_SCHOOL_START';
export const CREATE_SCHOOL_FAILURE = 'CREATE_SCHOOL_FAILURE';
export const CREATE_SCHOOL_SUCCESS = 'CREATE_SCHOOL_SUCCESS';

export const createSchool = friend => dispatch => {
  dispatch({ type: CREATE_SCHOOL_START });
  return(
      axiosWithAuth().post(`${URL}/schools`, friend)
        .then(res => {
            dispatch({ type: CREATE_SCHOOL_SUCCESS, payload: res.payload });
            return true
        })
        .catch(err => {
          dispatch({ type: CREATE_SCHOOL_FAILURE, payload: err });
        })
      )
};
