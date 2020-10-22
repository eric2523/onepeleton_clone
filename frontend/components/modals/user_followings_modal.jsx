import React from "react";
import { connect } from "react-redux";
import {
  fetchUsersFollows,
  createUsersFollows,
} from "../../actions/user_follows_actions/user_follows_actions";
import { fetchUser } from "../../actions/user_actions/user_actions";
import UserModalInfo from "./user_modal_info";
import { selectOtherUsers } from "../../selectors/users_selector";
import { removeUsersFollow } from "../../actions/user_follows_actions/user_follows_actions";
import { userFollowsSelector } from "../../selectors/user_follows_selector";
import { withRouter } from "react-router-dom";

class UserFollowingsModal extends React.Component {
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
    let currUserId = this.props.currUserId;
    if (this.props.location.pathname !== "/profile/overview") {
      currUserId = this.props.match.params.userId;
    }

    this.props.fetchUsersFollows(currUserId).then(() => {
      let userFollows = userFollowsSelector(this.props.userFollows, currUserId);
      this.setState({ userFollows });
    });
  }

  render() {
    let followings = Object.values(this.state.userFollows.following);
    let followingsList = null;
    if (followings.length) {
      followingsList = followings.map((following) => {
        return (
          <UserModalInfo
            key={following.id}
            userId={following.followedUserId}
            followUser={this.props.followUser}
            removeUsersFollow={this.props.removeUsersFollow}
            userFollow={following}
          />
        );
      });
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
    users: state.entities.users,
    userFollows: state.entities.userFollows,
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

export default withRouter(connect(mSTP, mDTP)(UserFollowingsModal));
