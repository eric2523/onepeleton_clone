import React from "react";
import {NavLink} from 'react-router-dom'

class ScheduleNavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  formatDate(dateString) {
    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    let currDate = new Date(dateString);
    let day = currDate.getDay();
    let date = currDate.getDate();

    return {
      day: dayNames[day],
      date: date
    };
  }

  render() {
    let hashId = `${this.props.navItem.schedId}`
    let formattedDate = this.formatDate(this.props.navItem.date)

    return (
      <li className="sched-nav-li">
        <NavLink className="sched-nav-item" to={{
          hash: `#${hashId}`
        }}>
          <div className="sched-nav-date-div">
            <span className="sched-nav-day">
              {formattedDate.day}
            </span>
            <span className="sched-nav-date">
              {formattedDate.date}
            </span>
          </div>
        </NavLink>
      </li>
    );
  }
}

export default ScheduleNavbarItem;
