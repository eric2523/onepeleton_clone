import React from "react";
import ScheduleNavbarItem from "./schedule_navbar_item";
// import { carrotLeftSVG, carrotRightSVG } from "../svgs/profile_over_svg";

class ScheduleNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listItems = this.props.navIds.map((navItem, idx) => (
      <ScheduleNavbarItem key={idx} navItem={navItem} />
    ));

    return (
      <div className="schedule-nav-bar">
        <div className="sched-carrot-left">
          <img src="https://img.icons8.com/fluent-systems-filled/24/000000/horizontal-line.png" />
        </div>
        <ul className="sched-nav-bar-ul">{listItems}</ul>
        <div className="sched-carrot-left">
          <img src="https://img.icons8.com/fluent-systems-filled/24/000000/horizontal-line.png" />
        </div>
      </div>
    );
  }
}

export default ScheduleNavBar;
