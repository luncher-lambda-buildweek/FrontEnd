import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import schoolReducer from './schoolReducer';

const rootReducer = combineReducers({
  schoolReducer,
  loginReducer,
  signupReducer,
});

export default rootReducer;
