import sessionErrorReducer from './session_reducers/session_error_reducer'
import sessionReducer from './session_reducers/session_reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: sessionErrorReducer
})

export default rootReducer;
