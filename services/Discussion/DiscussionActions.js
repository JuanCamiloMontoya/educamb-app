import { createActions } from 'redux-actions';

export const { discussion } = createActions({
  DISCUSSION: {
    GET_DISCUSSION: () => ({}),
    GET_DISCUSSION_RESPONSE: (discussions) => ({ discussions }),

    SET_DISCUSSION: (discussion) => ({ discussion }),

    GET_USER_DISCUSSION: () => ({}),
    GET_USER_DISCUSSION_RESPONSE: (userDiscussions) => ({ userDiscussions }),

    CREATE: (body, callback) => ({ body, callback }),

    CREATE_ANSWER: (body, callback) => ({ body, callback }),

  }
})