import {connect} from 'react-redux'
import OverviewIndex from './overview_index'
import { fetchUsersFollows, createUsersFollows, removeUsersFollow } from '../../actions/user_follows_actions/user_follows_actions'
import { fetchUsersClasses } from '../../actions/user_workout_classes_actions/user_workout_classes_action'
import { fetchClasses, fetchClass, fetchUsersWorkoutClasses } from '../../actions/class_actions/class_actions'
import { fetchUser } from '../../actions/user_actions/user_actions'
import { fetchAllCategories } from '../../actions/category_actions/category_actions'
import { userFollowsSelector } from '../../selectors/user_follows_selector'

const mSTP = (state) => {
  return ({
    categories: state.entities.categories,
    userClasses: state.entities.userClasses,
    workoutClasses: state.entities.workoutClasses,
    currUser: state.entities.users[state.session.id],
    userFollows: userFollowsSelector(state.entities.userFollows, state.session.id)
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    fetchUsersClasses: () => dispatch(fetchUsersClasses()),
    fetchUsersWorkoutClasses: () => dispatch(fetchUsersWorkoutClasses()),
    fetchUsersFollows: (userId) => dispatch(fetchUsersFollows(userId)),
    createUsersFollows: (userId) => dispatch(createUsersFollows(userId)),
    removeUsersFollow: (userFollowId) => dispatch(removeUsersFollow(userFollowId)),
    fetchClass: (classId) => dispatch(fetchClass(classId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  })
}

export default connect(mSTP, mDTP)(OverviewIndex)