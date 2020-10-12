import React from 'react'
import LoginFormContainer from './login_form/login_form_container'
import SignUpFormContainer from './signup_form/signup_form_container'
import {AuthRoute} from '../util/route_util'

const App = () => {
  return(
    <div>
      <header> 
        <h1>One Peleton Header</h1>
      </header>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
    </div>
  )
}

export default App;