import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  courses: [],
  course: undefined,
  loading: false,
}

const reducer = handleActions({
  COURSE: {
    GET_ALL: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_ALL_RESPONSE: {
      next(state, { payload: { courses } }) {
        return { ...state, loading: false, courses }
      },
      throw(state, action) {
        return { ...state }
      }
    },
    GET_BY_ID: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_BY_ID_RESPONSE: {
      next(state, { payload: { course } }) {
        return { ...state, loading: false, course }
      },
      throw(state, action) {
        return { ...state }
      }
    },
    GET_BY_ID2: (state, { payload: { } }) => ({ ...state }),

  },
},
  INITIAL_STATE
);

export default reducer;