import React from 'react'
import {fetchUser} from '../../actions/user_actions/user_actions'
import { connect } from 'react-redux';

class ProfWorkoutsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false }
  }

  componentDidMount(){
    this.props.fetchUser(this.props.workoutClass.instructorId)
      .then(() => (
        this.setState({loaded: true})
      ))
  }

  componentWillUnmount(){
    this.setState({loaded: false})
  }

  getClassDateString(classDate) {
    let hours = classDate.getHours();
    let minutes = classDate.getMinutes();
    let month = classDate.getMonth() + 1;
    let date = classDate.getDate()
    let fullYear = classDate.getFullYear();

    const dayNames = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thurs",
      "Fri",
      "Sat",
    ];

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let day = classDate.getDay();

    let ampm = hours < 12 ? "AM" : "PM";

    if (hours === 0){
      hours += 12
    } else if (hours > 12) {
      hours -= 12
    }
    
    let yearString = `${month}/${date}/${fullYear}`

    let dateString = `From ${dayNames[day]} ${yearString} @ ${hours}:${minutes} ${ampm}`;
    return dateString;
  }

  render() {
    let wcDate = new Date(this.props.workoutClass.date)
    let dateString = this.getClassDateString(wcDate)

    let instructorImg = null;
    if (this.state.loaded) {
      let instructor = this.props.users[this.props.workoutClass.instructorId];
      instructorImg = (
        <img
          className="instructor-img"
          src={instructor.photoUrl}
          alt="instructor-pic"
        />
      );
    }

    return (
      <li className="p-wc-item">
        <div className="p-wc-prof-img-div">
          {instructorImg}
        </div>

        <div className="p-wc-item-content">
          <h2 className="p-wc-item-desc">{this.props.workoutClass.name}</h2>
          <h2 className="p-wc-item-desc p-wc-item-category">
            {this.props.category.name}
          </h2>
          <h2 className="p-wc-item-desc p-wc-item-time">{dateString}</h2>
        </div>
      </li>
    );
  }
}

const mSTP = (state) => {
  return ({
    users: state.entities.users
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
  })
}

export default connect(mSTP, mDTP)(ProfWorkoutsIndexItem)

// export default ProfWorkoutsIndexItem