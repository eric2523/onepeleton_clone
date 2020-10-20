import React from "react";
import { connect } from "react-redux";
import {
  fetchUsersFollows,
  createUsersFollows,
} from "../../actions/user_follows_actions/user_follows_actions";
import { fetchUser } from "../../actions/user_actions/user_actions";
import UserModalInfo from "./user_modal_info";
import { selectOtherUsers } from "../../selectors/users_selector";
import { removeUsersFollow } from "../../util/user_follows_api_util/user_follows_api_util";

class UserFollowersModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // as of now only current user
    // need to make it to show diff users follows later
    this.props.fetchUsersFollows(this.props.currUserId).then((res) => {
      Object.values(res.userFollows.followers).forEach((userFollow) =>
        this.props.fetchUser(userFollow.userId)
      );
    });
  }

  render() {
    let followersList = null;
    if (
      this.props.userFollowers !== undefined &&
      Object.keys(this.props.users).length
    ) {
      followersList = Object.values(this.props.userFollowers).map(
        (follower) => {
          return (
            <UserModalInfo
              key={follower.id}
              user={this.props.users[follower.userId]}
              followUser={this.props.followUser}
              removeUsersFollow={this.props.removeUsersFollow}
            />
          );
        }
      );
    }

    let followingsCount = 0;
    if (followersList) {
      followingsCount = followersList.length;
    }

    return (
      <div className="user-follows-modal-div">
        <div className="users-follows-title">
          <h1>{followingsCount} MEMBERS FOLLOWING YOU</h1>
        </div>
        <ul>{followersList}</ul>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    userFollowers: state.entities.userFollows.followers,
    users: selectOtherUsers(state.entities.users, state.session.id),
    currUserId: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUsersFollows: (userId) => dispatch(fetchUsersFollows(userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    followUser: (userId) => dispatch(createUsersFollows(userId)),
    removeUsersFollow: (userFollowId) =>
      dispatch(removeUsersFollow(userFollowId)),
  };
};

export default connect(mSTP, mDTP)(UserFollowersModal);
