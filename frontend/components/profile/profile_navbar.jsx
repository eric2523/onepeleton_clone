import React from "react";
import { NavLink } from "react-router-dom";

class ProfileNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let overviewPath = "/profile/overview";
    let workoutsPath = "/profile/workouts";
    if (this.props.match.params.userId !== undefined) {
      let wildcard = "/" + this.props.match.params.userId;
      overviewPath = overviewPath + wildcard;
      workoutsPath = workoutsPath + wildcard;
    }

    return (
      <div className="profile-nav-div">
        <ul className="profile-navbar-list">
          <NavLink to={overviewPath} activeClassName="nav-bar-item-active">
            <li className="nav-bar-item nav-bar-item-active-light">Overview</li>
          </NavLink>

          <NavLink to={workoutsPath} activeClassName="nav-bar-item-active">
            <li className="nav-bar-item nav-bar-item-active-light">Workouts</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default ProfileNavbar;
