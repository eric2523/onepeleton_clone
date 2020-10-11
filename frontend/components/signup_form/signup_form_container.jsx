import { connect } from 'react-redux'
import { signup, clearErrors } from '../../actions/session_actions/session_actions'
import SignUpForm from './signup_form'

const mSTP = (state) => {
  return({
    errors: state.errors
  })
}

const mDTP = (dispatch) => {
  return({
    processForm: (user) => (dispatch(signup(user))),
    clearErrors: () => (dispatch(clearErrors()))
  })
}

export default connect(mSTP, mDTP)(SignUpForm)