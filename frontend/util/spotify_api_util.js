export const requestSpotifyAuth = () => {
  let clientId = "a620fec0d0184efd8f0030c11fd61fe0";
  let key = "090f47368c864b15907ed4bf8de5d514";

  let encodedToken = btoa(clientId + ':' + key)
  return $.ajax({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Authorization": `Basic ${encodedToken}`
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
