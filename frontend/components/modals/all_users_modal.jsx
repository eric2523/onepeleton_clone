import React from 'react'
import { connect } from 'react-redux'
import {
  fetchUsersFollows,
  createUsersFollows,
  removeUsersFollow,
} from "../../actions/user_follows_actions/user_follows_actions";
import { fetchAllUsers } from "../../actions/user_actions/user_actions";
import UserModalInfo from './user_modal_info';
import { selectOtherUsers } from '../../selectors/users_selector';
import { userFollowsSelector } from "../../selectors/user_follows_selector";

class AllUsersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.selectUserFollows = this.selectUserFollows.bind(this)
  }

  componentDidMount() {
    // as of now only current user
    // need to make it to show diff users follows later
    let currUserId = this.props.currUserId;

    let funcs = [
      this.props.fetchUsersFollows(currUserId), 
      this.props.fetchAllUsers()
    ]

    Promise.all(funcs).then(() => (
      this.setState({ loaded: true })
    ))
  }

  componentWillUnmount() {
    this.setState({ loaded: false });
  }


  selectUserFollows(user) {
    let followings = Object.values(this.props.userFollows.following);

    for (let i = 0; i < followings.length; i++) {
      let following = followings[i];
      if (user.id === following.followedUserId) {
        return following;
      }
    }
    return null;
  }

  render() {
    let usersList = null;
    if (this.state.loaded) {
      usersList = Object.values(this.props.users).map(
        (user) => {
          return (
            <UserModalInfo
              key={user.id}
              userFollow={this.selectUserFollows(user)}
              userId={user.id}
              followUser={this.props.followUser}
              removeUsersFollow={this.props.removeUsersFollow}
            />
          );
        }
      );
    }

    return (
      <div className="user-follows-modal-div">
        <div className="users-follows-title">
          <h1>PELETON MEMBERS</h1>
        </div>
        <ul>{usersList}</ul>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    userFollows: userFollowsSelector(
      state.entities.userFollows,
      state.session.id
    ),
    users: selectOtherUsers(state.entities.users, state.session.id),
    currUserId: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUsersFollows: (userId) => dispatch(fetchUsersFollows(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    followUser: (userId) => dispatch(createUsersFollows(userId)),
    removeUsersFollow: (userFollowId) =>
      dispatch(removeUsersFollow(userFollowId)),
  };
};

export default connect(mSTP, mDTP)(AllUsersModal);
