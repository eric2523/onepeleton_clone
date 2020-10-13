import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions/session_actions'
import ClassIndex from './class_index'
import {fetchAllCategories} from '../../actions/category_actions/category_actions'

const mSTP = (state) => {
  return ({
    categories: state.entities.categories
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchAllCategories: () => dispatch(fetchAllCategories())
  })
}

export default connect(mSTP, mDTP)(ClassIndex)