import React from "react";
import { connect } from "react-redux";
import {
  fetchUsersFollows,
  createUsersFollows,
  removeUsersFollow,
} from "../../actions/user_follows_actions/user_follows_actions";
import { fetchUser } from "../../actions/user_actions/user_actions";
import UserModalInfo from "./user_modal_info";
import { selectOtherUsers } from "../../selectors/users_selector";
import { userFollowsSelector } from "../../selectors/user_follows_selector";
import { withRouter } from "react-router-dom";

class UserFollowersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFollows: {
        followers: {},
        following: {},
      },
    };
  }

  componentDidMount() {
    let currUserId = this.props.sessionUserId;
    if (this.props.match.path === "/profile/overview/:userId") {
      currUserId = this.props.match.params.userId;
    }
    this.props.fetchUsersFollows(currUserId).then(() => {
      let userFollows = userFollowsSelector(this.props.userFollows, currUserId);
      this.setState({ userFollows });
    });
  }

  render() {
    let followers = Object.values(this.state.userFollows.followers);
    let followersList = null;
    if (followers.length) {
      followersList = followers.map((follower) => {
        return (
          <UserModalInfo
            key={follower.id}
            userId={follower.userId}
            followUser={this.props.followUser}
            removeUsersFollow={this.props.removeUsersFollow}
            userFollow={follower}
          />
        );
      });
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
    userFollows: state.entities.userFollows,
    users: state.entities.users,
    sessionUserId: state.session.id,
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

export default withRouter(connect(mSTP, mDTP)(UserFollowersModal));
