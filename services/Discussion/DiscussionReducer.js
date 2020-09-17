import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  userDiscussions: [],
  discussions: [],
  discussion: undefined,
  loading: false,
}

const reducer = handleActions({
  DISCUSSION: {
    GET_DISCUSSION: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_DISCUSSION_RESPONSE: {
      next(state, { payload: { discussions } }) {
        return { ...state, loading: false, discussions }
      },
      throw(state, action) {
        return { ...state }
      }
    },
    SET_DISCUSSION: (state, { payload: { discussion } }) => ({ ...state, discussion }),

    GET_USER_DISCUSSION: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_USER_DISCUSSION_RESPONSE: {
      next(state, { payload: { userDiscussions } }) {
        return { ...state, loading: false, userDiscussions }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    CREATE: (state, { payload: { } }) => ({ ...state, loading: true }),

    CREATE_ANSWER: (state, { payload: { } }) => ({ ...state, loading: true }),
  },
},
  INITIAL_STATE
);

export default reducer;