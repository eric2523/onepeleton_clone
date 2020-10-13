import React from 'react'

class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  componentDidMount(){
    $(".session-background").addClass("main-light-grey-background")
  }

  componentWillUnmount(){
    $(".session-background").removeClass("main-light-grey-background");
  }

  handleSignOut(){
    this.props.history.push('/login')
    this.props.logout()
  }

  render(){
    return (
      <div>
        We are in the Class Component
        <button className="logout-btn" onClick={ this.handleSignOut }>Log Out</button>
      </div>
    )
  }
}

export default ClassComponent;