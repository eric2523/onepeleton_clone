import sessionErrorReducer from './session_reducers/session_error_reducer'
import sessionReducer from './session_reducers/session_reducer'
import { combineReducers } from 'redux'
// import usersReducer from './users_reducers/users_reducer';
import entitiesReducer from './entities_reducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: sessionErrorReducer
})

export default rootReducer;
