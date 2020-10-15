import { RECEIVE_TEMP_TOKEN } from "../actions/spotify_api_actions";

const tokenReducer = (state = {}, action) => {
  // debugger
  switch (action.type) {
    case RECEIVE_TEMP_TOKEN:
      return action.token.access_token 
    default:
      return state;
  }
}

export default tokenReducer;