import { combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducer';
import signupReducer from '../reducers/signupReducer';

const rootReducer = combineReducers({
  loginReducer,
  signupReducer,
});

export default rootReducer;
