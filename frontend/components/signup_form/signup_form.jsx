import React from 'react'
import Errors from "../errors/errors";
import { Link } from 'react-router-dom';
import * as SpotifyApiUtil from '../../util/spotify_api_util'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // this.props.clearErrors();
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
    this.props
      .processForm(this.state)
      .then(() =>
        SpotifyApiUtil.requestSpotifyAuth().then((token) =>
          window.localStorage.setItem("spotToken", token.access_token)
        )
      );
  }

  handleTimesClick(type) {
    return (e) => {
      this.setState({ [type]: ""})
    }
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
          <h3>Create an account</h3>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input
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
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange("email")}
              type="text"
              value={this.state.email}
            />
            <div
              className="times-button-container"
              onClick={this.handleTimesClick("email")}
            >
              <i className="far fa-times-circle"></i>
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange("password")}
              type="password"
              value={this.state.password}
            />
          </div>
          <input className="submit-btn" type="submit" value="SIGN UP" />
        </form>

        <div className="_link-to">
          <p>Already have an account?&nbsp;&nbsp;</p>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    );
  }
}

export default SignUpForm;