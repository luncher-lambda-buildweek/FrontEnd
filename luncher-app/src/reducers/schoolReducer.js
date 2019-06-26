import { FETCH_SCHOOLS, FETCH_SUCCESS, FETCH_FAILED, CREATE_SCHOOL_START, CREATE_SCHOOL_SUCCESS, CREATE_SCHOOL_FAILURE} from '../actions/schools';

const initialState = {
  schools: [],
  fetchingSchools: false,
  creatingSchool: false,
  error: null,
};

const schoolReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_SCHOOLS:
      return { ...state, fetchingSchools: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, fetchingSchools: false, schools: action.payload };
    case FETCH_FAILED:
      return { ...state, fetchingSchools: false, error: action.payload };
    case CREATE_SCHOOL_START:
      return { ...state, creatingSchool: true, error: null };
    case CREATE_SCHOOL_SUCCESS:
      return { ...state, creatingSchool: false, schools: action.payload };
    case CREATE_SCHOOL_FAILURE:
      return { ...state, creatingSchool: false, error: action.payload };
    default:
      return state;
  }
};

export default schoolReducer;
