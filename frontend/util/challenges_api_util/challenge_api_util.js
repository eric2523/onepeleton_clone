export const fetchAllChallenges = () => {
  return $.ajax({
    method: "get",
    url: "/api/challenges"
  })
}

export const fetchChallenge = (challengeId) => {
  return $.ajax({
    method: "get",
    url: `/api/challenges/${challengeId}`
  })
}