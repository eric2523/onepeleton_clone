// api_user_user_challenges GET    /api/users/:user_id/user_challenges(.:format)           api/user_challenges#index {:format=>:json}
// api_challenge_user_challenges POST   /api/challenges/:challenge_id/user_challenges(.:format) api/user_challenges#create {:format=>:json}
//           api_user_challenges GET    /api/user_challenges(.:format)                          api/user_challenges#index {:format=>:json}
//            api_user_challenge DELETE /api/user_challenges/:id(.:format)                      api/user_challenges#destroy {:format=>:json}


export const fetchUsersChallenges = (userId) => {
  return $.ajax({
    method: "get",
    url: `/api/users/${userId}/user_challenges`
  })
}

export const createUsersChallenge = (challengeId) => {
  return $.ajax({
    method: "post",
    url: `/api/challenges/${challengeId}/user_challenges`
  })
}

export const fetchAllUsersChallenges = () => {
  return $.ajax({
    method: "get",
    url: "/api/user_challenges"
  })
}

export const deleteUsersChallenge = (userChallengeId) => {
  return $.ajax({
    method: "delete",
    url: `/api/user_challenges/${userChallengeId}`
  })
}