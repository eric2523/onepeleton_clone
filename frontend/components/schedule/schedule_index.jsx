import React from "react";
import ScheduleIndexItem from "./schedule_index_item";
import { sortByDate } from "../../selectors/group_classes_by_date_selector";
import ScheduleNavBar from "./schedule_nav_bar";
import { withRouter } from "react-router-dom";

class ScheduleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (
      prevProps.location.hash !== this.props.location.hash &&
      this.props.location.hash !== ""
    ) {
      let hash = this.props.location.hash;
      let ele = $(`${hash}`);
      ele[0].scrollIntoView({ behavior: "smooth" });
    }
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
    ];

    let month = classDate.getMonth();
    let date = classDate.getDate();
    let day = classDate.getDay();

    let dateString = `${dayNames[day]}, ${monthNames[month]} ${date}`;
    return dateString;
  }

  render() {
    let dateKeys = Object.keys(this.props.workoutClasses);

    let sortedDateKeys = null;
    if (dateKeys.length) {
      sortedDateKeys = sortByDate(dateKeys);
    }

    let scheduleItems = null;
    let scheduleNavbarIds = [];
    if (sortedDateKeys) {
      scheduleItems = sortedDateKeys.map((date, idx) => {
        let currWorkoutClasses = this.props.workoutClasses[date];
        let dateString = this.getClassDateString(new Date(date));
        scheduleNavbarIds.push({
          schedId: `sched-${idx}`,
          date: date,
        });
        return (
          <div
            className="schedule-item-main-div"
            key={date}
            // ref={`sched-${idx}`}
            // id={`sched-${idx}`}
          >
            <h1 id={`sched-${idx}`} className="schedule-item-h1">
              {dateString}
            </h1>
            <ScheduleIndexItem
              workoutClasses={currWorkoutClasses}
              date={date}
              category={this.props.category}
            />
          </div>
        );
      });
    }

    return (
      <div className="schedule-idx-div">
        <ScheduleNavBar navIds={scheduleNavbarIds} />
        {scheduleItems}
      </div>
    );
  }
}

export default withRouter(ScheduleIndex);
// export default ScheduleIndex;
