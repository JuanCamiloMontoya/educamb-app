import { put, takeLatest, all } from 'redux-saga/effects';
import Api from '../../common/api/Api'
import { thematic } from "./ThematicActions"


function* getAll() {
  const response = yield Api.get("/thematic/courses?state=ACTIVE")
  if (response) {
    yield put(thematic.getAllResponse(response));
  } else {
    const err = new TypeError('ERROR_GET_PERMISSIONS')
    yield put(thematic.getAllResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(thematic.getAll, getAll)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}