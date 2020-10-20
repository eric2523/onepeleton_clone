export const selectOtherUsers = (users, currUserId) => {
  Object.freeze(users)
  let newSlice = Object.assign({}, users)
  delete newSlice[currUserId]
  return newSlice
}