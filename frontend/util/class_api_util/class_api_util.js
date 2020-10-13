export const getClass = (classId) => {
  return $.ajax({
    method: "get",
    url: `/api/workout_classes/${classId}`
  });
}

