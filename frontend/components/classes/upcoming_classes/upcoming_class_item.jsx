import React from 'react'
import CancelBtn from './buttons/cancel_button';
import SignUpBtn from './buttons/signup_button'

class UpcomingClassesItem extends React.Component {
  constructor(props){
    super(props)
  }

  getClassTime(classDate){
    let hours = classDate.getHours()
    let minutes = classDate.getMinutes()
    
    if (minutes < 10){
      minutes = `0${minutes}`
    }
    
    let day = classDate.getDay()

    switch (day) {
      case 0:
        day = "SUN";
        break;    
      case 1:
        day = "MON";
        break;
      case 2:
        day = "TUES"
        break;
      case 3:
        day = "WED"
        break;
      case 4:
        day = "THURS"
        break;
      case 5: 
        day = "FRI";
        break;
      case 6:
        day = "SAT"
        break;
    }

    let ampm = (hours < 12) ? "AM" : "PM"

     let dateString = `${day} ${hours}:${minutes} ${ampm}`
     return dateString;
  }

  getHoursTillStart(classDate){
    let timeBetween = classDate - Date.now()
    return (
      Math.floor(timeBetween/(1000 * 60 * 60))
    )
  }

  render(){
    let submitBtn = null;
    if (this.props.followingClass){
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

    let classDate = new Date(this.props.workoutClass.date)
    let classTime = this.getClassTime(classDate)
    let timeBetween = this.getHoursTillStart(classDate)

    return (
      <div className={`upcoming-class-item-div upc-item-${this.props.categoryName}`}>
        <div className="upc-class-time">
          <span>{classTime}</span>
        </div>
        <div className="upc-class-description">
          <h2>{this.props.workoutClass.name}</h2>
          <h3>{this.props.categoryName.toUpperCase()}</h3>
        </div>
        <div className="upc-submit-div">
          {submitBtn}
          <div className="time-countdown">
            <h3>{timeBetween} hrs</h3>
            <h4>till start</h4>
          </div>
        </div>
      </div>
    );
  }
}




export default UpcomingClassesItem;