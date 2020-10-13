import usersReducer from './users_reducers/users_reducer'
import classReducer from './class_reducers/class_reducer'
import {combineReducers} from 'redux'


const entitiesReducer = combineReducers({
  users: usersReducer,
  workoutClasses: classReducer
})

export default entitiesReducer;