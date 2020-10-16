import {generateSpotEncodedToken} from '../../keys'

export const requestSpotifyAuth = () => {
  return $.ajax({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Authorization": `Basic ${generateSpotEncodedToken()}`
    },
    data: "grant_type=client_credentials"
  });
}

// export const requestEncodedToken = () => {
//   return $.ajax({
//     method: "get",
//     url: "/api/tokens"
//   })
// }

export const requestSpotifyItem = (accessToken, songName) => {
  return $.ajax({
    method: "get",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
      "Authorization": "Bearer " + accessToken
    },
    url: `https://api.spotify.com/v1/search?q=${songName}&type=track&limit=1`,
  });
}
