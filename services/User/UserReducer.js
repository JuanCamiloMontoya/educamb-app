import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  loading: false,
  profile: undefined,
  inquiryCount: 0,
  phaseCurrent: undefined,
  roles: undefined,
  services: undefined,
  permissions: undefined
}

const reducer = handleActions({
  USER: {
    GET_PERMISSIONS: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_PERMISSIONS_RESPONSE: {
      next(state, { payload: { payload } }) {
        return { ...state, loading: false, ...payload }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_PROFILE: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_PROFILE_RESPONSE: {
      next(state, { payload: { profile } }) {
        return { ...state, profile, loading: false }
      },
      throw(state, action) {
        return { ...state, loading: false }
      }
    },

    PUT_PROFILE: (state, { payload: { } }) => ({ ...state }),
    PUT_PROFILE_RESPONSE: {
      next(state, { payload: { success } }) {
        return { ...state, success }
      },
      throw(state, action) {
        return { ...state }
      }
    },
    SAVE_INQUIRY: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_INQUIRY: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_INQUIRY_RESPONSE: {
      next(state, { payload: { inquiryCount } }) {
        return { ...state, inquiryCount }
      },
      throw(state, action) {
        return { ...state }
      }
    },
  }
},
  INITIAL_STATE
);

export default reducer;