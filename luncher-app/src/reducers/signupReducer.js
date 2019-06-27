import {
  CREATING_ACCOUNT,
  ACCOUNT_CREATED,
  CREATING_ERROR,
} from '../actions/signup';

const initialState = {
  signingUp: false,
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATING_ACCOUNT:
      return { ...state, error: null, signingUp: true };
    case ACCOUNT_CREATED:
      return { ...state, signingUp: false };
    case CREATING_ERROR:
      return { ...state, signingUp: false, error: action.payload };
    default:
      return state;
  }
};

export default signupReducer;
