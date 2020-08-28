import { combineReducers } from 'redux'

import { auth as authActions } from '../services/Auth/AuthActions'
import auth from '../services/Auth/AuthReducer'
import user from '../services/User/UserReducer'
import utilities from '../services/Utilities/UtilitiesReducer'
import thematic from '../services/Thematic/ThematicReducer'

const appReducer = (history) => combineReducers({
  auth,
  user,
  utilities,
  thematic
})

const rootReducer = (history) => {
  return (state, action) => {
    if (action.type == authActions.logout) state = undefined
    return appReducer(history)(state, action)
  }
}
export default rootReducer