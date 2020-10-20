import React from "react";
import { connect } from "react-redux";
import { fetchUsersFollows, createUsersFollows } from "../../actions/user_follows_actions/user_follows_actions";
import { fetchUser } from "../../actions/user_actions/user_actions";
import UserModalInfo from './user_modal_info'
import { selectOtherUsers } from "../../selectors/users_selector";
import { removeUsersFollow } from "../../util/user_follows_api_util/user_follows_api_util";

class UserFollowingsModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // as of now only current user 
    // need to make it to show diff users follows later 
    this.props.fetchUsersFollows(this.props.currUserId)
      .then((res) => {
        Object.values(res.userFollows.following).forEach((userFollow) => (
          this.props.fetchUser(userFollow.followedUserId)
        ))
      })
  }

  render() {
    let followingsList = null;
    if (
      this.props.userFollowings !== undefined && 
      Object.keys(this.props.users).length
    ) {
      followingsList = Object.values(this.props.userFollowings).map((following) => {
        return (
          <UserModalInfo 
            key={following.id} 
            user={this.props.users[following.followedUserId]}
            followUser={this.props.followUser}
            removeUsersFollow={this.props.removeUsersFollow}
          />
        )
      })
    }

    let followingsCount = 0
    if (followingsList) {
      followingsCount = followingsList.length
    }

    return (
      <div className="user-follows-modal-div">
        <div className="users-follows-title">
          <h1>FOLLOWING {followingsCount} MEMBERS</h1>
        </div>
        <ul>
          {followingsList}
        </ul>
      </div>
    )
  }
}

const mSTP = (state) => {
  return ({
    userFollowings: state.entities.userFollows.following,
    users: selectOtherUsers(state.entities.users, state.session.id),
    currUserId: state.session.id
  })
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
