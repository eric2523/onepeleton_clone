import React from 'react'
import UnfollowBtn from './unfollow_btn'
import FollowBtn from './follow_btn'

class UserModalInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      following: this.props.isFollowing, 
      delete: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    if (this.state.following){
      this.setState({ following: false, delete: true })
    } else {
      this.setState({ following: true, delete: false })
    }
  }

  componentWillUnmount(){
    if (this.state.delete){
      this.props.removeUsersFollow(this.props.userFollows.id);
    } else {
      if (!this.props.isFollowing) {
        this.props.followUser(this.props.user.id)
      }
    }
  }

  render(){
    let button = <UnfollowBtn />
    if (!this.state.following) {
      button = <FollowBtn />
    }

    return (
      <li className="user-follows-modal-li-item">
        <h1>{this.props.user.username}</h1>
        <div onClick={this.handleClick} className="user-modal-info-btn-c">
          {button}
        </div>
      </li>
    );
  }
}

export default UserModalInfo