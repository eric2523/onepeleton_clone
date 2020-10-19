import React from 'react'

class UserBioIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUsersFollows(this.props.currUser.id)
  }

  render(){
    let followingCount = null;
    let followersCount = null;
    if (
      (this.props.userFollows.followers !== undefined) && 
      (this.props.userFollows.following !== undefined)
    ) {
      followingCount = Object.keys(this.props.userFollows.following).length;
      followersCount = Object.keys(this.props.userFollows.followers).length;
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
            <div className="user-followers">
              <span className="followers-count">{followersCount}</span>
              <h1 className="prof-follows">Followers</h1>
            </div>

            <div className="user-following">
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

export default UserBioIndex;