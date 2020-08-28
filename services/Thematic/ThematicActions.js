import { createActions } from 'redux-actions';

export const { thematic } = createActions({
  THEMATIC: {
    GET_ALL: () => ({}),
    GET_ALL_RESPONSE: (thematics) => ({ thematics }),

    SET_COURSE_LIST: (courseList) => ({ courseList }),
    SET_THEMATIC: (thematic) => ({ thematic }),
    SET_COURSE_LIST: (courseList) => ({ courseList }),
    SET_COURSE: (course) => ({ course }),
    SET_CHAPTER_LIST: (chapterList) => ({ chapterList }),
    SET_CHAPTER: (chapter) => ({ chapter }),
  }
})