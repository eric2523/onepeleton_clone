import React from 'react';
import CancelBtn from '../classes/upcoming_classes/buttons/cancel_button';
import SignUpBtn from '../classes/upcoming_classes/buttons/signup_button';

class ScheduleIndexListItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
     let submitBtn = null;
     if (this.props.followingClass) {
       submitBtn = (
         <CancelBtn
           processBtn={this.props.unfollowClass}
           workoutClassId={this.props.workoutClass.id}
           fetchUsersClasses={this.props.fetchUsersClasses}
         />
       );
     } else {
       submitBtn = (
         <SignUpBtn
           processBtn={this.props.followClass}
           workoutClassId={this.props.workoutClass.id}
           fetchUsersClasses={this.props.fetchUsersClasses}
         />
       );
     }

    return (
      <li className="schedule-index-list-item">
        <div className="sc-index-list-left">
          <div className="schedule-class-item-time">
            <span>{this.props.time}</span>
          </div>
          <div className="schedule-class-item-desc">
            <h1 className="sc-desc-childs">{this.props.workoutClass.name}</h1>
            <h2 className="sc-desc-childs">{this.props.category}</h2>
          </div>
        </div>
        <div className="sc-li-btn">
          {submitBtn}
        </div>
      </li>
    );
  }
}

export default ScheduleIndexListItem;