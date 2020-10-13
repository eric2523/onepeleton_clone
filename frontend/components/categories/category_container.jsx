import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions/session_actions'
import CategoryIndex from './category_index'
import {fetchAllCategories} from '../../actions/category_actions/category_actions'
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) => {
  return ({
    categories: state.entities.categories,
    ownProps
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchAllCategories: () => dispatch(fetchAllCategories())
  })
}

export default connect(mSTP, mDTP)(CategoryIndex)