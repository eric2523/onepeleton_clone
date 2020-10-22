export const userFollowsSelector = (userFollows, currUserId) => {
  let newUserFollows = {
    followers: {},
    following: {}
  }

  for (const id in userFollows){
    if(userFollows[id].userId === parseInt(currUserId)){
      newUserFollows.following[id] = userFollows[id]
    } else {
      newUserFollows.followers[id] = userFollows[id]
    }
  }

  return newUserFollows
}