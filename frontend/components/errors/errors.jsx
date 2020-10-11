import React from 'react'

class Errors extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let errors = null;
    if (this.props.errors.login) {
      errors = this.props.errors.login.join(", ")
    }
    return(
      <div>
        { errors }
      </div>
    )
  }
}

export default Errors;