import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  exam: undefined,
  loading: false,
}

const reducer = handleActions({
  EXAM: {
    GET_BY_COURSE: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_BY_COURSE_RESPONSE: {
      next(state, { payload: { exam } }) {
        return { ...state, loading: false, exam }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    SAVE_EXAM: (state, { payload: { } }) => ({ ...state }),
  },
},
  INITIAL_STATE
);

export default reducer;