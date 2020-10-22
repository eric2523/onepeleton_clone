import React from 'react'
import ScheduleIndexItem from './schedule_index_item'
import { sortByDate } from '../../selectors/group_classes_by_date_selector';

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
    let dateKeys = Object.keys(this.props.workoutClasses)

    let sortedDateKeys = null;
    if (dateKeys.length){
      sortedDateKeys = sortByDate(dateKeys)
    }

    let scheduleItems = null
    if (sortedDateKeys){
      scheduleItems = sortedDateKeys.map((date) => {
        let currWorkoutClasses = this.props.workoutClasses[date]
        let dateString = this.getClassDateString(new Date(date))
  
        return (
          <div className="schedule-item-main-div" key={date}>
            <h1 className="schedule-item-h1">{dateString}</h1>
            <ScheduleIndexItem
              workoutClasses={currWorkoutClasses}
              date={date}
              category={this.props.category}
            />
          </div>
        );
      })
    }

    return <div>{scheduleItems}</div>;
  }
}

export default ScheduleIndex;