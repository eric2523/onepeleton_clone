import React from 'react'

class CancelBtn extends React.Component {
  constructor(props){
    super(props)
    this.state = {btnText: "you're in"}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
   this.props
     .processBtn(this.props.workoutClassId)
     .then(() => this.props.fetchUsersClasses(this.props.currUser.id));
  }

  handleMouseOver(type){
    return (e) => {
      if (type === "mouse-in") {
        this.setState({btnText: "cancel"})
      } else {
        this.setState({btnText: "you're in"})
      }
    }
  }

  render(){
    return (
      <button
        onMouseEnter={this.handleMouseOver("mouse-in")}
        onMouseLeave={this.handleMouseOver("mouse-out")}
        onClick={this.handleClick}
        className="count-me-out count-me-out-sc"
      >
        <h1 className="class-sign-title">{this.state.btnText}</h1>
      </button>
    );
  }
}

export default CancelBtn;