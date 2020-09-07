import { createActions } from 'redux-actions';

export const { exam } = createActions({
  EXAM: {
    GET_BY_COURSE: (id) => ({ id }),
    GET_BY_COURSE_RESPONSE: (exam) => ({ exam }),

    SAVE_EXAM: (answers) => ({ answers }),
  }
})