// import {generateSpotEncodedToken} from '../../keys'

export const requestSpotifyAuth = () => {
  let token = btoa(
    `${window.spot_id}:${window.client_s}`
  );
 
  return $.ajax({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Authorization": `Basic ${token}`
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
