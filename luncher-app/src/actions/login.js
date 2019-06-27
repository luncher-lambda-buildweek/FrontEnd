import axios from 'axios';
import { HOST_URL } from '../consts/urls';
import { setToken } from '../helpers/localStorage';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loggedIn = user => {
  return { type: LOGIN_SUCCESS, payload: user };
};

export const logIn = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${HOST_URL}/login`, creds)
    .then(res => {
      setToken(res.data.token);
      dispatch(loggedIn(res.data));
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.message });
    });
};
