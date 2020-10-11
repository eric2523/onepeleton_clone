export const fetchAllUsers = () => {
  return $.ajax({
    method: "get",
    url: "/api/users",
  });
}

export const fetchUser = (userId) => {
  return $.ajax({
    method: "get",
    url: `/api/users/${userId}`,
  });
}