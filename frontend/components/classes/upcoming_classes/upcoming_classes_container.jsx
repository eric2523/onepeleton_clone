import { fetchMostRecentClasses, fetchUsersWorkoutClasses } from '../../../actions/class_actions/class_actions'
import UpcomingClassesRow from './upcoming_classes_row'
import { connect } from 'react-redux'
import { followClass, unfollowClass, fetchUsersClasses } from '../../../actions/user_workout_classes_actions/user_workout_classes_action'
import { fetchAllCategories } from '../../../actions/category_actions/category_actions'

const mSTP = (state) => {
  return ({
    workoutClasses: state.entities.workoutClasses,
    userClasses: state.entities.userClasses,
    categories: state.entities.categories
  })
}

const mDTP = (dispatch) => {
  return {
    fetchMostRecentClasses: () => dispatch(fetchMostRecentClasses()),
    followClass: (classId) => dispatch(followClass(classId)),
    unfollowClass: (classId) => dispatch(unfollowClass(classId)),
    fetchUsersClasses: () => dispatch(fetchUsersClasses()),
    fetchUsersWorkoutClasses: () => dispatch(fetchUsersWorkoutClasses()),
    fetchAllCategories: () => dispatch(fetchAllCategories())
  };
}

export default connect(mSTP, mDTP)(UpcomingClassesRow)