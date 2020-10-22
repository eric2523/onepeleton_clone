import {RECEIVE_ERRORS, CLEAR_ERRORS} from "../../actions/session_actions/session_actions";
import {RECEIVE_USERS_ERRORS} from '../../actions/user_actions/user_actions'

const defaultErrorState = {
  login: [],
  users: []
}

const sessionErrorReducer = (state = defaultErrorState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ERRORS:
      let login = action.errors
      return Object.assign({}, { login }) 
    case RECEIVE_USERS_ERRORS:
      let users = action.errors 
      return Object.assign({}, {users})
    case CLEAR_ERRORS:
      return defaultErrorState;
    default:
      return state;
  }
}

export default sessionErrorReducer;
