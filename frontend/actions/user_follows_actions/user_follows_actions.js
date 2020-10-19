import * as UserFollowsAPIUtil from '../../util/user_follows_api_util/user_follows_api_util'
export const RECEIVE_USER_FOLLOW = "RECEIVE_USER_FOLLOW";
export const RECEIVE_ALL_USER_FOLLOWS = "RECEIVE_ALL_USER_FOLLOWS";
export const REMOVE_USER_FOLLOW = "REMOVE_USER_FOLLOW";

const receiveUserFollow = (userFollow) => {
  return ({
    type: RECEIVE_USER_FOLLOW,
    userFollow
  })
}

const receiveAllUserFollows = (userFollows) => {
  return ({
    type: RECEIVE_ALL_USER_FOLLOWS,
    userFollows
  })
}

const removeUserFollow = (userFollow) => {
  return ({
    type: REMOVE_USER_FOLLOW,
    userFollow
  })
}

export const fetchUsersFollows = (userId) => {
  return (dispatch) => {
    return UserFollowsAPIUtil.fetchUsersFollows(userId)
      .then((userFollows) => dispatch(receiveAllUserFollows(userFollows)))
  }
}

export const createUsersFollows = (userId) => {
  return (dispatch) => {
    return UserFollowsAPIUtil.createUsersFollow(userId)
      .then((userFollow) => dispatch(receiveUserFollow(userFollow)))
  }
}

export const removeUsersFollow = (userFollowId) => {
  return (dispatch) => {
    return UserFollowsAPIUtil.removeUsersFollow(userFollowId)
      .then((userFollow) => dispatch(removeUserFollow(userFollow)))
  }
}

