import sessionErrorReducer from './session_reducers/session_error_reducer'
import sessionReducer from './session_reducers/session_reducer'
import { combineReducers } from 'redux'
import entitiesReducer from './entities_reducer'
import ui from './ui_reducer'
import tokenReducer from './token_reducer'

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  ui,
  errors: sessionErrorReducer,
  tokens: tokenReducer
})

export default rootReducer;
