import { combineReducers } from 'redux'

import { auth as authActions } from '../services/Auth/AuthActions'
import auth from '../services/Auth/AuthReducer'
import user from '../services/User/UserReducer'
import utilities from '../services/Utilities/UtilitiesReducer'
import thematic from '../services/Thematic/ThematicReducer'
import exam from '../services/Exam/ExamReducer'
import course from '../services/Course/CourseReducer'
import lesson from '../services/Lesson/LessonReducer'
import discussion from '../services/Discussion/DiscussionReducer'

const appReducer = (history) => combineReducers({
  auth,
  user,
  utilities,
  thematic,
  course,
  exam,
  lesson,
  discussion
})

const rootReducer = (history) => {
  return (state, action) => {
    if (action.type == authActions.logout) state = undefined
    return appReducer(history)(state, action)
  }
}
export default rootReducer