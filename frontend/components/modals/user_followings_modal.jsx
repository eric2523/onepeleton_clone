import React from "react";
import { connect } from "react-redux";
import { fetchUsersFollows, createUsersFollows } from "../../actions/user_follows_actions/user_follows_actions";
import { fetchUser } from "../../actions/user_actions/user_actions";
import UserModalInfo from './user_modal_info'
import { selectOtherUsers } from "../../selectors/users_selector";
import { removeUsersFollow } from '../../actions/user_follows_actions/user_follows_actions'
import { userFollowsSelector } from "../../selectors/user_follows_selector";

class UserFollowingsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.isFollowing = this.isFollowing.bind(this)
  }

  componentDidMount() {
    // as of now only current user
    // need to make it to show diff users follows later
    this.props.fetchUsersFollows(this.props.currUserId);

    let followings = Object.values(this.props.userFollows.following);

    let funcs = followings.map((following) => {
      return this.props.fetchUser(following.followedUserId);
    });

    Promise.all(funcs).then(() => this.setState({ loaded: true }));
  }

  componentWillUnmount() {
    this.setState({ loaded: false });
  }

  isFollowing(user) {
    let followings = Object.values(this.props.userFollows.following);

    for (let i = 0; i < followings.length; i++) {
      let following = followings[i];
      if (user.id === following.followedUserId) {
        return true;
      }
    }
    return false;
  }

  render() {
    let followingsList = null;
    if (this.state.loaded) {
      followingsList = Object.values(this.props.userFollows.following).map(
        (following) => {
          return (
            <UserModalInfo
              key={following.id}
              user={this.props.users[following.followedUserId]}
              followUser={this.props.followUser}
              removeUsersFollow={this.props.removeUsersFollow}
              userFollows={following}
              isFollowing={
                this.isFollowing(this.props.users[following.followedUserId])
              }
            />
          );
        }
      );
    }

    let followingsCount = 0;
    if (followingsList) {
      followingsCount = followingsList.length;
    }

    return (
      <div className="user-follows-modal-div">
        <div className="users-follows-title">
          <h1>FOLLOWING {followingsCount} MEMBERS</h1>
        </div>
        <ul>{followingsList}</ul>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    users: selectOtherUsers(state.entities.users, state.session.id),
    userFollows: userFollowsSelector(state.entities.userFollows, state.session.id),
    currUserId: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUsersFollows: (userId) => dispatch(fetchUsersFollows(userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    followUser: (userId) => dispatch(createUsersFollows(userId)),
    removeUsersFollow: (userFollowId) => dispatch(removeUsersFollow(userFollowId)) 
  };
};

export default connect(mSTP, mDTP)(UserFollowingsModal);
