import React from 'react';
import { followClass, unfollowClass, fetchUsersClasses } from '../../actions/user_workout_classes_actions/user_workout_classes_action';
import { connect } from 'react-redux';
import ScheduleIndexListItem from './schedule_index_list_item';

class ScheduleIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsersClasses();
  }

  getTimeString(classDate) {
    let hours = classDate.getHours();
    let minutes = classDate.getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let ampm = hours < 12 ? "AM" : "PM";

    if (hours === 0) {
      hours = 12;
    } else if (hours > 12) {
      hours -= 12;
    }

    let timeString = `${hours}:${minutes} ${ampm}`;
    return timeString;
  }

  render() {
    let workoutClassesListItems = Object.values(this.props.workoutClasses).map(
      (workoutClass, idx) => {
        let classDate = new Date(workoutClass.date);
        let time = this.getTimeString(classDate);

        return (
          <ScheduleIndexListItem
            key={idx}
            time={time}
            workoutClass={workoutClass}
            category={this.props.category}
            followingClass={Boolean(this.props.userClasses[workoutClass.id])}
            followClass={this.props.followClass}
            unfollowClass={this.props.unfollowClass}
            fetchUsersClasses={this.props.fetchUsersClasses}
          />
        );
      }
    );

    return <ul className="sc-item-ul">{workoutClassesListItems}</ul>;
  }
}

const mSTP = (state) => {
  return {
    userClasses: state.entities.userClasses,
  };
};

const mDTP = (dispatch) => {
  return ({
    followClass: (classId) => dispatch(followClass(classId)),
    unfollowClass: (classId) => dispatch(unfollowClass(classId)),
    fetchUsersClasses: () => dispatch(fetchUsersClasses())
  })
}

export default connect(mSTP, mDTP)(ScheduleIndexItem)
// export default ScheduleIndexItem;

