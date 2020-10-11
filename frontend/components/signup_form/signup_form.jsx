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
      <div>
        <Errors errors={this.props.errors} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange("username")}
            type="text"
            value={this.state.username}
          />
          <input
            onChange={this.handleChange("email")}
            type="text"
            value={this.state.email}
          />
          <input
            onChange={this.handleChange("password")}
            type="password"
            value={this.state.password}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default SignUpForm;