import { RECEIVE_NEW_CLASS, RECEIVE_ALL_USERS_CLASSES, REMOVE_USERS_CLASS } from "../../actions/user_workout_classes_actions/user_workout_classes_action";

const usersWorkoutClassesReducer = (state ={}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  // debugger
  switch (action.type) {
    case RECEIVE_NEW_CLASS:
      newState[action.usersJoinClass.workout_class_id] = action.usersJoinClass.id 
      return newState;
    case RECEIVE_ALL_USERS_CLASSES:
      return action.usersClasses;
    case REMOVE_USERS_CLASS:
      delete newState[action.joinsClassId]
      return newState;
    default:
      return state;
  }
}

export default usersWorkoutClassesReducer;

//* userClasses: {
//*       1: {
//*         id: 1,
//*         userId: 1,
//*         classId: 1
//*       },
//*       2: {
//*         id: 2,
//*         userId: 2,
//*         classId: 5
//*       }
//*     },