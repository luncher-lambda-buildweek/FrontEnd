import { axiosWithAuth } from '../axiosAuth/index';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const logIn = creds => (dispatch) => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
      .post('/login', creds)
      .then(res => {
        localStorage.setItem('token', res.payload);
        dispatch({ type: LOGIN_SUCCESS});
        return true;
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE });
        return console.log(err.response)
      });
};