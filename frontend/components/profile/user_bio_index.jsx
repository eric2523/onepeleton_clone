import React from 'react'
import { openModal } from '../../actions/modal_actions/modal_actions';
import {connect} from 'react-redux'

class UserBioIndex extends React.Component {
  constructor(props){
    super(props)
    this.handleOpenModal = this.handleOpenModal.bind(this)
  }

  componentDidMount(){
    this.props.fetchUsersFollows(this.props.currUser.id)
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
    if (this.props.userFollows.followers !== undefined) {
      followersCount = Object.keys(this.props.userFollows.followers).length;
    }

    if (this.props.userFollows.following !== undefined) {
      followingCount = Object.keys(this.props.userFollows.following).length;
    }

    return (
      <div className="user-bio-div">
        <div className="user-profile-pic">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="user-bio-top">
          <div className="user-profile-info">
            <h1 className="user-profile-username">
              {this.props.currUser.username}
            </h1>
          </div>
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
          <div className="user-search"></div>
        </div>
      </div>
    );
  }
}

const mDTP = (dispatch) => {
  return ({
    openModal: (modal) => dispatch(openModal(modal))
  })
}

export default connect(null, mDTP)(UserBioIndex);