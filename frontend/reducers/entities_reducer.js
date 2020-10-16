import usersReducer from './users_reducers/users_reducer'
import classReducer from './class_reducers/class_reducer'
import {combineReducers} from 'redux'
import categoryReducer from './category_reducers/category_reducer';
import spotifyReducer from './spotify_api_reducer'
import usersWorkoutClassesReducer from './users_workout_class_reducers/users_workout_classes_reducer';
import songsReducer from './songs_reducers/songs_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  workoutClasses: classReducer,
  workoutClassSongs: songsReducer,
  songs: spotifyReducer,
  categories: categoryReducer,
  userClasses: usersWorkoutClassesReducer
})

export default entitiesReducer;