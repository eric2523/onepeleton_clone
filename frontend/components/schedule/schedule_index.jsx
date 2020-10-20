import React from 'react'
import ScheduleIndexItem from './schedule_index_item'

class ScheduleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  getClassDateString(classDate) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayNames = [
      "Sunday",
      "Monday",
      "Tusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]

    let month = classDate.getMonth();
    let date = classDate.getDate();
    let day = classDate.getDay();

    let dateString = `${dayNames[day]}, ${monthNames[month]} ${date}`;
    return dateString
  }

  render() {
    let scheduleItems = [];
    for (const date in this.props.workoutClasses) {
      let dateString = this.getClassDateString(new Date(date))
      scheduleItems.push(
        <div className="schedule-item-main-div" key={date}>
          <h1 className="schedule-item-h1">{dateString}</h1>
          <ScheduleIndexItem
            // key={date}
            workoutClasses={this.props.workoutClasses[date]}
            date={date}
            category={this.props.category}
          />
        </div>
      );
    }

    return <div>{scheduleItems}</div>;
  }
}

export default ScheduleIndex;