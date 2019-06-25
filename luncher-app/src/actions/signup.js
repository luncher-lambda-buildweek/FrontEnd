import axios from 'axios';

export const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
export const ACCOUNT_CREATED = 'ACCOUNT_CREATED';
export const CREATING_ERROR = 'CREATING_ERROR';

export const signup = newUser => dispatch => {
  dispatch({ type: CREATING_ACCOUNT });
  axios
    .post('#', newUser)
    .then(res => {
      dispatch({ type: ACCOUNT_CREATED });
    })
    .catch(err =>
      dispatch({ type: CREATING_ERROR, payload: 'Error Creating Account' }),
    );
};
