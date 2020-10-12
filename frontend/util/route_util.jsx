import { Route, withRouter, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import React from 'react'

const Auth = ({ path, exact, loggedIn, component: Component}) => {
  return(
    <Route 
      path={ path }
      exact={ exact }
      render={ (props) => {
        return (loggedIn) ? <Redirect to="/classes" /> : <Component {...props} />
      }}
    />
  )
}

const Protected = ({path, loggedIn, exact, component: Component}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        return loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

const mSTP = (state) => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

export const AuthRoute = withRouter(
  connect(mSTP, null)(Auth)
)

export const ProtectedRoute = withRouter(
  connect(mSTP, null)(Protected)
)