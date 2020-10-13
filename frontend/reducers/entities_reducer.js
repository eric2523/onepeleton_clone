import usersReducer from './users_reducers/users_reducer'
import classReducer from './class_reducers/class_reducer'
import {combineReducers} from 'redux'
import categoryReducer from './category_reducers/category_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  workoutClasses: classReducer,
  categories: categoryReducer
})

export default entitiesReducer;