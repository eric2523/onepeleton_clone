import React from 'react'
import Errors from '../errors/errors'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
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

  handleTimesClick(type) {
    return (e) => {
      this.setState({ [type]: "" });
    };
  }

  handleDemoUser(e) {
    e.preventDefault();
    this.setState({
      username: "demouser",
      password: "demopassword123",
    });

    window.setTimeout(() => {
      $(".submit-btn").trigger("click");
    }, 150);
  }

  render() {
    let errors = null;
    // check if errors array is empty
    if (this.props.errors.login.length) {
      errors = <Errors errors={this.props.errors} />;
    }
    return (
      <div className="form-container">
        <div className="fixed-error-div">{errors}</div>
        <form onSubmit={this.handleSubmit} className="form">
          <h3>Log in</h3>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              onChange={this.handleChange("username")}
              type="text"
              value={this.state.username}
            />
            <div
              className="times-button-container"
              onClick={this.handleTimesClick("username")}
            >
              <i className="far fa-times-circle"></i>
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={this.handleChange("password")}
              type="password"
              value={this.state.password}
            />
          </div>

          <input className="submit-btn" type="submit" value="LOG IN" />
        </form>

        <div className="_link-to">
          <p>New to Peleton?&nbsp;&nbsp;</p>
          <Link to="/signup">Sign up now</Link>
        </div>
        <div className="_link-to">
          <p>Want to see a demo?&nbsp;&nbsp;</p>
          <a onClick={this.handleDemoUser}>Log in as Demo User</a>
        </div>
      </div>
    );
  }
}

export default LoginForm;