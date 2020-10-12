import React from 'react'
import Errors from "../errors/errors";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleChange(type) {
    return (e) => {
      e.preventDefault();
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    return (
      <div className="form">
        <Errors errors={this.props.errors} />
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="username">Username</label> 
              <input
                onChange={this.handleChange("username")}
                type="text"
                value={this.state.username}
              />
          </div>

          <div className="form-input">
            <label htmlFor="email">Email</label>
              <input
                onChange={this.handleChange("email")}
                type="text"
                value={this.state.email}
              />
          </div>

          <div className="form-input">
            <label htmlFor="password">Password</label>
              <input
                onChange={this.handleChange("password")}
                type="password"
                value={this.state.password}
              />
          </div>
          <input className="submit-btn" type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default SignUpForm;