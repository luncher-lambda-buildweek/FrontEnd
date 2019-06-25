import axios from 'axios';

export const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
export const ACCOUNT_CREATED = 'ACCOUNT_CREATED';
export const CREATING_ERROR = 'CREATING_ERROR';

export const signup = newUser => dispatch => {
  dispatch({ type: CREATING_ACCOUNT });
  return axios
    .post('http://localhost:5000/api/register', newUser)
    .then(res => {
      dispatch({ type: ACCOUNT_CREATED });
      return true;
    })
    .catch(err => {
      dispatch({ type: CREATING_ERROR, payload: 'Error Creating Account' });
    });
};
