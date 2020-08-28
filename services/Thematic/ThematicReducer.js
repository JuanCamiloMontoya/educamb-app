import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  thematics: [],
  thematic: undefined,
  courseList: [],
  course: undefined,
  chapterList: [],
  chapter: undefined,
  loading: false,
}

const reducer = handleActions({
  THEMATIC: {
    GET_ALL: (state, { payload: { } }) => ({ ...state, loading: true }),
    GET_ALL_RESPONSE: {
      next(state, { payload: { thematics } }) {
        return { ...state, loading: false, thematics }
      },
      throw(state, action) {
        return { ...state }
      }
    },
    SET_THEMATIC: (state, { payload: { thematic } }) => ({ ...state, thematic }),
    SET_COURSE_LIST: (state, { payload: { courseList } }) => ({ ...state, courseList }),
    SET_COURSE: (state, { payload: { course } }) => ({ ...state, course }),
    SET_CHAPTER_LIST: (state, { payload: { chapterList } }) => ({ ...state, chapterList }),
    SET_CHAPTER: (state, { payload: { chapter } }) => ({ ...state, chapter }),
  },
},
  INITIAL_STATE
);

export default reducer;