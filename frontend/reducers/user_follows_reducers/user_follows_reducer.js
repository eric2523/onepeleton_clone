import {
  RECEIVE_USER_FOLLOW,
  RECEIVE_ALL_USER_FOLLOWS,
  REMOVE_USER_FOLLOW
} from '../../actions/user_follows_actions/user_follows_actions'

const userFollowsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_USER_FOLLOW:
      newState[action.userFollow.id] = action.userFollow;
      return newState;
    case RECEIVE_ALL_USER_FOLLOWS:
      return action.userFollows 
    case REMOVE_USER_FOLLOW:
      delete newState[action.userFollow.id]
      return newState;
    default:
      return state;
  }
}

export default userFollowsReducer