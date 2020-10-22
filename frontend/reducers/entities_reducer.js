import usersReducer from './users_reducers/users_reducer'
import classReducer from './class_reducers/class_reducer'
import {combineReducers} from 'redux'
import categoryReducer from './category_reducers/category_reducer';
import spotifyReducer from './spotify_api_reducer'
import usersWorkoutClassesReducer from './users_workout_class_reducers/users_workout_classes_reducer';
import songsReducer from './songs_reducers/songs_reducer';
import userFollowsReducer from './user_follows_reducers/user_follows_reducer'
import challengesReducer from './challenges_reducers/challenge_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  workoutClasses: classReducer,
  workoutClassSongs: songsReducer,
  songs: spotifyReducer,
  categories: categoryReducer,
  challenges: challengesReducer,
  userClasses: usersWorkoutClassesReducer,
  userFollows: userFollowsReducer
})

export default entitiesReducer;