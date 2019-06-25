import { FETCH_SCHOOLS, FETCH_SUCCESS, FETCH_FAILED } from '../actions/schools';

const initialState = {
  schools: [
    {
      id: 14231,
      schoolName: 'Marion-Sterling Elementary School',
      state: 'OH',
      country: 'USA',
      fundsNeeded: 2500,
      contact: 'jj@gmail.com',
    },
    {
      id: 12382,
      schoolName: 'Nathan Hale Junior High',
      state: 'OK',
      country: 'Canada',
      fundsNeeded: 3200,
      contact: 'tb@gmail.com',
    },
    {
      id: 12701,
      schoolName: 'Marion-Sterling Elementary School',
      state: 'OH',
      country: 'USA',
      fundsNeeded: 2500,
      contact: 'jj@gmail.com',
    },
    {
      id: 12532,
      schoolName: 'Nathan Hale Junior High',
      state: 'OK',
      country: 'Canada',
      fundsNeeded: 3200,
      contact: 'tb@gmail.com',
    },
    {
      id: 12771,
      schoolName: 'Marion-Sterling Elementary School',
      state: 'OH',
      country: 'USA',
      fundsNeeded: 2500,
      contact: 'jj@gmail.com',
    },
    {
      id: 12932,
      schoolName: 'Nathan Hale Junior High',
      state: 'OK',
      country: 'Canada',
      fundsNeeded: 3200,
      contact: 'tb@gmail.com',
    },
    {
      id: 12371,
      schoolName: 'Marion-Sterling Elementary School',
      state: 'OH',
      country: 'USA',
      fundsNeeded: 2500,
      contact: 'jj@gmail.com',
    },
    {
      id: 12322,
      schoolName: 'Nathan Hale Junior High',
      state: 'OK',
      country: 'Canada',
      fundsNeeded: 3200,
      contact: 'tb@gmail.com',
    },
    {
      id: 12316,
      schoolName: 'Marion-Sterling Elementary School',
      state: 'OH',
      country: 'USA',
      fundsNeeded: 2500,
      contact: 'jj@gmail.com',
    },
    {
      id: 12432,
      schoolName: 'Nathan Hale Junior High',
      state: 'OK',
      country: 'Canada',
      fundsNeeded: 3200,
      contact: 'tb@gmail.com',
    },
    {
      id: 1233,
      schoolName: 'Marion-Sterling Elementary School',
      state: 'OH',
      country: 'USA',
      fundsNeeded: 2500,
      contact: 'jj@gmail.com',
    },
  ],
  fetchingSchools: false,
  error: null,
};

const schoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHOOLS:
      return { ...state, fetchingSchools: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, fetchingSchools: false, schools: action.payload };
    case FETCH_FAILED:
      return { ...state, fetchingSchools: false, error: action.payload };
    default:
      return state;
  }
};

export default schoolReducer;
