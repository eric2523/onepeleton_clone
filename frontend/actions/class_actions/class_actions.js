import * as ClassAPIUtil from '../../util/class_api_util/class_api_util'
import * as CategoryAPIUtil from '../../util/category_api_util/category_api_util'
export const RECEIVE_CLASS = "RECEIVE_CLASS";
export const RECEIVE_CLASSES = "RECEIVE_CLASSES";

const receiveClass = (workoutClass) => {
  return {
    type: RECEIVE_CLASS,
    workoutClass
  };
}

const receiveClasses = (workoutClasses) => {
  return {
    type: RECEIVE_CLASSES,
    workoutClasses
  }
}

export const fetchClass = (classId) => {
  return (dispatch) => {
    return ClassAPIUtil.getClass(classId)
      .then((workoutClass) => dispatch(receiveClass(workoutClass)))
  }
}

export const fetchCategoryClasses = (categoryName) => {
  return (dispatch) => {
    return CategoryAPIUtil.fetchCategoryClasses(categoryName)
      .then((workoutClasses) => dispatch(receiveClasses(workoutClasses)) )
  }
}

export const fetchMostRecentClasses = () => {
  return (dispatch) => {
    return ClassAPIUtil.getMostRecentClasses()
      .then((workoutClasses) => dispatch(receiveClasses(workoutClasses)))
  }
}