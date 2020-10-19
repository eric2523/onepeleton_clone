export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
// export const FETCH_USER = "FETCH_USER";
export const RECEIVE_USER = "RECEIVE_USER";
import * as UserAPIUtil from '../../util/user_api_util/user_api_util'

const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
}

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchAllUsers = () => {
  return (dispatch) => {
    return UserAPIUtil.fetchAllUsers()
      .then((users) => dispatch(receiveAllUsers(users)))
  }
}

export const fetchUser = (userId) => {
  return (dispatch) => {
    return UserAPIUtil.fetchUser(userId)
      .then((user) => dispatch(receiveUser(user)))
  }
}

