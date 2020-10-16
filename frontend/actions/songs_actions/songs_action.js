import * as SongsApiUtil from '../../util/songs_api_util/songs_api_util'
export const RECEIVE_SONGS = "RECEIVE_SONGS";

const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
});

export const fetchClassSongs = (classId) => {
  return (dispatch) => {
    SongsApiUtil.fetchClassSongs(classId)
      .then((songs) => dispatch(receiveSongs(songs)))
  }
}
//   return (dispatch) => (
//     SongsApiUtil.fetchClassSongs()
//       .then(songs => dispatch(receiveSongs(songs)))
//   )
// )

