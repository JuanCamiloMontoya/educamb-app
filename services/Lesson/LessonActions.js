import { createActions } from 'redux-actions';

export const { lesson } = createActions({
  LESSON: {
    ADD_LESSON_USER: (id, callback) => ({ id, callback }),
  }
})