import { put, takeLatest, all } from 'redux-saga/effects';
import Api from '../../common/api/Api'
import { course } from "./CourseActions"

function* getAll() {
  const response = yield Api.get("/thematic/mobile?state=ACTIVE")
  if (response) {
    yield put(course.getAllResponse(response));
  } else {
    const err = new TypeError('ERROR_GET_PERMISSIONS')
    yield put(course.getAllResponse(err))
  }
}

function* getById({ payload: { id } }) {
  yield Api.post(`/course/user/${id}`)
  const response = yield Api.get(`/course/id/${id}`)
  if (response) {
    yield put(course.getByIdResponse(response));
  } else {
    const err = new TypeError('ERROR_GET_PERMISSIONS')
    yield put(course.getByIdResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(course.getAll, getAll)
  yield takeLatest(course.getById, getById)
  yield takeLatest(course.getById2, getById)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}