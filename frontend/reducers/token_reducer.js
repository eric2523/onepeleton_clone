import { RECEIVE_TEMP_TOKEN } from "../actions/spotify_api_actions";

const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TEMP_TOKEN:
      window.localStorage.setItem('spotToken', action.token.access_token)
      // return action.token.access_token 
    default:
      return state;
  }
}

export default tokenReducer;