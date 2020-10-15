import usersReducer from './users_reducers/users_reducer'
import classReducer from './class_reducers/class_reducer'
import {combineReducers} from 'redux'
import categoryReducer from './category_reducers/category_reducer';
import spotifyReducer from './spotify_api_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  workoutClasses: classReducer,
  songs: spotifyReducer,
  categories: categoryReducer
})

export default entitiesReducer;