import { fork, all } from 'redux-saga/effects'

import auth from '../services/Auth/AuthSaga'
import user from '../services/User/UserSaga'
import utilities from '../services/Utilities/UtilitiesSaga'
import thematic from '../services/Thematic/ThematicSaga'

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(user),
    fork(utilities),
    fork(thematic)
  ])
}