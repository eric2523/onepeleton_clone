import {connect} from 'react-redux'
import {logout} from '../../actions/session_actions/session_actions'
import ClassComponent from './class_index'

const mSTP = (state) => {
  return ({
    categories: ""
  })
}

export default connect(mSTP, null)(ClassComponent)