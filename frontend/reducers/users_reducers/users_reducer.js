import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../../actions/user_actions/user_actions'
import { RECEIVE_NEW_CLASS } from '../../actions/class_actions/class_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users 
    case RECEIVE_USER:
      newState[action.user.id] = action.user 
      return newState
    default:
      return state;
  }
}

export default usersReducer;