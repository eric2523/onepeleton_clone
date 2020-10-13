import { RECEIVE_CLASS, RECEIVE_CLASSES } from "../../actions/class_actions/class_actions";

const classReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CLASS:
      newState[action.workoutClass.id] = action.workoutClass
      return newState;
    case RECEIVE_CLASSES:
      return action.workoutClasses
    default:
      return state;
  }
}

export default classReducer;