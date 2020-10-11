import usersReducer from './users_reducers/users_reducer'
import {combineReducers} from 'redux'

const entitiesReducer = combineReducers({
  users: usersReducer
})

export default entitiesReducer;