import {connect} from 'react-redux'
import CategoryIndex from './category_index'
import {fetchAllCategories} from '../../actions/category_actions/category_actions'

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

export const CategoryContainer =  connect(mSTP, mDTP)(CategoryIndex)
