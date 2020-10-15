import React from 'react'
import { closeModal } from '../../actions/modal_actions/modal_actions'
import { connect } from 'react-redux'
import ClassDetailsModalContainer from './class_details_modal'
import { withRouter } from 'react-router-dom';
import { fetchClass } from '../../actions/class_actions/class_actions';

class Modal extends React.Component {
  constructor(props){
    super(props)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleCloseModal(e){
    let category = this.props.match.params.category
    this.props.history.push(`/classes/${category}`)
  }

  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;
    switch (this.props.modal) {
      case 'classDetails':
        component = <ClassDetailsModalContainer 
                      fetchClass={this.props.fetchClass}
                      classId={this.props.match.params.classId}/>
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={this.handleCloseModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
  }
}

const mSTP = state => {
  return {
    modal: state.ui.modal,
    workoutClasses: state.entities.workoutClasses 
  }
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchClass: (classId) => dispatch(fetchClass(classId)),
  }
}

export default withRouter(connect(mSTP, mDTP)(Modal))