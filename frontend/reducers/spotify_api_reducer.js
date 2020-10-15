import { RECEIVE_SONG } from "../actions/spotify_api_actions";

const spotifyReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONG:
      return action.song
    default:
      return state
  }
}

export default spotifyReducer

