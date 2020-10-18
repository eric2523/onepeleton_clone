import React from 'react'
import { connect } from 'react-redux'
import NavBarItem from './nav_bar_item'
import {logout} from '../../actions/session_actions/session_actions'

class MainNavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleSignOut() {
    this.props.history.push("/login");
    this.props.logout();
  }

  render() {
    return (
      <div className="nav-bar-div">
        <ul className="nav-bar-list">
          <NavBarItem path="/classes" itemTitle="Classes" />
          <NavBarItem path="/schedule" itemTitle="Schedule" />
          <NavBarItem path="/challenges" itemTitle="Challenges" />
          <NavBarItem path="/profile/overview" itemTitle="Profile" />
          <li className="nav-bar-item"><a onClick={ this.handleSignOut}>LOG OUT</a></li>
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

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mSTP, mDTP)(MainNavigationBar)