import * as actionTypes from '../actions/schools';

const initialState = {
  schools: [
    // {
    //   id: number,
    //   user_id: number,
    //   schoolName: string,
    //   location: string ex. TX, USA,
    //   currentFunds: null,
    //   email: "knkn@yahoo.com",
    //   phoneNumber: 23456,
    //   schoolImg: ""
    // },
  ],
  school: {},
  isLoading: false,
  error: null,
};

const schoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SCHOOLS:
      return { ...state, isLoading: true, error: null };
    case actionTypes.FETCH_SUCCESS:
      return { ...state, isLoading: false, schools: action.payload };
    case actionTypes.CREATE_SCHOOL_START:
      return { ...state, isLoading: true, error: null };
    case actionTypes.CREATE_SCHOOL_SUCCESS:
      return { ...state, isLoading: false };
    case actionTypes.GET_SCHOOL:
      return { ...state, isLoading: true, error: null };
    case actionTypes.GET_SUCCESS:
      return { ...state, isLoading: false, school: action.payload };
    case actionTypes.DELETE_SCHOOL_START:
      return { ...state, isLoading: true, error: null };
    case actionTypes.DELETE_SCHOOL_SUCCESS:
      return { ...state, isLoading: false };
    case actionTypes.DONATE_START:
      return { ...state, isLoading: true, error: null };
    case actionTypes.DONATE_SUCCESS:
      return { ...state, isLoading: false };
    case actionTypes.FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default schoolReducer;
