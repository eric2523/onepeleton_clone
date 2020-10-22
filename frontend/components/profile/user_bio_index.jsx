import React from 'react'
import { openModal } from '../../actions/modal_actions/modal_actions';
import {connect} from 'react-redux'
import {searchSVG} from '../svgs/modal_svg'
import ProfilePhotoForm from '../../forms/profile_photo_form';
import { withRouter } from 'react-router-dom';
import { userFollowsSelector } from '../../selectors/user_follows_selector';
import FollowBtn from '../modals/follow_btn';
import { createUsersFollows, removeUsersFollow } from '../../actions/user_follows_actions/user_follows_actions';

class UserBioIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userFollows: {
        followers: {},
        following: {}
      } 
    };
    this.handleOpenModal = this.handleOpenModal.bind(this)
  }

  componentDidMount(){
    this.props.fetchUsersFollows(this.props.currUser.id)
      .then(() => {
         let userFollows = userFollowsSelector(this.props.userFollows, this.props.currUser.id);
         this.setState({ userFollows })
      })
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.path !== this.props.match.path){
      this.props.fetchUsersFollows(this.props.currUser.id).then(() => {
        let userFollows = userFollowsSelector(
          this.props.userFollows,
          this.props.currUser.id
          );
          this.setState({ userFollows });
        });
      } else if (Object.keys(prevProps.userFollows).length !== Object.keys(this.props.userFollows).length){
        this.props.fetchUsersFollows(this.props.currUser.id).then(() => {
          let userFollows = userFollowsSelector(
            this.props.userFollows,
            this.props.currUser.id
            );
            this.setState({ userFollows });
          })
        }
      }

  handleOpenModal(type){
    return (e) => {
      this.props.openModal(type)
      window.setTimeout(
        () => $(".modal-background").addClass("modal-background-color"),
        3
      );
    }
  }

  render(){
    let followingCount = 0;
    let followersCount = 0;
    if (this.state.userFollows.followers !== undefined) {
      followersCount = Object.keys(this.state.userFollows.followers).length;
    }

    if (this.state.userFollows.following !== undefined) {
      followingCount = Object.keys(this.state.userFollows.following).length;
    }

    let profImg = null;
    if (this.props.currUser){
      profImg = (
        <img
          className="user-prof-img"
          src={this.props.currUser.photoUrl}
          alt="blank-profile-pic"
        />
      );
    }

    let userName = null;
    if (this.props.currUser){
      userName = (
        <h1 className="user-profile-username">
          {this.props.currUser.username}
        </h1>
      );
    }

    let userBioRight = (
     <div className="user-search-content">
       <FollowBtn />
     </div>
    )
    let profilePicForm = null;
    if (this.props.match.path !== "/profile/overview/:userId"){
      profilePicForm = <ProfilePhotoForm />;
      userBioRight = (
        <div
          onClick={this.handleOpenModal("allUsers")}
          className="user-search-content"
        >
          {searchSVG()}
          <span>Find Members</span>
        </div>
      )
    }

    return (
      <div className="user-bio-div">
        <div className="user-bio-top">
          <div className="user-profile-pic">
            <div className="user-profile-img-div">
              {profImg}
              {profilePicForm}
            </div>
          </div>

          <div className="user-profile-info">
            {userName}
          </div>

          <div className="hidden-user-profile-div"></div>
        </div>

        <div className="user-bio-bottom">
          <div className="user-follows-div">
            <div
              onClick={this.handleOpenModal("userFollowers")}
              className="user-followers"
            >
              <span className="followers-count">{followersCount}</span>
              <h1 className="prof-follows">Followers</h1>
            </div>

            <div
              onClick={this.handleOpenModal("userFollowings")}
              className="user-following"
            >
              <span className="following-count">{followingCount}</span>
              <h1 className="prof-follows">Following</h1>
            </div>
          </div>
          <div className="user-search">
            {userBioRight}
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return ({
    userFollows: state.entities.userFollows,
    sessionUser: state.entities.users[state.session.id]
  })
}

const mDTP = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    createUsersFollows: (userId) => dispatch(createUsersFollows(userId)),
    removeUsersFollows: (userFollowId) =>
      dispatch(removeUsersFollow(userFollowId)),
  };
}

export default withRouter(connect(mSTP, mDTP)(UserBioIndex));