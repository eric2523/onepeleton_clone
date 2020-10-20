import React from 'react'
import {plusSvg} from '../svgs/modal_svg'

class FollowBtn extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <button className="followings-btn">
        <div className="followings-btn-content">
          <span>{ plusSvg() }</span>
          <span className="button-content-text">follow</span>
        </div>
      </button>
    )
  }
}

export default FollowBtn;