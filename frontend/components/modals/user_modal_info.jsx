import React from 'react'
import FollowingBtn from './following_btn'

class UserModalInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <li className="user-follows-modal-li-item">
        <h1>{this.props.user.username}</h1>
        <FollowingBtn />
      </li>
    )
  }
}

export default UserModalInfo