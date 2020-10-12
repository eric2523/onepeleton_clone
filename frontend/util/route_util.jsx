import { Route, withRouter, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import React from 'react'

const Auth = ({ path, exact, loggedIn, component: Component}) => {
  return(
    <Route 
      path={ path }
      exact={ exact }
      render={ (props) => {
        return (loggedIn) ? <Redirect to="/" /> : <Component {...props} />
      }}
    />
  )
}

const mSTP = (state) => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

export const AuthRoute = withRouter(
  connect(mSTP, null)(Auth)
)