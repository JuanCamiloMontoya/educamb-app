import { put, takeLatest, all } from 'redux-saga/effects';
import Api from '../../common/api/Api'
import { user } from "./UserActions"


function* getPermissions() {
  const response = yield Api.get("/user/get-permissions")
  if (response.ok) {
    yield put(user.getPermissionsResponse(response.payload));
  } else {
    const err = new TypeError('ERROR_GET_PERMISSIONS')
    yield put(user.getPermissionsResponse(err))
  }
}

function* getProfile() {
  const response = yield Api.get("/user/get-profile")
  if (response) {
    yield put(user.getProfileResponse(response));
  } else {
    const err = new TypeError('ERROR_GET_PERMISSIONS')
    yield put(user.getProfileResponse(err))
  }
}

function* putProfile(data) {
  const response = yield Api.put("/user/update", data.payload.data)
  if (response.ok) {
    yield put(user.putProfileResponse(response.payload.success));
  } else {
    const err = new TypeError('ERROR_GET_PERMISSIONS')
    yield put(user.putProfileResponse(err))
  }
}

function* saveInquiry({ payload: { answers, callback } }) {
  const response = yield Api.post("/inquiry/user", { answers })
  if (response.success) {
    yield callback()
    yield put(user.getInquiry())
  }
}

function* getInquiry() {
  const response = yield Api.get("/inquiry/user")
  if (response) {
    yield put(user.getInquiryResponse(response));
  } else {
    const err = new TypeError('ERROR_GET_PERMISSIONS')
    yield put(user.getInquiryResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(user.getPermissions, getPermissions)
  yield takeLatest(user.getProfile, getProfile)
  yield takeLatest(user.putProfile, putProfile)
  yield takeLatest(user.saveInquiry, saveInquiry)
  yield takeLatest(user.getInquiry, getInquiry)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}