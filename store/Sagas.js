import { fork, all } from 'redux-saga/effects'

import auth from '../services/Auth/AuthSaga'
import user from '../services/User/UserSaga'
import utilities from '../services/Utilities/UtilitiesSaga'
import thematic from '../services/Thematic/ThematicSaga'
import course from '../services/Course/CourseSaga'
import exam from '../services/Exam/ExamSaga'
import lesson from '../services/Lesson/LessonSaga'
import discussion from '../services/Discussion/DiscussionSaga'

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(user),
    fork(utilities),
    fork(thematic),
    fork(course),
    fork(exam),
    fork(lesson),
    fork(discussion)
  ])
}