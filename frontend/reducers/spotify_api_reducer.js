import { RECEIVE_SONG, CLEAR_SPOT_SONGS } from "../actions/spotify_api_actions";

const spotifyReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_SONG:
      // idx 0 bc limited to 1 
      let id = action.song.tracks.items[0].id
      let artists = action.song.tracks.items[0].artists;
      let name = action.song.tracks.items[0].name;
      let iconURL = action.song.tracks.items[0].album.images[2].url
    
      newState[id] = {
        id,
        artists,
        name,
        iconURL
      }
      return newState;
    case CLEAR_SPOT_SONGS:
      return {}
    default:
      return state
  }
}

export default spotifyReducer

