import * as APIUtil from '../../util/session_api_util/session_api_util'
import { fetchSpotToken } from '../spotify_api_actions';
import { fetchUser } from '../user_actions/user_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (user) => {
  return({
    type: RECEIVE_CURRENT_USER,
    user
  })
}

const logoutCurrentUser = () => {
  return({
    type: LOGOUT_CURRENT_USER
  })
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user)
      .then((user) => dispatch(receiveCurrentUser(user)))
      .then((res) => {
        return dispatch(fetchUser(res.user.id))
      })
      .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
  }
}

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout()
      .then(() => dispatch(logoutCurrentUser()))
      .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));
  }
}

export const signup = (user) => {
  return (dispatch) => {
    return (
      APIUtil.signup(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
        // .then(() => dispatch(fetchSpotToken()))
        .then((res) => {
          return dispatch(fetchUser(res.user.id));
        })
        .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
    );
  }
}
