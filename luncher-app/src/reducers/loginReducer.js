import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS } from '../actions/login';

const initialState = {
  error: '',
  loggingIn: false,
  loggedIn: false,
  role: '',
  id: null
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
        error: action.payload,
        loggingIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: false,
        loggedIn: true,
        id: action.payload.id,
        role: action.payload.role
      };
    default:
      return state;
  }
};

export default loginReducer;
