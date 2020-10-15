import * as SpotifyAPIUtil from '../util/spotify_api_util'

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_TEMP_TOKEN = "RECEIVE_TEMP_TOKEN";

const receiveSong = (song) => {
  return ({
    type: RECEIVE_SONG,
    song
  })
}

const receiveToken = (token) => {
  return ({
    type: RECEIVE_TEMP_TOKEN,
    token
  })
}

export const fetchSong = (accessToken, songName) => {
  return (dispatch) => {
    SpotifyAPIUtil.requestSpotifyItem(accessToken, songName)
      .then((song) => {
        return dispatch(receiveSong(song))
      })
  }
}

export const fetchSpotToken = () => {
  return (dispatch) => {
    SpotifyAPIUtil.requestSpotifyAuth()
      .then((token) => dispatch(receiveToken(token)))
  }
}