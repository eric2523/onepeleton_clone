import {connect} from 'react-redux'
import OverviewIndex from './overview_index'
import { fetchClasses } from '../../actions/class_actions/class_actions'
import { fetchUsersFollows, createUsersFollows, removeUsersFollow } from '../../actions/user_follows_actions/user_follows_actions'

const mSTP = (state) => {
  return ({
    categories: state.entities.categories,
    userClasses: state.entities.userClasses,
    workoutClasses: state.entities.workoutClasses,
    currUser: state.entities.users[state.session.id],
    userFollows: state.entities.userFollows
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchClasses: (classKeys) => dispatch(fetchClasses(classKeys)),
    fetchUsersFollows: (userId) => dispatch(fetchUsersFollows(userId)),
    createUsersFollows: (userId) => dispatch(createUsersFollows(userId)),
    removeUsersFollow: (userFollowId) => dispatch(removeUsersFollow(userFollowId))
  })
}

export default connect(mSTP, mDTP)(OverviewIndex)