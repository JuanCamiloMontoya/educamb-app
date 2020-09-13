import { createActions } from 'redux-actions';

export const { course } = createActions({
  COURSE: {
    GET_ALL: () => ({}),
    GET_ALL_RESPONSE: (courses) => ({ courses }),

    GET_BY_ID: (id) => ({ id }),
    GET_BY_ID_RESPONSE: (course) => ({ course }),

    GET_BY_ID2: (id) => ({ id }),
  }
})