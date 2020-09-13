import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
}

const reducer = handleActions({
  LESSON: {
    ADD_LESSON_USER: (state, { payload: { } }) => ({ ...state, loading: true }),
  },
},
  INITIAL_STATE
);

export default reducer;