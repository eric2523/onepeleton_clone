import React from "react";
import { NavLink } from "react-router-dom";

class ProfileNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let overviewPath = "/profile/overview";
    let workoutsPath = "/profile/workouts";
    debugger;
    if (this.props.match !== undefined) {
      if (
        this.props.match.path !== overviewPath ||
        this.props.match.path !== workoutsPath
      ) {
        let wildcard = "/" + this.props.match.params.userId;
        overviewPath = overviewPath + wildcard;
        workoutsPath = workoutsPath + wildcard;
      }
    }

    return (
      <div className="profile-nav-div">
        <ul className="profile-navbar-list">
          <li className="nav-bar-item nav-bar-item-active-light">
            <NavLink to={overviewPath} activeClassName="nav-bar-item-active">
              Overview
            </NavLink>
          </li>

          <li className="nav-bar-item nav-bar-item-active-light">
            <NavLink to={workoutsPath} activeClassName="nav-bar-item-active">
              Workouts
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProfileNavbar;
