import React from 'react'

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { username: "", password: "" }
  }

  render(){
    return(
      <div>We're in the LoginForm</div>
    )
  }
}

export default LoginForm;