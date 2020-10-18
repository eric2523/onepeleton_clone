import {connect} from 'react-redux'
import OverviewIndex from './overview_index'
import { fetchClasses } from '../../actions/class_actions/class_actions'

const mSTP = (state) => {
  return ({
    categories: state.entities.categories,
    userClasses: state.entities.userClasses,
    workoutClasses: state.entities.workoutClasses,
    currUser: state.entities.users[state.session.id]
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchClasses: (classKeys) => dispatch(fetchClasses(classKeys))
  })
}

export default connect(mSTP, mDTP)(OverviewIndex)