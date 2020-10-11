import React from 'react'
import Errors from '../errors/errors'

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { username: "", password: "" }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(type) {
    return (e) => {
      e.preventDefault();
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  render(){
    return (
      <div>
        <Errors errors={ this.props.errors }/>
        <form onSubmit={ this.handleSubmit }>
          <input
            onChange={this.handleChange("username")}
            type="text"
            value={this.state.username}
          />
          <input
            onChange={this.handleChange("password")}
            type="password"
            value={this.state.password}
          />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;