import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions/session_actions'
import ClassComponent from './class_index'

const mSTP = (state) => {
  return ({
    test: ""
  })
}

const mDTP = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  })
}

export default connect(mSTP, mDTP)(ClassComponent)