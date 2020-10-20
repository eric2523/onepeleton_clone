import React from 'react'
import { checkSvg } from '../svgs/modal_svg'

class UnfollowBtn extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <button className="followings-btn">
        <div className="followings-btn-content">
          <span>{checkSvg()}</span>
          <span className="button-content-text">following</span> 
        </div>
      </button>
    )
  }
}


export default UnfollowBtn;