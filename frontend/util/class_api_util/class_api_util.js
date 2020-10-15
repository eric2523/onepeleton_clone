export const getClass = (classId) => {
  return $.ajax({
    method: "get",
    url: `/api/workout_classes/${classId}`
  });
}

export const followClass = (classId) => {
  return $.ajax({
    method: "post",
    url: `/api/users_workout_classes`,
    data: {
      workout_class: {
        workout_class_id: classId,
      },
    },
  });
};

export const unfollowClass = (classId) => {
  return $.ajax({
    method: "delete",
    url: `/api/users_workout_classes/${classId}`,
  });
};

export const getUsersWorkoutClasses = () => {
  return $.ajax({
    method: "get",
    url: "/api/users_workout_classes",
  });
}