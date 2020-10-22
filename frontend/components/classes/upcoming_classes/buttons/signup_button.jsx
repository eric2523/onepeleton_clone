import React from 'react'

class SignUpBtn extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
   this.props
     .processBtn(this.props.workoutClassId)
     .then(() => this.props.fetchUsersClasses(this.props.currUser.id));
  }

  render(){
    return (
      <button onClick={this.handleClick} className="count-me-in count-me-in-sc">
        <h1 className="class-sign-title">COUNT ME IN</h1>
      </button>
    );
  }
}

export default SignUpBtn;