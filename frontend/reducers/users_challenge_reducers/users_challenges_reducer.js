import {
  RECEIVE_USERS_CHALLENGES,
  RECEIVE_USER_CHALLENGES,
  REMOVE_USER_CHALLENGE,
} from "../../actions/user_challenges/user_challenges_actions";

const usersChallengesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USERS_CHALLENGES:
      return action.usersChallenges;
    case RECEIVE_USER_CHALLENGES:
      newState[action.userChallenge.id] = action.userChallenge;
      return newState;
    case REMOVE_USER_CHALLENGE:
      delete newState[action.userChallenge.id]
      return newState
    default:
      return state;
  }
};

export default usersChallengesReducer;
