import { connect} from 'react-redux'
import {fetchCategoryClasses} from '../../actions/class_actions/class_actions'
import ClassIndex from './class_index'
import { openModal, closeModal } from '../../actions/modal_actions/modal_actions'
import { fetchAllCategories } from '../../actions/category_actions/category_actions'

const mSTP = (state, ownProps) => {
  return ({
    workoutClasses: state.entities.workoutClasses,
    ownProps
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchCategoryClasses: (categoryName) => dispatch(fetchCategoryClasses(categoryName)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    openModal: () => dispatch(openModal('classDetails')),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(mSTP, mDTP)(ClassIndex)