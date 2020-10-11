import React from 'react'
import LoginFormContainer from './login_form/login_form_container'
import SignUpFormContainer from './signup_form/signup_form_container'

const App = () => {
  return(
    <div>
      <header>
        <h1>One Peleton Header</h1>
      </header>
      <SignUpFormContainer />
    </div>
  )
}

export default App;