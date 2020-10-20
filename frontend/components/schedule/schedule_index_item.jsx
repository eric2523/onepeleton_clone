import React from 'react';

class ScheduleIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  getTimeString(classDate) {
    let hours = classDate.getHours();
    let minutes = classDate.getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let ampm = hours < 12 ? "AM" : "PM";
    
    if (hours === 0){
      hours = 12;
    } else if (hours > 12) {
      hours -= 12
    }

    let timeString = `${hours}:${minutes} ${ampm}`;
    return timeString;
  }

  render(){
    let workoutClassesListItems = Object.values(this.props.workoutClasses)
      .map((workoutClass, idx) => {
        let classDate = new Date(workoutClass.date)
        let time = this.getTimeString(classDate)

        return (
          <li className="schedule-index-list-item" key={idx}>
            <div className="schedule-class-item-time">
              <span>{time}</span>
            </div>
            <div className="schedule-class-item-desc">
              <h1 className="sc-desc-childs">{workoutClass.name}</h1>
              <h2 className="sc-desc-childs">{this.props.category}</h2>
            </div>
            

          </li>
        );
      })

    return(
      <ul className="sc-item-ul">
        {workoutClassesListItems}
      </ul>
    )
  }
}

export default ScheduleIndexItem;