import React from 'react'
import { clearErrors } from '../../actions/session_actions/session_actions';
import { connect } from 'react-redux';

class Errors extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    $(".form-input").addClass("error-border-highlight")
  }

  componentWillUnmount(){
    $(".form-input").removeClass("error-border-highlight");
  }

  handleClick(e){
    e.preventDefault();
    this.props.clearErrors();
  }

  render() {
    let errors = null;
    if (this.props.errors.login) {
      errors = this.props.errors.login.join(", ")
    }
    return (
      <div onClick={this.handleClick} className="session-errors div-pointer">
        {errors}
        <button className="x-btn">
          X
        </button>
      </div>
    );
  }
}

const mDTP = (dispatch) => ({
  clearErrors: () => (dispatch(clearErrors()))
})

export default connect(null, mDTP)(Errors)