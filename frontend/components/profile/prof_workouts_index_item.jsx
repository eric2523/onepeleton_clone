import React from 'react'

class ProfWorkoutsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  getClassDateString(classDate) {
    let hours = classDate.getHours();
    let minutes = classDate.getMinutes();
    let month = classDate.getMonth() + 1;
    let date = classDate.getDate()
    let fullYear = classDate.getFullYear();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let day = classDate.getDay();

    switch (day) {
      case 0:
        day = "Sun";
        break;
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tues";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Thurs";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
        break;
    }

    let ampm = hours < 12 ? "AM" : "PM";
    let yearString = `${month}/${date}/${fullYear}`

    let dateString = `From ${day} ${yearString} @ ${hours}:${minutes} ${ampm}`;
    return dateString;
  }

  render() {
    let wcDate = new Date(this.props.workoutClass.date)
    let dateString = this.getClassDateString(wcDate)

    return (
      <li className="p-wc-item">
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

export default ProfWorkoutsIndexItem