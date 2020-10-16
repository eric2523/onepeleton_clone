import {RECEIVE_SONGS} from '../../actions/songs_actions/songs_action'
import { CLEAR_SPOT_SONGS } from '../../actions/spotify_api_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SONGS:
      return action.songs 
    default:
      return state;
  }
}

export default songsReducer;