import React from 'react'

class SignUpBtn extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
   this.props
     .processBtn(this.props.workoutClassId)
     .then(() => this.props.fetchUsersClasses());
  }

  render(){
    return (
      <button onClick={this.handleClick} className="count-me-in">
        <h1>COUNT ME IN</h1>
      </button>
    );
  }
}

export default SignUpBtn;