import React from "react";
import { connect } from "react-redux";
import {
  fetchUsersFollows,
  createUsersFollows,
  removeUsersFollow
} from "../../actions/user_follows_actions/user_follows_actions";
import { fetchUser } from "../../actions/user_actions/user_actions";
import UserModalInfo from "./user_modal_info";
import { selectOtherUsers } from "../../selectors/users_selector";
import { userFollowsSelector } from "../../selectors/user_follows_selector";

class UserFollowersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false}
    this.isFollowing = this.isFollowing.bind(this)
  }

  componentDidMount() {
    // as of now only current user
    // need to make it to show diff users follows later
    let currUserId = this.props.currUserId
   
    this.props.fetchUsersFollows(currUserId)
    let followers = Object.values(this.props.userFollows.followers)

    let funcs = followers.map((follower) => {
      return this.props.fetchUser(follower.userId)
    })
    
    Promise.all(funcs).then(() => (
      this.setState({ loaded: true })
    ))
  }

  componentWillUnmount(){
    this.setState({ loaded: false })
  }

  isFollowing(user){
    let followings = Object.values(this.props.userFollows.following)

    for (let i = 0; i < followings.length; i++) {
      let following = followings[i] 
      if (user.id === following.followedUserId){
        return true 
      } 
    }
    return false 
  }

  render() {
    let followersList = null;
    // debugger
    if ( this.state.loaded ) {
      followersList = Object.values(this.props.userFollows.followers).map(
        (follower) => {
          return (
            <UserModalInfo
              isFollowing={this.isFollowing(
                this.props.users[follower.userId]
              )}
              key={follower.id}
              userFollows={follower}
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
    userFollows: userFollowsSelector(state.entities.userFollows, state.session.id),
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
