import React from 'react'

class Errors extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    $(".form-input").addClass("error-border-highlight")
  }

  componentWillUnmount(){
    $(".form-input").removeClass("error-border-highlight");
  }

  render() {
    let errors = null;
    if (this.props.errors.login) {
      errors = this.props.errors.login.join(", ")
    }
    return(
      <div className="session-errors">
        { errors }
      </div>
    )
  }
}

export default Errors;