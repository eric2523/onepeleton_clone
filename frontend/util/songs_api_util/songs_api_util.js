export const fetchClassSongs = (classId) => {
  return $.ajax({
    method: "get",
    url:`/api/workout_classes/${classId}/songs`
  })
}