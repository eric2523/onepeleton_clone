import * as ClassAPIUtil from '../../util/class_api_util/class_api_util'
export const RECEIVE_NEW_CLASS = "RECEIVE_NEW_CLASS";
export const RECEIVE_ALL_USERS_CLASSES = "RECEIVE_ALL_USERS_CLASSES";
export const REMOVE_USERS_CLASS = "REMOVE_USERS_CLASS";

const receiveNewUsersClass = (usersJoinClass) => {
  return {
    type: RECEIVE_NEW_CLASS,
    usersJoinClass
  };
};

const receiveAllUsersClass = (usersClasses) => {
  return {
    type: RECEIVE_ALL_USERS_CLASSES,
    usersClasses
  }
}

const removeUserClass = (joinsClassId) => {
  return {
    type: REMOVE_USERS_CLASS,
    joinsClassId
  }
}

export const followClass = (classId) => {
  return (dispatch) => {
    return ClassAPIUtil.followClass(classId).then((workoutClass) =>
      dispatch(receiveNewUsersClass(workoutClass))
    );
  };
};

export const fetchUsersClasses = () => {
  return (dispatch) => {
    return ClassAPIUtil.getUsersWorkoutClasses()
      .then((workoutClasses) => dispatch(receiveAllUsersClass(workoutClasses)))
  }
}

export const unfollowClass = (classId) => {
  return (dispatch) => {
    return ClassAPIUtil.unfollowClass(classId)
      .then((removedClass) => dispatch(removeUserClass(removedClass.id)))
  }
}


