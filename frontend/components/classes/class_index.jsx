import React from 'react'

class ClassComponent extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    $(".session-background").addClass("main-light-grey-background")
  }

  componentWillUnmount(){
    $(".session-background").removeClass("main-light-grey-background");
  }

  render(){
    return (
      <div>
        We are in the Class Component
      </div>
    )
  }
}

export default ClassComponent;