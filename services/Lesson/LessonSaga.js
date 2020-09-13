import { put, takeLatest, all } from 'redux-saga/effects';
import Api from '../../common/api/Api'
import { lesson } from "./LessonActions"

function* addLessonUser({ payload: { id, callback } }) {
  const response = yield Api.post(`/lesson/user/${id}`)
  if (response?.success) yield callback()
}

function* ActionWatcher() {
  yield takeLatest(lesson.addLessonUser, addLessonUser)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}