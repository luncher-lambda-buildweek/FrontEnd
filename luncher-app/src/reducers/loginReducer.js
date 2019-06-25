import {
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from '../actions/index';

const initialState = {
  error: '',
  loggingIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: '',
        loggingIn: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: false
      }
    default:
      return state;
  }
};

export default loginReducer;
