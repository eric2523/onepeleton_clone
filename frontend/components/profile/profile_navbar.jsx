import React from 'react'
import {NavLink} from 'react-router-dom'

class ProfileNavbar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="profile-nav-div">
        <ul className="profile-navbar-list">
          <li className="nav-bar-item nav-bar-item-active-light">
            <NavLink
              to="/profile/overview"
              activeClassName="nav-bar-item-active"
            >
              Overview
            </NavLink>
          </li>

          <li className="nav-bar-item nav-bar-item-active-light">
            <NavLink
              to="/profile/workouts"
              activeClassName="nav-bar-item-active"
            >
              Workouts
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProfileNavbar 