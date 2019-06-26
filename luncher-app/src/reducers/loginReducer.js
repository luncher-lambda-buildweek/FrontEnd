import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS } from '../actions/login';

const initialState = {
  error: '',
  loggingIn: false,
  loggedIn: false,
  role: ''
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: '',
        loggingIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: false,
        loggedIn: true,
        role: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
