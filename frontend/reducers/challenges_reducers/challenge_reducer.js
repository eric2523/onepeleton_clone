import {
  RECEIVE_ALL_CHALLENGES,
  RECEIVE_CHALLENGE,
} from "../../actions/challenges/challenges_action";

const challengesReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_CHALLENGES:
      return action.challenges
    case RECEIVE_CHALLENGE:
      newState[action.challenge.id] = action.challenge
    default:
      return state;
  }
}

export default challengesReducer