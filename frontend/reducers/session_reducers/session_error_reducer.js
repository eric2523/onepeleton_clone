import {RECEIVE_ERRORS, CLEAR_ERRORS} from "../../actions/session_actions/session_actions";

const defaultErrorState = {
  login: []
}

const sessionErrorReducer = (state = defaultErrorState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ERRORS:
      let login = action.errors
      return Object.assign({}, { login }) 
    case CLEAR_ERRORS:
      return defaultErrorState;
    default:
      return state;
  }
}

export default sessionErrorReducer;
