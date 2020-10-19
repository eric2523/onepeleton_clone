export const fetchUsersFollows = (userId) => {
  return $.ajax({
    method: "get",
    url: `/api/users/${userId}/user_follows`,
  });
}

export const createUsersFollow = (userId) => {
  return $.ajax({
    method: "post",
    url: `/api/users/${userId}/user_follows`,
  });
}

export const removeUsersFollow = (userFollowId) => {
  return $.ajax({
    method: "delete",
    url: `/api/user_follows/${userFollowId}`
  })
}