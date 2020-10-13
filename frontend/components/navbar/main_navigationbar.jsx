import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link, withRouter } from 'react-router-dom'
import NavBarItem from './nav_bar_item'

class MainNavigationBar extends React.Component {
  constructor(props){
    super (props)
  }

  render(){
    return (
      <div className="nav-bar-div">
        <ul className="nav-bar-list">
          <NavBarItem path="/classes" itemTitle="Classes" />
          <NavBarItem path="/schedule" itemTitle="Schedule" />
          <NavBarItem path="/challenges" itemTitle="Challenges" />
          <NavBarItem path="/profile" itemTitle="Profile" />
        </ul>
      </div>
    );
  }
}

const mSTP = (state) => {
  return({
    currentUser: state.entities.users[state.session.id]
  })
}

export default connect(mSTP, null)(MainNavigationBar)