import React from 'react'
import LoginFormContainer from './login_form/login_form_container'
import SignUpFormContainer from './signup_form/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import {Route} from 'react-router-dom'
import ClassContainer from './classes/class_container'

const App = () => {
  return (
    <div className="session-background">
      <header>
        <h1>One Peleton Header</h1>
      </header>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/classes" component={ClassContainer} />
    </div>
  );
}

export default App;