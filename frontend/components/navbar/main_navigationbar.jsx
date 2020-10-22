import React from "react";
import { connect } from "react-redux";
import NavBarItem from "./nav_bar_item";
import { logout } from "../../actions/session_actions/session_actions";
import { peletonLogoSVG } from "../svgs/logos_svg";
import { Link } from "react-router-dom";

class MainNavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    // this.props.history.push("/login");
    this.props.logout();
  }

  render() {
    return (
      <div className="nav-bar-div">
        <Link to="/classes">
          <div className="peleton-small-logo-div">{peletonLogoSVG()}</div>
        </Link>
        <ul className="nav-bar-list">
          <NavBarItem path="/classes" itemTitle="Classes" />
          <NavBarItem path="/schedule/strength" itemTitle="Schedule" />
          <NavBarItem path="/challenges" itemTitle="Challenges" />
          <NavBarItem path="/profile/overview" itemTitle="Profile" />
          <li className="nav-bar-item">
            <a onClick={this.handleSignOut}>LOG OUT</a>
          </li>
        </ul>

        <Link to="/profile/overview">
          <div className="nav-bar-user-img-div">
            <div className="nav-bar-user-small-img">
              <img
                className="user-prof-img"
                src={this.props.currentUser.photoUrl}
                alt="profile-photo"
              />
            </div>
            <div className="nav-bar-username">
              <h1>{this.props.currentUser.username}</h1>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mSTP, mDTP)(MainNavigationBar);
