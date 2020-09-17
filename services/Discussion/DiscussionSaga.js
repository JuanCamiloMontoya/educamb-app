import { put, takeLatest, all } from 'redux-saga/effects';
import Api from '../../common/api/Api'
import { discussion } from "./DiscussionActions"

function* getUserDiscussion() {
  const response = yield Api.get(`/discussion/user`)
  if (response) {
    yield put(discussion.getUserDiscussionResponse(response));
  } else {
    const err = new TypeError('ERROR_GET_PERMISSIONS')
    yield put(discussion.getUserDiscussionResponse(err))
  }
}

function* getDiscussion() {
  const response = yield Api.get(`/discussion`)
  if (response) {
    yield put(discussion.getDiscussionResponse(response));
  } else {
    const err = new TypeError('ERROR_GET_PERMISSIONS')
    yield put(discussion.getDiscussionResponse(err))
  }
}

function* create({ payload: { body, callback } }) {
  const response = yield Api.post(`/discussion`, body)
  if (response?.success) {
    yield put(discussion.getUserDiscussion());
    yield callback()
  }
}

function* createAnswer({ payload: { body, callback } }) {
  const response = yield Api.post(`/discussion/answer`, body)
  if (response?.success) {
    yield put(discussion.getDiscussion())
    yield put(discussion.setDiscussion(response.detail))
    yield callback()
  }
}

function* ActionWatcher() {
  yield takeLatest(discussion.getDiscussion, getDiscussion)
  yield takeLatest(discussion.getUserDiscussion, getUserDiscussion)
  yield takeLatest(discussion.create, create)
  yield takeLatest(discussion.createAnswer, createAnswer)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}