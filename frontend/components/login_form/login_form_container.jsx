import { connect } from 'react-redux'
import { login, clearErrors } from '../../actions/session_actions/session_actions'
import LoginForm from './login_form'

const mSTP = (state) => {
  return ({
    errors: state.errors
  })
}

const mDTP = (dispatch) => {
  return ({
    processForm: (user) => (dispatch(login(user))),
    clearErrors: () => (dispatch(clearErrors()))
  })
}

export default connect(mSTP, mDTP)(LoginForm)