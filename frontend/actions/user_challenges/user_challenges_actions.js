import * as UsersChallengesAPIUtil from "../../util/user_challenges_api_util/user_challenges_api_util";

export const RECEIVE_USERS_CHALLENGES = "RECEIVE_USERS_CHALLENGES";
export const RECEIVE_USER_CHALLENGES = "RECEIVE_USER_CHALLENGES";
export const REMOVE_USER_CHALLENGE = "REMOVE_USER_CHALLENGE";

const receiveUsersChallenges = (usersChallenges) => {
  return {
    type: RECEIVE_USERS_CHALLENGES,
    usersChallenges,
  };
};

const receiveUserChallenge = (userChallenge) => {
  return {
    type: RECEIVE_USER_CHALLENGES,
    userChallenge,
  };
};

const deleteUsersChallenge = (userChallenge) => {
  return {
    type: REMOVE_USER_CHALLENGE,
    userChallenge,
  };
};

export const fetchAllUsersChallenges = () => {
  return (dispatch) => {
    return UsersChallengesAPIUtil.fetchAllUsersChallenges().then(
      (usersChallenges) => {
        return dispatch(receiveUsersChallenges(usersChallenges));
      }
    );
  };
};

export const fetchUsersChallenges = (userId) => {
  return (dispatch) => {
    return UsersChallengesAPIUtil.fetchUsersChallenges(userId).then(
      (usersChallenges) => {
        return dispatch(receiveUsersChallenges(usersChallenges));
      }
    );
  };
};

export const createUsersChallenge = (challengeId) => {
  return (dispatch) => {
    return UsersChallengesAPIUtil.createUsersChallenge(
      challengeId
    ).then((userChallenge) => dispatch(receiveUserChallenge(userChallenge)));
  };
};

export const removeUsersChallenge = (userChallengeId) => {
  return (dispatch) => {
    return UsersChallengesAPIUtil.deleteUsersChallenge(
      userChallengeId
    ).then((userChallenge) => dispatch(deleteUsersChallenge(userChallenge)));
  };
};
