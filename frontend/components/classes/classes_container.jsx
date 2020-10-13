import { connect} from 'react-redux'
import {fetchCategoryClasses} from '../../actions/class_actions/class_actions'
import ClassIndex from './class_index'

const mSTP = (state, ownProps) => {
  return ({
    workoutClasses: state.entities.workoutClasses,
    ownProps
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchCategoryClasses: (categoryName) => dispatch(fetchCategoryClasses(categoryName))
  })
}

export default connect(mSTP, mDTP)(ClassIndex)