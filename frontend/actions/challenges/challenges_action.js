export const RECEIVE_ALL_CHALLENGES = "RECEIVE_ALL_CHALLENGES";
export const RECEIVE_CHALLENGE = "RECEIVE_CHALLENGE";
import * as ChallengeAPIUtil from "../../util/challenges_api_util/challenge_api_util";

const receiveChallenges = (challenges) => {
  return {
    type: RECEIVE_ALL_CHALLENGES,
    challenges,
  };
};

const receiveChallenge = (challenge) => {
  return {
    type: RECEIVE_CHALLENGE,
    challenge,
  };
};

export const fetchAllChallenges = () => {
  return (dispatch) => {
    return ChallengeAPIUtil.fetchAllChallenges().then((challenges) =>
      dispatch(receiveChallenges(challenges))
    );
  };
};

export const fetchChallenge = (challengeId) => {
  return (dispatch) => {
    return ChallengeAPIUtil.fetchChallenge(challengeId).then((challenge) =>
      dispatch(receiveChallenge(challenge))
    );
  };
};
