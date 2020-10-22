import React from "react";
import UnfollowBtn from "./unfollow_btn";
import FollowBtn from "./follow_btn";
import { Link, withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions/modal_actions";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions/user_actions";
import { userFollowsSelector } from "../../selectors/user_follows_selector";
import { fetchUsersFollows } from "../../actions/user_follows_actions/user_follows_actions";

class UserModalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false,
      delete: false,
      loaded: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.isFollowing = this.isFollowing.bind(this);
  }

  handleClick() {
    if (this.isFollowing(this.props.users[this.props.userId])) {
      this.setState({ following: false, delete: true });
    } else {
      this.setState({ following: true, delete: false });
    }
  }

  handleRedirect(e) {
    this.props.closeModal();
  }

  componentDidMount() {
    let funcs = [
      this.props.fetchUsersFollows(this.props.currUserId),
      this.props.fetchUser(this.props.userId),
    ];

    Promise.all(funcs).then(() => {
      if (this.isFollowing(this.props.users[this.props.userId])) {
        this.setState({ following: true, loaded: true });
      } else {
        this.setState({ loaded: true });
      }
    });
  }

  componentWillUnmount() {
    if (this.state.delete) {
      this.props.removeUsersFollow(this.props.userFollow.id);
    } else {
      if (
        !this.isFollowing(this.props.users[this.props.userId]) &&
        this.state.following
      ) {
        this.props.followUser(this.props.userId);
      }
    }
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
    let button = <UnfollowBtn />;
    if (!this.state.following) {
      button = <FollowBtn />;
    }
    let img = null;
    let username = null;

    if (this.state.loaded) {
      let user = this.props.users[this.props.userId];
      img = (
        <img className="user-prof-img" src={user.photoUrl} alt="profile-pic" />
      );

      username = <h1>{user.username}</h1>;
    }

    let linkpath = `/profile/overview/${this.props.userId}`;
    if (this.props.userId === this.props.currUserId) {
      linkpath = "/profile/overview";
    }

    return (
      <li className="user-follows-modal-li-item">
        <Link onClick={this.handleRedirect} to={linkpath}>
          <div className="users-follows-modal-left">
            <div className="user-profile-img-div uf-prof-img-div">{img}</div>
            {username}
          </div>
        </Link>
        <div onClick={this.handleClick} className="user-modal-info-btn-c">
          {button}
        </div>
      </li>
    );
  }
}

const mSTP = (state) => {
  return {
    currUserId: state.session.id,
    users: state.entities.users,
    userFollows: userFollowsSelector(
      state.entities.userFollows,
      state.session.id
    ),
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsersFollows: (userId) => dispatch(fetchUsersFollows(userId)),
  };
};

export default connect(mSTP, mDTP)(UserModalInfo);
// export default UserModalInfo
