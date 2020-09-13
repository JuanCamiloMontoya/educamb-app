import { put, takeLatest, all } from 'redux-saga/effects'
import Api from '../../common/api/Api'
import { exam } from "./ExamActions"

function* getByCourse({ payload: { id } }) {
  const response = yield Api.get(`/exam/course/${id}`)
  if (response) {
    yield put(exam.getByCourseResponse(response));
  } else {
    const err = new TypeError('ERROR_GET_PERMISSIONS')
    yield put(exam.getByCourseResponse(err))
  }
}

function* saveExam({ payload: { body, callback } }) {
  const res = yield Api.post(`/exam/response`, body)
  yield callback()
}

function* ActionWatcher() {
  yield takeLatest(exam.getByCourse, getByCourse)
  yield takeLatest(exam.saveExam, saveExam)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}